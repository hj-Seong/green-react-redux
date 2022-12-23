// 초기값
const initalState = [
    {
        boardId : 1,
        userEmail : "grean@naver.com",
        title : "게시물입니다",
        content : "글을 작성하였습니다",
        view : 0,
        like :1,
    },
    {
        boardId : 2,
        userEmail : "grean2@naver.com",
        title : "게시물입니다1",
        content : "작성하였습니다",
        view : 3,
        like :1,
    }
]

// 리듀서 함수
function board (state = initalState, action) {
    switch (action.type) {
        default : 
            return state;
    }
} 

export default board;
