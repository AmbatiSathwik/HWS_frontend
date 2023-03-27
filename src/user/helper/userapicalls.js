import { API } from "../../backend";

export const signin = (user) => {
  return fetch(`${API}auth/login`, {
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
  const role_mapping = {
    student:
      "32ade5e7c36fa329ea39dbc352743db40da5aa7460ec55f95b999d6371ad20170094d88d9296643f192e9d5433b8d6d817d6777632e556e96e58f741dc5b3550",
    MessAdmin:
      "b5762f643468edf47f075f0ea900fb25fb5a302c4ceabaf56f3a6e64f89a07b3938356de2a00b4b03d3052e43848d7db45756db3304e3877d280491515de4801",
    hostelOfficeAdmin:
      "5ce11b6691da74dbe9f799fa9a2b5fa54a0a70a6de2eba86daed418eb0a8f76aeeaaa827952984a3de46e83ea5caacd32cbb86fea601b45ac59fe94b0b3baf8d",
    cheifWarden:
      "3db390eddb0af4f2aac8c7bc7944d694724383352acb3cb047f838602620454dbdcf996d588de5d2ef0219a2965d912e723cd8a7169b7b60cd34b63d7c52ca47",
  };
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data.data.token));
    if (JSON.stringify(data.data.id)) {
      localStorage.setItem("id", JSON.stringify(data.data.id));
    } else {
      localStorage.setItem("id", JSON.stringify(data.data.email));
    }
    localStorage.setItem("role", JSON.stringify(role_mapping[data.data.role])); //change this
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
  return fetch(`${API}student/forgot-password/${id}`, { method: "GET" }).then(
    (res) => {
      return res.json();
    }
  );
};
