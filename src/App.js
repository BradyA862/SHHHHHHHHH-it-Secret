import {useDispatch, useSelector} from "react-redux";
import Role from "./components/Role";
import AddProcess from "./components/AddProcess";
import ListProcesses from "./components/ListProcesses";
import EditProcess from "./components/EditProcess";


function App({
                 _useSelector = useSelector,
                 _useDispatch = useDispatch,
                 RoleI = Role,
                 AddProcessI = AddProcess,
                 ListProcessesI = ListProcesses,
                 EditProcessI = EditProcess
             }) {
    const editor = _useSelector(state => state.editorReducer.editor)
    const processToEdit = _useSelector(state => state.editorReducer.processToEdit)


    if (editor === true) {
        if (processToEdit)
            return <>
                  <EditProcessI process={processToEdit}/>
            </>
        return <>
            <ListProcessesI/>
        </>
    }
    else if (editor === false) {
        return <h1>follower</h1>
    }
    else {
        return <RoleI/>
    }


}


export default App;