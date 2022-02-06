declare module 'react-datapicker';

interface iEvent {
    "title": string,
    "date_event": Date,
    "description": string,
    "image": string,
    "type_event": string,
    "phone_number": string,
    "email": string,
    "place_event": string,
}

type EventState = {
    events: iEvent[],
    titles: string[]
}

type EventAction = {
    type: string,
    payload: iEvent
}

type DispatchType = (args: EventAction) => EventAction
