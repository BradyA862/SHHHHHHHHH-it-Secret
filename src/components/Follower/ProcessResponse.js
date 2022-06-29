import {useDispatch, useSelector} from "react-redux";

import Response from "./Response";


export default function ProcessResponse({
                                            _useDispatch = useDispatch,
                                            _useSelector = useSelector,
                                            ResponseX = Response
                                        }) {

    // const process = _useSelector(state => state.followerReducer.processToComplete)
    // const responseToAdd = _useSelector(state => state.followerReducer.responseToAdd)
    const stages = _useSelector(state => state.followerReducer.processToComplete.stages)

    return <div>
        {stages.map(
            (staticStage, index) => <div key={index}>
                <ResponseX staticStage={staticStage}/>
            </div>)
        }
    </div>


    // const dispatch = _useDispatch()
    //
    // const process = _useSelector(state => state.followerReducer.processToComplete)
    // const responseToAdd = _useSelector(state => state.followerReducer.responseToAdd)
    //
    // const {
    //     stageId, prompt,
    //     stages, processId,
    //     booleanQuestion
    // } = promptsToRespond ? promptsToRespond : {}
    // console.log(promptsToRespond)
    //
    // function handleSaveResp() {
    //
    // }
    //
    // function onRespTextChange() {
    //
    // }
    //
    // function handleOnChange() {
    //
    // }
    //
    // return <Form>
    //     <Form.Group as={Row} className="mb-3">
    //         <Form.Label column sm={2}>
    //             Process ID
    //         </Form.Label>
    //         <Col sm={10}>
    //             <Form.Control value={process.id} disabled={true}/>
    //         </Col>
    //     </Form.Group>
    //
    //     <Form.Group as={Row} className="mb-3">
    //         <Form.Label column sm={2}>
    //             {process.title}
    //         </Form.Label>
    //         <Col sm={10}>
    //             <Form.Control type='textarea' row={2} value={process.stages.booleanQuestion} disabled={true}/>
    //         </Col>
    //     </Form.Group>
    //
    //     <Form.Group as={Row} className="mb-3">
    //         {booleanQuestion !== null &&
    //
    //             <div key={'default-radio'} required={true}>
    //                 <Form.Check
    //                     inline
    //                     name='radio 1'
    //                     label="True"
    //                     value="True"
    //                     type='radio'
    //                     onChange={e => handleOnChange({
    //                         ...responseToAdd,
    //                         stageId: stageId,
    //                         stages: stages,
    //                         processId: processId,
    //                         prompt: prompt,
    //                         responseText: e.target.value
    //                     })}/>
    //                 <Form.Check
    //                     inline
    //                     name='radio 1'
    //                     label="False"
    //                     value="False"
    //                     type='radio'
    //                     onChange={e => handleOnChange({
    //                         ...responseToAdd,
    //                         stageId: stageId,
    //                         stages: stages,
    //                         processId: processId,
    //                         prompt: prompt,
    //                         responseText: e.target.value
    //                     })}/>
    //             </div>
    //         }
    //     </Form.Group>
    //     {/*<Form.Group>*/}
    //     {/*    {process.stages.textQuestion !== null &&*/}
    //     {/*        <Form.Control as="textarea" rows={1} placeholder='Enter response here' required={true}*/}
    //     {/*                      onChange={e => onRespTextChange({*/}
    //     {/*                          ...responseToAdd, stageId: stageId,*/}
    //     {/*                          stages: stages,*/}
    //     {/*                          processId: processId,*/}
    //     {/*                          prompt: prompt,*/}
    //     {/*                          responseText: e.target.value*/}
    //     {/*                      })}/>*/}
    //     {/*    }*/}
    //     {/*</Form.Group>*/}
    //     {/*<Form.Group>*/}
    //     {/*    {process.stages.multipleChoiceQuestion !== null &&*/}
    //     {/*        <div key={'mult-radio'} required={true}>*/}
    //     {/*            <Form.Check*/}
    //     {/*                inline*/}
    //     {/*                name='radio 1'*/}
    //     {/*                label="A"*/}
    //     {/*                value={process.stages.answer1}*/}
    //     {/*                type='radio'*/}
    //     {/*                onChange={e => handleOnChange({*/}
    //     {/*                    ...responseToAdd,*/}
    //     {/*                    stageId: stageId,*/}
    //     {/*                    stages: stages,*/}
    //     {/*                    processId: processId,*/}
    //     {/*                    prompt: prompt,*/}
    //     {/*                    responseText: e.target.value*/}
    //     {/*                })}/>*/}
    //     {/*            <Form.Check*/}
    //     {/*                inline*/}
    //     {/*                name='radio 1'*/}
    //     {/*                label="B"*/}
    //     {/*                value={process.stages.answer2}*/}
    //     {/*                type='radio'*/}
    //     {/*                onChange={e => handleOnChange({*/}
    //     {/*                    ...responseToAdd,*/}
    //     {/*                    stageId: stageId,*/}
    //     {/*                    stages: stages,*/}
    //     {/*                    processId: processId,*/}
    //     {/*                    prompt: prompt,*/}
    //     {/*                    responseText: e.target.value*/}
    //     {/*                })}/>*/}
    //     {/*            <Form.Check*/}
    //     {/*                inline*/}
    //     {/*                name='radio 1'*/}
    //     {/*                label="C"*/}
    //     {/*                value={process.stages.answer3}*/}
    //     {/*                type='radio'*/}
    //     {/*                onChange={e => handleOnChange({*/}
    //     {/*                    ...responseToAdd,*/}
    //     {/*                    stageId: stageId,*/}
    //     {/*                    stages: stages,*/}
    //     {/*                    processId: processId,*/}
    //     {/*                    prompt: prompt,*/}
    //     {/*                    responseText: e.target.value*/}
    //     {/*                })}/>*/}
    //     {/*        </div>*/}
    //     {/*    }*/}
    //     {/*</Form.Group>*/}
    //
    //     <Button title='Apply' onClick={handleSaveResp} variant={"outline-success"} size='sm'>Apply</Button>
    //     <Button title='Cancel' className={'m-3'} variant={"outline-danger"} size='sm' onClick={() => dispatch({type: CANCEL_DO_PROCESS})}>Cancel</Button>
    //
    //
    // </Form>

}