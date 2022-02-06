interface iEvent {
    "title": string,
    "date_event": string,
    "description": string,
    "image": string,
    "type_event": string,
    "phone_number": string,
    "email": string,
    "place_event": string,
}

type EventState = {
    events: iEvent[]
}

type EventAction = {
    type: string,
    payload: iEvent
}

type DispatchType = (args: EventAction) => EventAction
