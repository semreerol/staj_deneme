import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./EventList.css";

const events = [
  {
    id: 1,
    name: "İnavasyon Odaklı Kültür Geliştirme Eğitimi Programı",
    type: "Eğitim",
    location: "Toplantı Salonu",
    time: "24.06.2024/09.00",
    button: "Katılımcı Listesi",
    buttonClass: "participant-button",
    route: "/ParticipantList",
  },
  {
    id: 2,
    name: "Stajyerler için Oryantasyon",
    type: "Toplantı",
    location: "Toplantı Salonu",
    time: "02.08.2024/08.00",
    button: "BAŞLAT",
    buttonClass: "start-button",
    route: "/CardReader",
  },
  {
    id: 3,
    name: "İnovasyon Odaklı Kültür Geliştirme Eğitimi Programı",
    type: "Eğitim",
    location: "Toplantı Salonu",
    time: "05.08.2024/08.00",
    button: "BAŞLAT",
    buttonClass: "start-button",
    route: "/CardReader",
  },
  {
    id: 4,
    name: "İnovasyon Odaklı Kültür Geliştirme Eğitimi Programı",
    type: "Eğitim",
    location: "Toplantı Salonu",
    time: "05.08.2024/08.00",
    button: "BAŞLAT",
    buttonClass: "start-button",
    route: "/CardReader",
  },
];

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleParticipantClick = () => {
    navigate("./participant-list");
  };

  const handleStartClick = () => {
    navigate("./card-reader");
  };

  const handleYeniEtkinlik = () => {
    navigate("./add-new-event");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img
            src="./logo-esbas.png"
            onClick={handleLogoClick}
            alt="ESBAŞ Logo"
            className="logo"
          />
        </div>{" "}
        <div className="search-container">
          <input
            type="text"
            placeholder="ARA"
            className="search-bar"
            value={searchTerm}
            onChange={handleSearchChange}
          />{" "}
          <button onClick={handleYeniEtkinlik} className="new-event-button">
            +YENİ ETKİNLİK{" "}
          </button>{" "}
        </div>{" "}
      </header>{" "}
      <div className="App">
        <table>
          <thead>
            <tr>
              <th> # </th> <th> ETKİNLİK ADI </th> <th> ETKİNLİK TİPİ </th>{" "}
              <th> KONUM </th> <th> ZAMAN </th> <th> </th>
              <th> </th>
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {filteredEvents.map((event) => (
              <tr key={event.id}>
                <td> {event.id} </td> <td> {event.name} </td>{" "}
                <td> {event.type} </td> <td> {event.location} </td>{" "}
                <td> {event.time} </td>{" "}
                <td>
                  {" "}
                  {event.button === "Katılımcı Listesi" ? (
                    <button
                      className="katilimci-butonu"
                      onClick={handleParticipantClick}
                    >
                      Katılımcı Listesi{" "}
                    </button>
                  ) : (
                    <button
                      className="baslat-butonu"
                      onClick={handleStartClick}
                    >
                      Başlat{" "}
                    </button>
                  )}{" "}
                </td>{" "}
                <td>
                  <button className="update-button">
                    <FaEdit />
                  </button>{" "}
                  <button className="delete-button">
                    <FaTrashAlt />
                  </button>{" "}
                </td>{" "}
              </tr>
            ))}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
    </div>
  );
};

export default EventList;
