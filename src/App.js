import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import EventList from './components/EventsList';
import CardReader from './components/CardReader'; 
import EventEnded from './components/EventEnded';
import AddNewParticipant from './components/AddNewParticipant';
import ParticipantList from './components/ParticipantList';
import AddNewEvent from './components/AddNewEvent';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element= {<EventList />} /> 
                <Route path="/add-new-event" element= {<AddNewEvent />} /> 
                <Route path="/card-reader" element= {<CardReader />} />
                <Route path="/event-ended" element= {<EventEnded />} />
                <Route path="/add-new-participant" element= {<AddNewParticipant />} />
                <Route path="/participant-list" element= {<ParticipantList />} />
            </Routes>
        </Router>
    );
}

export default App;

