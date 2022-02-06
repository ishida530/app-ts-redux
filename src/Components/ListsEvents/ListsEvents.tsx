import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ListsEvents.scss';
import { useSelector } from 'react-redux';
import Event from './Event/Event';
import { useDispatch } from 'react-redux';
import { Dispatch } from "redux";
import { updateEvents } from '../../store/actionCreators';
import { Link } from 'react-router-dom';

const ListsEvents = () => {

    const dispatch = useDispatch();

    const events: iEvent[] = useSelector(
        (state: EventState) => state.events
    );

    return <div className='d-flex align-items-center flex-column'>
        <h1>Lista wydarzeń</h1>

        <ul className="list-group list-group-horizontal d-flex flex-column">
            <li className="list-group-item d-flex d-flex justify-content-between head__li">
                <div className='col'>Title</div>
                <div className='col'>Event data + time</div>
                <div className='col'>Description</div>
                <div className='col'>Picture</div>
                <div className='col'>Type of event</div>
                <div className='col'>Phone number</div>
                <div className='col'>E-mail adress</div>
                <div className='col'>Place of the event</div>
                <div className='col'><button>DETAILS</button></div>
            </li>
            {events.map((event: iEvent) => {
                console.log('mapowanie event', event)
                return (
                    <Event key={events.indexOf(event)} id={events.indexOf(event)} event={event} />
                )
            })}
        </ul>
        <Link type="button"
            className='btn btn-primary btn-lg btn-block'
            to={`/form`} >Dodaj wydarzenie</Link>

    </div>;
};
export default ListsEvents;

