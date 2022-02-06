import React, { useEffect } from 'react';
import './App.scss';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import ListsEvents from './Components/ListsEvents/ListsEvents';
import { useDispatch, useSelector } from 'react-redux';
import { updateEvents } from './store/actionCreators';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Formular from './Components/ListsEvents/Formular/Formular';
import EventDetails from './Components/EventDetails/EventDetails';

const App = () => {
  const dispatch = useDispatch()

  const getAllEvents = () => dispatch(updateEvents());

  useEffect(() => {
    getAllEvents()
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListsEvents />} />
        <Route path="form" element={<Formular />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
    </div >
  );
}

export default App;
