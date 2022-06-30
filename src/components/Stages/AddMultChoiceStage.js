import {useDispatch, useSelector} from "react-redux";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {ADD_MULT_STAGE, addMultInit, CANCEL_STAGE} from "../../modules/editor-reducer";

export default function AddMultChoiceStage({
                                            _useSelector = useSelector,
                                            _useDispatch = useDispatch
                                        }) {
    const dispatch = _useDispatch()

    const [stage, setStage] = useState({
        prompt: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: ''
    })

    function handleCancel() {
        dispatch({type: CANCEL_STAGE})
    }

    function handleAdd() {
        dispatch({type: ADD_MULT_STAGE, payload: stage})
        dispatch(addMultInit())
    }


    return <Form>
        <Form.Control placeholder={'prompt'} onChange={event => setStage({...stage, prompt: event.target.value})}/>
        <Form.Control placeholder={'answer 1'} onChange={event => setStage({...stage, answer1: event.target.value})}/>
        <Form.Control placeholder={'answer 2'} onChange={event => setStage({...stage, answer2: event.target.value})}/>
        <Form.Control placeholder={'answer 3'} onChange={event => setStage({...stage, answer3: event.target.value})}/>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
    </Form>


}