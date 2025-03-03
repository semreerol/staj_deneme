import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddNewParticipant.css";

const AddNewParticipant = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    card_no: "",
    department: "",
    location: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate("/participantlist");
  };
  const handleParticipantDepartman = () => {
    navigate("./participant-departman");
  };
  const handleParticipantLocation = () => {
    navigate("./participant-location");
  };
  const handleParticipantGender = () => {
    navigate("./participant-gender");
  };
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="add-participant-container">
      <header className="header">
        <img
          src={"./logo-esbas.png"}
          onClick={handleLogoClick}
          className="logo"
          alt="ESBAŞ Logo"
        />
      </header>{" "}
      <div className="add-participant">
        <h2> Yeni Katılımcı Ekle </h2>{" "}
        <form onSubmit={handleSubmit}>
          <label>
            Ad Soyad:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>{" "}
          <label>
            ID:
            <input
              type="text"
              name="card_no"
              value={form.card_no}
              onChange={handleChange}
              required
            />
          </label>{" "}
          <label>
            Departman:
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              required
            >
              <option value=""> Seçiniz </option>{" "}
              <option value="İnsan Kaynakları"> İnsan Kaynakları </option>{" "}
              <option value="Bilgi İşlem"> Bilgi İşlem </option>{" "}
            </select>{" "}
            <button
              className="participant-departman"
              onClick={handleParticipantDepartman}
            >
              {" "}
              (Yeni bir Departman eklemek isterseniz tıklayın){" "}
            </button>{" "}
          </label>{" "}
          <label>
            Konum:
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            >
              <option value=""> Seçiniz </option>{" "}
              <option value="Ofis"> Ofis </option>{" "}
              <option value="Saha"> Saha </option>{" "}
            </select>{" "}
            <button
              className="participant-location"
              onClick={handleParticipantLocation}
            >
              {" "}
              (Yeni bir Konum eklemek isterseniz tıklayın){" "}
            </button>{" "}
          </label>{" "}
          <label>
            Cinsiyet:
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value=""> Seçiniz </option>{" "}
              <option value="Kadın"> Kadın </option>{" "}
              <option value="Erkek"> Erkek </option>{" "}
            </select>{" "}
            <button
              className="participant-gender"
              onClick={handleParticipantGender}
            >
              {" "}
              (Yeni bir Cinsiyet eklemek isterseniz tıklayın){" "}
            </button>{" "}
          </label>{" "}
          <button type="submit"> Kaydet </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default AddNewParticipant;
