import {render, screen} from "@testing-library/react";
import Role from "../components/Role";
import {EDITOR} from "../modules/editor-reducer";
import userEvent from "@testing-library/user-event";
import {FOLLOWER} from "../modules/follower-reducer";

it('should show follower and editor button', function () {
    render(<Role _useDispatch={() => {}}/>)
    expect(screen.getByText('Editor')).toBeInTheDocument()
    expect(screen.getByText('Follower')).toBeInTheDocument()
});

it('should dispatch EDITOR when editor clicked', function () {
    const dispatch = jest.fn()
    render(<Role _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Editor'))
    expect(dispatch).toHaveBeenCalledWith({type: EDITOR})
});

it('should dispatch FOLLOWER when follower clicked', function () {
    const dispatch = jest.fn()
    render(<Role _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Follower'))
    expect(dispatch).toHaveBeenCalledWith({type: FOLLOWER})
});
