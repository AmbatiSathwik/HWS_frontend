import Base from "../core/Base";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { changePassword } from "./helper/studentapicalls";
function Warn()
{
  return(
    <div>
      <h6>At least one lowercase letter,</h6>
      <h6>One uppercase letter,</h6>
      <h6>One numeric digit,</h6>
      <h6>One special character should be present,</h6>
      <h6>Size should be in between 6 and 20</h6>
    </div>
  )
}
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
    var Passwordverify = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    console.log("password");
    if(!newPass.match(Passwordverify))
    {
      setPass({...pass,msg:"Password Constraints Does Not Met"})
   }
    else
    {
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
    }
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
        <Warn></Warn>
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
