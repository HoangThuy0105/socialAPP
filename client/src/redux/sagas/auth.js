import { takeLatest, call, put, delay } from 'redux-saga/effects'
import * as actions from '../actions/auth'
import * as api from '../../api/authAPI'
import * as TYPES from '../constants/auth'

function* fetchLoginSaga(action) {
    try {
        console.log('Fetching login running...')

        const res = yield call(api.login, action.payload)
        if (res.status == 200) {
            yield put(actions.loginSuccess(res.data))
        }
    } catch (error) {
        console.log(error)
        yield put(actions.loginError(error))
    }
}

function* registerSaga(action) {
    try {
        console.log('Register running...')

        const res = yield call(api.register, action.payload)
        if (res) {
            yield put(actions.registerSuccess(res.data))
        }
    } catch (error) {
        console.log(error)
        yield put(actions.registerError(error))
    }
}

function* editProfileSaga(action) {
    try {
        console.log('Edit profile running...')
        const res = yield call(api.editProfile, {
            token: action.payload.token,
            formData: action.payload.formData,
        })
        if (res.status == 200) {
            console.log('Edit profile success')
            yield put(actions.editProfileSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.editProfileError(error))
    }
}

export default authSaga = [
    takeLatest(TYPES.LOGIN_START, fetchLoginSaga),
    takeLatest(TYPES.REGISTER_START, registerSaga),
    takeLatest(TYPES.EDIT_PROFILE_START, editProfileSaga),
]