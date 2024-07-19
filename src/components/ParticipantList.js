import React from "react";
import { Link } from "react-router-dom";
import "./ParticipantList.css";

const ParticipantList = () => {
  const participants = [
    {
      id: 1,
      name: "Ann Culhane",
      card_no: "56842692658",
      department: "İnsan Kaynakları",
      location: "Ofis",
      gender: "Kadın",
    },
    {
      id: 2,
      name: "Ahmad Rosser",
      card_no: "56842692658",
      department: "Bilgi İşlem",
      location: "Ofis",
      gender: "Erkek",
    },
    // Diğer katılımcılar...
  ];

  const sendList = () => {
    console.log("excel e gönderildi");
    //excel bağlantısı yapılmadı.
  };

  return (
    <div className="container">
      <header className="header">
        <img src="./logo-esbas.png" alt="ESBAŞ Logo" className="logo" />
      </header>{" "}
      <div className="participant-list">
        <div className="toolbar">
          <button className="excel-button" onClick={sendList}>
            +Excel Aktar{" "}
          </button>{" "}
        </div>{" "}
        <h2> Katılımcı Listesi </h2>{" "}
        <table>
          <thead>
            <tr>
              <th> # </th> <th> Ad Soyad </th> <th> ID </th>{" "}
              <th> Departman </th> <th> Konum </th> <th> Cinsiyet </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {participants.map((participant, index) => (
              <tr key={participant.id}>
                <td> {index + 1} </td> <td> {participant.name} </td>{" "}
                <td> {participant.card_no} </td>{" "}
                <td> {participant.department} </td>{" "}
                <td> {participant.location} </td>{" "}
                <td> {participant.gender} </td>{" "}
              </tr>
            ))}{" "}
          </tbody>{" "}
        </table>{" "}
        <Link to="/add-new-participant" className="add-button">
          Yeni Katılımcı{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default ParticipantList;
