import editorReducer, {
    ADD_PROCESS,
    ADD_PROCESS_FAILURE,
    ADD_PROCESS_START,
    ADD_PROCESS_SUCCESS,
    addProcessInit,
    BOOLEAN,
    CANCEL_EDIT, DELETE_PROCESS_FAILURE,
    DELETE_PROCESS_START,
    DELETE_PROCESS_SUCCESS, deleteProcessInit,
    EDIT_FAILURE,
    EDIT_START,
    EDIT_SUCCESS,
    editInit,
    EDITOR,
    EDITOR_LOGOUT,
    getList,
    LIST_FAILURE,
    LIST_START,
    LIST_SUCCESS,
    MULT_CHOICE,
    SET_EDIT,
    SET_PROCESS,
    TEXT
} from "./editor-reducer";

/** init state **/

it('should start with editor null', function () {
    const state = editorReducer()
    expect(state.editor).toBeNull()
});

it('should start with addStageProcess null', function () {
    const state = editorReducer()
    expect(state.addStageProcess).toBeNull()
});

it('should start with addBooleanStagePending false', function () {
    const state = editorReducer()
    expect(state.addBooleanStagePending).toBe(false)
});

it('should start with editPending false', function () {
    const state = editorReducer()
    expect(state.editPending).toBe(false)
});

it('should start with listPending false', function () {
    const state = editorReducer()
    expect(state.listPending).toBe(false)
});

it('should start with addProcessPending false', function () {
    const state = editorReducer()
    expect(state.addProcessPending).toBe(false)
});

it('should start with processToAdd null', function () {
    const state = editorReducer()
    expect(state.processToAdd).toBeNull()
});

it('should start with processes empty', function () {
    const state = editorReducer()
    expect(state.processes.length).toBe(0)
});

it('should start with processToEdit null', function () {
    const state = editorReducer()
    expect(state.processToEdit).toBeNull()
});

it('should start with editedProcess null', function () {
    const state = editorReducer()
    expect(state.editedProcess).toBeNull()
});

it('should start with editStagePending false', function () {
    const state = editorReducer()
    expect(state.editStagePending).toBe(false)
});

it('should start with stageToEdit null', function () {
    const state = editorReducer()
    expect(state.stageToEdit).toBeNull()
});

it('should start with editedStage null', function () {
    const state = editorReducer()
    expect(state.editedStage).toBeNull()
});
/** switch **/

it('should set editor true when EDITOR called', function () {
    const initialState = editorReducer()
    const state = editorReducer(initialState, {type: EDITOR})
    expect(state.editor).toBe(true)
});

it('should set editor to false on EDITOR_LOGOUT', function () {
    const initialState = editorReducer()
    initialState.editor = true
    const state = editorReducer(initialState, {type: EDITOR_LOGOUT})
    expect(state.editor).toBe(false)

});

it('should set process when ADD_PROCESS', function () {
    const title = {title: "some title"}
    const initialState = editorReducer()
    const state = editorReducer(initialState, {type: ADD_PROCESS, payload: title})
    expect(state.processToAdd).toStrictEqual({
        title: 'some title'
    })
});

it('should set processToEdit when SET_PROCESS', function () {
    const title = {title: "some title"}
    const initialState = editorReducer()
    const state = editorReducer(initialState, {type: SET_PROCESS, payload: title})
    expect(state.processToEdit).toStrictEqual({
        title: "some title",
    })
});

it('should set editedProcess when EDIT_PROCESS', function () {
    const title = {title: "some title"}
    const initialState = editorReducer()
    const state = editorReducer(initialState, {type: SET_EDIT, payload: title})
    expect(state.editedProcess).toStrictEqual({
        title: 'some title'
    })
});

it('should set editPending to true when EDIT_START', function () {
    const initialState = editorReducer()
    const state = editorReducer(initialState, {type: EDIT_START})
    expect(state.editPending).toBe(true)
});

it('should set editPending to false when EDIT_FAILURE', function () {
    const initialState = editorReducer()
    initialState.editPending = true
    const state = editorReducer(initialState, {type: EDIT_FAILURE})
    expect(state.editPending).toBe(false)
});

it('should set processToEdit and editedProcess to null when CANCEL_EDIT called', function () {
    const initialState = editorReducer()
    initialState.processToEdit = "process"
    initialState.editedProcess = "edit"
    const state = editorReducer(initialState, {type: CANCEL_EDIT})
    expect(state.processToEdit).toBeNull()
    expect(state.editedProcess).toBeNull()
});


