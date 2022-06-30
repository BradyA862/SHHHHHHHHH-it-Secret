import {useDispatch} from "react-redux";
import {Badge, Button, Col} from "react-bootstrap";
import {FOLLOWER_LOGOUT} from "../../modules/follower-reducer";

export default function FollowerHeader({_useDispatch = useDispatch}) {

    const dispatch = _useDispatch()

    return <div className='my-3 d-flex justify-content-between' style={{width: 1000}}>
        <Badge bg={'secondary'} className={'d-flex flex-column justify-content-center w-25'}>
            Welcome Follower
        </Badge>
        <Col xs='auto'>
            <Button variant={"outline-secondary"} onClick={() => dispatch({type: FOLLOWER_LOGOUT})}>
                Logout
            </Button>
        </Col>
    </div>
}