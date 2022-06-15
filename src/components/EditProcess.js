import {Button, Card, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CANCEL_EDIT, EDIT_PROCESS, editProcessInit} from "../modules/editor-reducer";


export default function EditProcess({
                                        _useSelector = useSelector,
                                        _useDispatch = useDispatch,

                                    }) {
    const dispatch = _useDispatch()
    const process = _useSelector(state => state.editorReducer.processToEdit)

    function updateTitle(change) {
        dispatch({type: EDIT_PROCESS, payload: change})
    }

    function handleApply(event) {
        event.preventDefault()
        dispatch(editProcessInit())
    }

    function handleCancel(event) {
        event.preventDefault()
        dispatch({type: CANCEL_EDIT})
    }


    return <Card>
        <Card.Header>
            <Form.Control type='input' placeholder='Title' defaultValue={process.title}
                          onChange={event => updateTitle({...process, title: event.target.value})}/>
        </Card.Header>
        <Card.Footer>
            <Button title='Apply' onClick={handleApply}>Apply</Button>
            <Button title='Cancel' onClick={handleCancel}>Cancel</Button>
        </Card.Footer>
    </Card>

}