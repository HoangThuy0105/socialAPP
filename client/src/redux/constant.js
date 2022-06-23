export const INIT_STATE = {
    posts: {
        isLoading: false,
        data: [],
        comment: [],
        listPostsUser: [],
        error: false
    },
    auth: {
        currentUser: {},
        isLoading: false,
        message: '',
        data: {},
        error: false
    },
    user: {
        data: [],
        followers: [],
        followings: [],
        listUser: [],
        isLoading: false,
        message: '',
        isFollow: '',
        error: false,
    },
}