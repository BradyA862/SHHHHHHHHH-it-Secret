import {Button, Card, Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_PROCESS, deleteProcessInit, SET_PROCESS} from "../modules/editor-reducer";
import {DO_PROCESS} from "../modules/follower-reducer";

export default function Process({
                                    staticProcess,
                                    _useDispatch = useDispatch,
                                    _useSelector = useSelector
                                }) {
    const editor = _useSelector(state => state.editorReducer.editor)
    const dispatch = _useDispatch()

    function setProcess() {
        dispatch({type: SET_PROCESS, payload: staticProcess})
    }

    function doProcess() {
        dispatch({type: DO_PROCESS, payload: staticProcess})
    }

    function deleteProcess(event) {
        event.preventDefault()
        dispatch({type: DELETE_PROCESS, payload: staticProcess})
        dispatch(deleteProcessInit())
    }

    if (editor === true) {
        return <Card style={{borderWidth: 2, width: 1000}} className='m-2'>
            <Card.Header>Title: {staticProcess.title}</Card.Header>
            <Card.Footer>
                <Row>
                    <Col>
                        <Button onClick={setProcess}>Edit</Button>
                    </Col>
                    <Col>
                        <Button onClick={deleteProcess}>Delete</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    }
    else {
        return <Card style={{borderWidth: 2, width: 1000}} className='m-2'>
            <Card.Header>Title: {staticProcess.title}</Card.Header>
            <Button onClick={doProcess}>Start</Button>
        </Card>
    }


}