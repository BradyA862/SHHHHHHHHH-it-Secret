import {useSelector} from "react-redux";
import Process from "./Process";
import AddProcess from "./AddProcess";
import {Col} from "react-bootstrap";

export default function ListProcesses({
                                          _useSelector = useSelector,
                                          ProcessI = Process,
                                          AddProcessI = AddProcess,
                                      }) {

    const processes = _useSelector(state => state.editorReducer.processes)
    const editor = _useSelector(state => state.editorReducer.editor)

    // function updateList(event) {
    //     event.preventDefault()
    //     dispatch(getList())
    // }

    if (editor === true) {
        return <div>
            {<Col><AddProcessI/></Col>}
            {processes.map(
                (staticProcess, index) => <div key={index}>
                    <ProcessI staticProcess={staticProcess}/>
                </div>)
            }
        </div>
    } else {
        return <div>
            {processes.map(
                (staticProcess, index) => <div key={index}>
                    <ProcessI staticProcess={staticProcess}/>
                </div>)
            }
        </div>
    }
}