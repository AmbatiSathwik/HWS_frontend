import { API } from "../../backend";

export const hostelDetails = () => {
  return {
    data: {
      ahostel: {
        description:
          "A-Hostel has only four seated accommodation. This hostel is meant exclusively for the first year B. Tech. Students. A scosmopolitan mess is running within the hostel. An extension counter for NITC Multipurpose Co-operative Society is functioning in this hostel. A-Hostel is very near to the Main Academic Building.",
        warden: " Dr. Satyananda Panda",
        caretaker: "Dr. Gopi Krishna Saramekala",
        rooms: 60,
        floors: 3,
        inmates: 515,
      },
      bhostel: {
        description:
          "B-Hostel has triple seated rooms. Second year students are usually accommodated here. The mess in B-Hostel is non-vegetarian type.",
        warden: "Dr. Janardhan Banothu",
        caretaker: "Dr. Shihabudheen K.V.",
        rooms: 60,
        floors: 3,
        inmates: 514,
      },
      chostel: {
        description:
          "Third year students are accommodated in triple seated rooms in C-Hostel. A vegetarian mess is being run here.",
        warden: "Dr. Suchand Sangeeth C.S.",
        caretaker: "",
        rooms: 60,
        floors: 3,
        inmates: 492,
      },
      dhostel: {
        description:
          "Single seated accommodation is available in D-Hostel. The rooms are allotted to Final Year and Third Year students. D-Hostel mess is of cosmopolitan style. An extension counter of NITC Multipurpose Co-operative Society is functioning in this hostel.",
        warden: "Dr. Sandip Rudha Budhe",
        caretaker: "",
        rooms: 180,
        floors: 3,
        inmates: 180,
      },
      ehostel: {
        description:
          "Single seated accommodation is available in E-Hostel also. Third and Final Year students are accommodated here. A North Indian Vegetarian mess is being run in this hostel.",
        warden: "Dr. Raju Hazari",
        caretaker: "",
        rooms: 180,
        floors: 3,
        inmates: 180,
      },
      fhostel: {
        description:
          "F-Hostel consists of only single seated rooms, which are occupied by Final Year students. A cosmopolitan mess is being run here.",
        warden: "Dr. Mithun Muthiah",
        caretaker: "",
        rooms: 201,
        floors: 3,
        inmates: 199,
      },
      ghostel: {
        description:
          "G-Hostel ( Girls Hostel) has only single seated rooms which are presently occupied with the PG and PhD students. A cosmopolitan mess is being run in this hostel. Guest Rooms for parents and rooms for QIP Scholars are available in G-Hostel.",
        warden: "Dr. Fathima Fasmin",
        caretaker: "",
        rooms: 350,
        floors: 3,
        inmates: 350,
      },
      pg1hostel: {
        description:
          "1st year B.TechStudents  are accommodated in PG Hostel - I, which has only single seated accommodation. This hostel has a cosmopolitan mess.",
        warden: "Dr. Robin Davis",
        caretaker: "",
        rooms: 247,
        floors: 3,
        inmates: 247,
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
