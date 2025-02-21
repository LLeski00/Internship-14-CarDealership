import { useState } from "react";
import "./CarFilter.css";

const CarFilter = ({ filterData, setFilterData }) => {
    const [isOpen, setIsOpen] = useState(true);

    function updateFilterData(atrribute, value) {
        setFilterData({ ...filterData, [atrribute]: value });
    }

    return (
        <>
            {isOpen && (
                <form className="car-filter">
                    <h3>Filter</h3>
                    <label>
                        Filter by brand:
                        <input
                            type="text"
                            value={filterData.brand}
                            onChange={(e) =>
                                updateFilterData("brand", e.target.value)
                            }
                        />
                    </label>
                    <label>
                        Filter by model:
                        <input
                            type="text"
                            value={filterData.model}
                            onChange={(e) =>
                                updateFilterData("model", e.target.value)
                            }
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
