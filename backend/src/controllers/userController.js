import { Users } from "../models/userModel.js"
import httpStatus from "http-status"
import bcrypt , {hash} from "bcrypt";
import crypto from "crypto"
import { Meeting } from "../models/meetingModels.js";

const login = async(req,res) => {
    const {username , password} = req.body;

    if(!username || !password ){
        return res.status(400).json({message : "Please provide details "});
    }

    try{
        
   const users = await Users.findOne({username});
  //console.log(users);
   if(!users){
    return res.status(httpStatus.NOT_FOUND).json({message : "User not found "});
     
   } 
   let isPassword = await bcrypt.compare(password , users.password)
   if(isPassword){
    let token = crypto.randomBytes(20).toString("hex");
console.log(token);
    users.token = token;
   await users.save();

   return res.status(httpStatus.OK).json({token : token });
   }else{
    return res.status(httpStatus.UNAUTHORIZED).json({message : " Invalid username or password "});
   }


    }catch(e){
      res.json({message : "something went wrong on login side"});
    }
}

const register = async (req,res) => {
    const {name , username , password } = req.body;

    try {
        const existingUser = await Users.findOne({ username });
        if(existingUser) {
            return res.status(httpStatus.FOUND).json({message : "user already exits "});
        }

        const hashedPassword = await bcrypt.hash(password ,10);

        const newUser = new Users ({
          name : name,
          username : username,
          password : hashedPassword,

        });

        await newUser.save();
        res.status(httpStatus.CREATED).json({message : "User registered"});

    }catch(e){
       res.json({message : "something went wrong "}); 
    }
}

const getUserHistory = async(req,res) => {
  const {token} = req.query;

  try{
    const user = await Users.findOne({token : token});
    const meetings = await Meeting.find({user_id: user.username})
    res.json(meetings)
  }catch(e){
    console.log(`something went wrong : ${e}`);
  }
}

const addToHistory = async(req,res) => {
    const {token , meeting_code} = req.body;

    try{
        const user = await Users.findOne({token : token});

        const newMeeting = new Meeting({
            user_id : user.username,
            meetingCode : meeting_code,

        })
     await newMeeting.save();
     res.status(httpStatus.CREATED).json({message : "Added code to history"})
    }catch(e) {
        res.json({message : `Something went wrong ${e}`})
    }
}

export {login , register , addToHistory , getUserHistory};