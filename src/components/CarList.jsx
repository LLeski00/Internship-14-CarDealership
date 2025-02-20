import CarContainer from "./CarContainer";

const CarList = ({ cars }) => {
    const sortedCars = [...cars].sort((a, b) => {
        const dateA = new Date(a.expiryDate).getTime();
        const dateB = new Date(b.expiryDate).getTime();

        if (dateA === dateB) {
            if (a.brand === b.brand) return a.model.localeCompare(b.model);
            return a.brand.localeCompare(b.brand);
        }

        return dateB - dateA;
    });

    return (
        <div className="car-list">
            {sortedCars.map((car) => (
                <CarContainer car={car} key={car.id} />
            ))}
        </div>
    );
};

export default CarList;
