import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Memo = () => {
    const memolist = useSelector((state)=>state.memo.memolist);
    // input 태그 2개를 만들어서 useState로 title과 text값 받아오기
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    // useDispatch()를 통해서, 메모가 추가한 새로운 리스트를 생성 > memo.js 모듈생성
    const dispatch = useDispatch();
    const addMemo = useCallback(()=>{}, [])

    return (  
        <div>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={addMemo}>메모</button>
            {memolist[0].title}
        </div>
    );
}

export default Memo;