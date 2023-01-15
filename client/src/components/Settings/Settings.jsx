import React, { useState } from "react";

const Settings = () => {
    // const [editing, setEditing] = useState(false);
    const [selectedInput, setSelectedInput] = useState(null);
    const [state, setState] = useState({
        email: "test@gmail.com ",
        phone: "9172912222",
        emailEnabled: false,
        smsEnabled: false,
        password: "",
    });

    const handleSubmit = () => {
        
            console.log(state);
    };

    const handleToggle = (field) => {
        return (e) => setState({ ...state, [field]: !state.emailEnabled });
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center content-start">
            <h1 className="text-6xl p-1 mb-2">Settings</h1>
            <form className="flex flex-col min-w-fit ">
                <div className="flex flex-row items-center content-start mt-6">
                    <p>E-mail:</p>
                    <input
                        type="text"
                        className="flex justify-center text-center w-26 pl-1 ml-1 border-solid border border-gray-10 rounded-md "
                        defaultValue={state.email}
                    ></input>
                </div>
                <div className="flex flex-row items-center content-start mt-6 ">
                    <p>Phone:</p>
                    <input
                        type="text"
                        className="flex justify-center text-center w-26 pl-1 ml-1 border-solid border border-gray-10 rounded-md "
                        defaultValue={state.phone}
                    ></input>
                </div>
                <div className="form-control flex flex-row items-center justify-center mt-5">
                    <p className="">E-mail Enabled:</p>
                    <label className="label cursor-pointer ml-2">
                        <input
                            type="checkbox"
                            className="toggle"
                            defaultValue={state.emailEnabled}
                            onClick={handleToggle("emailEnabled")}
                        />
                    </label>
                </div>
                <div className="form-control flex flex-row items-center justify-center mt-4">
                    <p className="">SMS Enabled:</p>
                    <label className="label cursor-pointer ml-5">
                        <input
                            type="checkbox"
                            className="toggle"
                            defaultValue={state.smsEnabled}
                            onClick={handleToggle("smsEnabled")}
                        />
                    </label>
                </div>
                <button className="btn mt-5" onClick={handleSubmit}>
                    Apply Changes
                </button>
            </form>
        </div>
    );
};

export default Settings;
