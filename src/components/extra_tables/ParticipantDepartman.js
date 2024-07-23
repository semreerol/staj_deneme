import React, { useState } from "react";
import "./ParticipantDepartman.css";

function ParticipantDepartman() {
  const [departments, setDepartments] = useState([
    "İnsan Kaynakları",
    "Bilgi İşlem",
  ]);
  const [newDepartment, setNewDepartment] = useState("");

  const addDepartment = () => {
    if (newDepartment.trim()) {
      setDepartments([...departments, newDepartment.trim()]);
      setNewDepartment("");
    }
  };

  const deleteDepartment = (index) => {
    setDepartments(departments.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <header className="header">
        <img
          src={`${process.env.PUBLIC_URL}/logo-esbas.png`}
          alt="ESBAŞ Logo"
          className="logo"
        />
      </header>{" "}
      <h2> KATILIMCI DEPARTMAN </h2>{" "}
      <ul className="department-list">
        {" "}
        {departments.map((department, index) => (
          <li key={index} className="department-item">
            {" "}
            {index + 1} {department}{" "}
            <button
              onClick={() => deleteDepartment(index)}
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
          value={newDepartment}
          onChange={(e) => setNewDepartment(e.target.value)}
          placeholder="Yeni Departmanı Yazınız"
          className="input-field"
        />
        <button onClick={addDepartment} className="add-button">
          +
        </button>{" "}
      </div>{" "}
      <button className="save-button"> KAYDET </button>{" "}
    </div>
  );
}

export default ParticipantDepartman;
