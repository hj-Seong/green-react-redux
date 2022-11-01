// useReducer의 형식과 유사(초기값, 리듀서 함수)
// 초기값
const initalState = {
    number : 0,
}

// 리듀서 함수
function counter(state = initalState, action) {
    switch(action.type) {
        case "increase":
            return { ...state , number : state.number+1};
        default :
            return state;
    }
}

export default counter;