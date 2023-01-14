import React, { useState, useEffect } from "react";

const SignUp = props => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        smsEnabled: false,
        smsEnabled: false,
        password: '',
        confirmPassword: ''
    });

    const update = field => {
        return e => setState({
            ...state, [field]: e.currentTarget.value
        });
    };
    
    const handleSubmit = e => {
        // e.preventDefault();
        // const newUser = Object.assign({}, state)
        //props.signup(newUser).then(() => props.history.push('/'))
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center content-center">
            <h1 className="text-5xl p-1 items-center">Sign Up</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center "
            >
                <p className="session-labels">Name</p>
                <input
                    class="session-inputs"
                    type="text"
                    value={state.name}
                    onChange={update("name")}
                />
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
                {/* <div>
                    <label>Mobile Text Enabled</label>
                    <input
                        type="checkbox"
                        value={state.smsEnabled}
                        placeholder="SMS Enabled"
                    />
                    <label>E-Mail Enabled</label>
                    <input
                        type="checkbox"
                        value={state.emailEnabled}
                        placeholder="Email Enabled"
                    />
                </div> */}
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
                <button className="btn w-64 rounded-full" type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

    const mapStateToProps = state => ({
        //session
        //errors
    })

    const mapDispatchToProps = dispatch => ({
        //signup
        //login
    })

export default SignUp;