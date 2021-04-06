import { all, fork, call, take, put } from 'redux-saga/effects';
import axios from 'axios';

// 요청을 보내고
function logInAPI(data) {
    return axios.post('/api/login', data)
}

// 요청의 결과를 받는다
function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data)
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            tpye: 'LOG_IN_FAILURE',
            data: err.response.data,
        })
    }
}

function logOutAPI() {
    return axios.post('/api/logout')
}

function* logOut() {
    try {
        const result = yield call(logOutAPI)
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            tpye: 'LOG_OUT_FAILURE',
            data: err.response.data,
        })
    }
}

function addPostAPI() {
    return axios.post('/api/post')
}

function* addPost() {
    try {
        const result = yield call(addPostAPI)
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            tpye: 'ADD_POST_FAILURE',
            data: err.response.data,
        })
    }
}

// take는 괄호안의 액션이 실행될 때 까지 기다리겠다는 뜻
function* watchLogin() {
    yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
    yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchAddPost),
    ])

}