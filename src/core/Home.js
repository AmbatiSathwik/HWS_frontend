import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Base from "./Base";
import hostelfee from "../assets/images/hostelrules.png";
import NotificationCard from "./NotificationCard";
import Slider from "./Slider";
import { getNotification } from "./helper/coreapicalls";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <ol className="text">
      {isReadMore ? text.slice(0, 5) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </ol>
  );
};

function Home() {
  const notifications = [
    {
      id: 1,
      url: "https://drive.google.com/file/d/1vLf9pblfbKHGCjAM0oKgkzK0hG_Zst2p/view?usp=sharing",
      description: "You have a new message from John Doe.",
    },
    {
      id: 2,
      url: "https://drive.google.com/file/d/1vLf9pblfbKHGCjAM0oKgkzK0hG_Zst2p/view?usp=sharing",
      description: "You have a new friend request from Jane Doe.",
    },
    {
      id: 3,
      url: "https://drive.google.com/file/d/1vLf9pblfbKHGCjAM0oKgkzK0hG_Zst2p/view?usp=sharing",
      description: 'Someone commented on your post "My favorite movie"',
    },
  ];

  const [notification, setNotification] = useState([]);
  

 // useeffect for notification
 useEffect(() => {
  getNotification().then(data => {
     setNotification([data]);

  })
   
 }, []);
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
        {notification[0]?.data.map(data=> (
          <NotificationCard
            key={data.id}
            description={data.name}
            url={data.url}
            
          />
         
        ))}
        
      </div>
    </div>
      <div className="rules">
        <h2 align="center">Rules and Regulations</h2>
        <p>
          <ReadMore>
            <li>
              The hostels and the messes shall be under the control of the Chief
              Warden.
            </li>
            <li>
              There are ten hostels for boys and three hostels exclusively for
              girls. The accommodation capacity of all the hostels together is
              about 6500.
            </li>
            <li>
              Every resident of the hostel should possess a 'Hostel Occupancy
              Card' along with the Institute identity card and carry it along
              with them.
            </li>
            <li>
              First-year B.Tech./B.Arch. students are not allowed to go to
              seniors' hostels. They should strictly follow the hostel timings
              given to them from time to time by the Warden.
            </li>
            <li>
              In cases of instances of contagious diseases like Covid-19, viral
              fever, jaundice, cholera etc., the residents are expected to
              strictly follow the instructions laid down by the institute
              authorities as well as civil health department such as wearing of
              masks, using hand sanitizers, remaining confined to hostel rooms,
              drinking hot water alone, etc.
            </li>
            <li>
              Abuse of drugs, consumption of alcohol, intoxication by any means,
              and smoking are strictly prohibited inside the campus.
              Disciplinary action and heavy fines, including reporting the
              matter to the police/shadow police, will be done against persons
              indulging in such activities.
            </li>
            <li>
              Students staying in the hostels may join any one of the messes of
              their choice. The mess registration card will be issued by the
              Caretaker of the hostel concerned with the production of the proof
              of having cleared the dues.
            </li>
            <li>
              The Council of Wardens consisting of the Chief Warden and all the
              Wardens shall be the disciplinary authority for the hostels.
              Wardens are empowered to impose fine of up to Rs 5,000/-, with the
              approval of Chief Warden, for minor disciplinary issues.
            </li>
            <li>
              Emergency contacts:
              <ul>
                <li>Ambulance : 0495-228-6661,</li>
                <li>Fire :101</li>
                <li>
                  Students with mental health issues, depression, etc. can
                  contact SGC Counsellors available at hostel level.
                  <ul>
                    <li>SGC Contact No. : 0495-228-6180</li>
                    <li>SGC email : sgc@nitc.ac.in</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Hostel fee structure:
              <br />
              <img style={{ width: "40%" }} src={hostelfee} />
            </li>
          </ReadMore>
        </p>
      </div>
    </Base>
  );
}

export default Home;
