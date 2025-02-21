import "./CarList.css";
import CarContainer from "../CarContainer/CarContainer";

const CarList = ({ cars, setCars, filter }) => {
    const sortedCars = filterCars().sort((a, b) => {
        if (a.year === b.year) {
            if (a.brand === b.brand) return a.model.localeCompare(b.model);
            return a.brand.localeCompare(b.brand);
        }

        return b.year - a.year;
    });

    function filterCars() {
        if (filter)
            return [...cars].filter((car) => {
                const carName = (car.brand + " " + car.model).toLowerCase();
                return carName.includes(filter.toLowerCase());
            });

        return cars;
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
