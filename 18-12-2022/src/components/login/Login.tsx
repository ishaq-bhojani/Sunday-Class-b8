import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function Login () {
    const authCtx = useContext(AuthContext);
    return (
        <div>
            <div>Please Login</div>
            <div>
                <button type="button" onClick={() => authCtx.setAuthentication(true)}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login;