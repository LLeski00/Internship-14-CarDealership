import { useState } from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";

function App() {
    const [cars, setCars] = useState(
        JSON.parse(localStorage.getItem("carList")) || []
    );

    return (
        <>
            <h1>Car dealership</h1>
            <CarList cars={cars} />
            <CarForm cars={cars} setCars={setCars} />
        </>
    );
}

export default App;
