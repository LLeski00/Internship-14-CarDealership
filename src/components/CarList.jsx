import { cars } from "../data";
import CarContainer from "./CarContainer";

const CarList = () => {
    return (
        <div className="car-list">
            {cars.map((car) => (
                <CarContainer car={car} key={car.id} />
            ))}
        </div>
    );
};

export default CarList;
