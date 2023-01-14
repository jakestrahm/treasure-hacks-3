import React, { useState, useEffect } from "react";

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
        // e.preventDefault();
        // const newUser = Object.assign({}, state)
        //props.login(newUser).then(() => props.history.push('/'))
    };
    return (
        <div className="h-screen flex flex-col justify-center items-center content-center">
            <h1 className="text-5xl p-1 items-center">Login</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center "
            >
                <div className=" mt-2">
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
                    <p className="text-xs text-gray-400 content-end mt-3 flex justify-end item-center pr-1">
                        New to ReminderPal? &nbsp;
                        <a className="text-xs text-gray-400 content-start underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;