import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {ADD_TEXT_STAGE, addTextStageInit, CANCEL_STAGE} from "../../modules/editor-reducer";
import {Button, Form} from "react-bootstrap";

export default function AddTextStage({
                                         _useSelector = useSelector,
                                         _useDispatch = useDispatch
                                     }) {
    const dispatch = _useDispatch()

    const [stage, setStage] = useState({
        prompt: ''
    })

    function handleCancel() {
        dispatch({type: CANCEL_STAGE})
    }

    function handleAdd() {
        dispatch({type: ADD_TEXT_STAGE, payload: stage})
        dispatch(addTextStageInit())
    }


    return <Form>
        <Form.Control placeholder={'prompt'} onChange={event => setStage({...stage, prompt: event.target.value})}/>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
    </Form>
}