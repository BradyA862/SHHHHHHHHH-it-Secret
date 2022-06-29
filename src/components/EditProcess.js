import {Button, Card, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CANCEL_EDIT, editInit, PROCESS_STAGE, SET_EDIT} from "../modules/editor-reducer";
import StaticStage from "./Stages/StaticStage";


export default function EditProcess({
                                        _useSelector = useSelector,
                                        _useDispatch = useDispatch,
                                        StaticStageX = StaticStage

                                    }) {
    const dispatch = _useDispatch()
    const process = _useSelector(state => state.editorReducer.processToEdit)
    const stages = _useSelector(state => state.editorReducer.processToEdit.stages)

    function updateTitle(change) {
        dispatch({type: SET_EDIT, payload: change})
    }

    function handleApply(event) {
        event.preventDefault()
        dispatch(editInit())
    }

    function handleCancel(event) {
        event.preventDefault()
        dispatch({type: CANCEL_EDIT})
    }

    function handleAddStage() {
        dispatch({type: PROCESS_STAGE, payload: process})
    }


    return <Card>
        <Card.Header>
            <Form.Control type='input' placeholder='Title' defaultValue={process.title}
                          onChange={event => updateTitle({...process, title: event.target.value})}/>
        </Card.Header>
        <Card.Body>
            <Button onClick={handleAddStage}>Add Stage</Button>
            {stages.map(
                (staticStage, index) => <div key={index}>
                    <StaticStageX staticStage={staticStage}/>
                </div>)
            }
        </Card.Body>
        <Card.Footer>
            <Button title='Apply' onClick={handleApply}>Apply</Button>
            <Button title='Cancel' onClick={handleCancel}>Cancel</Button>
        </Card.Footer>
    </Card>

}