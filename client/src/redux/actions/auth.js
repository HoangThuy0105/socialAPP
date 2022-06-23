import * as TYPES from '../constants/auth'

// Login
export const loginStart = (payload) => {
    return {
        type: TYPES.LOGIN_START,
        payload: payload,
    }
}

export const loginSuccess = (payload) => {
    return {
        type: TYPES.LOGIN_SUCCESS,
        payload: payload,
    }
}

export const loginError = (error) => {
    return {
        type: TYPES.LOGIN_FAILURE,
        error: error,
    }
}

// Register
export const registerStart = (payload) => {
    return {
        type: TYPES.REGISTER_START,
        payload: payload
    }
}

export const registerSuccess = (payload) => {
    return {
        type: TYPES.REGISTER_SUCCESS,
        payload: payload
    }
}

export const registerError = (error) => {
    return {
        type: TYPES.REGISTER_FAILURE,
        error: error
    }
}

// Logout
export const logout = () => {
    return {
        type: TYPES.LOGOUT,
        payload: {}
    }
}

// Edit profile
export const editProfileStart = (payload) => {
    return {
        type: TYPES.EDIT_PROFILE_START,
        payload: payload
    }
}

export const editProfileSuccess = (payload) => {
    return {
        type: TYPES.EDIT_PROFILE_SUCCESS,
        payload: payload
    }
}

export const editProfileFailure = (error) => {
    return {
        type: TYPES.EDIT_PROFILE_FAILURE,
        error: error
    }
}

// Update avatar
export const updateAvatarStart = (payload) => {
    return {
        type: TYPES.UPDATE_AVATAR_START,
        payload: payload
    }
}

export const updateAvatarSuccess = (payload) => {
    return {
        type: TYPES.UPDATE_AVATAR_SUCCESS,
        payload: payload
    }
}

export const updateAvatarFailure = (error) => {
    return {
        type: TYPES.UPDATE_AVATAR_FAILURE,
        error: error
    }
}