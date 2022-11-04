// 작성한 리덕스 모듈을 하나로 묶어서 사용
import { combineReducers } from "redux";

// 작성한 리덕스 모듈을 가져옴
import counter, { counterSaga } from "./counter";
import memo from "./memo";
import news from "./news";

// 리덕스 사가의 내용을 연결해서 사용
import { all } from "redux-saga/effects";

// 작성한 리덕스를 객체로 묶어서 내보냄
const rootReducer = combineReducers({counter, memo, news});

// 모든 사가들을 묶어서 내보낼수 있게 rootSaga를 만들어줌
export function* rootSaga() {
    yield all([counterSaga()]);
}


export default rootReducer