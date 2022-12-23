import { useState } from "react";
import { useLocation } from "react-router-dom";

const BoardPage = () => {
    const location =useLocation();
    const [board, setBoard] = useState(location.state);

    // 객체의 속성값을 하나의 함수로 수정할때
    const onChange = (e) => {
        setBoard({...board, [e.target.name]: e.target.value })
    }
    
    return ( 
        <div>
            <div>
                <span>{board.boardId}</span>
                    <input onChange={onChange} name="title" value={board.title}></input>
                <div>
                    <button>수정</button>
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