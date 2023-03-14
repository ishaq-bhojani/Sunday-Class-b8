import { CookiesProvider, useCookies } from "react-cookie";

const Auth = ({ children }) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};

export default Auth;

export const useIsLoggedIn = () => {
  const [cookies] = useCookies();

  return !!cookies.token;
};

export const useSetToken = () => {
  const [_, setCookie] = useCookies();
  return (token) => {
    console.log(token);
    setCookie("token", token, { secure: true, sameSite: "lax" });
  };
};

export const useRemoveToken = () => {
  const [, , removeCookie] = useCookies();

  return () => removeCookie("token");
};
