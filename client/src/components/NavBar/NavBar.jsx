import React from "react";
import { Link } from "react-router-dom";
import SignedInNav from "./SignedInNav";
const NavBar = () => {
    const handleLogout = () => {
        // props.logout().then(() => props.history.push("/"));
    };
    // if (!props.currentUser) {
        return (
          <div>
            <SignedInNav />
          </div>
        );
    // } else {
        return <SignedOutNav />;
    // }
};

export default NavBar;
