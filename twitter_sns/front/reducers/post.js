export const initialState = {
    mainPosts: [{
        id: 1,
        // 다른 정보들과 합쳐주는 것은 대문자로 시작한다.
        User: {
            id: 1,
            nickname: '날아라 우성',
        },
        content: "첫 번째 게시글 #해시태그 #익스프레스",
        Images: [{
            src: 'https://user-images.githubusercontent.com/75570915/106154982-869ec080-61c3-11eb-9a3a-c387778c327f.jpg',
        }, {
            src: 'https://avatars.githubusercontent.com/u/75570915?v=4',
        },{
            src: 'https://www.codestates.com/assets/codestates-ci.png',
        }], 
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우성님 프사 잘나왔어요~~!!',
        }, {
            User: {
                nickname: 'hero',
            },
            content: '오오오오~~~'
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