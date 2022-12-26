import { json } from "react-router-dom";
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
  return fetch(`${API}mess/${id}/`, {
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

export const checkMessReview = (id) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const roll = localStorage.getItem("id").slice(1, -1);
  const token = "Bearer " + localStorage.getItem("jwt").slice(1, -1);
  const data = { messId: id, studentId: roll, year: year, month: month };
  return fetch(`${API}mess/check-mess-review/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const submitMessReview = (review) => {
  const token = "Bearer " + localStorage.getItem("jwt").slice(1, -1);
  return fetch(`${API}mess/mess-review/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(review),
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const changePassword = (pass) => {
  const token = "Bearer " + localStorage.getItem("jwt").slice(1, -1);
  const roll = localStorage.getItem("id").slice(1, -1);
  return fetch(`${API}student/change-password/${roll}/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(pass),
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};
