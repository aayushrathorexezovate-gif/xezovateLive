import React from "react";
import "../App.css"
import { useNavigate } from "react-router-dom";


export default function LandingPage () {

   const navigate = useNavigate();
    return (
        <div className="landingPageContainer">



<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="/WhatsApp Image 2026-01-25 at 08.40.41.jpeg" style={{width:"90px"}} alt=""/>
    <a class="navbar-brand" href="#"><b>XEZOZOOM </b> <br></br><h5> (Powered by Xezovate) </h5></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  
        
       
       <li class="nav-item right-item"> &nbsp;&nbsp;&nbsp;
         <button type="button" class="btn btn-primary" onClick={()=>{navigate("/auth")}}>Login in </button>
        </li>

        <li class="nav-item " style={{marginLeft:"20px"}}>
        <button type="button" class="btn btn-success" onClick={() =>{navigate("/auth")}}>Sign up</button>
        </li>

        <li class="nav-item " style={{marginLeft:"20px" , marginRight:"30px"}}>
          <button type="button" class="btn btn-warning" onClick={()=> { navigate("/3heu3Joinasguest")}} >Join as Guest </button>
        </li>

      </ul>
      
    </div>
  </div>
</nav>

       <div className="row">
         <div className="col-6">
        <div className="landingMainCointainer col-6" style={{marginLeft:"100px", marginTop:"100px"}}>
          <div> 
            <h1 style={{color:"black"}}> <span style={{color:"orange"}}> Connect </span> with  your </h1>
            <h1 style={{color:"black"}}> Loved Ones </h1>
            <p style={{color:"black"}}>Cover a distance by xezo vedio call </p><br/>
            <button  type="button" class="btn btn-info" onClick={() => navigate("/auth")}> Get Started </button>
          </div>

          <img style={{width:"100%" , marginRight:"90px" , marginTop:"80px"}} src="/undraw_listening-to-podcasts_j0hm.svg" alt=""/>
          
       </div>
</div>

<div className="col-6">
  <div>
    <img style={{width:"50%" , marginLeft:"40%" , marginBottom:"20%"}} src="/undraw_online-meetings_zutp.svg" alt=""/>
        <img style={{width:"40%" , marginLeft:"65%"}} src="/undraw_in-the-zone_07y7.svg" alt=""/>
  </div>
</div>
</div>
        
          </div>
    )
}