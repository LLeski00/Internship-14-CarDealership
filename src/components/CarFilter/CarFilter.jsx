import { useState } from "react";
import "./CarFilter.css";
import { useEffect } from "react";

const CarFilter = ({ filterData, setFilterData }) => {
    function updateFilterData(atrribute, value) {
        setFilterData({ ...filterData, [atrribute]: value });
    }

    return (
        <aside className="car-filter">
            <label>
                Filter by brand:
                <input
                    type="text"
                    value={filterData.brand}
                    onChange={(e) => updateFilterData("brand", e.target.value)}
                />
            </label>
            <label>
                Filter by model:
                <input
                    type="text"
                    value={filterData.model}
                    onChange={(e) => updateFilterData("model", e.target.value)}
                />
            </label>
        </aside>
    );
};

export default CarFilter;
