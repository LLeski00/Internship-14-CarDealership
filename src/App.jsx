import { useEffect, useState } from "react";
import CarForm from "./components/CarForm/CarForm";
import CarList from "./components/CarList/CarList";
import CarFilter from "./components/CarFilter/CarFilter";

function App() {
    const [cars, setCars] = useState(
        JSON.parse(localStorage.getItem("carList")) || []
    );
    const [filterData, setFilterData] = useState({
        brand: "",
        model: "",
    });

    useEffect(() => {
        localStorage.setItem("carList", JSON.stringify(cars));
    }, [cars]);

    return (
        <>
            <h1>Car dealership</h1>
            <div className="app-content">
                <CarFilter
                    filterData={filterData}
                    setFilterData={setFilterData}
                />
                <CarForm cars={cars} setCars={setCars} />
                <CarList
                    cars={cars}
                    setCars={setCars}
                    filterData={filterData}
                />
            </div>
        </>
    );
}

export default App;
