import {render, screen} from "@testing-library/react";
import App from "./App";

it('should display ListProcessesI when Editor', function () {
    const expectedList = 'some list'
    const mockProcesses = () => <div>{expectedList}</div>
    const mockLogout = () => <div>{"logout"}</div>
    const state = {
        followerReducer: {
          follower: true
        },
        editorReducer:{
            editor: true
        }
    }
    render(<App _useSelector={fn => fn(state)} _useDispatch={() => {}}
                ListProcessesI={mockProcesses} LogoutI={mockLogout}/>)
    expect(screen.getByText(expectedList)).toBeInTheDocument()
});

it('should display Role screen when no role chosen', function () {
    const expectedText = 'some text'
    const mockRole = () => <>{expectedText}</>
    const mockLogout = () => <div>{"logout"}</div>
    const expectedList = 'some list'
    const mockProcesses = () => <div>{expectedList}</div>
    const state = {
        followerReducer: {
            follower: null
        },
        editorReducer:{
            editor: null
        }
    }
    render(<App _useSelector={fn => fn(state)} _useDispatch={() => {}} RoleI={mockRole}
                LogoutI={mockLogout} ListProcessesI={mockProcesses}/>)
    expect(screen.getByText(expectedText)).toBeInTheDocument()
});

it('should display ListProcessesI when Follower', function () {
    const expectedText = 'some text'
    const mockRole = () => <>{expectedText}</>
    const mockLogout = () => <div>{"logout"}</div>
    const expectedList = 'some list'
    const mockProcesses = () => <div>{expectedList}</div>
    const state = {
        editorReducer: {
          editor: false
        },
        followerReducer:{
            follower: true
        }
    }
    render(<App _useSelector={fn => fn(state)} _useDispatch={() => {}} RoleI={mockRole}
                LogoutI={mockLogout} ListProcessesI={mockProcesses}/>)
    expect(screen.getByText(expectedList)).toBeInTheDocument()
});
