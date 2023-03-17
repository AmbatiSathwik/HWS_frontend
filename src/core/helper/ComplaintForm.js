import React, { useState } from "react";
import Base from "../Base";
import {
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import { Button, Form } from "react-bootstrap";
import { submitComplaint } from "./coreapicalls";




export function MessComplaintForm() {
  const [details, setDetails] = useState({
    name: "",
    rollno: "",
    hostel: "",
    roomno: "",
    mess: "",
    typeOfComplaint: "",
    cmplnt: "",
  });

  const { name, rollno, hostel, roomno, mess, typeOfComplaint, cmplnt } = details;

  const handleChange = (name) => (event) => {
    setDetails({
      ...details,
      [name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(details);
    submitComplaint(details)
      .then((data) => {
        if (data.err) {
          console.log(data.err);
          alert(data.err);
        } else {
          alert("success");
          // data.data.role = details.loginas;
          // authenticate(data, () => {
          //   setDetails({
          //     username: "",
          //     password: "",
          //     loginas: "student",
          //     error: "",
          //     loading: false,
          //     forgot: false,
          //   });
          // });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
      <FormControl variant="outlined" className="mb-4 mx-5 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={name}
          onChange={handleChange("name")}
          placeholder="Name"
        />
        <p>Name</p>
      </FormControl>
      <FormControl variant="outlined" className="mb-4 mx-5 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={rollno}
          onChange={handleChange("rollno")}
          placeholder="Rollno"
        />
        <p>RollNo</p>
      </FormControl>
      <FormControl variant="outlined" className="mb-4 mx-5 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={mess}
          onChange={handleChange("mess")}
          placeholder="Mess name"
        />
        <p>Mess</p>
      </FormControl>
      <FormControl variant="outlined" className="mb-4 mx-5 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={cmplnt}
          onChange={handleChange("cmplnt")}
          placeholder="Wrtite your complaint here"
        />
        <p>Complaint</p>
      </FormControl>
      <Button
        className="mb-4 px-5 mx-5 w-100"
        onClick={onSubmit}
        color="info"
        size="lg"
      >
        Submit
      </Button>
    </div>
  );
}

export function HostelComplaintForm() {
  const [details, setDetails] = useState({
    name: "",
    rollno: "",
    hostel: "",
    roomno: "",
    mess: "",
    typeOfComplaint: "",
    cmplnt: "",
  });

  const { name, rollno, hostel, roomno, mess, typeOfComplaint, cmplnt } = details;

  const handleChange = (name) => (event) => {
    setDetails({
      ...details,
      [name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(details);
    submitComplaint(details)
      .then((data) => {
        if (data.err) {
          console.log(data.err);
          alert(data.err);
        } else {
          alert("success");
          // data.data.role = details.loginas;
          // authenticate(data, () => {
          //   setDetails({
          //     username: "",
          //     password: "",
          //     loginas: "student",
          //     error: "",
          //     loading: false,
          //     forgot: false,
          //   });
          // });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
      <FormControl variant="outlined" className="mb-4 mx-5 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={name}
          onChange={handleChange("name")}
          placeholder="Name"
        />
        <p>Name</p>
      </FormControl>
      <FormControl variant="outlined" className="mb-4 mx-5 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={rollno}
          onChange={handleChange("rollno")}
          placeholder="Rollno"
        />
        <p>RollNo</p>
      </FormControl>
      <FormControl variant="outlined" className="mb-4 mx-5 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={hostel}
          onChange={handleChange("hostel")}
          placeholder="Hostel name"
        />
        <p>Hostel</p>
      </FormControl>
      <FormControl variant="outlined" className="mb-4 mx-5 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={roomno}
          onChange={handleChange("roomno")}
          placeholder="Room No"
        />
        <p>RoomNo</p>
      </FormControl>
      <FormControl variant="outlined" className="mb-4 mx-5 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={cmplnt}
          onChange={handleChange("cmplnt")}
          placeholder="Wrtite your complaint here"
        />
        <p>Complaint</p>
      </FormControl>
      <Button
        className="mb-4 px-5 mx-5 w-100"
        onClick={onSubmit}
        color="info"
        size="lg"
      >
        Submit
      </Button>
    </div>
  );
}

export function AnonymousComplaintForm() {
  const [details, setDetails] = useState({
    name: "",
    rollno: "",
    hostel: "",
    roomno: "",
    mess: "",
    typeOfComplaint: "",
    cmplnt: "",
  });

  const { name, rollno, hostel, roomno, mess, typeOfComplaint, cmplnt } = details;

  const handleChange = (name) => (event) => {
    setDetails({
      ...details,
      [name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(details);
    submitComplaint(details)
      .then((data) => {
        if (data.err) {
          console.log(data.err);
          alert(data.err);
        } else {
          alert("success");
          // data.data.role = details.loginas;
          // authenticate(data, () => {
          //   setDetails({
          //     username: "",
          //     password: "",
          //     loginas: "student",
          //     error: "",
          //     loading: false,
          //     forgot: false,
          //   });
          // });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
      <FormControl variant="outlined" className="mb-4 mx-5 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={cmplnt}
          onChange={handleChange("cmplnt")}
          placeholder="Wrtite your complaint here"
        />
        <p>Complaint</p>
      </FormControl>
      <Button
        className="mb-4 px-5 mx-5 w-100"
        onClick={onSubmit}
        color="info"
        size="lg"
      >
        Submit
      </Button>
    </div>
  );
}
