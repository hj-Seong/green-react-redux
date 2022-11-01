import { useDispatch, useSelector } from "react-redux";

const CounterBox = () => {
    const number = useSelector((state)=>(state.number))
    const dispatch = useDispatch();
    return (  
        <div>
            <h1>카운트입니다</h1>
            <h3>{number}</h3>
            <button onClick={()=>{ dispatch({type: "increase"}) }} >증가</button>
        </div>
    );
}

export default CounterBox;