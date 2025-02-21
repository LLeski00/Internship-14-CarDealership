import { useEffect, useState } from "react";
import CarForm from "./components/CarForm/CarForm";
import CarList from "./components/CarList/CarList";
import CarFilter from "./components/CarFilter/CarFilter";

function App() {
    const [cars, setCars] = useState(
        JSON.parse(localStorage.getItem("carList")) || []
    );
    const [filter, setFilter] = useState("");

    useEffect(() => {
        localStorage.setItem("carList", JSON.stringify(cars));
    }, [cars]);

    return (
        <>
            <h1>Car Dealership</h1>
            <div className="app-content">
                <CarFilter filter={filter} setFilter={setFilter} />
                <CarForm cars={cars} setCars={setCars} />
                <CarList cars={cars} setCars={setCars} filter={filter} />
            </div>
        </>
    );
}

export default App;
