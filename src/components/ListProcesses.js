import {useDispatch, useSelector} from "react-redux";
import Process from "./Process";
import AddProcess from "./AddProcess";
import {Button, Col} from "react-bootstrap";
import {getList} from "../modules/editor-reducer";
// import {getList} from "../modules/editor-reducer";

export default function ListProcesses({
                                          _useSelector = useSelector,
                                          ProcessI = Process,
                                          AddProcessI = AddProcess,
                                          _useDispatch = useDispatch}) {

    const dispatch = _useDispatch()
    const processes = _useSelector(state => state.editorReducer.processes)
    const processToAdd = _useSelector(state => state.editorReducer.processToAdd)

    function updateList(event) {
        event.preventDefault()
        dispatch(getList())
        console.log(processes)
    }

    return <div>
        {<Col><AddProcessI/></Col>}
        {<Col>
            <Button onClick={updateList}>Update List</Button>
        </Col>}
        {processes.map(
            (staticProcess, index) => <div key={index}>
                <ProcessI staticProcess={staticProcess}/>
            </div>)
        }
    </div>

}