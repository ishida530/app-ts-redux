import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from "redux";
import './Event.scss'
import { Link } from 'react-router-dom';
type Props = {
    event: iEvent;
    id: number
    //  addEvent: (article: IArticle) => void;
};


const Event: React.FC<Props> = ({ event, id }) => {

    const { title, date_event, description, image, type_event, phone_number, email, place_event } = event;

    return <li className="list-group-item d-flex justify-content-between">
        <div className='col'>{title}</div>
        <div className='col'>{date_event}</div>
        <div className='col'>{description}</div>
        <div className='col'><img className='img-fluid' src={process.env.PUBLIC_URL + `/images/${image}`} /></div>
        <div className='col'>{type_event}</div>
        <div className='col'>{phone_number}</div>
        <div className='col'>{email}</div>
        <div className='col'>{place_event}</div>
        <div className='col' ><Link state={event} className='btn btn-primary' to={`/events/${id}`} >Details</Link></div>
    </li>

};

export default Event;
