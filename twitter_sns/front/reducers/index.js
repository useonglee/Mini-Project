// action
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

// user는 user.js 파일의 reducer가 된다.
import user from './user';
import post from './post';

// 중앙 저장소(redux)
// 초기 앱에 대한 구조를 미리 잡아 놔야 한다.

// reducer는 (이전 상태, 액션을 통해서) => 다음 상태를 만든다.
// 함수들을 합쳐주는 combine함수를 사용한다.
const rootReducer = combineReducers ({
    // user리듀서와 post 리듀서를 합쳐준다. (하이드레이트를 위해서 index 리듀서 추가)
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return {...state, ...action.payload};
 
        // 아래 코드를 쓰지 않으면 user가 정의되지 않았다고 에러가 뜬다.
            default:
                return state;    
        }
    },
    user,
    post,
});

export default rootReducer;