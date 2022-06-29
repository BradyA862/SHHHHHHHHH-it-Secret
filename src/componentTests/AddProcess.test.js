import {render, screen} from "@testing-library/react";
import AddProcess from "../components/AddProcess";
import userEvent from "@testing-library/user-event";


it('should show title input field', function () {
    const state = {editorReducer: {processToAdd: {title: "title"}}}
    render(<AddProcess _useSelector={fn => fn(state)} _useDispatch={() => {}}/>)
    expect(screen.getByPlaceholderText('title')).toBeInTheDocument()
});


it('should dispatch addProcessInit when user clicks add', function () {
    const dispatch = jest.fn()
    const state = {editorReducer: { processToAdd: {title: "title"}}}
    render(<AddProcess _useSelector={fn => fn(state)} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Add Process'))
    expect(typeof dispatch.mock.calls[0][0]).toBe('function')

});