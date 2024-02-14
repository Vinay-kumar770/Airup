import jwt from "jsonwebtoken";
import Users from "../table_schemas/entre.table_schema.js";
import Investors from "../table_schemas/inves.table_schema.js";


async function validateSession(model, userId, sessionUUID) {
  const user = await model.findById(userId);
  return user && user.sessionUUID === sessionUUID;
}

const authenticateJWT = async (req, res, next) => {
  // const token = req.cookies.accessToken;  // Extract token from the cookies
  const accessToken = req.cookies.accessToken; // Extract access token from the cookies
  const sessionUUID = req.cookies.sessionUUID;
   //console.log(req.body);

  if (!accessToken || !sessionUUID) {
    return res.sendStatus(401); // No token or session UUID provided
  }
  try {
    // Verify JWT token
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    // Find the company and check session UUID
    const isValidSession =
      (await validateSession(Investors, decoded.userId, sessionUUID)) ||
      (await validateSession(Users, decoded.userId, sessionUUID));

    if (!isValidSession) {
      return res.sendStatus(401); // Session invalid or expired
    }

    // User is authenticated and session is valid
    req.user = decoded; // Or req.company, depending on your context
    next();
  } catch (err) {
    // Handle token verification errors (e.g., token expired)
    return res.sendStatus(403);
  }
};

export default authenticateJWT;
