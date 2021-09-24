import React, {useState, useEffect} from 'react'
import axios from 'axios';
import RentalForm from './RentalForm';
import { navigate } from '@reach/router';
import Header from './Header';

const EditR = (props) => {
    const {rentalId} = props;
    const [rental, setRental] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [ errors, setErrors] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/vacasa/' + rentalId)
            .then(res =>  {
                setRental(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log("What are you doing?")
                setLoaded(true);
                console.log(err);
            })
    }, []);

    const editRental = (rental) => {
        axios.put("http://localhost:8000/api/vacasa/" + rentalId, rental)
            .then(res => {
                console.log("Update Successful");
                console.log(rental.name);
                console.log(res);
                navigate("/vacasa");
            })
            .catch(err => {
                console.log("This form has errors");
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors;
                setErrors(errorResponse);
            });
    }

    return (
        <>
            <Header />
            <div className="table-left">
                <h1>Edit this booking?</h1>
                {loaded && (
                    <RentalForm
                        onsubmitFunction={editRental}
                        name={rental.name}
                        photoUrl={rental.photoUrl}
                        checkinDate={rental.checkinDate}
                        checkoutDate={rental.checkoutDate}
                        location={rental.location}
                        price={rental.price}
                        description={rental.description}
                    />
                )}
            </div>
        </>
    )
};

export default EditR;