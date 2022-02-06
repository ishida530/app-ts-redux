import * as actionTypes from "./actionTypes"

export const initialState: EventState = {
    events: [
        {
            title: "tytul",
            date_event: new Date(),
            description: "urodziny",
            type_event: "Sport, Kultura, x",
            phone_number: "515 515 515",
            email: "email@wp.pl",
            place_event: "dom",
            image: "mustang.jpg",
        }
    ],
    titles: ['Title', 'Event data + time', 'Description', 'Type of event', 'Phone number', 'E-mail adress', 'Place of the event', 'Picture', '']
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