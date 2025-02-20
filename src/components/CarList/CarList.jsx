import "./CarList.css";
import CarContainer from "../CarContainer/CarContainer";

const CarList = ({ cars, setCars }) => {
    const sortedCars = [...cars].sort((a, b) => {
        if (a.year === b.year) {
            if (a.brand === b.brand) return a.model.localeCompare(b.model);
            return a.brand.localeCompare(b.brand);
        }

        return b.year - a.year;
    });

    return (
        <div className="car-list">
            {sortedCars.map((car) => (
                <CarContainer
                    car={car}
                    cars={cars}
                    setCars={setCars}
                    key={car.id}
                />
            ))}
        </div>
    );
};

export default CarList;
