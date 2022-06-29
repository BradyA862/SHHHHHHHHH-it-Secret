import {useDispatch, useSelector} from "react-redux";
import {Form, Row} from "react-bootstrap";

export default function Response({
                                     _useDispatch = useDispatch,
                                     _useSelector = useSelector,
                                     staticStage,
                                     promptsToRespond
                                 }) {
    // const dispatch = _useDispatch()

    const responseToAdd = _useSelector(state => state.followerReducer.responseToAdd)

    function handleOnChange() {

    }

    function onRespTextChange() {

    }

    const {stageId, prompt, processId} = promptsToRespond ? promptsToRespond : {}

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
                            stageId: stageId,
                            processId: processId,
                            prompt: prompt,
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
                            stageId: stageId,
                            processId: processId,
                            prompt: prompt,
                            responseText: e.target.value
                        })}/>
                </div>
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
                            stageId: stageId,
                            processId: processId,
                            prompt: prompt,
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
                            stageId: stageId,
                            processId: processId,
                            prompt: prompt,
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
                            stageId: stageId,
                            processId: processId,
                            prompt: prompt,
                            responseText: e.target.value
                        })}/>
                </div>
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
                                      stageId: stageId,
                                      processId: processId,
                                      prompt: prompt,
                                      responseText: e.target.value
                                  })}/>

                </div>
            </Form.Group>
        </Form>
    }

}