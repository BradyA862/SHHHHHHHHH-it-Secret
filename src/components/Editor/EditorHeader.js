import {Badge, Button, Col} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {EDITOR_LOGOUT, getList} from "../../modules/editor-reducer";

export default function EditorHeader({_useDispatch = useDispatch,}) {

    const dispatch = _useDispatch()

    function handleUpdate(event) {
        event.preventDefault()
        dispatch(getList())
    }


    return <div className='my-3 d-flex justify-content-between'>
        <Badge bg={'secondary'} className={'d-flex flex-column justify-content-center w-25'}>Welcome, Editor</Badge>
        <Button title='Update List' onClick={handleUpdate} variant={"outline-primary"}>Update List</Button>
        <Button title='View Completed' variant={"outline-primary"}>View Completed</Button>
        <Col xs='auto'><Button title='Logout' onClick={() => dispatch({type: EDITOR_LOGOUT})}
            variant={"outline-secondary"}>
            Logout</Button> </Col>
    </div>
}