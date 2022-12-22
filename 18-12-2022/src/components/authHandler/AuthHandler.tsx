import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Login from "../login/Login";
import Todo from "../todo/Todo";

function AuthHandler () {
    const authCtx = useContext(AuthContext);
    return (
        authCtx.isLoggedIn ? <Todo /> : <Login />
    )
}

export default AuthHandler;