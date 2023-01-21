import Base from "../core/Base";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { changePassword } from "./helper/studentapicalls";

function StudentChangePassword() {
  const [pass, setPass] = useState({
    oldPass: "B190500CS",
    newPass: "B190500CS",
    msg: "",
    loading: false,
  });
  const { oldPass, newPass, loading } = pass;

  const handleChange = (name) => (event) => {
    setPass({ ...pass, [name]: event.target.value });
  };
  const loadingMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: loading ? "" : "none" }}
      >
        Loading
      </div>
    );
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setPass({ ...pass, loading: true });
    changePassword({ newPassword: newPass, currPassword: oldPass }).then(
      (data) => {
        console.log(data);
        if (data.err) {
          setPass({ ...pass, msg: data.err, oldPass: "", newPass: "" });
        } else {
          setPass({ ...pass, msg: data.message, oldPass: "", newPass: "" });
        }
      }
    );
  };

  const Message = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: pass.msg ? "" : "none" }}
      >
        {pass.msg}
      </div>
    );
  };

  return (
    <Base >
      <h2 align="center">Change Password</h2>
      {Message()}
      {loadingMessage()}
      <div className="passwordchange">
        <div class="form-group">
          <label for="oldpass">Old Password</label>
          <input
            type="password"
            class="form-control"
            id="oldpass"
            placeholder="Old Password"
            value={oldPass}
            onChange={handleChange("oldPass")}
          />
        </div>
        <br />
        <div class="form-group">
          <label for="newpass">New Password</label>
          <input
            type="password"
            class="form-control"
            id="newpass"
            placeholder="New Password"
            value={newPass}
            onChange={handleChange("newPass")}
          />
        </div>
        <br />
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={onSubmit}>
            Change Password
          </Button>
        </div>
      </div>
    </Base>
  );
}

export default StudentChangePassword;
