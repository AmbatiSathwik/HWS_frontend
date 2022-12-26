import Base from "../core/Base";
import React from "react";
import { Button } from "react-bootstrap";

function StudentChangePassword() {
  return (
    <Base title="Change Password">
      <div className="passwordchange">
        <div class="form-group">
          <label for="oldpass">Old Password</label>
          <input
            type="password"
            class="form-control"
            id="oldpass"
            placeholder="Old Password"
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
          />
        </div>
        <br />
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Change Password
          </Button>
        </div>
      </div>
    </Base>
  );
}

export default StudentChangePassword;
