import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateEvents } from './store/actionCreators';
import { Routes, Route, useLocation, useHref, Router } from 'react-router-dom'


import ListsEvents from './Components/ListsEvents/ListsEvents';
import Formular from './Components/ListsEvents/Formular/Formular';
import EventDetails from './Components/ListsEvents/Event/EventDetails/EventDetails';

import './App.scss';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

export const LocationDisplay = () => {
  const location = useLocation()
  return <div data-testid="location-display">{location.pathname}</div>
}


const App = () => {
  const dispatch = useDispatch()

  const getAllEvents = () => dispatch(updateEvents());

  useEffect(() => {
    getAllEvents()
  }, []);
  return (

    <div className="App container">
      <Routes >
        <Route path="/" element={<ListsEvents />} />
        <Route path="form" element={<Formular />} />
        <Route path="/events/:id" element={<EventDetails />} />

        <Route path="/*" element={<ListsEvents />} />
      </Routes >
    </div >
  );
}

export default App;
