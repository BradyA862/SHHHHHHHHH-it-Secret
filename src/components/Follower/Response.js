import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Row} from "react-bootstrap";
import {addResponseInit, CANCEL_DO_PROCESS, EDIT_INPUT} from "../../modules/follower-reducer";

export default function Response({
                                     _useDispatch = useDispatch,
                                     _useSelector = useSelector,
                                     staticStage
                                 }) {
    const dispatch = _useDispatch()

    const responseToAdd = _useSelector(state => state.followerReducer.responseToAdd)
    const process = _useSelector(state => state.followerReducer.processToComplete)

    function handleOnChange(change) {
        dispatch({type: EDIT_INPUT, responseToAdd: change})
    }

    function onRespTextChange(change) {
        dispatch({type: EDIT_INPUT, responseToAdd: change})
    }

    function handleSaveResp() {
        dispatch(addResponseInit())
    }

    // const {stageId, prompt, processId} = promptsToRespond ? promptsToRespond : {}

    if (staticStage.booleanQuestion !== null) {
        return <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label>
                    {staticStage.booleanQuestion}
                </Form.Label>
                <div key={'default-radio'} required={true}>
                    <Form.Check
                        inline
                        name='radio 1'
                        label="True"
                        value="True"
                        type='radio'
                        onChange={e => handleOnChange({
                            ...responseToAdd,
                            stageId: staticStage.id,
                            processId: process.id,
                            processTitle: process.title,
                            prompt: staticStage.booleanQuestion,
                            responseText: e.target.value
                        })}/>
                    <Form.Check
                        inline
                        name='radio 1'
                        label="False"
                        value="False"
                        type='radio'
                        onChange={e => handleOnChange({
                            ...responseToAdd,
                            stageId: staticStage.id,
                            processId: process.id,
                            processTitle: process.title,
                            prompt: staticStage.booleanQuestion,
                            responseText: e.target.value
                        })}/>
                </div>
            </Form.Group>
            <Form.Group>
                <Button title='Apply' variant={"outline-success"} size='sm'
                        onClick={handleSaveResp}>Apply</Button>
                <Button className={'m-3'} title='Cancel' variant={"outline-danger"} size='sm'
                        onClick={() => dispatch({type: CANCEL_DO_PROCESS})}>Cancel</Button>
            </Form.Group>
        </Form>
    }
    else if (staticStage.multipleChoiceQuestion !== null) {
        return <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label>
                    {staticStage.multipleChoiceQuestion}
                </Form.Label>
                <div key={'default-radio'} required={true}>
                    <Form.Check
                        inline
                        name='radio 1'
                        label="A"
                        value="A"
                        type='radio'
                        onChange={e => handleOnChange({
                            ...responseToAdd,
                            stageId: staticStage.id,
                            processId: process.id,
                            processTitle: process.title,
                            prompt: staticStage.multipleChoiceQuestion,
                            responseText: e.target.value
                        })}/>
                    <Form.Check
                        inline
                        name='radio 1'
                        label="B"
                        value="B"
                        type='radio'
                        onChange={e => handleOnChange({
                            ...responseToAdd,
                            stageId: staticStage.id,
                            processId: process.id,
                            processTitle: process.title,
                            prompt: staticStage.multipleChoiceQuestion,
                            responseText: e.target.value
                        })}/>
                    <Form.Check
                        inline
                        name='radio 1'
                        label="C"
                        value="C"
                        type='radio'
                        onChange={e => handleOnChange({
                            ...responseToAdd,
                            stageId: staticStage.id,
                            processId: process.id,
                            processTitle: process.title,
                            prompt: staticStage.multipleChoiceQuestion,
                            responseText: e.target.value
                        })}/>
                </div>
            </Form.Group>
            <Form.Group>
                <Button title='Apply' variant={"outline-success"} size='sm'
                        onClick={handleSaveResp}>Apply</Button>
                <Button className={'m-3'} title='Cancel' variant={"outline-danger"} size='sm'
                        onClick={() => dispatch({type: CANCEL_DO_PROCESS})}>Cancel</Button>
            </Form.Group>
        </Form>
    }
    else if (staticStage.textQuestion !== null) {
        return <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label>
                    {staticStage.textQuestion}
                </Form.Label>
                <div>
                    <Form.Control as="textarea" rows={1} placeholder='Enter response here' required={true}
                                  onChange={e => onRespTextChange({
                                      ...responseToAdd,
                                      stageId: staticStage.id,
                                      processId: process.id,
                                      processTitle: process.title,
                                      prompt: staticStage.textQuestion,
                                      responseText: e.target.value
                                  })}/>

                </div>
            </Form.Group>
            <Form.Group>
                <Button title='Apply' variant={"outline-success"} size='sm'
                        onClick={handleSaveResp}>Apply</Button>
                <Button className={'m-3'} title='Cancel' variant={"outline-danger"} size='sm'
                        onClick={() => dispatch({type: CANCEL_DO_PROCESS})}>Cancel</Button>
            </Form.Group>
        </Form>
    }

}