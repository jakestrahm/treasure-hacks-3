import React from "react";
import { Link } from "react-router-dom";
import SignedInNav from "./SignedInNav";
import SignedOutNav from "./SignedOutNav";
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

const mapStateToProps = (state) => ({
    //current user
    //session
    //errors
});

const mapDispatchToProps = (dispatch) => ({
    //logout
});

export default NavBar;
