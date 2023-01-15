import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
const Login = (props) => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const update = (field) => {
        return (e) =>
            setState({
                ...state,
                [field]: e.currentTarget.value,
            });
    };
    const handleSubmit = (e) => {
        Axios.get('https://treasure-hacks-server-production.up.railway.app/account')
        .then((res) =>{
            console.log(res);
        })
        .catch((err) =>{
            console.log(err);
        })
    };
    return (
        <div className="h-screen flex flex-col justify-center items-center content-center">
            <h1 className="text-5xl p-1 items-center">Login</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
            >
                <div className="mt-2">
                    <p className="session-labels">E-Mail</p>
                    <input
                        className="session-inputs"
                        type="text"
                        value={state.email}
                        onChange={update("email")}
                    />
                    <p className="session-labels">Password</p>
                    <input
                        className="session-inputs"
                        type="password"
                        value={state.password}
                        onChange={update("password")}
                    />
                    <button
                        className="btn w-64 rounded-full mt-2"
                        type="submit"
                    >
                        Login
                    </button>
                    <div className="flex flex-row justify-end mt-3 mr-3">
                        <p className="text-xs ">Don't have an account?</p>
                        <Link to="/signup" className="text-xs ml-1 underline">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};
const mapStateToProps = (state) => ({
    //session
    //errors
});
const mapDispatchToProps = (dispatch) => ({
    //login
});
export default Login;