import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {SET_PROCESS} from "../modules/editor-reducer";

export default function Process({
                                    staticProcess,
                                    _useDispatch = useDispatch,
                                }) {
    const dispatch = _useDispatch()

    function setProcess() {
        dispatch({type: SET_PROCESS, payload: staticProcess})
    }



    return <Card>
        <Card.Header>Title: {staticProcess.title}</Card.Header>
        <Card.Footer>
            <Button onClick={setProcess}>Edit</Button>
            <Button>Delete</Button>
        </Card.Footer>
    </Card>
}