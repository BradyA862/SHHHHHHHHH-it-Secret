

export const FOLLOWER = 'follower-reducer/FOLLOWER'
export const FOLLOWER_LOGOUT = 'follower-reducer/FOLLOWER_LOGOUT'
export const DO_PROCESS = 'follower-reducer/DO_PROCESS'
export const CANCEL_DO_PROCESS = 'follower-reducer/CANCEL_DO_PROCESS'
// export const  = 'follower-reducer/'
// export const  = 'follower-reducer/'
// export const  = 'follower-reducer/'
// export const  = 'follower-reducer/'
// export const  = 'follower-reducer/'
// export const  = 'follower-reducer/'

const initialState = {
    follower: false,
    processToComplete: null,
    inProcess: false,
    responseToAdd: null
}

export default function followerReducer (state = initialState, action) {
    switch (action?.type) {

        case FOLLOWER:
            return {
                ...state,
                follower: true
            }

        case FOLLOWER_LOGOUT:
            return {
                ...state,
                follower: false
            }

        case DO_PROCESS:
            return {
                ...state,
                processToComplete: action.payload,
                inProcess: true
            }

        case CANCEL_DO_PROCESS:
            return {
                ...state,
                processToComplete: null,
                inProcess: false
            }


        default:
            return {...state}
    }
}
