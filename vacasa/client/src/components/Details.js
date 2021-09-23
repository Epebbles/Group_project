import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Details = (props) => {
    const {rentalId} = props;
    const [rentalInfo, setRentalInfo] = useState();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/vacasa/${rentalId}`)
            .then((queriedrental) => {
                console.log(queriedrental.data);
                setRentalInfo(queriedrental);
            })
            .catch((err) => console.log(err.res))
    }, []);
    
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
                </div>
            ) : (
                <h1>Can you smell the salty air yet?</h1>
            )}
        </>
    );
};

export default Details