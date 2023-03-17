import React from 'react';
import "../styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function NotificationCard(props) {
  const {  description,url } = props;

  return (
    <div className='my-2'>
      
         
        <a  href={url} target="_blank" rel="noreferrer">{description}</a>
       
         

    </div>
  );
}

export default NotificationCard;
