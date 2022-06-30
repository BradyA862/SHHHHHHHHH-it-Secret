import {useSelector} from "react-redux";
import ListProcesses from "../ListProcesses";
import EditProcess from "../EditProcess";
import Logout from "../Logout";
import AddStage from "../Stages/AddStage";
import EditorHeader from "./EditorHeader";
import ViewResponses from "./ViewResponses";


export default function Editor({
                                   _useSelector = useSelector,
                                   ListProcessesI = ListProcesses,
                                   EditProcessI = EditProcess,
                                   LogoutI = Logout,
                                   AddStageI = AddStage,
                                   EditorHeaderX = EditorHeader,
                                   ViewResponsesX = ViewResponses
                               }) {

    const processToEdit = _useSelector(state => state.editorReducer.processToEdit)
    const stageToAdd = _useSelector(state => state.editorReducer.addStageProcess)
    const viewingResp = _useSelector(state => state.followerReducer.viewingResp)

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
    if (viewingResp) {
        return <div className='d-flex justify-content-center'>
            <ViewResponsesX/>
        </div>
    }
    // if (stageToEdit) {
    //     return <>
    //
    //     </>
    // }
    return <div>
        <div className='d-flex justify-content-center'>
            <EditorHeaderX/>

        </div>
        <div className='d-flex justify-content-center'>
            <ListProcessesI/>
        </div>
    </div>


}