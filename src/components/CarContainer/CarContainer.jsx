import "./CarContainer.css";

const CarContainer = ({ car }) => {
    const borderColor = isRegistrationExpiring() ? "red" : "black";
    function isRegistrationExpiring() {
        const expiryDate = new Date(car.expiryDate);
        const nextMonth = new Date();
        nextMonth.setDate(nextMonth.getDate() + 30);
        return expiryDate < nextMonth;
    }

    return (
        <div style={{ borderColor }} className="car-container">
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
