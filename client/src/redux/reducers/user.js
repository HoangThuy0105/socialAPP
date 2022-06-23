import { INIT_STATE } from '../constant'
import * as TYPES from '../constants/user'

export default function userReducers(state = INIT_STATE.user, action) {
    switch (action.type) {
        // Search user
        case TYPES.FIND_USERS_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.FIND_USERS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.FIND_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Get user by id
        case TYPES.GET_USER_BY_ID_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.GET_USER_BY_ID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Get all users
        case TYPES.GET_ALL_USERS_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                listUser: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.GET_ALL_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: false
            }
        // Check follow user
        case TYPES.CHECK_FOLLOW_USER_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.CHECK_FOLLOW_USER_SUCCESS:
            return {
                ...state,
                isFollow: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.CHECK_FOLLOW_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Follow user
        case TYPES.FOLLOW_USER_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.FOLLOW_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false
            }
        case TYPES.FOLLOW_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // UnFollow user
        case TYPES.UNFOLLOW_USER_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.UNFOLLOW_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.UNFOLLOW_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Get followers
        case TYPES.GET_FOLLOWERS_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.GET_FOLLOWERS_SUCCESS:
            return {
                ...state,
                followers: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.GET_FOLLOWERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Get following
        case TYPES.GET_FOLLOWINGS_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.GET_FOLLOWINGS_SUCCESS:
            return {
                ...state,
                followings: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.GET_FOLLOWINGS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state;
    }
}