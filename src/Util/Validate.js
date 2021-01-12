export const ValidateRegiser = (log, pass) => {
  let arrLogin = [];
  let arrPass = [];

  arrLogin.push(log);
  arrPass.push(pass);

  localStorage.setItem("UserName", arrLogin);
  localStorage.setItem("UsPassword", arrPass);
};
export const ValidateLogin = (log, pass) => {
  let login = localStorage.getItem("UserName");
  let Password = localStorage.getItem("UsPassword");

  if (log === login && pass === Password) {
    console.log("Welcome!!!");
  } else {
    console.log("Wrong");
  }
};
