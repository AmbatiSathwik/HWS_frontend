
import { json } from "react-router-dom";
import { API } from "../../backend";

import AH from "../../assets/images/ahostel1.jpg";
import BH from "../../assets/images/bhostel.jpg";
import CH from "../../assets/images/chostel.jpg";
import DH from "../../assets/images/dhostel.jpg";
import EH from "../../assets/images/ehostel.jpg";
import FH from "../../assets/images/fhostel.jpg";
import GH from "../../assets/images/ghostel.jpg";
import PG1H from "../../assets/images/pg1hostel.jpg";

export const messreviesavg = (id) => {
  const token = "Bearer " + localStorage.getItem("jwt").slice(1, -1);
  return fetch(`${API}mess/mess-review/${id}/${2023}/${1}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      console.log(err);
    });
};


export const messDetails = () => {
  return {
    data: {
      ahostel: {
        name:"A Hostel",
        description:"Both veg and non-veg messes are available in A-Hostel.",
         
        img : AH,
      },
      bhostel: {
        name:"B Hostel",
        description:"Both veg and non-veg messes are available.  ",
         
        img : BH
      },
      chostel: {
        name:"C Hostel",
        description:" . Only vegetarian mess is available.",
        
        img : CH
      },
      dhostel: {
        name:"D Hostel",
        description:"North Indian vegetarian mess is available.",
        
        img : DH
      },
      ehostel: {
        name:"E Hostel",
        description:"A North Indian Vegetarian mess is available.",
         
        img : EH
      },
      fhostel: {
        name:"F Hostel",
        description:"A cosmopolitan mess is available. ",         
        img : FH
      },
      ghostel: {
        name:"G Hostel",
        description:"A cosmopolitan mess is available.",
        
        img : GH
      },
      pg1hostel: {
        name:"PG1 Hostel",
        description:"A cosmopolitan mess is available.",
        img : PG1H
      },
    },
  }
};
