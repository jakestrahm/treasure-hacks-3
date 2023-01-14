import React from "react";
import { Link } from "react-router-dom";

const SignedOutNav = () => {
    return (
        <div className="navbar bg-base-200 p-0 min-h-0">
            <div className="flex-1">
                {/* <a className="btn btn-ghost normal-case text-l leading-none hover-bordered">
                  An App
              </a> */}
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
                    >
                        <li>
                            <a as={Link} to="">
                                Profile
                            </a>
                        </li>
                        <li>
                            <a as={Link} to="">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a onClick={handleLogout()}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SignedOutNav;
