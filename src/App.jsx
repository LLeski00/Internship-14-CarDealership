import { useEffect, useState } from "react";
import "./App.css";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import { cars as carsData } from "./data";
import { v4 as newId } from "uuid";

function App() {
    const [cars, setCars] = useState(
        JSON.parse(localStorage.getItem("carList")) || []
    );

    const addCar = (newCar) => {
        newCar.id = newId();
        const updatedCars = [...cars, newCar];
        localStorage.setItem("carList", JSON.stringify(updatedCars));
        setCars(updatedCars);
    };

    return (
        <>
            <h1>Car dealership</h1>
            <CarList cars={cars} />
            <CarForm cars={cars} addCar={addCar} />
        </>
    );
}

export default App;
