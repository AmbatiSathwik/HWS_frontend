import React from 'react';
import  NotificationCard from './NotificationCard';
import "../styles.css"
import { textAlign } from '@mui/system';

function NotificationsPage() {
  const notifications = [
    {
      id: 1,
       
      description: 'You have a new message from John Doe.',
      
    },
    {
      id: 2,
       
      description: 'You have a new friend request from Jane Doe.',
      
    },
    {
      id: 3,
     
      description: 'Someone commented on your post "My favorite movie"',
      
    }
  ];

  return (
    <div className="container">
      <h3 style={{textAlign:"center"}}>Notifications</h3>
      <div className="">
        {notifications.map(notification => (
          <NotificationCard
            key={notification.id}
            description={notification.description}
            
          />
        ))}
      </div>
    </div>
  );
}

export default NotificationsPage;
