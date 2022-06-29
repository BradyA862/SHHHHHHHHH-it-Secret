import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import {BOOLEAN_STAGE, MULT_STAGE, TEXT_STAGE} from "../../modules/editor-reducer";
import AddBooleanStage from "./AddBooleanStage";
import AddMultChoiceStage from "./AddMultChoiceStage";
import AddTextStage from "./AddTextStage";

export default function AddStage({
                                     _useSelector = useSelector,
                                     _useDispatch = useDispatch,
                                     AddBooleanStageX = AddBooleanStage,
                                     AddMultChoiceStageX = AddMultChoiceStage,
                                     AddTextStageX = AddTextStage
                                 }) {
    const dispatch = _useDispatch()

    const addBoolean = _useSelector(state => state.editorReducer.addBoolean)
    const addText = _useSelector(state => state.editorReducer.addText)
    const addMult = _useSelector(state => state.editorReducer.addMult)

    function handleBoolean() {
        dispatch({type: BOOLEAN_STAGE})
    }

    function handleText() {
        dispatch({type: TEXT_STAGE})
    }

    function handleMult() {
        dispatch({type: MULT_STAGE})
    }

    if (addBoolean) {
        return <AddBooleanStageX/>
    }
    else if (addText) {
        return <AddTextStageX/>
    }
    else if (addMult) {
        return <AddMultChoiceStageX/>
    }
    else {
        return <div>
            <Button onClick={handleBoolean}>Add Boolean Stage</Button>
            <Button onClick={handleText}>Add Text Stage</Button>
            <Button onClick={handleMult}>Add Multiple Choice Stage</Button>
        </div>
    }
}