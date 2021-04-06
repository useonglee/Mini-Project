import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
// rootReducer 불러오기
import reducer from '../reducers'

const loggerMiddleware = ({ dispatch, getSate }) => (next) => (action) => {
    console.log(action);
    return next(action);
}

const configureStore = () => {
    // 빈 배열에는 싸가나 썽크가 들어간다.
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))
    // store는 state랑 reducer를 포함한 것
    
    const store = createStore(reducer, enhancer);
    // store.dispatch({
    //     type: 'CHANGE_NICKNAME',
    //     data: 'boogieLee',
    // })
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;