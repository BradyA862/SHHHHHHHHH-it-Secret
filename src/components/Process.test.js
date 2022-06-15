import {render, screen} from "@testing-library/react";
import Process from "./Process";
import userEvent from "@testing-library/user-event";
import {SET_PROCESS} from "../modules/editor-reducer";

it('should show title', function () {
    const mockProcess = ({staticProcess}) => <div>{staticProcess}</div>
    render(<Process staticProcess={mockProcess} _useDispatch={() => {}}/>)
    expect(screen.getByText("Title:")).toBeInTheDocument()
});

it('should show Edit button', function () {
    const mock = "process"
    render(<Process staticProcess={mock} _useDispatch={() => {}}/>)
    expect(screen.getByText('Edit')).toBeInTheDocument()
});

it('should show Delete button', function () {
    const mock = "process"
    render(<Process staticProcess={mock} _useDispatch={() => {}}/>)
    expect(screen.getByText('Delete')).toBeInTheDocument()
});

it('should dispatch EDIT_PROCESS on Edit', function () {
    const mock = "process"
    const dispatch = jest.fn()
    render(<Process staticProcess={mock} _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Edit'))
    expect(dispatch).toHaveBeenCalledWith({type: SET_PROCESS, payload: mock})
});