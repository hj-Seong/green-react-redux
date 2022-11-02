// 메모배열 저장
// 초기값
const initalState = {
    memolist : [ 
        {
            id : 1,
            title : "제목",
            text : "내용"
        }
    ],
    id : 2
}
// 액션타입을 함수로 만들어서 내보내줌
// addmemo에서 받아오는 매개변수 memo는 {title: "", text:""}의 형태로 사용할 예정
export const addmemo = (memo) => ({type:"addMemo", payload: memo})



// 리듀서값 작성
function memo(state=initalState, action) {
    switch(action.type) {
        case "addMemo":
            // 새로운 메모생성
            console.log(action.payload)
            const newMemo = {
                id : state.id,
                title : action.payload.title,
                text : action.payload.text
            }
            // 새로운 메모를 가지는 리스트
            const newMemoList = state.memolist.concat(newMemo)
            return { ...state, memolist : newMemoList, id : state.id+1}
        default:
            return state;
    }
}

export default memo;