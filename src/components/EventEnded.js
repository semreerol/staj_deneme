// EventEnded.js
import React from "react";
import "./EventEnded.css";
import { useNavigate } from "react-router-dom";

function EventEnded() {
  const navigate = useNavigate();

  const handlePersonelList = () => {
    navigate("/participant-list");
  };
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="EventEnded">
      <header className="header">
        <img
          src={"./logo-esbas.png"}
          onClick={handleLogoClick}
          className="logo"
          alt="logo"
        />
      </header>{" "}
      <div className="event-ended">
        <h1> ETKİNLİK SONA ERDİ. </h1>{" "}
        <h1> PERSONEL DÖKÜMÜNÜ GÖRMEK İÇİN TIKLAYINIZ </h1>{" "}
        <div className="buttons">
          <button onClick={handlePersonelList} className="personellist">
            {" "}
            PERSONEL DÖKÜMÜ{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default EventEnded;
