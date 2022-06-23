import AXIOS from './index'

const url = '/v1/user'

export const findUsers = async ({ token, query }) => {
    try {
        const res = await AXIOS.post(`${url}/searchUsers`,
            {
                query: query
            },
            {
                headers: {
                    'token': `Bearer ${token}`
                }
            })
        return res
    } catch (error) {
        return error
    }
}

export const getUserById = async ({ token, userId }) => {
    try {
        const res = await AXIOS.get(`${url}/${userId}/getUserById`,
            {
                headers: {
                    'token': `Bearer ${token}`
                }
            })
        return res
    } catch (error) {
        return error
    }
}

export const getAllUsers = async ({ token }) => {
    try {
        const res = await AXIOS.get(`${url}/`,
            {
                headers: {
                    'token': `Bearer ${token}`
                }
            })
        return res
    } catch (error) {
        return error
    }
}

export const checkFollowUser = async ({ userId, currentUserId }) => {
    try {
        const res = await AXIOS.post(`${url}/${userId}/checkFollow`, {
            userId: currentUserId
        })
        return res
    } catch (error) {
        return error
    }
}

export const followUser = async ({ token, userId, currentUserId }) => {
    try {
        const res = await AXIOS.put(`${url}/${userId}/follow`,
            {
                userId: currentUserId,
            },
            {
                headers: {
                    'token': `Bearer ${token}`
                }
            })
        return res
    } catch (error) {
        return error
    }
}

export const unFollowUser = async ({ token, userId, currentUserId }) => {
    try {
        const res = await AXIOS.put(`${url}/${userId}/unFollow`,
            {
                userId: currentUserId,
            },
            {
                headers: {
                    'token': `Bearer ${token}`
                }
            })
        return res
    } catch (error) {
        return error
    }
}

export const getFollowers = async ({ token, userId }) => {
    try {
        const res = await AXIOS.get(`${url}/followers/${userId}`,
            {
                headers: {
                    'token': `Bearer ${token}`
                }
            })
        return res
    } catch (error) {
        return error
    }
}

export const getFollowings = async ({ token, userId }) => {
    try {
        const res = await AXIOS.get(`${url}/following/${userId}`,
            {
                headers: {
                    'token': `Bearer ${token}`
                }
            })
        return res
    } catch (error) {
        return error
    }
}