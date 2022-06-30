export const FOLLOWER = 'follower-reducer/FOLLOWER'
export const FOLLOWER_LOGOUT = 'follower-reducer/FOLLOWER_LOGOUT'
export const DO_PROCESS = 'follower-reducer/DO_PROCESS'
export const CANCEL_DO_PROCESS = 'follower-reducer/CANCEL_DO_PROCESS'
export const ADD_RESPONSE_START = 'follower-reducer/ADD_RESPONSE_START'
export const ADD_RESPONSE_SUCCESS = 'follower-reducer/ADD_RESPONSE_SUCCESS'
export const ADD_RESPONSE_FAILURE = 'follower-reducer/ADD_RESPONSE_FAILURE'
export const EDIT_INPUT = 'follower-reducer/EDIT_INPUT'
export const GET_RESPONSES_START = 'follower-reducer/GET_RESPONSES_START'
export const GET_RESPONSES_SUCCESS = 'follower-reducer/GET_RESPONSES_SUCCESS'
export const GET_RESPONSES_FAILURE = 'follower-reducer/GET_RESPONSES_FAILURE'
export const VIEW_RESP = 'follower-reducer/VIEW_RESP'
export const CANCEL_VIEW_RESP = 'follower-reducer/CANCEL_VIEW_RESP'

const initialState = {
    follower: false,
    processToComplete: null,
    inProcess: false,
    responseToAdd: null,
    addResponsePending: false,
    getResponsesPending: false,
    viewingResp: false,
    responses: []
}

export default function followerReducer(state = initialState, action) {
    switch (action?.type) {

        case FOLLOWER:
            return {
                ...state,
                follower: true
            }

        case FOLLOWER_LOGOUT:
            return {
                ...state,
                follower: false
            }

        case DO_PROCESS:
            return {
                ...state,
                processToComplete: action.payload,
                inProcess: true
            }

        case CANCEL_DO_PROCESS:
            return {
                ...state,
                processToComplete: null,
                inProcess: false
            }

        case EDIT_INPUT:
            return {
                ...state,
                responseToAdd: action.responseToAdd
            }

        case ADD_RESPONSE_START:
            return {
                ...state,
                addResponsePending: true
            }

        case ADD_RESPONSE_SUCCESS:
            return {
                ...state,
                addResponsePending: true
            }

        case ADD_RESPONSE_FAILURE:
            return {
                ...state,
                addResponsePending: true
            }

        case GET_RESPONSES_START:
            return {
                ...state,
                getResponsesPending: true
            }

        case GET_RESPONSES_SUCCESS:
            return {
                ...state,
                getResponsesPending: false,
                responses: action.payload
            }

        case GET_RESPONSES_FAILURE:
            return {
                ...state,
                getResponsesPending: false
            }

        case VIEW_RESP:
            return {
                ...state,
                viewingResp: true
            }

        case CANCEL_VIEW_RESP:
            return {
                ...state,
                viewingResp: false
            }


        default:
            return {...state}
    }
}

export function addResponseInit(_fetch = fetch) {
    return async function addResponseSideEffect(dispatch, getState) {
        dispatch({type: ADD_RESPONSE_START})
        const processId = getState().followerReducer.responseToAdd.processId
        const stageId = getState().followerReducer.responseToAdd.stageId
        const processTitle = getState().followerReducer.responseToAdd.processTitle
        const prompt = getState().followerReducer.responseToAdd.prompt
        const responseText = getState().followerReducer.responseToAdd.responseText
        const url = `http://localhost:8081/addResponse?processId=${processId}&stageId=${stageId}
        &processTitle=${processTitle}&prompt=${prompt}&response=${responseText}`
        const response = await _fetch(url)

        if (response.ok) {
            dispatch({type: ADD_RESPONSE_SUCCESS})
        }
        else {
            dispatch({type: ADD_RESPONSE_FAILURE})
        }
    }
}

export function getResponsesInit(_fetch = fetch) {
    return async function getRespSE(dispatch) {
        dispatch({type: GET_RESPONSES_START})
        const url = `http://localhost:8081/getResponses`
        const response = await _fetch(url)

        if (response.ok) {
            const list = await response.json()
            dispatch({type: GET_RESPONSES_SUCCESS, payload: list})
        }
        else dispatch({type: GET_RESPONSES_FAILURE})
    }
}