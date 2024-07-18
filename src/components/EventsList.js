import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
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

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="./logo-esbas.png" alt="ESBAŞ Logo" className="logo" />
        </div>{" "}
        <div className="search-container">
          <input type="text" placeholder="ARA" className="search-bar" />
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
              <th> KONUM </th> <th> ZAMAN </th> <th> </th> <th> </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {events.map((event) => (
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
                  <FaTrashAlt />
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
