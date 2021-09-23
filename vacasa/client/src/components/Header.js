import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Header = (props) => {
    const Logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/logout", {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
            navigate("/loginreg");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="header">
            <h1>Welcome to your next vacation</h1>
            <Link to="/vacasa">Home Page</Link>
            <button onClick={(e) => Logout(e)}>Logout</button>
            <hr/>
            
        </div>
    )
};

export default Header;