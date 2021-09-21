import DisplayAllRentals from "../components/DisplayAllRentals";
import RentalForm from "../components/RentalForm";
import React, { useState } from "react";

const VacasaMain = () => {
    const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);
    return (
        <div>
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
