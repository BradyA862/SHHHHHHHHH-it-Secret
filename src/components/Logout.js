import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {EDITOR_LOGOUT} from "../modules/editor-reducer";
import {FOLLOWER_LOGOUT} from "../modules/follower-reducer";

export default function Logout({_useDispatch = useDispatch}) {

    const dispatch = _useDispatch()

    function handleLogout() {
        dispatch({type: EDITOR_LOGOUT})
        dispatch({type: FOLLOWER_LOGOUT})
    }

    return <Button onClick={handleLogout}>Logout</Button>
}