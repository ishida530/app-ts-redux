import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import './EventDetails.scss';
import Moment from 'react-moment';
import 'moment-timezone';

const EventDetails = () => {
    const navigate = useNavigate()
    const { id }: any = useParams();
    const events: iEvent[] = useSelector(
        (state: EventState) => state.events
    );
    const titles: string[] = useSelector(
        (state: EventState) => state.titles
    );
    // const [titlesEvent, setTitlesEvent] = useState(['Title', 'Event data + time', 'Description', 'Picture', 'Type of event', 'Phone number', 'E-mail adress:', 'Place of the event:'])
    const [eventValues, setEventDetail] = useState(Object.values(events[Number.parseInt(id)]))

    return (
        <div className='event__details'>
            <h1>Details of event:</h1>
            <div className='d-flex flex-column justify-content-between'>
                {eventValues.map((key: string, index: number) => {
                    if (index === 7) {
                        return (
                            <div key={index} className='col-12 col-lg d-block d-sm-flex mb-2'>
                                <div className='col-12 col-sm-6 col-lg d-block d-sm-flex d-lg-none justify-content-center justify-content-sm-start justify-content-lg-center align-items-center fw-bold'>{titles[index]}:</div>
                                <div className='col-12 col-sm-6 col-lg '><img className='img-fluid' src={process.env.PUBLIC_URL + `/images/${eventValues[index]}`} /></div>
                            </div>
                        )
                    } else if (index === 1) {

                        return (
                            <div key={index} className='col-12 col-lg d-block d-sm-flex align-items-center'>
                                <div className='col-12 col-sm-6 col-lg d-flex d-lg-none align-items-center fw-bold justify-content-center justify-content-sm-start justify-content-lg-center align-items-center'>{titles[index]}:</div>
                                <div className='col-12 col-sm-6 col-lg  '> <Moment format="MM-DD-YY HH:mm">{ eventValues[index]}</Moment></div>
                            </div>)

                    } else {
                        return (
                            <div key={index} className='col-12 col-lg d-block d-sm-flex align-items-center'>
                                <div className='col-12 col-sm-6 col-lg d-flex d-lg-none align-items-center fw-bold justify-content-center justify-content-sm-start justify-content-lg-center align-items-center'>{titles[index]}:</div>
                                <div className='col-12 col-sm-6 col-lg  '>{eventValues[index]}</div>
                            </div>)
                    }
                })}
                <button type="button" className='btn btn-secondary' onClick={() => navigate('/')}>Back</button>
            </div>

        </div >
    );
};

export default EventDetails;
