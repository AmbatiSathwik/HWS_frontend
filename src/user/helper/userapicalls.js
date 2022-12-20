import { API } from "../../backend";

export const signin = (user) => {
  return fetch(`${API}student/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data.data.jwttoken));
    localStorage.setItem("id", JSON.stringify(data.data._id));
    localStorage.setItem("role",JSON.stringify(data.data.role))
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const signout = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("id");
    localStorage.removeItem("jwt");
    localStorage.removeItem("role");

    next();
    return fetch(`${API}student/signout`, {
      method: "GET",
    })
      .then((res) => {
        console.log("signout successfull ", res);
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

export const forgotpassword = (id) => {
  console.log("forgot");
  return fetch(`${API}student/forgot-password/${id}`, { method: "GET" }).then((res) => {
    return res.json();
  });
};
