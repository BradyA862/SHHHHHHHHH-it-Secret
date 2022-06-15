import {render, screen} from "@testing-library/react";
import AddProcess from "./AddProcess";
import userEvent from "@testing-library/user-event";
import {ADD_PROCESS} from "../modules/editor-reducer";

it('should show title input field', function () {
    render(<AddProcess _useSelector={() => {}} _useDispatch={() => {}}/>)
    expect(screen.getByPlaceholderText('title')).toBeInTheDocument()
});

it('should show Add button', function () {
    render(<AddProcess _useSelector={() => {}} _useDispatch={() => {}}/>)
    expect(screen.getByText('Add')).toBeInTheDocument()
});

// it('should update title when user types in tile field', function () {
//     const dispatch = jest.fn()
//     const state = {editorReducer: {processToAdd: {title:''}}}
//     render(<AddProcess _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
//     const userTyping = screen.getByPlaceholderText('title')
//     const title = 'some title'
//     userEvent.type(userTyping, title)
//     expect(dispatch).toHaveBeenCalledWith({type: ADD_PROCESS, payload: {title}})
// });

it('should dispatch addProcessInit when user clicks add', function () {
    const dispatch = jest.fn()
    render(<AddProcess _useSelector={() => {}} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Add'))
    expect(typeof dispatch.mock.calls[0][0]).toBe('function')

});