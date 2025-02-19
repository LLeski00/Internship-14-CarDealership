const CarContainer = ({ car }) => {
    return (
        <div className="car-container">
            <h2>
                {car.brand} {car.model}
            </h2>
            <p>Type: {car.type}</p>
            <p>Year: {car.year}</p>
            <p>Expiry date: {car.expiryDate}</p>
        </div>
    );
};

export default CarContainer;
