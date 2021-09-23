import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const DisplayAllRentals = (props) => {
    const { formSubmittedBoolean, setFormSubmittedBoolean } = props;
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        console.log("useEffect triggered");
        axios.get("http://localhost:8000/api/vacasa")
            .then(
                (allRentals) => {
                    console.log(allRentals.data);
                    setRentals(allRentals.data);
                }
            )
            .catch((err) => console.log(err));
    }, [formSubmittedBoolean]);


    return (
        <div>
            <h1>Display All Rentals</h1>
            {rentals.length > 0 &&
                rentals.map((rental, index) => (
                    <div key={index}>
                        <h2>
                            <Link to={`/vacasa/${rental._id}/edit`}>EDIT</Link>
                        </h2>
                        <Link to={`/vacasa/${rental._id}`}>DISPLAY RENTALS INFO</Link>
                        <p>{rental.name}</p>
                        <img src={rental.photoUrl} alt="" />
                        {/* When button clicked, ignite deleteRental function with rental _id */}
                        <p>{rental.location}</p>
                        <p>{rental.price}</p>
                        <p>{rental.description}</p>
                        <hr />
                    </div>
                ))}
        </div>
    );
};

export default DisplayAllRentals;