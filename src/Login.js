// import { useHistory } from "react-router-dom";
import React from 'react'

function Login() {
    // const history = useHistory();

    const login = () => {
        localStorage.setItem("isLoggedIn", true);
        // history.push("/");
        window.location.reload();
    };

    return (
        <form>
            <div>
                <label>E-mail :</label>
                <input type="email" />
            </div>
            <div>
                <label>Password :</label>
                <input type="password" />
            </div>
            <div>
                <button onClick={login}>Login</button>
            </div>
        </form>
    )
}

export default Login
