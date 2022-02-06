import * as actionTypes from "./actionTypes"
// import logo from './../../public/image/mustang.jpg';

// import img1 from `./../../public/image/1.jpg`
// import img2 from './../../public/image/2.jpg'
// import img3 from './../../public/image/3.jpg'
// import img4 from './../../public/image/4.jpg'
// import img5 from './../../public/image/5.jpg'

export const initialState: EventState = {
    events: [
        {
            title: "tytul",
            date_event: "13.02.1994",
            description: "urodziny",
            image: "mustang.jpg",
            type_event: "Sport, Kultura, x",
            phone_number: "515 515 515",
            email: "email@wp.pl",
            place_event: "dom"
        }
    ],
}
const reducer = (
    state: EventState = initialState,
    action: EventAction
) => {
    switch (action.type) {
        case actionTypes.ADD_EVENT:
            const newEvent: iEvent = {
                // id: action.payload.id, // not really unique
                title: action.payload.title,
                date_event: action.payload.date_event,
                description: action.payload.description,
                image: action.payload.image,
                type_event: action.payload.type_event,
                phone_number: action.payload.phone_number,
                email: action.payload.email,
                place_event: action.payload.place_event,
            }
            console.log("newEvent", newEvent)

            return { ...state, events: [...state.events, action.payload] };
        case actionTypes.UPDATE_EVENTS:
            return { ...state, events: [...state.events, action.payload] }
    }
    return state
}

export default reducer