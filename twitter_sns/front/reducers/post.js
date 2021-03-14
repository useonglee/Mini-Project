export const initialState = {
    mainPosts: [{
        id: 1,
        // 다른 정보들과 합쳐주는 것은 대문자로 시작한다.
        User: {
            id: 1,
            nickname: '하이우성',
        },
        content: "첫 번째 게시글 #해시태그 #익스프레스",
        Image: [{
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }], 
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 개정판이 나왔군요~',
        }, {
            User: {
                nickname: 'hero',
            },
            content: '얼른 사고 싶어요!'
        }]
    }],
    // 이미지 업로드할 때 여기에 저장
    imagePaths: [],
    // 게시글 추가 완료 되었을 때, true로 변환
    postAdded: false,
}

// 액션 이름을 상수로 빼준다 => const 값 재활용 가능
const ADD_POST ='ADD_POST';
export const addPost = {
    type: ADD_POST,
}
// 더미데이터
const dummyPost = {
    id: 2,
    content: '더미데이터입니다.', 
    User: {
        id: 1,
        nickname: '하이우성',
    },
    Image: [],
    Comments: [],
};

// 이전 스테이트와 액션을 받아서 다음 스테이트를 돌려주는 함수
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                // 게시글 쓰자마자 바로 위에 올라가게 해준다.
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default: 
            return state;
    }
};

export default reducer;