import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams, useNavigate } from 'react-router-dom';



const EventDetails = () => {
    const navigate = useNavigate()
    const { id }: any = useParams();
    const events: iEvent[] = useSelector(
        (state: EventState) => state.events
    );
    const [titlesEvent, setTitlesEvent] = useState(['Title', 'Event data + time', 'Description', 'Picture', 'Type of event', 'Phone number', 'E-mail adress:', 'Place of the event:'])
    const [eventValues, setEventDetail] = useState(Object.values(events[Number.parseInt(id)]))

    return <div className='event__details'>
        <h1>Details of event:</h1>
        {eventValues.map((key: string, index: number) => {
            if (index === 3) {
                return (
                    <div key={index}>
                        <span><b>{titlesEvent[index]}</b>:</span>
                        <img src={process.env.PUBLIC_URL + `/images/${eventValues[index]}`} className="img-fluid" />
                    </div>
                )
            } else {
                return (
                    <div key={index}>
                        <span><b>{titlesEvent[index]}</b></span> :
                        <span>{eventValues[index]}</span>
                    </div>
                )
            }
        })}
        <button type="button" className='btn btn-secondary' onClick={() => navigate('/')}>Back</button>
    </div >;
};

export default EventDetails;
