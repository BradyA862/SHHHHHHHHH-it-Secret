export const EDITOR = 'editor-reducer/EDITOR'
export const ADD_PROCESS = 'editor-reducer/ADD_PROCESS'
export const ADD_PROCESS_START = 'editor-reducer/ADD_PROCESS_START'
export const ADD_PROCESS_SUCCESS = 'editor-reducer/ADD_PROCESS_SUCCESS'
export const ADD_PROCESS_FAILURE = 'editor-reducer/ADD_PROCESS_FAILURE'
export const DELETE_PROCESS = 'editor-reducer/DELETE_PROCESS'
export const DELETE_PROCESS_START = 'editor-reducer/DELETE_PROCESS_START'
export const DELETE_PROCESS_SUCCESS = 'editor-reducer/DELETE_PROCESS_SUCCESS'
export const DELETE_PROCESS_FAILURE = 'editor-reducer/DELETE_PROCESS_FAILURE'
export const LIST_START = 'editor-reducer/LIST_START'
export const LIST_SUCCESS = 'editor-reducer/LIST_SUCCESS'
export const LIST_FAILURE = 'editor-reducer/LIST_FAILURE'
export const SET_PROCESS = 'editor-reducer/SET_PROCESS'
export const CANCEL_EDIT = 'editor-reducer/CANCEL_EDIT'
export const SET_EDIT = 'editor-reducer/SET_EDIT'
export const EDIT_START = 'editor-reducer/EDIT_START'
export const EDIT_SUCCESS = 'editor-reducer/EDIT_SUCCESS'
export const EDIT_FAILURE = 'editor-reducer/EDIT_FAILURE'
export const EDITOR_LOGOUT = 'editor-reducer/EDITOR_LOGOUT'
export const ADD_BOOLEAN_STAGE = 'editor-reducer/ADD_BOOLEAN_STAGE'
export const SET_STAGE = 'editor-reducer/SET_STAGE'
export const CANCEL_EDIT_STAGE = 'editor-reducer/CANCEL_EDIT_STAGE'
export const SET_EDIT_STAGE = 'editor-reducer/SET_EDIT_STAGE'
export const EDIT_STAGE_START = 'editor-reducer/EDIT_STAGE_START'
export const EDIT_STAGE_SUCCESS = 'editor-reducer/EDIT_STAGE_SUCCESS'
export const EDIT_STAGE_FAILURE = 'editor-reducer/EDIT_STAGE_FAILURE'
export const PROCESS_STAGE = 'editor-reducer/PROCESS_STAGE'
export const BOOLEAN_STAGE = 'editor-reducer/BOOLEAN_STAGE'
export const TEXT_STAGE = 'editor-reducer/TEXT_STAGE'
export const MULT_STAGE = 'editor-reducer/MULT_STAGE'
export const CANCEL_STAGE = 'editor-reducer/CANCEL_STAGE'
export const ADD_STAGE_START = 'editor-reducer/ADD_STAGE_START'
export const ADD_STAGE_SUCCESS = 'editor-reducer/ADD_STAGE_SUCCESS'
export const ADD_STAGE_FAILURE = 'editor-reducer/ADD_STAGE_FAILURE'
export const ADD_MULT_STAGE = 'editor-reducer/ADD_MULT_STAGE'
export const ADD_TEXT_STAGE = 'editor-reducer/ADD_TEXT_STAGE'
//export const  = 'editor-reducer/'
//export const  = 'editor-reducer/'
//export const  = 'editor-reducer/'
//export const  = 'editor-reducer/'
//export const  = 'editor-reducer/'
//export const  = 'editor-reducer/'

const initialState = {
    processes: [],
    processToAdd: null,
    stageToAdd: null,
    addProcessPending: false,
    addStagePending: false,
    editor: null,
    listPending: false,
    deletePending: false,
    processToDelete: null,
    processToEdit: null,
    editedProcess: null,
    editPending: false,
    stageToEdit: null,
    editedStage: null,
    editStagePending: false,
    addStageProcess: null,
    addBoolean: false,
    addText: false,
    addMult: false
}

