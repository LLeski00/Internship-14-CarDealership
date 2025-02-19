import CarContainer from "./CarContainer";

const CarList = ({ cars }) => {
    return (
        <div className="car-list">
            {cars && cars.map((car) => <CarContainer car={car} key={car.id} />)}
        </div>
    );
};

export default CarList;
