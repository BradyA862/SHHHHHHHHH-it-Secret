import {useDispatch, useSelector} from "react-redux";
import StaticResponse from "./StaticResponse";
import {Button} from "react-bootstrap";
import {CANCEL_VIEW_RESP} from "../../modules/follower-reducer";

export default function ViewResponses({
                                          _useSelector = useSelector,
                                          _useDispatch = useDispatch,
                                          StaticResponseX = StaticResponse
}) {
    const dispatch = _useDispatch()

    const responses = _useSelector(state => state.followerReducer.responses)

    return <div>
        {responses.map(
            (staticResponse, index) => <div key={index}>
                <StaticResponseX staticResponse={staticResponse}/>
                </div>)
        }
        <Button onClick={() => dispatch({type: CANCEL_VIEW_RESP})}>Back</Button>
    </div>
}