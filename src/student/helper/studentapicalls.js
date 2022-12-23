import { API } from "../../backend";

export const studentDetails = () => {
  const roll = localStorage.getItem("id").slice(1, -1);
  const token = "Bearer " + localStorage.getItem("jwt").slice(1, -1);
  const user = { rollno: roll };
  return fetch(`${API}student/get-student-by-rollno/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(user),
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const studentMessDetails = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const roll = localStorage.getItem("id").slice(1, -1);
  const token = "Bearer " + localStorage.getItem("jwt").slice(1, -1);

  return fetch(`${API}mess/mess-user/${roll}/${year}/${month}/`, {
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

export const getMessName = (id) => {
  const token = "Bearer " + localStorage.getItem("jwt").slice(1, -1);
  return fetch(`${API}/mess/${id}/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
  }).then((data) => {
    return data.json();
  });
};
