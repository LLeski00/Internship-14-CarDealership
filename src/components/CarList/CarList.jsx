import "./CarList.css";
import CarContainer from "../CarContainer/CarContainer";
import { useEffect } from "react";

const CarList = ({ cars, setCars, filterData }) => {
    const sortedCars = filterCars().sort((a, b) => {
        if (a.year === b.year) {
            if (a.brand === b.brand) return a.model.localeCompare(b.model);
            return a.brand.localeCompare(b.brand);
        }

        return b.year - a.year;
    });

    function filterCars() {
        let filteredCars = [...cars];

        if (filterData.brand)
            filteredCars = filteredCars.filter((car) =>
                car.brand.toLowerCase().includes(filterData.brand.toLowerCase())
            );
        if (filterData.model)
            filteredCars = filteredCars.filter((car) =>
                car.model.toLowerCase().includes(filterData.model.toLowerCase())
            );

        return filteredCars;
    }

    return (
        <div className="car-list">
            {sortedCars.map((car) => (
                <CarContainer car={car} setCars={setCars} key={car.id} />
            ))}
        </div>
    );
};

export default CarList;
