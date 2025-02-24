import "./CarForm.css";
import { useState } from "react";
import { carTypes } from "../../data/data";
import { v4 as newId } from "uuid";

const CarForm = ({ cars, setCars }) => {
    const [carData, setCarData] = useState({
        brand: "",
        model: "",
        type: "",
        year: 0,
        expiryDate: "",
    });
    const [isOpen, setIsOpen] = useState(false);

    function updateCarData(atrribute, value) {
        setCarData((prev) => ({ ...prev, [atrribute]: value }));
    }

    const addCar = (newCar) => {
        newCar.id = newId();
        setCars([...cars, newCar]);
    };

    function handleFormSubmit(e) {
        e.preventDefault();

        if (cars.length >= 10) {
            alert("You have reached the max number of cars!");
            return;
        }

        const newCar = { ...carData, id: newId() };
        addCar(newCar);
        alert("Car successfully added.");
    }

    return (
        <>
            {isOpen && (
                <form className="car-form" onSubmit={handleFormSubmit}>
                    <h3>Add new car</h3>
                    <label>
                        Enter car brand:
                        <input
                            type="text"
                            name="car-brand"
                            placeholder="Enter car brand..."
                            value={carData.brand}
                            onChange={(e) =>
                                updateCarData("brand", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Enter car model:
                        <input
                            type="text"
                            name="car-model"
                            placeholder="Enter car model..."
                            value={carData.model}
                            onChange={(e) =>
                                updateCarData("model", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Enter car type:
                        <select
                            name="car-type"
                            value={carData.type}
                            onChange={(e) =>
                                updateCarData("type", e.target.value)
                            }
                            required
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
                            value={carData.year}
                            onChange={(e) =>
                                updateCarData("year", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Enter car's registration expiry date:
                        <input
                            type="date"
                            name="car-expiry-date"
                            value={carData.expiryDate}
                            onChange={(e) =>
                                updateCarData("expiryDate", e.target.value)
                            }
                            required
                        />
                    </label>
                    <button type="submit">Add car</button>
                </form>
            )}
            <button
                className="toggle-form-button"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? "Hide form" : "Add new car"}
            </button>
        </>
    );
};

export default CarForm;
