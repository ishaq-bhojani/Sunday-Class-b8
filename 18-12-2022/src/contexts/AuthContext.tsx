import { createContext } from "react";
import { AuthData } from "../models/models";

const defaultAuth: AuthData = {
    isLoggedIn: false,
    setAuthentication: () => {}, 
};

const AuthContext = createContext<AuthData>(defaultAuth);

export default AuthContext;