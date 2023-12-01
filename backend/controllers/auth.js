const bcrypt= require("bcryptjs");
const Idea =require("../models/idea");
const User= require("../models/user");
const home= async (req,res)=>{
    try{
        res.status(200).send('hello vinay');
    }
    catch(error){
        console.log(error);
    }
}

const submit = async(req,res) =>{
    try{
        console.log(req.body);
        const {ideaname, problemstatement, onelinersolution, detailedsolution, businessmodel,competition, yourprofession, equity, amount, noofdays, debtifrequired}=req.body;
        
        const ideaExist = await Idea.findOne({ideaname});

        if(ideaExist){
            return res.status(400).json({msg: "idea already exist"});
        }

        const ideacreated = await Idea.create({ideaname, problemstatement, onelinersolution, detailedsolution, businessmodel,competition, yourprofession, equity, amount, noofdays, debtifrequired});

        res.status(200).json({msg: ideacreated});
    }catch(error){
        console.log(error);
        res.status(400).send({msg:"page not found"})
    }
}



const register = async(req,res) =>{
    try{
        //console.log(req.body);
        const {name,email,password}=req.body;
        
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg: "user already exist"});
        }
        //const saltRound=10;
        //const hash_password = await bcrypt.hash(password,saltRound);
        const usercreated = await User.create({name,email,password});

        res.status(201).json({msg: "registration successful", token: await usercreated.generatetoken(), userId: usercreated._id.toString(),});
        //console.log(usercreated)
    }catch(error){
        console.log(error);
        res.status(500).send("internal server error")
    }
}

const login =async(req,res) =>{
    try{
     const {email,password} =req.body;

     const userEx = await User.findOne({email});
     console.log(userEx);
     if(!userEx){
        return res.status(400).json({message: " Invalid credentials"});
     }

     const user= await bcrypt.compare(password,userEx.password);
     if(user){
        res.status(201).json({msg: "Login successful", token: await userEx.generatetoken(), userId: userEx._id.toString(),})
     }else{
        res.status(401).json({mesage:"Invalid email or password"})
     }

    }catch(error)
    {
        console.log(error);
        res.status(500).send("internal server error")
    }
}

module.exports={home,submit,register,login};