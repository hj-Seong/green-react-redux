// useReducer의 형식과 유사(초기값, 리듀서 함수)
// 초기값
const initalState = {
    number : 0,
}

// dispatch에 들어갈 {type:"액션"} 객체를 함수로 만들어서 내보내줌
export const increase = () => ({type:"increase"}) // 리턴값 객체


// 리듀서 함수
function counter(state = initalState, action) {
    switch(action.type) {
        case "increase":
            return { ...state , number : state.number+1};
        case "decrease":
            return { ...state, number : state.number-1}
        default :
            return state;
    }
}

export default counter;