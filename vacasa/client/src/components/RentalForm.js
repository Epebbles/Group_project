import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState } from "react";

const RentalForm = (props) => {
    const [name, setName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
    const { formSubmittedBoolen, setFormSubmittedBoolean } = props;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("handleformsubmit");
        const newRentalData = {
            name,
            location,
            price,
            description,
            photoUrl,
        };
        axios
            .post("http://localhost:8000/api/vacasa", newRentalData)
            .then((newRental) => {
                setName("");
                setPhotoUrl("");
                setLocation("");
                setPrice("");
                setDescription("");
                setFormSubmittedBoolean(!formSubmittedBoolen);
            })
            .catch((err) =>
                {
                    console.log(err.response.data.errors);
                    setErrors(err.response.data.errors.errors);
                }
            );
    };
    return (
        <>
            <h2>Rental Form</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Rental Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <div>
                    <label htmlFor="photoUrl">Photo Url: </label>
                    <input
                        type="text"
                        name="photoUrl"
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        value={photoUrl}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location: </label>
                    <input
                        type="text"
                        name="location"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input
                        type="text"
                        name="price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input
                        type="text"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <button>Add</button>
            </form>
            {errors
                ? Object.keys(errors).map((objKey, index) => (
                        <p key={index}>{errors[objKey].message}</p>
                    ))
                : null}
        </>
    );




};

export default RentalForm;