import {Button, Card, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {EDITOR, getList} from "../modules/editor-reducer";
import {FOLLOWER} from "../modules/follower-reducer";


export default function Role({
                                 _useDispatch = useDispatch,
                             }) {
    const dispatch = _useDispatch()

    function handleEditor() {
        dispatch({type: EDITOR})
        dispatch(getList())

    }

    function handleFollower() {
        dispatch({type: FOLLOWER})
        dispatch(getList())

    }

    return <Card style={{borderWidth: 3}}>
        <Card.Body>Choose A Role</Card.Body>
        <Row className={'p-3'}>
            <Button onClick={handleEditor}>Editor</Button>
        </Row>
        <Row className={'p-3'}>
            <Button onClick={handleFollower}>Follower</Button>
        </Row>
    </Card>
}