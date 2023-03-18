import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Base from "./Base";
import  NotificationCard from './NotificationCard';
import Slider from "./Slider";

function Home() {
  const notifications = [
    {
      id: 1,
      url: "https://www.google.com",
      description: 'You have a new message from John Doe.',
      
    },
    {
      id: 2,
      url: "https://www.google.com",
      description: 'You have a new friend request from Jane Doe.',
      
    },
    {
      id: 3,
      url : "https://www.google.com",
      description: 'Someone commented on your post "My favorite movie"',
      
    }
  ];
  return (
    <Base title={""}>
      <div className="SlideContainer">
        <div className="SlideShow">
           <Slider /> 
           
        </div>
      </div>
      <br />
      <div className="rules">
      <h2  align="center">Notifications</h2>
      <div  >
        {notifications.map(notification => (
          <NotificationCard
            key={notification.id}
            description={notification.description}
            url={notification.url}
            
          />
         
        ))}
        
      </div>
    </div>
      <div className="rules">
        <h2 align="center">Rules and Regulations</h2>
        <ol>
          <li>Fee details will be uploaded every month 10th.</li>
          <li>........</li>
        </ol>
      </div>
    </Base>
  );
}

export default Home;
