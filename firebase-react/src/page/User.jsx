import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; 
const User = () => {
    const navigate = useNavigate();
    // 리덕스 혹은 Context에서 받아온 유저값
    const [user, setUser] = useState();
    const loginout = () => {  
        // 리덕스 혹은 Context의 user값을 null로 만들어 로그아웃을 해준다, 
        setUser(null);
        navigate('/');
    }

    // 리덕스 값을 대신에서 임의로 받아오고 있는 값
    const location = useLocation();
    useEffect(()=>{
        console.log(location)
    })
    return (  
        <div>
            <h1>유저페이지입니다</h1>
            <p>{location.state.name}</p>
            <p>{location.state.email}</p>
            <img src={location.state.photo} alt="" />

            hr
            <button onClick={loginout}>로그아웃</button>
        </div>
    );
}
 
export default User;
