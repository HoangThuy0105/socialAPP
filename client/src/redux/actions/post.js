import * as TYPES from '../constants/post'

// Get posts
export const getPostsStart = (payload) => {
    return {
        type: TYPES.GET_POSTS_START,
        payload: payload
    }
}

export const getPostsSuccess = (payload) => {
    return {
        type: TYPES.GET_POSTS_SUCCESS,
        payload: payload
    }
}

export const getPostsError = (error) => {
    return {
        type: TYPES.GET_POSTS_FAILURE,
        error: error
    }
}

// Get details post
export const getDetailPostStart = (payload) => {
    return {
        type: TYPES.GET_DETAILS_START,
        payload
    }
}

export const getDetailPostSuccess = (payload) => {
    return {
        type: TYPES.GET_DETAILS_SUCCESS,
        payload
    }
}

export const getDetailPostFailure = (error) => {
    return {
        type: TYPES.GET_DETAILS_FAILURE,
        error
    }
}

// Get posts by UserId
export const getPostsByUserIdStart = (payload) => {
    return {
        type: TYPES.GET_POSTS_USER_ID_START,
        payload
    }
}

export const getPostsByUserIdSuccess = (payload) => {
    return {
        type: TYPES.GET_POSTS_USER_ID_SUCCESS,
        payload
    }
}

export const getPostsByUserIdFailure = (error) => {
    return {
        type: TYPES.GET_POSTS_USER_ID_FAILURE,
        error
    }
}

// Create post
export const createPostStart = (payload) => {
    return {
        type: TYPES.CREATE_POST_START,
        payload: payload
    }
}

export const createPostSuccess = (payload) => {
    return {
        type: TYPES.CREATE_POST_SUCCESS,
        payload: payload
    }
}

export const createPostError = (error) => {
    return {
        type: TYPES.CREATE_POST_FAILURE,
        error: error
    }
}

// Update post 
export const updatePostStart = (payload) => {
    return {
        type: TYPES.UPDATE_POST_START,
        payload: payload
    }
}

export const updatePostSuccess = (payload) => {
    return {
        type: TYPES.UPDATE_POST_SUCCESS,
        payload: payload
    }
}

export const updatePostError = (error) => {
    return {
        type: TYPES.UPDATE_POST_FAILURE,
        error: error
    }
}

// Delete post
export const deletePostStart = (payload) => {
    return {
        type: TYPES.DELETE_POST_START,
        payload
    }
}

export const deletePostSuccess = (payload) => {
    return {
        type: TYPES.DELETE_POST_SUCCESS,
        payload
    }
}

export const deletePostError = (error) => {
    return {
        type: TYPES.DELETE_POST_FAILURE,
        error
    }
}

// Like post
export const likePostStart = (payload) => {
    return {
        type: TYPES.LIKE_POST_START,
        payload
    }
}

export const likePostSuccess = (payload) => {
    return {
        type: TYPES.LIKE_POST_SUCCESS,
        payload
    }
}

export const likePostError = (error) => {
    return {
        type: TYPES.LIKE_POST_FAILURE,
        error
    }
}

// Comment post
export const commentPostStart = (payload) => {
    return {
        type: TYPES.COMMENT_POST_START,
        payload
    }
}

export const commentPostSuccess = (payload) => {
    return {
        type: TYPES.COMMENT_POST_SUCCESS,
        payload
    }
}

export const commentPostFailure = (error) => {
    return {
        type: TYPES.COMMENT_POST_FAILURE,
        error
    }
}