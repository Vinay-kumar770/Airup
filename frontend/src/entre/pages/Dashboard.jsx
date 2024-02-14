import React, { useEffect, useState } from 'react';
import axiosInstance from "../../axios/newRequest";
import { useNavigate,useParams,Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const EntrepreneurDashboard = () => {
  // Initialize ideaData as an array since you're expecting a list of ideas
  const [investorData, setInvestorData] = useState([]);
  const navigate=useNavigate();
  const { userId } = useParams();
  const accessToken = localStorage.getItem("accessToken");
 const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/backend/entrepreneur/${userId}/allInvestors`);
        const fetchedData = response.data;
        // Adjust here to set ideaData with the array found at fetchedData.msg
        if (fetchedData.msg && fetchedData.msg.length > 0) {
          setInvestorData(fetchedData.msg);
        }
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };

    fetchData();
  }, [userId]);
  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    axiosInstance
      .post('/backend/entrepreneur/logout')
      .then(() => {
        Cookies.remove('accessToken');
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div>
        {investorData.map((id) => (
          // Correctly using idea._id for the key prop as your data structure suggests
          <div key={id._id}>
            <h2>{id.username}</h2>
            <h2>{id.email}</h2>
          </div>
        ))}
        <button onClick={handleLogout}>Logout</button>
       <Link to={`/entrepreneur/${userId}/submission`}>Submission</Link> 
      </div>
    </>
  );
};

export default EntrepreneurDashboard;
