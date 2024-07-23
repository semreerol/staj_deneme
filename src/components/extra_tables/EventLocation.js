import React, { useState } from "react";
import "./EventLocation.css";

function EventLocation() {
  const [locations, setLocations] = useState([
    "Toplantı Salonu",
    "Bahçe",
    "İzmir",
  ]);
  const [newLocation, setNewLocation] = useState("");

  const addLocation = () => {
    if (newLocation.trim()) {
      setLocations([...locations, newLocation.trim()]);
      setNewLocation("");
    }
  };

  const deleteLocation = (index) => {
    setLocations(locations.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <header className="header">
        <img src="./logo-esbas.png" className="logo" alt="logo" />
      </header>{" "}
      <h2> ETKİNLİK KONUM </h2>{" "}
      <ul className="location-list">
        {" "}
        {locations.map((location, index) => (
          <li key={index} className="location-item">
            {" "}
            {index + 1} {location}{" "}
            <button
              onClick={() => deleteLocation(index)}
              className="delete-button"
            >
              🗑️
            </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
      <div className="input-container">
        <input
          type="text"
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
          placeholder="Yeni Konum Yazınız"
          className="input-field"
        />
        <button onClick={addLocation} className="add-button">
          +
        </button>{" "}
      </div>{" "}
      <button className="save-button"> KAYDET </button>{" "}
    </div>
  );
}

export default EventLocation;
