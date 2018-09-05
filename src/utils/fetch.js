// import GraphQLSettings from "../../../graphql.json";
import { USER_INFO } from "./const";

// let GraphQLEndpoint = GraphQLSettings.development.endpoint;

// if (process.env.NODE_ENV === "production") {
//   GraphQLEndpoint = GraphQLSettings.production.endpoint;
// }

function getUserInfo() {
  let token = "";
  let userInfo = localStorage.getItem(USER_INFO);
  if (userInfo) {
    token = JSON.parse(userInfo).token;
  }
  return token;
}

export function getData(url, successCallback, errorCallback, method = "GET", isAuth = false) {
  let token = getUserInfo();
  let headerAuth = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Token " + token
  };
  let headerUnauth = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  fetch(url, {
    method: method,
    headers: isAuth ? headerAuth : headerUnauth,
  })
    .then(response => {
      response.json().then(responseJson => {
        console.log("success getData Utils: ", responseJson);
        successCallback(responseJson);
      });
    })
    .catch(error => {
      console.log("error getData Utils: ", error);
      errorCallback(error);
    });
}
