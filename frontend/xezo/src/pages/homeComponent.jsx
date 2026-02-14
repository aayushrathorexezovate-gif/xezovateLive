import React from "react";
import withAuth from "../utils/withAuth.jsx";
import { useNavigate } from "react-router-dom";
import { useState , useContext} from "react";
import HistoryIcon from '@mui/icons-material/History';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../contexts/AuthContext.jsx";



function HomeComponent(){

    let navigate = useNavigate(); // to navigate 

    const [meetingCode , setMeetingCode] = useState(""); // for a meeting code that is used to join 

    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinHandle = async() => {
      await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }
    return (
         <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ml-5"> &nbsp;
 <img src="/WhatsApp Image 2026-01-25 at 08.40.41.jpeg" style={{width:"90px"}} alt=""/>
  <a className="navbar-brand ml-5" href="#"><b> XEZOZOOM </b> <h6>(Powered by Xezovate)</h6></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" style={{ display: "flex", width: "100%" }}>
      <li className="nav-item active">
        <a className="nav-link" href="#"> <span class="sr-only"></span></a>
      </li>
      <li className="nav-item ms-auto d-flex align-items-center" >

        <button type="button" class="btn btn-outline-warning" style={{marginRight:"20px"}} onClick={() => { localStorage.removeItem("token")
             navigate("/auth")}}>
            
            Logout
            </button>
      
   &nbsp;
          <Button variant="contained" style={{marginRight:"20px"}} endIcon={ <HistoryIcon /> } onClick={(() => {
            navigate('/history')
          })}>
  History
</Button>
           
      </li>
      
    
    </ul>
  </div>
</nav>


<div className="row">

    <div className="col-6">
        <div style={{marginTop:"40%" , marginLeft:"40px"}}>
        <h4> Providing Quality Video Call Just Like Quality Education</h4><br></br>

        <div style={{display:"flex" , gap:"10px"}}>
         
         <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting ID" variant="outlined" />
         <Button variant="contained" color="success" onClick={handleJoinHandle}>
           Success
          </Button>

        </div>

        </div>
    </div>


    <div className="col-6">
    <img  style={{width:"40%" , marginLeft:"30px"}}src="/undraw_group-video_k4jx.svg" alt=""></img> 
    <img  style={{width:"40%" , marginLeft:"90px" , marginTop:"40%"}}src="/undraw_group-hangout_o22u.svg" alt=""></img><br></br>
    <img  style={{width:"35%"}}src="/undraw_video-call_i5de.svg" alt=""></img> 
    </div>


</div>
         </div>

        
    )
}



const ProtectedHome = withAuth(HomeComponent);

export default ProtectedHome;
