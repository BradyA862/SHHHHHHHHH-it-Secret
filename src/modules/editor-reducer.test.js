import editorReducer, {
    ADD_PROCESS,
    ADD_PROCESS_FAILURE,
    ADD_PROCESS_START,
    ADD_PROCESS_SUCCESS,
    addProcessInit, EDIT_PROCESS, EDIT_PROCESS_START, EDIT_PROCESS_SUCCESS,
    EDITOR, editProcessInit, getList, LIST_FAILURE, LIST_START, LIST_SUCCESS, SET_PROCESS
} from "./editor-reducer";

/** init state **/

it('should start with editor null', function () {
    const state = editorReducer()
    expect(state.editor).toBeNull()
});

it('should start with listPending false', function () {
    const state = editorReducer()
    expect(state.listPending).toBe(false)

});

it('should start with editProcessPending false', function () {
    const state = editorReducer()
    expect(state.editProcessPending).toBe(false)
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

/** switch **/

it('should set editor true when EDITOR called', function () {
    const initialState = editorReducer()
    const state = editorReducer(initialState, {type: EDITOR})
    expect(state.editor).toBe(true)
});

it('should set process when ADD_PROCESS', function () {
    const title = "some title"
    const initialState = editorReducer()
    const state = editorReducer(initialState, {type: ADD_PROCESS, payload: title})
    expect(state.processToAdd).toStrictEqual({
        title: 'some title'
    })
});

it('should set processToEdit when SET_PROCESS is performed', function () {
    const process = 'some process'
    const state = editorReducer(undefined, {type: SET_PROCESS, payload: process})
    expect(state.processToEdit).toBe(process)
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
    const state = {editorReducer: {processToAdd: {title: 'some title'}}}
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
    const state = {editorReducer: {processToAdd: {title: title}}}
    const getState = () => state
    await addProcessInit(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: ADD_PROCESS_START})
    expect(dispatch).toHaveBeenCalledWith({type: ADD_PROCESS_SUCCESS, payload: title})
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

it('should dispatch EDIT_PROCESS_START then EDIT_PROCESS_SUCCESS when getList', async function () {
    const title = 'title'
    const edit = 'edit'
    const url = `http://localhost:8080/editProcess?title=${title}&edit=${edit}`
    let _url
    const mockFetch = (url) => {
        _url = url
        return new Promise(resolve => resolve({
            ok: true,
            json: () => new Promise(res => res(edit))
        }))
    }

    const dispatch = jest.fn()
    const state = {editorReducer:{
            processes: [{title: 'a'}],
            processToEdit: {title: title},
            processEdit: {title: edit}
    }}
    const getState = () => state
    await editProcessInit(mockFetch)(dispatch, getState)
    expect(_url).toBe(url)
    expect(dispatch).toHaveBeenCalledWith({type: EDIT_PROCESS_START})
    expect(dispatch).toHaveBeenCalledWith({type: EDIT_PROCESS_SUCCESS, payload: edit})
    expect(state.editorReducer.processes).toStrictEqual({
        title: 'edit'
    })
});

// it('should dispatch LIST_START then LIST_FAILURE when getList w/ error', async function () {
//     const list = ['list1', 'list2']
//     const url = `http://localhost:8080/getList`
//     let _url
//     const mockFetch = (url) => {
//         _url = url
//         return new Promise(resolve => resolve({
//             ok: false,
//         }))
//     }
//     const dispatch = jest.fn()
//     await getList(mockFetch)(dispatch)
//     expect(_url).toBe(url)
//     expect(dispatch).toHaveBeenCalledWith({type: LIST_START})
//     expect(dispatch).toHaveBeenCalledWith({type: LIST_FAILURE})
// });