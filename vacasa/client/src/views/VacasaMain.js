import DisplayAllRentals from "../components/DisplayAllRentals";
import RentalForm from "../components/RentalForm";
import React, { useState } from "react";
import Header from "../components/Header";

const VacasaMain = () => {
    const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);
    return (
        <div>
            <Header />
            <RentalForm
                formSubmittedBoolean={formSubmittedBoolean}
                setFormSubmittedBoolean={setFormSubmittedBoolean}
            />
            <hr />
            <DisplayAllRentals
                formSubmittedBoolean={formSubmittedBoolean}
                setFormSubmittedBoolean={setFormSubmittedBoolean}
            />
        </div>
    );
};

export default VacasaMain;
