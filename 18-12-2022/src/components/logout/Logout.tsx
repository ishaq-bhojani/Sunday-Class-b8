import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function Logout () {
    const authCtx = useContext(AuthContext);
    return (
        <div>
            <div>
                <button type="button" onClick={() => authCtx.setAuthentication(false)}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Logout;