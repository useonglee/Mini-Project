export const initialState = {
    // 사용자가 로그인 했는지 안했는지의 여부
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return { 
        type: 'LOG_IN',
        data,
    }
}
// 로그아웃 할 때는 data가 필요없다.
export const logoutAction = () => {
    return { 
        type: 'LOG_OUT',
    }
}

// 이전 스테이트와 액션을 받아서 다음 스테이트를 돌려주는 함수
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {                
                ...state,
                isLoggedIn: true,
                me: action.data,
            };
        case "LOG_OUT":
            return {                
                ...state,
                isLoggedIn: false,
                me: null,
            };
        default: 
        return state;
    }
};

export default reducer;