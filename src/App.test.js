import {render, screen} from "@testing-library/react";
import App from "./App";

it('should display ListProcessesI when Editor', function () {
    const expectedList = 'some list'
    const mockProcesses = () => <div>{expectedList}</div>

    const state = {
        editorReducer:{
            editor: true
        }
    }
    render(<App _useSelector={fn => fn(state)} _useDispatch={() => {}} ListProcessesI={mockProcesses}/>)
    expect(screen.getByText(expectedList)).toBeInTheDocument()
});

it('should display Role screen when no role chosen', function () {
    const expectedText = 'some text'
    const mockRole = () => <>{expectedText}</>
    const state = {
        editorReducer: {
            editor: null
        }
    }
    render(<App _useSelector={fn => fn(state)} _useDispatch={() => {}} RoleI={mockRole}/>)
    expect(screen.getByText(expectedText)).toBeInTheDocument()
});
