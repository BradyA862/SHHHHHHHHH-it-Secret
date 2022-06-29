import {render, screen} from "@testing-library/react";
import EditProcess from "../components/EditProcess";
import userEvent from "@testing-library/user-event";
import {SET_EDIT} from "../modules/editor-reducer";

it('should show Apply and Cancel button', function () {
    const state = {editorReducer: {processToEdit: {title: "some process"}}}
    render(<EditProcess _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('Apply')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
});

it('should dispatch SET_PROCESS on change', function () {
    const state = {editorReducer: {processToEdit: {title: ""}}}
    const dispatch = jest.fn()
    render(<EditProcess _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    const titleElement = screen.getByPlaceholderText('Title')
    const title = 'new title'
    userEvent.type(titleElement, title)
    expect(dispatch).toHaveBeenCalledWith({type: SET_EDIT, payload: {title: title}})
});