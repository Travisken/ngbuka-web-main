import { setCookie, getCookie } from "cookies-next";

export const getToken = () => {
  return getCookie("_token");
}; //  fetches/retrieves the authentication token directly from cookies

export const setToken = (authObject) => {
  // set the token into the cookies
  setCookie("_token", authObject.token,);
  // set the user information into the cookies
  setCookie(
    "user", authObject.user,
  );
  console.log(authObject, "auth token");
};
