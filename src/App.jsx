import { useState } from "react";
import CarForm from "./components/CarForm/CarForm";
import CarList from "./components/CarList/CarList";
import CarFilter from "./components/CarFilter/CarFilter";

function App() {
    const [cars, setCars] = useState(
        JSON.parse(localStorage.getItem("carList")) || []
    );

    return (
        <>
            <h1>Car dealership</h1>
            <div className="app-content">
                <main>
                    <CarList cars={cars} setCars={setCars} />
                    <CarForm cars={cars} setCars={setCars} />
                </main>
                <CarFilter setCars={setCars} />
            </div>
        </>
    );
}

export default App;
