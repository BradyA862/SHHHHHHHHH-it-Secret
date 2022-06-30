import {useSelector} from "react-redux";
import ProcessResponse from "./ProcessResponse";
import ListProcesses from "../ListProcesses";
import FollowerHeader from "./FollowerHeader";


export default function Follower({
                                     _useSelector = useSelector,
                                     ProcessResponseX = ProcessResponse,
                                     ListProcessesX = ListProcesses,
                                     FollowerHeaderX = FollowerHeader

                                 }) {

    const inProcess = _useSelector(state => state.followerReducer.inProcess)

    if (inProcess) {
        return <ProcessResponseX/>
    }

    else {
        return <div>
            <div className='d-flex justify-content-center'>
                <FollowerHeaderX/>
            </div>
            <div className='d-flex justify-content-center'>
                <ListProcessesX/>

            </div>
        </div>
    }

}