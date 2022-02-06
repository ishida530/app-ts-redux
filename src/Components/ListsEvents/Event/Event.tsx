import React from 'react';
import './Event.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';
type Props = {
    event: iEvent;
    id: number
};


const Event: React.FC<Props> = ({ event, id }) => {

    const titles: string[] = useSelector(
        (state: EventState) => state.titles
    );
    const { title, date_event, description, image, type_event, phone_number, email, place_event } = event;
    return <li className="list-group-item d-block d-lg-flex justify-content-between">

        {Object.values(event).map((value: string, index: number) => {
            if (index === 7) {
                return (
                    <div key={index} className='col-12 col-lg d-block d-sm-flex mb-2'>
                        <div className='col-12 col-sm-6 col-lg d-block d-sm-flex d-lg-none justify-content-center justify-content-sm-start justify-content-lg-center align-items-center fw-bold'>{titles[index]}:</div>
                        <div className='col-12 col-sm-6 col-lg '><img className='img-fluid' src={process.env.PUBLIC_URL + `/images/${value}`} /></div>
                    </div>
                )
            } else if (index === 1) {

                return (
                    <div key={index} className='col-12 col-lg d-block d-sm-flex align-items-center'>
                        <div className='col-12 col-sm-6 col-lg d-flex d-lg-none align-items-center fw-bold justify-content-center justify-content-sm-start justify-content-lg-center align-items-center'>{titles[index]}:</div>
                        <div className='col-12 col-sm-6 col-lg  '> <Moment format="MM-DD-YY HH:mm">{value}</Moment></div>
                    </div>)

            } else {
                return (
                    <div key={index} className='col-12 col-lg d-block d-sm-flex align-items-center'>
                        <div className='col-12 col-sm-6 col-lg d-flex d-lg-none align-items-center fw-bold justify-content-center justify-content-sm-start justify-content-lg-center align-items-center'>{titles[index]}:</div>
                        <div className='col-12 col-sm-6 col-lg  '>{value}</div>
                    </div>)
            }
        })}
        <div className='col d-flex align-items-center justify-content-center' ><Link state={event} className='btn btn-secondary' to={`/events/${id}`} >Details</Link></div>
    </li >

};

export default Event;
