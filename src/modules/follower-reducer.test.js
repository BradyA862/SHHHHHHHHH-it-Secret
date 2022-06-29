/** INIT **/
import followerReducer, {FOLLOWER, FOLLOWER_LOGOUT} from "./follower-reducer";


it('should start with follower false', function () {
    const state = followerReducer()
    expect(state.follower).toBe(false)
});

/** SWITCH **/
it('should set follower true on FOLLOWER action', function () {
    const initialState = followerReducer()
    const state = followerReducer(initialState, {type: FOLLOWER})
    expect(state.follower).toBe(true)
});

it('should set follower to false on FOLLOWER_LOGOUT', function () {
    const initialState = followerReducer()
    initialState.follower = true
    const state = followerReducer(initialState, {type: FOLLOWER_LOGOUT})
    expect(state.follower).toBe(false)
});