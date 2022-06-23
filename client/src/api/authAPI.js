import AXIOS from './index'

export const login = async (payload) => {
    try {
        const res = await AXIOS.post(`/auth/login`, payload)
        return res
    } catch (error) {
        return error
    }
}

export const register = async (payload) => {
    try {
        const res = await AXIOS.post(`/auth/register`, {
            firstName: payload.firstName,
            lastName: payload.lastName,
            phoneNumber: payload.phoneNumber,
            password: payload.crPassword,
            email: payload.crEmail,
        })
        return res
    } catch (error) {
        return error
    }
}

export const editProfile = async ({ token, formData }) => {
    console.log(token)
    console.log(formData)
    try {
        const res = await AXIOS.post(`/v1/user/editProfile`, formData, {
            headers: {
                'token': `Bearer ${token}`,
                'Content-Type': `multipart/form-data`,
            }
        })
        return res
    } catch (error) {
        return error
    }
}