export default function editorReducer(state = initialState, action) {
    switch (action?.type) {

        case EDITOR:
            return {
                ...state,
                editor: true
            }

        case EDITOR_LOGOUT:
            return {
                ...state,
                editor: false
            }

            /** ADD **/
        case ADD_PROCESS:
            return {
                ...state,
                processToAdd: {
                    title: action.payload.title
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

                processToAdd: null
            }

        case ADD_PROCESS_FAILURE:
            return {
                ...state,
                addProcessPending: false,
                processToAdd: null
            }

        /**ADD STAGE**/

        case ADD_BOOLEAN_STAGE:
            return {
                ...state,
                stageToAdd: {
                    prompt: action.payload.prompt,
                    answer1: action.payload.answer1,
                    answer2: action.payload.answer2
                }

            }

        case ADD_MULT_STAGE:
            return {
                ...state,
                stageToAdd: {
                    prompt: action.payload.prompt,
                    answer1: action.payload.answer1,
                    answer2: action.payload.answer2,
                    answer3: action.payload.answer3,
                    answer4: action.payload.answer4
                }

            }

        case ADD_TEXT_STAGE:
            return {
                ...state,
                stageToAdd: {
                    prompt: action.payload.prompt
                }

            }

        case CANCEL_STAGE:
            return {
                ...state,
                addBoolean: false,
                addText: false,
                addMult: false
            }

        case BOOLEAN_STAGE:
            return {
                ...state,
                addBoolean: true,
                addText: false,
                addMult: false
            }

        case TEXT_STAGE:
            return {
                ...state,
                addBoolean: false,
                addText: true,
                addMult: false
            }

        case MULT_STAGE:
            return {
                ...state,
                addBoolean: false,
                addText: false,
                addMult: true
            }

        case ADD_STAGE_START:
            return {
                ...state,
                addStagePending: true
            }

        case ADD_STAGE_SUCCESS:
            return {
                ...state,
                addStagePending: false,
                addStageProcess: null,
                addBoolean: false,
                addText: false,
                addMult: false,
            }

        case ADD_STAGE_FAILURE:
            return {
                ...state,
                addStagePending: false,
                stageToAdd: null
            }

        /** LIST **/
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

        /** DELETE **/
        case DELETE_PROCESS:
            return {
                ...state,
                processToDelete: action.payload
            }

        case DELETE_PROCESS_START:
            return {
                ...state,
                deletePending: true
            }

        case DELETE_PROCESS_SUCCESS:
            return {
                ...state,
                deletePending: false,
                processToDelete: null
            }

        case DELETE_PROCESS_FAILURE:
            return {
                ...state,
                deletePending: false,
                processToDelete: null
            }

        /** EDIT **/

        case SET_PROCESS:
            return {
                ...state,
                processToEdit: action.payload
            }

        case SET_EDIT:
            return {
                ...state,
                editedProcess: action.payload
            }

        case EDIT_START:
            return {
                ...state,
                editPending: true
            }

        case EDIT_FAILURE:
            return {
                ...state,
                editPending: false
            }

        case EDIT_SUCCESS:
            return {
                ...state,
                editPending: false,
                processToEdit: null,
                editedProcess: null
            }

        case CANCEL_EDIT:
            return {
                ...state,
                processToEdit: null,
                editedProcess: null
            }

        case PROCESS_STAGE:
            return {
                ...state,
                addStageProcess: true
            }

        case EDIT_STAGE_START:
            return {

            }

        case EDIT_STAGE_SUCCESS:
            return {

            }

        case EDIT_STAGE_FAILURE:
            return {

            }

        case SET_STAGE:
            return {

            }

        case SET_EDIT_STAGE:
            return {

            }

        case CANCEL_EDIT_STAGE:
            return {

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
            dispatch({type: ADD_PROCESS_SUCCESS})
        }
        else {
            dispatch({type: ADD_PROCESS_FAILURE})
        }
    }
}

export function addBooleanInit(_fetch = fetch) {
    return async function addBooleanSideEffect(dispatch, getState) {
        dispatch({type: ADD_STAGE_START})
        const id = getState().editorReducer.processToEdit.id
        const prompt = getState().editorReducer.stageToAdd.prompt
        const answer1 = getState().editorReducer.stageToAdd.answer1
        const answer2 = getState().editorReducer.stageToAdd.answer2
        const url = `http://localhost:8080/addBooleanStage?id=${id}&booleanQuestion=${prompt}&answer1=${answer1}&answer2=${answer2}`
        const response = await _fetch(url)

        if (response.ok) {
            dispatch({type: ADD_STAGE_SUCCESS})
        }
        else {
            dispatch({type: ADD_STAGE_FAILURE})
        }
    }
}

export function addTextStageInit(_fetch = fetch) {
    return async function addTextSideEffect(dispatch, getState) {
        dispatch({type: ADD_STAGE_START})
        const id = getState().editorReducer.processToEdit.id
        const prompt = getState().editorReducer.stageToAdd.prompt
        const url = `http://localhost:8080/addTextStage?id=${id}&textQuestion=${prompt}`
        const response = await _fetch(url)

        if (response.ok) {
            dispatch({type: ADD_STAGE_SUCCESS})
        }
        else {
            dispatch({type: ADD_STAGE_FAILURE})
        }
    }
}

export function addMultInit(_fetch = fetch) {
    return async function addMultSideEffect(dispatch, getState) {
        dispatch({type: ADD_STAGE_START})
        const id = getState().editorReducer.processToEdit.id
        const prompt = getState().editorReducer.stageToAdd.prompt
        const answer1 = getState().editorReducer.stageToAdd.answer1
        const answer2 = getState().editorReducer.stageToAdd.answer2
        const answer3 = getState().editorReducer.stageToAdd.answer3
        const answer4 = getState().editorReducer.stageToAdd.answer4
        const url = `http://localhost:8080/addMultStage?id=${id}&multChoiceQuestion=${prompt}
        &answer1=${answer1}&answer2=${answer2}&answer3=${answer3}&answer4=${answer4}`
        const response = await _fetch(url)

        if (response.ok) {
            dispatch({type: ADD_STAGE_SUCCESS})
        }
        else {
            dispatch({type: ADD_STAGE_FAILURE})
        }
    }
}

export function getList(_fetch = fetch) {
    return async function getListSideEffects(dispatch) {
        dispatch({type: LIST_START})
        const url = `http://localhost:8080/getList`
        const response = await _fetch(url)

        if (response.ok) {
            const list = await response.json()
            dispatch({type: LIST_SUCCESS, payload: list})
        }
        else dispatch({type: LIST_FAILURE})
    }
}

// tested
export function deleteProcessInit(_fetch = fetch) {
    return async function deleteSideEffects(dispatch, getState) {
        dispatch({type: DELETE_PROCESS_START})
        const id = getState().editorReducer.processToDelete.id
        const url = `http://localhost:8080/deleteProcess?id=${id}`
        const response = await _fetch(url)

        if (response.ok) {
            dispatch({type: DELETE_PROCESS_SUCCESS})
        }
        else {
            dispatch({type: DELETE_PROCESS_FAILURE})
        }
    }
}

// tested
export function editInit(_fetch = fetch) {
    return async function editSideEffect(dispatch, getState) {
        dispatch({type: EDIT_START})
        const title = getState().editorReducer.processToEdit.title
        const edit = getState().editorReducer.editedProcess.title
        const url = `http://localhost:8080/editProcess?title=${title}&edit=${edit}`
        const response = await _fetch(url)

        if (response.ok) {
            dispatch({type: EDIT_SUCCESS})
        }
        else {
            dispatch({type: EDIT_FAILURE})
        }
    }
}

export function editBooleanStageInit(_fetch = fetch) {
    return async function editBooleanSideEffect(dispatch, getState) {
        dispatch({type: EDIT_START})
        const id = getState().editorReducer.stageToEdit.id
        const editPrompt = getState().editorReducer.edittedStage.prompt
        const editAnswer1 = getState().editorReducer.edittedStage.answer1
        const editAnswer2 = getState().editorReducer.edittedStage.answer2
        const url = `http://localhost:8080//editBooleanStage?id=${id}&editPrompt=${editPrompt}&editAnswer1=${editAnswer1}
        &editAnswer2=${editAnswer2}`
        const response = await _fetch(url)

        if (response.ok) {
            dispatch({type: EDIT_SUCCESS})
        }
        else {
            dispatch({type: EDIT_FAILURE})
        }
    }
}