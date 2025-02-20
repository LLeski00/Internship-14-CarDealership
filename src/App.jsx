import { useState } from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarFilter from "./components/CarFilter";

function App() {
    const [cars, setCars] = useState(
        JSON.parse(localStorage.getItem("carList")) || []
    );

    return (
        <>
            <h1>Car dealership</h1>
            <CarList cars={cars} />
            <CarForm cars={cars} setCars={setCars} />
            <CarFilter cars={cars} setCars={setCars} />
        </>
    );
}

export default App;
