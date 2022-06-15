export const EDITOR = 'editor-reducer/EDITOR'
export const ADD_PROCESS = 'editor-reducer/ADD_PROCESS'
export const ADD_PROCESS_START = 'editor-reducer/ADD_PROCESS_START'
export const ADD_PROCESS_SUCCESS = 'editor-reducer/ADD_PROCESS_SUCCESS'
export const ADD_PROCESS_FAILURE = 'editor-reducer/ADD_PROCESS_FAILURE'
export const DELETE_PROCESS = 'editor-reducer/DELETE_PROCESS'
export const DELETE_PROCESS_START = 'editor-reducer/DELETE_PROCESS_START'
export const DELETE_PROCESS_SUCCESS = 'editor-reducer/DELETE_PROCESS_SUCCESS'
export const DELETE_PROCESS_FAILURE = 'editor-reducer/DELETE_PROCESS_FAILURE'
export const EDIT_PROCESS = 'editor-reducer/EDIT_PROCESS'
export const EDIT_PROCESS_START = 'editor-reducer/EDIT_PROCESS_START'
export const EDIT_PROCESS_SUCCESS = 'editor-reducer/EDIT_PROCESS_SUCCESS'
export const EDIT_PROCESS_FAILURE = 'editor-reducer/EDIT_PROCESS_FAILURE'
export const LIST_START = 'editor-reducer/LIST_START'
export const LIST_SUCCESS = 'editor-reducer/LIST_SUCCESS'
export const LIST_FAILURE = 'editor-reducer/LIST_FAILURE'
export const SET_PROCESS = 'editor-reducer/SET_PROCESS'
export const CANCEL_EDIT = 'editor-reducer/CANCEL_EDIT'
// export const  = 'editor-reducer/'

const initialState = {
    processes: [],
    processToAdd: null,
    addProcessPending: false,
    editor: null,
    processToEdit: null,
    processEdit: null,
    editProcessPending: false,
    listPending: false

}

export default function editorReducer(state = initialState, action) {
    switch (action?.type) {

        case EDITOR:
            return {
                ...state,
                editor: true
            }

        case ADD_PROCESS:
            return {
                ...state,
                processToAdd: {
                    title: action.payload
                }
            }

        case ADD_PROCESS_START:
            return {
                ...state,
                addProcessPending: true
            }

        case ADD_PROCESS_SUCCESS:
            return {
                ...state,
                addProcessPending: false,
                processes: [...state.processes, {...action.payload}],
                processToAdd: null
            }

        case ADD_PROCESS_FAILURE:
            return {
                ...state,
                addProcessPending: false,
                processToAdd: null
            }

        case SET_PROCESS:
            return {
                ...state,
                processToEdit: action.payload
            }

        case CANCEL_EDIT:
            return {
                ...state,
                processToEdit: null
            }

        case EDIT_PROCESS:
            return {
                ...state,
                processEdit: action.payload
            }

        case EDIT_PROCESS_START:
            return {
                ...state,
                editProcessPending: true
            }

        case EDIT_PROCESS_SUCCESS:
            return {
                ...state,
                processes: [...state.processes, {...action.payload}]
            }

        case EDIT_PROCESS_FAILURE:
            return {
                ...state,
                editProcessPending: false
            }

        case LIST_START:
            return {
                ...state,
                listPending: true
            }

        case LIST_SUCCESS:
            return {
                ...state,
                processes: action.payload,
                listPending: false
            }

        case LIST_FAILURE:
            return {
                ...state,
                listPending: false
            }


        default:
            return {...state}
    }
}

export function addProcessInit(_fetch = fetch) {
    return async function addProcSideEffect(dispatch, getState) {
        dispatch({type: ADD_PROCESS_START})
        const title = getState().editorReducer.processToAdd.title
        const url = `http://localhost:8080/createProcess?title=${title}`
        const response = await _fetch(url)

        if (response.ok) {
            const process = await response.json()
            dispatch({type: ADD_PROCESS_SUCCESS, payload: process})
        }
        else {
            dispatch({type: ADD_PROCESS_FAILURE})
        }
    }
}

export function getList(_fetch = fetch) {
    return async function getListSideEffects(dispatch) {
        dispatch({type: LIST_START})
        const url = `http://localhost:8080/getList`
        const response = await _fetch(url)
        console.log(response)

        if (response.ok) {
            const list = await response.json()
            dispatch({type: LIST_SUCCESS, payload: list})
        }
        else dispatch({type: LIST_FAILURE})
    }
}

// TODO editing, test editing
export function editProcessInit(_fetch = fetch) {
    return async function editProcSideEffect(dispatch, getState) {
        dispatch({type: EDIT_PROCESS_START})
        const title = getState().editorReducer.processToEdit.title
        const edit = getState().editorReducer.processEdit.title
        const url = `http://localhost:8080/editProcess?title=${title}&edit=${edit}`
        const response = await _fetch(url)
        console.log(url)

        if (response.ok) {
            const process = await response.json()
            console.log(process)

            dispatch({type: EDIT_PROCESS_SUCCESS, payload: process})
        }
        else {
            dispatch({type: EDIT_PROCESS_FAILURE})
        }
    }
}