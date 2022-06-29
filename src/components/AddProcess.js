import {useDispatch, useSelector} from "react-redux";
import {ADD_PROCESS, addProcessInit, getList} from "../modules/editor-reducer";
import {Button, Form} from "react-bootstrap";


export default function AddProcess({
                                       _useDispatch = useDispatch,
                                       _useSelector = useSelector
                                   }) {

    const dispatch = _useDispatch()
    const processToAdd = _useSelector(state => state.editorReducer.processToAdd)
    const addProcessPending = _useSelector(state => state.editorReducer.addProcessPending)


    function updateTitle(title) {
        dispatch({type: ADD_PROCESS, payload: {...processToAdd, title}})
    }


    function handleAddProcess(event) {
        event.preventDefault()
        dispatch(addProcessInit())
        dispatch(getList())
    }


        return <div>
            <Form onSubmit={handleAddProcess}>
                <Form.Control placeholder='title' onChange={event => updateTitle(event.target.value)}/>

                <Button type='submit' disabled={addProcessPending}>Add Process</Button>
            </Form>
        </div>






}