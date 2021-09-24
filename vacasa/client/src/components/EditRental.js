// import { navigate } from "@reach/router";
// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const EditRental = (props) => {
//     const { id } = props;
//     const [name, setName] = useState("");
//     const [photoUrl, setPhotoUrl] = useState("");
//     const [checkinDate, setCheckinDate] = useState("");
//     const [checkoutDate, setCheckoutDate] = useState("");
//     const [location, setLocation] = useState("");
//     const [price, setPrice] = useState("");
//     const [description, setDescription] = useState("");

//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/vacasa/${id}`)
//             .then((queriedRental) => {
//                 console.log(queriedRental.data);
//                 setName(queriedRental.data);
//                 setPhotoUrl(queriedRental.data);
//                 setCheckinDate(queriedRental.data);
//                 setCheckoutDate(queriedRental.data);
//                 setLocation(queriedRental.data);
//                 setPrice(queriedRental.data);
//                 setDescription(queriedRental.data);
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     const updateRental = (e) => {
//         e.preventDefault();
//         axios
//             .put(`http://localhost:8000/api/vacasa/${id}`, {
//                 name,
//                 photoUrl,
//                 checkinDate,
//                 checkoutDate,
//                 location,
//                 price,
//                 description,
//             })
//             .then((updatedRental) => navigate("/vacasa"))
//             .catch((err) => console.log(err));
//     };

//     const greenStyle = {
//         backgroundColor: "green",
//         color: "white",
//         width: "120px",
//     }
//     return (
//         <div className="container">
//             <h1>Edit Rental</h1>
//             <form onSubmit={updateRental}>
//                 <div>
//                     Name: {" "}
//                     <input
//                         type="text"
//                         name="name"
//                         onChange={(e) => setName(e.target.value)}
//                         value={name}
//                     />
//                 </div>
//                 <div>
//                     PhotoUrl: {" "}
//                     <input
//                         type="text"
//                         name="photoUrl"
//                         onChange={(e) => setPhotoUrl(e.target.value)}
//                         value={photoUrl}
//                     />
//                 </div>
//                 <div>
//                     Check-in Date: {" "}
//                     <input
//                         type="date"
//                         name="checkinDate"
//                         onChange={(e) => setCheckinDate(e.target.value)}
//                         value={checkinDate}
//                     />
//                 </div>
//                 <div>
//                     Check-out Date: {" "}
//                     <input
//                         type="date"
//                         name="checkoutDate"
//                         onChange={(e) => setCheckoutDate(e.target.value)}
//                         value={checkoutDate}
//                     />
//                 </div>
//                 <div>
//                     Location: {" "}
//                     <input
//                         type="text"
//                         name="location"
//                         onChange={(e) => setLocation(e.target.value)}
//                         value={location}
//                     />
//                 </div>
//                 <div>
//                     Price: {" "}
//                     <input
//                         type="text"
//                         name="price"
//                         onChange={(e) => setPrice(e.target.value)}
//                         value={price}
//                     />
//                 </div>
//                 <div>
//                     Description: {" "}
//                     <input
//                         type="text"
//                         name="description"
//                         onChange={(e) => setDescription(e.target.value)}
//                         value={description}
//                     />
//                 </div>
//                 <hr/>
//                 <button type="submit" style={greenStyle}>SUBMIT EDIT</button>
//             </form>
//         </div>
//     );
// };

// export default EditRental;