/** fetch **/

it('should dispatch ADD_PROCESS_START then ADD_PROCESS_FAILURE when addProcessInit w/ bad title', async function () {
    const title = 'some title'
    const url = `http://localhost:8080/createProcess?title=${title}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({ok: false}))
    }
    const dispatch = jest.fn()
    const state = {editorReducer: {
        processToAdd: {title: 'some title'},
        }}
    const getState = () => state
    await addProcessInit(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: ADD_PROCESS_START})
    expect(dispatch).toHaveBeenCalledWith({type: ADD_PROCESS_FAILURE})
});

it('should dispatch ADD_PROCESS_START then ADD_PROCESS_SUCCESS when addProcessInit w/ good title', async function () {
    const title = 'some title'
    const url = `http://localhost:8080/createProcess?title=${title}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res(title))
        }))
    }
    const dispatch = jest.fn()
    const state = {editorReducer: {
            processToAdd: {title: 'some title'},
            }}
    const getState = () => state
    await addProcessInit(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: ADD_PROCESS_START})
    expect(dispatch).toHaveBeenCalledWith({type: ADD_PROCESS_SUCCESS})
});

it('should dispatch LIST_START then LIST_SUCCESS when getList', async function () {
    const list = ['list1', 'list2']
    const url = `http://localhost:8080/getList`
    const state = editorReducer(undefined, {type: LIST_SUCCESS, payload: list})
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res(list))
        }))
    }

    const dispatch = jest.fn()
    await getList(mockFetch)(dispatch)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: LIST_START})
    expect(dispatch).toHaveBeenCalledWith({type: LIST_SUCCESS, payload: list})
    expect(state.processes).toBe(list)
});

it('should dispatch LIST_START then LIST_FAILURE when getList w/ error', async function () {
    const list = ['list1', 'list2']
    const url = `http://localhost:8080/getList`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false,
        }))
    }
    const dispatch = jest.fn()
    await getList(mockFetch)(dispatch)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: LIST_START})
    expect(dispatch).toHaveBeenCalledWith({type: LIST_FAILURE})
});

it('should dispatch EDIT_START then EDIT_FAILURE when editInit w/ error', async function () {
    const title = "old"
    const edit = "new"
    const url = `http://localhost:8080/editProcess?title=${title}&edit=${edit}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false,
        }))
    }
    const dispatch = jest.fn()
    const state = {
        editorReducer: {
            processToEdit: {title: title},
            editedProcess: {title: edit}
        }
    }
    const getState = () => state
    await editInit(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: EDIT_START})
    expect(dispatch).toHaveBeenCalledWith({type: EDIT_FAILURE})
});

it('should dispatch EDIT_START then EDIT_SUCCESS when editInit', async function () {
    const title = "old"
    const edit = "new"
    const url = `http://localhost:8080/editProcess?title=${title}&edit=${edit}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
        }))
    }
    const dispatch = jest.fn()
    const state = {
        editorReducer: {
            processToEdit: {title: title},
            editedProcess: {title: edit}
        }
    }
    const getState = () => state
    await editInit(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: EDIT_START})
    expect(dispatch).toHaveBeenCalledWith({type: EDIT_SUCCESS})
});

it('should dispatch DELETE_PROCESS_START then DELETE_PROCESS_FAILURE when deleteProcessInit w/ error', async function () {
    const id = 2
    const url = `http://localhost:8080/deleteProcess?id=${id}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: false,
        }))
    }
    const dispatch = jest.fn()
    const state = {
        editorReducer: {
            processToDelete: {id: 2, title: 'hi', stages: []}
        }
    }
    const getState = () => state
    await deleteProcessInit(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: DELETE_PROCESS_START})
    expect(dispatch).toHaveBeenCalledWith({type: DELETE_PROCESS_FAILURE})
});

it('should dispatch DELETE_PROCESS_START then DELETE_PROCESS_SUCCESS when deleteProcessInit', async function () {
    const id = 2
    const url = `http://localhost:8080/deleteProcess?id=${id}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
        }))
    }
    const dispatch = jest.fn()
    const state = {
        editorReducer: {
            processToDelete: {id: 2, title: 'hi', stages: []}
        }
    }
    const getState = () => state
    await deleteProcessInit(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: DELETE_PROCESS_START})
    expect(dispatch).toHaveBeenCalledWith({type: DELETE_PROCESS_SUCCESS})
});