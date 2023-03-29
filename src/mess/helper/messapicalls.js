import { json } from "react-router-dom";
import { API } from "../../backend";

import AH from "../../assets/images/ahostel1.jpg";
import BH from "../../assets/images/bhostel.jpg";
import CH from "../../assets/images/chostel.jpg";
import DH from "../../assets/images/dhostel.jpg";
import EH from "../../assets/images/ehostel.jpg";
import FH from "../../assets/images/fhostel.jpg";
import GH from "../../assets/images/ghostel.jpg";
import PG1H from "../../assets/images/pg1hostel.jpg";

export const getMessReviewByMessId = (id, year, month) => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1, -1);
  return fetch(`${API}mess/mess-review/${id}/${year}/${month}`, {
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

export const messreviesavg = (id) => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1, -1);
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

export const messadminDetails = () => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1, -1);
  const email = localStorage.getItem("id")?.slice(1, -1);
  return fetch(`${API}mess/mess-admin-by-email`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({ email }),
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMessAdminByMessId = (id) => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1, -1);
  return fetch(`${API}mess/mess-admin/${id}`, {
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

export const getMessDetailsByMessId = (id) => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1, -1);
  return fetch(`${API}mess/${id}`, {
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

export const getMessAvailabilityByMessId = (id) => {
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1, -1);
  return fetch(`${API}mess/mess-availablitybyid/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
  })
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateMessAvailability = (data) => {
  console.log(data);
  const token = "Bearer " + localStorage.getItem("jwt")?.slice(1, -1);
  console.log(token);
  return fetch(`${API}mess/update-messavailability`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const messDetails = () => {
  return {
    data: {
      amess: {
        name: "A Mess",
        description: "Both veg and non-veg messes are available in A-Hostel.",
        img: AH,
      },
      bmess: {
        name: "B Mess",
        description: "Both veg and non-veg messes are available.  ",

        img: BH,
      },
      cmess: {
        name: "C Mess",
        description: " . Only vegetarian mess is available.",

        img: CH,
      },
      dmess: {
        name: "D Mess",
        description: "North Indian vegetarian mess is available.",

        img: DH,
      },
      emess: {
        name: "E Mess",
        description: "A North Indian Vegetarian mess is available.",

        img: EH,
      },
      fmess: {
        name: "F Mess",
        description: "A cosmopolitan mess is available. ",
        img: FH,
      },
      gmess: {
        name: "G Mess",
        description: "A cosmopolitan mess is available.",

        img: GH,
      },
      pg1mess: {
        name: "PG1 Mess",
        description: "A cosmopolitan mess is available.",
        img: PG1H,
      },
      lhmess: {
        name: "LH Mess",
        description: "A complete mess for ladies of NITC",
        img: AH,
      },
    },
  };
};
