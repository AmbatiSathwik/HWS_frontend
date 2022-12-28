import { json } from "react-router-dom";
import { API } from "../../backend";

export const postRequest = (data,url) => {
  const token = "Bearer " + localStorage.getItem("jwt").slice(1, -1);
  return fetch(`${API}/${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getRequest = (url) => {
  const token = "Bearer " + localStorage.getItem("jwt").slice(1, -1);
  return fetch(`${API}/${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
