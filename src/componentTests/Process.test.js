import {render, screen} from "@testing-library/react";
import Process from "../components/Process";
import userEvent from "@testing-library/user-event";
import {SET_PROCESS} from "../modules/editor-reducer";

it('should show title', function () {
    const expectedText = {title: 'title'}
    const state = {
        editorReducer: {
            editor: true,
            processes: []
        }
    }

    render(<Process staticProcess={expectedText} _useDispatch={() => {}} _useSelector={fn => fn(state)}/>)
    expect(screen.getByText(/title/)).toBeInTheDocument()
});

it('should show Edit button when editor', function () {
    const mock = "process"
    const state = {editorReducer: {editor: true}}
    render(<Process staticProcess={mock} _useDispatch={() => {}}  _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('Edit')).toBeInTheDocument()
});

it('should show Delete button when editor', function () {
    const mock = "process"
    const state = {editorReducer: {editor: true}}
    render(<Process staticProcess={mock} _useDispatch={() => {}}  _useSelector={fn => fn(state)}/>)
    expect(screen.getByText('Delete')).toBeInTheDocument()
});

it('should dispatch EDIT_PROCESS on Edit', function () {
    const mock = "process"
    const dispatch = jest.fn()
    const state = {editorReducer: {editor: true}}
    render(<Process staticProcess={mock} _useDispatch={() => dispatch} _useSelector={fn => fn(state)}/>)
    userEvent.click(screen.getByText('Edit'))
    expect(dispatch).toHaveBeenCalledWith({type: SET_PROCESS, payload: mock})
});