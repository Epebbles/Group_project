import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const DisplayAllRentals = (props) => {
    const { formSubmittedBoolean, setFormSubmittedBoolean } = props;
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        console.log("useeffect triggered");
        axios
            .get("http://localhost:8000/api/vacasa")
            .then(
                (allRentals) => {
                    console.log(allRentals.data);
                    setRentals(allRentals.data);
                }
            )
            .catch((err) => console.log(err));
    }, [formSubmittedBoolean]);

    const deleteRental = (id) => {
        axios
            .delete(`http://localhost:8000/api/restaurant/${id}`)
            .then((response) => {
                console.log("deletion successful");
                setFormSubmittedBoolean(!formSubmittedBoolean);
            })
            .catch((err) => console.log("error deleitng restaurant", err));
    };
    return (
        <div>
            <h1>Display All Rentals</h1>
            {rentals.length > 0 &&
                rentals.map((rental, index) => (
                    <div key={index}>
                        <h2>
                            <Link to={`/${rental._id}/edit`}>EDIT</Link>
                        </h2>
                        <Link to={`/${rental._id}`}>DISPLAY RENTALS INFO</Link>
                        <p>{rental.name}</p>
                        <img src={rental.photoUrl} alt="" />
                        {/* When button clicked, ignite deleteRestaurant function with restaurant _id */}
                        <p>{rental.location}</p>
                        <p>{rental.price}</p>
                        <p>{rental.description}</p>
                        <button onClick={() => deleteRental(rental._id)}>DELETE</button>
                        <hr />
                    </div>
                ))}
        </div>
    );
};

export default DisplayAllRentals;