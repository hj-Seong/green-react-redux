import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../modules/news";

const News = () => {
    const loading = useSelector((state)=>state.news.loading)
    const dispatch = useDispatch();
    return (  
        <div>
            <h1>뉴스를 출력할 공간입니다</h1>
            {
                loading? <p>로딩중입니다</p> :<p>완료하였습니다</p>
            }
            <button onClick={()=>{dispatch(getNews())}}>뉴스 가져오기</button>
        </div>
    );
}
 
export default News;