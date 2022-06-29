import {render, screen} from "@testing-library/react";
import Logout from "../components/Logout";
import userEvent from "@testing-library/user-event";
import {FOLLOWER_LOGOUT} from "../modules/follower-reducer";
import {EDITOR_LOGOUT} from "../modules/editor-reducer";

it('should show logout button', function () {
    render(<Logout _useDispatch={() => {}}/>)
    expect(screen.getByText('Logout')).toBeInTheDocument()
});

it('should dispatch both LOGOUT actions on button clicked', function () {
    const dispatch = jest.fn()
    render(<Logout _useDispatch={() => dispatch}/>)
    userEvent.click(screen.getByText('Logout'))
    expect(dispatch).toHaveBeenCalledWith({type: FOLLOWER_LOGOUT})
    expect(dispatch).toHaveBeenCalledWith({type: EDITOR_LOGOUT})
});