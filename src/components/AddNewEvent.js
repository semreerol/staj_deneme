import React, { useState } from "react";
import "./AddNewEvent.css";

const AddNewEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const handleSave = () => {
    console.log("Event Name:", eventName);
    console.log("Event Type:", eventType);
    console.log("Location:", location);
    console.log("Time:", time);
  };

  return (
    <div className="add-new-event-container">
      <header className="header">
        <img src="./logo-esbas.png" className="logo" alt="logo" />
      </header>{" "}
      <div className="add-new-event">
        <h1> Yeni Etkinlik Oluşturma </h1>{" "}
        <div className="form-group">
          <label> Etkinlik Adı </label>{" "}
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Yazınız"
          />
        </div>{" "}
        <div className="form-group">
          <label> Etkinlik Türü </label>{" "}
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            <option value=""> Seçiniz </option>{" "}
            <option value="Konferans"> Konferans </option>{" "}
            <option value="Webinar"> Webinar </option>{" "}
            <option value="Toplantı"> Toplantı </option>{" "}
            <option value="Atölye"> Atölye </option>{" "}
          </select>{" "}
        </div>{" "}
        <div className="form-group">
          <label> Konum </label>{" "}
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value=""> Seçiniz </option>{" "}
            <option value="Toplantı Salonu"> Toplantı Salonu </option>{" "}
            <option value="Bahçe"> Bahçe </option>{" "}
            <option value="İzmir"> İzmir </option>{" "}
          </select>{" "}
        </div>{" "}
        <div className="form-group">
          <label> Zaman </label>{" "}
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Yazınız"
          />
        </div>{" "}
        <button onClick={handleSave}> Kaydet </button>{" "}
      </div>{" "}
    </div>
  );
};

export default AddNewEvent;
