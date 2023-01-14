import React, { useState, useEffect } from "react";

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
        // e.preventDefault();
        // const newUser = Object.assign({}, state)
        //props.signup(newUser).then(() => props.history.push('/'))
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
                        className="session-inputs"
                        type="password"
                        value={state.confirmPassword}
                        onChange={update("confirmPassword")}
                    />
                    <br />
                    <button
                        className="btn w-64 rounded-full mt-2"
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <p className="text-xs text-gray-400 content-end mt-3 flex justify-end item-center pr-1">
                        Already on ReminderPal? &nbsp;
                        <a className="text-xs text-gray-400 content-start underline">
                            Login
                        </a>
                    </p>
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
    //signup
    //login
});

export default SignUp;
