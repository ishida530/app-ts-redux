import axios from "axios";
import * as actionTypes from "./actionTypes"

export const addEvent = (event: iEvent) => (
    (dispatch: DispatchType) => dispatch({
        type: actionTypes.ADD_EVENT,
        payload: event
    }))

export const updateEvents = () => {
    return async (dispatch: DispatchType) => {
        const response = axios.get(`http://localhost:3001/`)
            .then((res: any) => {
                console.log("updateEvents", res.data)
                return dispatch({
                    type: actionTypes.UPDATE_EVENTS,
                    payload: res.data,
                })
            }
            )
    }
}
