import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Details = (props) => {
    const {id} = props;
    const [rentalInfo, setRentalInfo] = useState();
    useEffect (() => {
        axios.get(`http://localhost:8000/api/vacasa/${id}`)
            .then((queriedrental) => {
                console.log(queriedrental.data);
                setRentalInfo(queriedrental.data);
            })
            .catch((err) => console.log(err.res))
    }, []);

    const deleteRental = (id) => {
        axios.delete(`http://localhost:8000/api/vacasa/${id}`)
            .then((res) => {
                console.log("deletion successful");
                navigate("/vacasa")
                // setFormSubmittedBoolean(!formSubmittedBoolean);
            })
            .catch((err) => console.log("error deleting rental", err));
    };
    
    return (
        <>
            {rentalInfo ? (
                <div className="table">
                    <h1>Rental Details</h1>
                    <h3>Details about: {rentalInfo.name}</h3>
                    
                    <table>
                        <thead>
                            <th>
                                <tr><img src={rentalInfo.photoUrl} alt="" /></tr>
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <tr>Location: {rentalInfo.location}</tr>
                                <tr>Price: {rentalInfo.price}</tr>
                                <tr>Description: {rentalInfo.description}</tr>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={() => deleteRental(rentalInfo._id)}>DELETE</button>
                </div>
            ) : (
                <h1>Can you smell the salty air yet?</h1>
            )}
        </>
    );
};

export default Details;