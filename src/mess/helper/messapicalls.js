import { json } from "react-router-dom";
import { API } from "../../backend";

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
