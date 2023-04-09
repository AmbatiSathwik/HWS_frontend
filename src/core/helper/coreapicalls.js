import { API } from "../../backend";

import AH from "../../assets/images/ahostel1.jpg";
import BH from "../../assets/images/bhostel.jpg";
import CH from "../../assets/images/chostel.jpg";
import DH from "../../assets/images/dhostel.jpg";
import EH from "../../assets/images/ehostel.jpg";
import FH from "../../assets/images/fhostel.jpg";
import GH from "../../assets/images/ghostel.jpg";
import PG1H from "../../assets/images/pg1hostel.jpg";
import { RestaurantRounded } from "@mui/icons-material";

export const hostelDetails = () => {
  return {
    data: {
      ahostel: {
        name: "A Hostel",
        description:
          "A-Hostel has only four seated accommodation. This hostel is meant exclusively for the first year B. Tech. Students. A scosmopolitan mess is running within the hostel. An extension counter for NITC Multipurpose Co-operative Society is functioning in this hostel. A-Hostel is very near to the Main Academic Building.",
        warden: " Dr. Satyananda Panda",
        caretaker: "Dr. Gopi Krishna Saramekala",
        rooms: 60,
        floors: 3,
        inmates: 515,
        img: AH,
      },
      bhostel: {
        name: "B Hostel",
        description:
          "B-Hostel has triple seated rooms. Second year students are usually accommodated here. The mess in B-Hostel is non-vegetarian type.",
        warden: "Dr. Janardhan Banothu",
        caretaker: "Dr. Shihabudheen K.V.",
        rooms: 60,
        floors: 3,
        inmates: 514,
        img: BH,
      },
      chostel: {
        name: "C Hostel",
        description:
          "Third year students are accommodated in triple seated rooms in C-Hostel. A vegetarian mess is being run here.",
        warden: "Dr. Suchand Sangeeth C.S.",
        caretaker: "",
        rooms: 60,
        floors: 3,
        inmates: 492,
        img: CH,
      },
      dhostel: {
        name: "D Hostel",
        description:
          "Single seated accommodation is available in D-Hostel. The rooms are allotted to Final Year and Third Year students. D-Hostel mess is of cosmopolitan style. An extension counter of NITC Multipurpose Co-operative Society is functioning in this hostel.",
        warden: "Dr. Sandip Rudha Budhe",
        caretaker: "",
        rooms: 180,
        floors: 3,
        inmates: 180,
        img: DH,
      },
      ehostel: {
        name: "E Hostel",
        description:
          "Single seated accommodation is available in E-Hostel also. Third and Final Year students are accommodated here. A North Indian Vegetarian mess is being run in this hostel.",
        warden: "Dr. Raju Hazari",
        caretaker: "",
        rooms: 180,
        floors: 3,
        inmates: 180,
        img: EH,
      },
      fhostel: {
        name: "F Hostel",
        description:
          "F-Hostel consists of only single seated rooms, which are occupied by Final Year students. A cosmopolitan mess is being run here.",
        warden: "Dr. Mithun Muthiah",
        caretaker: "",
        rooms: 201,
        floors: 3,
        inmates: 199,
        img: FH,
      },
      ghostel: {
        name: "G Hostel",
        description:
          "G-Hostel ( Girls Hostel) has only single seated rooms which are presently occupied with the PG and PhD students. A cosmopolitan mess is being run in this hostel. Guest Rooms for parents and rooms for QIP Scholars are available in G-Hostel.",
        warden: "Dr. Fathima Fasmin",
        caretaker: "",
        rooms: 350,
        floors: 3,
        inmates: 350,
        img: GH,
      },
      pg1hostel: {
        name: "PG1 Hostel",
        description:
          "1st year B.TechStudents  are accommodated in PG Hostel - I, which has only single seated accommodation. This hostel has a cosmopolitan mess.",
        warden: "Dr. Robin Davis",
        caretaker: "",
        rooms: 247,
        floors: 3,
        inmates: 247,
        img: PG1H,
      },
    },
  };
  //   return fetch(`${API}hosteldetails`, {
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
};

export const createNotification = (name,url) => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1,-1);
  console.log(token)
  return fetch(`${API}notification/upload`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({"name":name,"url":url}),
  })

    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getNotification = () => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1,-1);
  console.log(token)
  return fetch(`${API}notification`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
  })


    .then((data) => {
      console.log(data.json)
      return data.json();

    })
    .catch((err) => {
      console.log(err);
    });
};

export const getHostelWardenByHostelId = (id) => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1, -1);
  console.log(token);
  return fetch(`${API}hostel/hostel-warden/${id}`, {
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

export const getCareTakerByHostelId = (id) => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1, -1);
  console.log(token);
  return fetch(`${API}hostel/care-taker/${id}`, {
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

export const getHostelSecretaryByHostelId = (id) => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1, -1);
  console.log(token);
  return fetch(`${API}hostel/hostel-secretary/${id}`, {
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

export const submitMessComplaint = (complaint) => {
  const studentId = localStorage.getItem("id")?.slice(1, -1);
  complaint.studentId = studentId;
  console.log(complaint);
  return fetch(`${API}complaint/mess`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(complaint),
  })
    .then((res) => {
      // console.log(res.json());
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const submitHostelComplaint = (complaint) => {
  const studentId = localStorage.getItem("id")?.slice(1, -1);
  complaint.studentId = studentId;
  console.log(complaint);
  return fetch(`${API}complaint/hostel`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(complaint),
  })
    .then((res) => {
      // console.log(res.json());
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const submitAnonymousComplaint = (complaint) => {
  return fetch(`${API}complaint/anonymous`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(complaint),
  })
    .then((res) => {
      // console.log(res.json());
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getHostelDetailsByHostelId = (id) => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1, -1);
  return fetch(`${API}/${id}`, {
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

/*
export const getHostelManagerArchives = () => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1,-1);
  return fetch(`${API}/archives`, {
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
*/
