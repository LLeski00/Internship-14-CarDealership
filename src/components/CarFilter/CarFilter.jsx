import { useState } from "react";
import "./CarFilter.css";

const CarFilter = ({ filter, setFilter }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {isOpen && (
                <form className="car-filter">
                    <h3>Filter</h3>
                    <label>
                        <input
                            type="text"
                            name="car-filter"
                            value={filter.brand}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </label>
                </form>
            )}
            <button
                className="toggle-filter-button"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? "Hide" : "Filter"}
            </button>
        </>
    );
};

export default CarFilter;
