import React, { useContext , useEffect , useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import  {data, useNavigate} from "react-router-dom"; 


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import HomeIcon from '@mui/icons-material/Home';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function HistoryComponent () {

     const {getHistoryOfUser} = useContext(AuthContext);

        const[meetings , setMeetings] = useState([]);

        const routeTo = useNavigate();

        useEffect(() => {

            const fetchHistory = async() => {
                try{

                    const history = await getHistoryOfUser();
                    setMeetings(history);
                    console.log(meetings)

                }catch(e){
                   console.log(e);
          
                }
            }
            fetchHistory();

        },[])

        let formatDate = (dateString) => { // date format 
          const date = new Date(dateString);
          const day = date.getDate().toString().padStart(2,"0");
          const month = (date.getMonth()+1).toString().padStart(2,"0")
          const year = date.getFullYear();

          return `${day}/${month}/${year}`
        }

  

    return (
        <div>
           <IconButton style={{marginTop:"20px" , marginLeft:"20px" , marginBottom:"20px"}} onClick={() => {
                routeTo("/home")
            }}>
                <HomeIcon />
            </IconButton >  

        {
       meetings.map((e, i) =>  {
            return (

               

        <Card  key={i} sx={{ maxWidth: 345, marginBottom:"20px" , marginLeft:"30px" , display:"absolute"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {e.user_id.charAt(0)}
          </Avatar>
        }
      
        title={e.user_id}
        
      />
      <CardMedia
        component="img"
        height="194"
        image="/undraw_group-hangout_o22u.svg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          user ID : {e.user_id}<br></br><br></br>  
          Meeting-Code : {e.meetingCode}<br></br>
          <b>Date: {formatDate(e.date)}</b>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        
      </CardActions>
     

      
    </Card>
                
            )
        })} <br></br> <br></br>
       
    </div>
    )
}