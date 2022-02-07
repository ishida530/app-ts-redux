import * as actionTypes from "./actionTypes"

export const initialState: EventState = {
    events: [
        {
            title: "WRC",
            date_event: new Date(),
            description: "world rally championship",
            type_event: "Sport",
            phone_number: "+49 515 515 515",
            email: "wrc@gmail.com",
            place_event: "Nederland",
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
                title: action.payload.title,
                date_event: action.payload.date_event,
                description: action.payload.description,
                image: action.payload.image,
                type_event: action.payload.type_event,
                phone_number: action.payload.phone_number,
                email: action.payload.email,
                place_event: action.payload.place_event,
            }
            return { ...state, events: [...state.events, action.payload] };
        case actionTypes.UPDATE_EVENTS:
            return { ...state, events: [...state.events, action.payload] }
    }
    return state
}

export default reducer