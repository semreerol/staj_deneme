import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendEventData } from "../api/api";
import { message } from "antd";
import "./CardReader.css";

function CardReader() {
  const navigate = useNavigate();
  const [cardInput, setCardInput] = useState("");

  const handleEndEvent = () => {
    navigate("/event-ended");
  };

  const handleManualEntry = () => {
    navigate("/add-new-participant");
  };

  const handleChange = (event) => {
    setCardInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Formun varsayılan davranışını engelle
    try {
      await sendEventData({ data: cardInput });
      console.log("Veri başarıyla gönderildi.");
      message.success("Etkinliğe Katılımınız Başarıyla Gerçekleşti");
    } catch (error) {
      console.error("Veri gönderilirken bir hata oluştu:", error);
      message.error("Etkinliğe Kaydınız Oluşturulamadı!");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
      console.log("başarıyla kayıt yapıldı.");
    }
  };
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="CardReader">
      <header className="header">
        <img
          src={"./logo-esbas.png"}
          onClick={handleLogoClick}
          className="logo"
          alt="logo"
        />
      </header>{" "}
      <div className="card-reader">
        <h1> ETKİNLİĞE HOŞGELDİNİZ </h1> <p> LÜTFEN KARTINIZI OKUTUNUZ! </p>{" "}
        <input
          autoFocus
          type="text"
          className="card-input"
          value={cardInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />{" "}
        <div className="buttons">
          <button
            type="primary"
            onClick={handleManualEntry}
            className="manual-entry"
          >
            MANUEL GİRİŞ{" "}
          </button>{" "}
          <button type="danger" onClick={handleEndEvent} className="end-event">
            ETKİNLİĞİ BİTİR{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default CardReader;
