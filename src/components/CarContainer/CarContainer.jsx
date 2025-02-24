import "./CarContainer.css";

const CarContainer = ({ car, setCars }) => {
    const borderColor = isRegistrationExpiring()
        ? "var(--light-red-color)"
        : "black";

    function isRegistrationExpiring() {
        const expiryDate = new Date(car.expiryDate);
        const nextMonth = new Date();
        nextMonth.setDate(nextMonth.getDate() + 30);
        return expiryDate < nextMonth;
    }

    function deleteCar() {
        setCars((prev) => prev.filter((_car) => _car.id != car.id));
        alert("The car was successfully deleted.");
    }

    return (
        <div style={{ borderColor }} className="car-container">
            <h2>
                {car.brand} {car.model}
            </h2>
            <p>Type: {car.type}</p>
            <p>Year: {car.year}</p>
            <p>Expiry date: {car.expiryDate}</p>
            <button onClick={deleteCar}>Delete</button>
        </div>
    );
};

export default CarContainer;
