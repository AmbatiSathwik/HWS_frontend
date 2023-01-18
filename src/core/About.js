import React from "react";
import Base from "./Base";
import {Card,CardContent,CardMedia,Typography,CardActionArea }from '@mui/material';
import Admin from "../assets/images/mess-admin.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import MailIcon from '@mui/icons-material/Mail';
const customstyle = {
    display: "inline-flex",justifyContent:"center", margin: "10px", textAlign: "center",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    position: "relative",
    borderRadius:"15px 50px 30px"
    
}
const data1=[
  {
      id:"1",
      Name:"abcdef",
      imglink:Admin,
      email:"random@gmail.com ",
      profile:"https://www.linkedin.com/"
  },{
    id:"1",
    Name:"abcdef",
    imglink:Admin,
    email:"random@gmail.com ",
    profile:"https://www.linkedin.com/"
},{
  id:"1",
  Name:"abcdef",
  imglink:Admin,
  email:"random@gmail.com ",
  profile:"https://www.linkedin.com/"
},{
  id:"1",
  Name:"abcdef",
  imglink:Admin,
  email:"random@gmail.com ",
  profile:"https://www.linkedin.com/"
},{
  id:"1",
  Name:"abcdef",
  imglink:Admin,
  email:"random@gmail.com ",
  profile:"https://www.linkedin.com/"
},{
  id:"1",
  Name:"abcdef",
  imglink:Admin,
  email:"random@gmail.com ",
  profile:"https://www.linkedin.com/"
},{
  id:"1",
  Name:"abcdef",
  imglink:Admin,
  email:"random@gmail.com ",
  profile:"https://www.linkedin.com/"
}]


function About(props) {
    let data=data1;
    return <Base title="About Us">  <Grid container spacing={1} style={{justifyContent:"center",  margin: "0 auto"  }}> {data.map((x) => {
            
           return <Grid item xs={12} md={4} lg={3} >
            <Card  sx={{ width:"250px",height:"400px"}}  style={customstyle}>
                    <CardActionArea>
                    <Card sx={{width:"250px",height:"300px"}}><CardMedia 
                            alt={x.title}
                            component="img"
                            height="70%"
                            width="80%"
                            image={x.imglink} 
                    /></Card>
                        <CardContent>
                         <Typography gutterBottom variant="h6" component="div" >
                            {x.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {x.discription}
                        </Typography>
                         
                        <a href={x.profile} > <LinkedInIcon /> </a>
                        <a href={x.email}><MailIcon/></a>
                        
                        </CardContent>
                </CardActionArea> 
            </Card>
            </Grid>
             
    })} </Grid> </Base>


}



export default About;
