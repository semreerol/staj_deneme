import React, { useState } from "react";
import "./EventType.css";

function EventType() {
  const [eventTypes, setEventTypes] = useState([
    "Konferans",
    "Webinar",
    "Toplantı",
    "Atölye",
    "Parti",
  ]);
  const [newEventType, setNewEventType] = useState("");

  const addEventType = () => {
    if (newEventType.trim()) {
      setEventTypes([...eventTypes, newEventType.trim()]);
      setNewEventType("");
    }
  };

  const deleteEventType = (index) => {
    setEventTypes(eventTypes.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <header className="header">
        <img src="./logo-esbas.png" alt="Logo" className="logo" />
      </header>{" "}
      <h2> ETKİNLİK TÜRÜ </h2>{" "}
      <ul className="event-list">
        {" "}
        {eventTypes.map((type, index) => (
          <li key={index} className="event-item">
            <span> {index + 1} </span>{" "}
            <span className="event-name"> {type} </span>{" "}
            <button
              onClick={() => deleteEventType(index)}
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
          value={newEventType}
          onChange={(e) => setNewEventType(e.target.value)}
          placeholder="Yeni Etkinliği Yazınız"
          className="input-field"
        />
        <button onClick={addEventType} className="add-button">
          +
        </button>{" "}
      </div>{" "}
      <button className="save-button"> KAYDET </button>{" "}
    </div>
  );
}

export default EventType;
