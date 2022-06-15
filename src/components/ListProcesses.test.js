import {render, screen} from "@testing-library/react";
import ListProcesses from "./ListProcesses";
import userEvent from "@testing-library/user-event";
import {getList} from "../modules/editor-reducer";

it('should show 3 processes', function () {
    const state = {editorReducer: {processes: ['process1', 'process2', 'process3']}}
    const mockProcess = ({staticProcess}) => <div>{staticProcess}</div>
    const addProcessText = 'AddProcess?'
    const mockAddProcess = () => <div>{addProcessText}</div>
    render(<ListProcesses _useSelector={fn => fn(state)} _useDispatch={() => {}} ProcessI={mockProcess} AddProcessI={mockAddProcess}/>)
    expect(screen.getByText(state.editorReducer.processes[0])).toBeInTheDocument()
    expect(screen.getByText(state.editorReducer.processes[1])).toBeInTheDocument()
    expect(screen.getByText(state.editorReducer.processes[2])).toBeInTheDocument()
});

it('should show AddProcess at the beginning when adding a process', function () {
    const state = {editorReducer: {processes: ['process1', 'process2', 'process3'], processToAdd: '?'}}
    const mockProcess = ({staticProcess}) => <div>{staticProcess}</div>
    const addProcessText = 'AddProcess?'
    const mockAddProcess = () => <div>{addProcessText}</div>
    render(<ListProcesses ProcessI={mockProcess} _useSelector={fn => fn(state)}
                          AddProcessI={mockAddProcess} _useDispatch={() => {}}/>)
    expect(screen.getByText(addProcessText)).toBeInTheDocument()
    expect(screen.getByText(state.editorReducer.processes[0])).toBeInTheDocument()
    expect(screen.getByText(state.editorReducer.processes[1])).toBeInTheDocument()
    expect(screen.getByText(state.editorReducer.processes[2])).toBeInTheDocument()
});

it('should show Update List button', function () {
    const state = {editorReducer: {processes: ['process1', 'process2', 'process3']}}
    render(<ListProcesses _useSelector={fn => fn(state)} _useDispatch={() => {}} AddProcessI={() => {}} ProcessI={() => {}}/>)
    expect(screen.getByText('Update List')).toBeInTheDocument()
});

it('should dispatch getList on Update', function () {
    const state = {editorReducer: {processes: ['process1', 'process2', 'process3'], processToAdd: '?'}}
    const mockProcess = ({staticProcess}) => <div>{staticProcess}</div>
    const addProcessText = 'AddProcess?'
    const mockAddProcess = () => <div>{addProcessText}</div>
    const dispatch = jest.fn()
    render(<ListProcesses _useSelector={fn => fn(state)} _useDispatch={() => dispatch} AddProcessI={mockAddProcess} ProcessI={mockProcess}/>)
    userEvent.click(screen.getByText('Update List'))
    expect(typeof dispatch.mock.calls[0][0]).toBe('function')
});