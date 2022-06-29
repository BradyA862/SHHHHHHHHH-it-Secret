import {useSelector} from "react-redux";
import ProcessResponse from "./ProcessResponse";
import ListProcesses from "../ListProcesses";


export default function Follower({
                                     _useSelector = useSelector,
                                     ProcessResponseX = ProcessResponse,
                                     ListProcessesX = ListProcesses
                                 }) {

    const inProcess = _useSelector(state => state.followerReducer.inProcess)

    if (inProcess) {
        return <ProcessResponseX/>
    }

    else {
        return <ListProcessesX/>
    }

}