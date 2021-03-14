import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer 불러오기
import reducer from '../reducers'

const configureStore = () => {
    // 빈 배열에는 싸가나 썽크가 들어간다.
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))
    // store는 state랑 reducer를 포함한 것
    const store = createStore(reducer, enhancer);
    // store.dispatch({
    //     type: 'CHANGE_NICKNAME',
    //     data: 'boogieLee',
    // })
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;