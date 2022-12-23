import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { modifyBoard } from "../modules/board";

const BoardPage = () => {
    const location =useLocation();
    const [board, setBoard] = useState(location.state);

    // 객체의 속성값을 하나의 함수로 수정할때
    const onChange = (e) => {
        setBoard({...board, [e.target.name]: e.target.value })
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // 수정완료버튼을 눌렸을 실행하는 함수
    const onModifyBoard = () =>{
        dispatch(modifyBoard(board));
        navigate('/board/'+board.boardId);
    }

    
    return ( 
        <div>
            <div>
                <span>{board.boardId}</span>
                    <input onChange={onChange} name="title" value={board.title}></input>
                <div>
                    <button onClick={onModifyBoard}>수정완료</button>
                </div>
                <div>
                    <p>{board.userEmail}</p>
                </div>
                <div>
                    <textarea onChange={onChange} name="content">{board.content}</textarea>
                </div>
                <div>
                    <span>조회수 {board.view}</span>
                    <span>좋아요 {board.like}</span>
                </div>
            </div>
        </div>
    );
}

export default BoardPage;