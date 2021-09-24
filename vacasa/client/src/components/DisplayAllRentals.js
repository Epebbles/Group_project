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
                        <p>For more details about this listing: <Link to={`/vacasa/${rental._id}`}>{rental.name}</Link></p>
                        <p><img src={rental.photoUrl} alt="" /></p>
                        <p>{rental.checkinDate}</p>
                        <p>{rental.checkoutDate}</p>
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