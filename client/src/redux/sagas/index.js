import { all } from 'redux-saga/effects'
import postSaga from './posts'
import authSaga from './auth'
import userSaga from './user'

export default function* mySaga() {
    yield all([
        ...postSaga,
        ...authSaga,
        ...userSaga
    ])
};