import {useSelector} from "react-redux";
import ListProcesses from "../ListProcesses";
import EditProcess from "../EditProcess";
import Logout from "../Logout";
import AddStage from "../Stages/AddStage";
import EditorHeader from "./EditorHeader";


export default function Editor({
                                   _useSelector = useSelector,
                                   ListProcessesI = ListProcesses,
                                   EditProcessI = EditProcess,
                                   LogoutI = Logout,
                                   AddStageI = AddStage,
                                   EditorHeaderX = EditorHeader
                               }) {

    const processToEdit = _useSelector(state => state.editorReducer.processToEdit)
    const stageToAdd = _useSelector(state => state.editorReducer.addStageProcess)
    const stageToEdit = _useSelector(state => state.editorReducer.stageToEdit)

    if (stageToAdd === true) {
        return <>
            <AddStageI/>
        </>
    }
    if (processToEdit) {
        return <>
            <EditProcessI process={processToEdit}/>
        </>
    }
    if (stageToEdit) {
        return <>

        </>
    }
    return <>
        <EditorHeaderX/>
        <ListProcessesI/>
        <LogoutI/>
        </>


}