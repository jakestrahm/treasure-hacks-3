import React from "react";
import { Link } from "react-router-dom";

const SignedInNav = () => {
    return (
        <div className="navbar bg-base-200 p-0 min-h-0">
            <div className="flex-1">
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end p-1">
                    <label tabIndex={0} className="btn avatar mr-5 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-6 h-6 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
                    >
                        <li>
                            <Link to="/setting">
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SignedInNav;
