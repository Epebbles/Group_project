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

    const blueStyle = {
        backgroundColor: "#0066b2",
        color: "white",
        width: "120px",
    }

    return (
        <div className="header">
            <h1>Welcome to your next vacation</h1>
            <p><Link to="/login">Returning User?</Link>  | <span /> <Link to="/register">New to our site?</Link>  |  <span /> <Link to="/vacasa">Home Page</Link></p>
            <p><button style={blueStyle} onClick={(e) => Logout(e)}>Logout</button></p>
            <hr/>
        </div>
    )
};

export default Header;