import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventList from "./components/EventsList";
import CardReader from "./components/CardReader";
import EventEnded from "./components/EventEnded";
import AddNewParticipant from "./components/AddNewParticipant";
import ParticipantList from "./components/ParticipantList";
import AddNewEvent from "./components/AddNewEvent";
import EventType from "./components/extra_tables/EventType";
import EventLocation from "./components/extra_tables/EventLocation";
import ParticipantDepartman from "./components/extra_tables/ParticipantDepartman";
import ParticipantLocation from "./components/extra_tables/ParticipantLocation";
import ParticipantGender from "./components/extra_tables/ParticipantGender";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />{" "}
        <Route path="/add-new-event" element={<AddNewEvent />} />{" "}
        <Route path="/card-reader" element={<CardReader />} />{" "}
        <Route path="/event-ended" element={<EventEnded />} />{" "}
        <Route path="/add-new-participant" element={<AddNewParticipant />} />{" "}
        <Route path="/participant-list" element={<ParticipantList />} />{" "}
        <Route path="/add-new-event/event-type" element={<EventType />} />{" "}
        <Route
          path="/add-new-event/event-location"
          element={<EventLocation />}
        />{" "}
        <Route
          path="/add-new-participant/participant-departman"
          element={<ParticipantDepartman />}
        />{" "}
        <Route
          path="/add-new-participant/participant-location"
          element={<ParticipantLocation />}
        />{" "}
        <Route
          path="/add-new-participant/participant-gender"
          element={<ParticipantGender />}
        />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
