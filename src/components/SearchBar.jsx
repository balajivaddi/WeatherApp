import { useState } from "react";
import { FaSearch, FaLocationArrow } from "react-icons/fa";

const SearchBar = ({ onSearch, onLocation }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city);
    setCity("");
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">
          <FaSearch />
        </button>
      </form>

      <button className="location-btn" onClick={onLocation}>
        <FaLocationArrow />
        Current Location
      </button>
    </div>
  );
};

export default SearchBar;