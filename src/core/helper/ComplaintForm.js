import React, { useState } from "react";
import Base from "../Base";
import {
  InputLabel,
  FormControl,
  OutlinedInput,
  Select,
  MenuItem,
} from "@mui/material";
import { Button } from "react-bootstrap";
import { submitMessComplaint, submitHostelComplaint, submitAnonymousComplaint} from "./coreapicalls";
import { fontSize } from "@mui/system";

export function MessComplaintForm() {
  const [details, setDetails] = useState({
    messId: "",
    complt: "",
  });

  const { messId, complt } = details;

  const handleChange = (name) => (event) => {
    setDetails({
      ...details,
      [name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(details);
    submitMessComplaint(details)
      .then((data) => {
        if (data.err) {
          console.log(data.err);
          alert(data.err);
        } else {
          alert("success");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <FormControl variant="outlined" className="mb-4 w-100">
        <InputLabel id="demo-simple-select-label">Mess</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={messId}
          label="Age"
          onChange={handleChange("messId")}
        >
          <MenuItem value={1}>A</MenuItem>
          <MenuItem value={2}>B</MenuItem>
          <MenuItem value={3}>MBH-2</MenuItem>
        </Select>
        <p>Select mess</p>
      </FormControl>
      <FormControl variant="outlined" className="mb-4 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={complt}
          onChange={handleChange("complt")}
          placeholder="Wrtite your complaint here"
        />
        <p>Complaint</p>
      </FormControl>
      <Button
        className="mb-4 px-5 w-100"
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
    hostelId: "",
    complt: "",
  });

  const { hostelId, complt } = details;

  const handleChange = (name) => (event) => {
    setDetails({
      ...details,
      [name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(details);
    submitHostelComplaint(details)
      .then((data) => {
        if (data.err) {
          console.log(data.err);
          alert(data.err);
        } else {
          alert("success");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <FormControl variant="outlined" className="mb-4 w-100">
        <InputLabel id="demo-simple-select-label">Hostel</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={hostelId}
          label="Age"
          onChange={handleChange("hostelId")}
        >
          <MenuItem value={1}>A</MenuItem>
          <MenuItem value={2}>B</MenuItem>
          <MenuItem value={3}>MBH-2</MenuItem>
        </Select>
        <p>Select hostel</p>
      </FormControl>
      <FormControl variant="outlined" className="mb-4 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px" }}
          value={complt}
          onChange={handleChange("complt")}
          placeholder="Wrtite your complaint here"
        />
        <p>Complaint</p>
      </FormControl>
      <Button
        className="mb-4 px-5 w-100"
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
    complt: "",
  });

  const { complt } = details;

  const handleChange = (name) => (event) => {
    setDetails({
      ...details,
      [name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(details);
    submitAnonymousComplaint(details)
      .then((data) => {
        if (data.err) {
          console.log(data.err);
          alert(data.err);
        } else {
          alert("success");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <FormControl variant="outlined" className="mb-4 w-100">
        <OutlinedInput
          style={{ borderRadius: "8px", height: "50px"}}
          value={complt}
          onChange={handleChange("complt")}
          placeholder="Write your complaint here"
        />
        <p>Complaint</p>
      </FormControl>
      <Button
        className="mb-4 w-100"
        onClick={onSubmit}
        color="info"
        size="lg"
      >
        Submit
      </Button>
    </div>
  );
}
