import 'bootstrap/dist/css/bootstrap.css';
import './ListsEvents.scss';
import { useSelector } from 'react-redux';
import Event from './Event/Event';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ListsEvents = () => {

    const dispatch = useDispatch();

    const events: iEvent[] = useSelector(
        (state: EventState) => state.events
    );
    const titles: string[] = useSelector(
        (state: EventState) => state.titles
    );
    return <div className='d-flex align-items-center flex-column'>
        <h1>Lista wydarzeń</h1>

        <ul className="list-group d-flex flex-column ">
            <li className="list-group-item d-none  d-lg-flex d-flex justify-content-center align-items-center head__li">

                {titles.map((title: string, index: number) => {
                    return (
                        <div key={index} className='col'>{title}</div>
                    )
                })}
            </li>
            {events.map((event: iEvent) => {
                console.log('mapowanie event', event)
                return (
                    <Event key={events.indexOf(event)} id={events.indexOf(event)} event={event} />
                )
            })
            }
        </ul >
        <Link type="button"
            className='btn btn-primary btn-lg btn-block'
            to={`/form`} >Add event</Link>

    </div >;
};
export default ListsEvents;

