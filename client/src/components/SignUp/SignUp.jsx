import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import axios from "axios";
const SignUp = (props) => {
    const [state, setState] = useState({
        email: "",
        phone: "",
        emailEnabled: false,
        smsEnabled: false,
        password: "",
        confirmPassword: "",
    });

    const update = (field) => {
        return (e) =>
            setState({
                ...state,
                [field]: e.currentTarget.value,
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('https://treasure-hacks-server-production.up.railway.app/account',state)
            .then((res) =>{
                console.log(res);
            })
            .catch((err) =>{
                console.log(err);
            })
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center content-center">
            <h1 className="text-5xl p-1 items-center">Sign Up</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
            >
                <div className=" mt-2">
                    <p className="session-labels">E-Mail</p>
                    <input
                        className="session-inputs"
                        type="text"
                        value={state.email}
                        onChange={update("email")}
                    />
                    {/* https://yarnpkg.com/package/react-phone-number-input use to import PhoneInput*/}
                    <p className="session-labels">Phone</p>
                    <input
                        className="session-inputs"
                        type="text"
                        value={state.phone}
                        onChange={update("phone")}
                    />
                    <p className="session-labels">Password</p>
                    <input
                        className="session-inputs"
                        type="password"
                        value={state.password}
                        onChange={update("password")}
                    />
                    <p className="session-labels">Confirm Password</p>
                    <input
                        className="session-inputs mb-1"
                        type="password"
                        value={state.confirmPassword}
                        onChange={update("confirmPassword")}
                    />
                    <br />
                    <button
                        className="btn w-64 rounded-full"
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <div className="flex flex-row justify-end mt-6 mr-3">
                        <p className="text-xs ">Already on ReminderPal?</p>
                        <Link to="/login" className="text-xs ml-1 underline">
                            Login
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
