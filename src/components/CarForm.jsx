import { useState } from "react";
import { carTypes } from "../data/data";
import { v4 as newId } from "uuid";

const CarForm = ({ cars, setCars }) => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [type, setType] = useState("");
    const [year, setYear] = useState("");
    const [expiryDate, setExpiryDate] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!brand || !model || !type || !year || !expiryDate) {
            alert("All input fields are required!");
            return;
        }

        const newCar = {
            id: newId(),
            brand,
            model,
            type,
            year,
            expiryDate,
        };
        addCar(newCar);
    }

    const addCar = (newCar) => {
        newCar.id = newId();
        const updatedCars = [...cars, newCar];
        localStorage.setItem("carList", JSON.stringify(updatedCars));
        setCars(updatedCars);
    };

    return (
        <form className="car-form" onSubmit={handleFormSubmit}>
            <label>
                Enter car brand:
                <input
                    type="text"
                    name="car-brand"
                    placeholder="Enter car brand..."
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
            </label>
            <label>
                Enter car model:
                <input
                    type="text"
                    name="car-model"
                    placeholder="Enter car model..."
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
            </label>
            <label>
                Enter car type:
                <select
                    name="car-type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="">Select a car type</option>
                    {carTypes.map((carType) => (
                        <option value={carType} key={carType}>
                            {carType}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Enter car's year of manufacturing:
                <input
                    type="number"
                    name="car-year"
                    min="1900"
                    placeholder="2000"
                    max={new Date().getFullYear()}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </label>
            <label>
                Enter car's registration expiry date:
                <input
                    type="date"
                    name="car-expiry-date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                />
            </label>
            <button type="submit">Add car</button>
        </form>
    );
};

export default CarForm;
