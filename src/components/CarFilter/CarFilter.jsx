import "./CarFilter.css";

const CarFilter = ({ filterData, setFilterData }) => {
    function updateFilterData(atrribute, value) {
        setFilterData({ ...filterData, [atrribute]: value });
    }

    return (
        <form className="car-filter">
            <h3>Filter</h3>
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
        </form>
    );
};

export default CarFilter;
