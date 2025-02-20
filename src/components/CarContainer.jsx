import { useEffect, useState } from "react";

const CarContainer = ({ car }) => {
    const [borderColor, setBorderColor] = useState(
        isRegistrationExpiring() ? "red" : "black"
    );

    function isRegistrationExpiring() {
        const expiryDate = new Date(car.expiryDate);
        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);
        if (expiryDate < new Date()) return true;

        return false;
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
