import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {EDITOR} from "../modules/editor-reducer";


export default function Role({
                                 _useDispatch = useDispatch,
                             }) {
    const dispatch = _useDispatch()

    function handleEditor() {
        dispatch({type: EDITOR})
    }

    return <>
        <Button onClick={handleEditor}>Editor</Button>
        <Button>Follower</Button>
    </>
}