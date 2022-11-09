import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/**
 * 인증 관련 API : 필요한 부분있다면 확인하는 용도
 * https://firebase.google.com/docs/reference/js/auth.md#auth_package
 * 
 */



const Login = () => {
  // 이메일과 비밀번호를 가져올 state
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // 이동을 위한 내비게이트
  const navigater = useNavigate();

  // 이메일로 회원가입 또는 로그인을 하기위해서
  // 구글 콘솔의 인증으로 가서 로그인 제공업체중에 이메일을 추가하여야한다.
  // 관련문서는, 파이어베이스 문서에서 인증이라고 검색한후 web에 관하여 찾으면된다
  /**
   * 파이어 베이스 시작하기(이메일사용자) : https://firebase.google.com/docs/auth/web/start
   * 이메일로 가입하기 섹션 : https://firebase.google.com/docs/auth/web/start#sign_up_new_users
   * 
   * 사용자 관리하기 : https://firebase.google.com/docs/auth/web/manage-users
   */

  //import 할 내용 : getAuth, createUserWithEmailAndPassword
  // 이메일로 회원가입하는 함수
  const emailNewUser = (e) => {
		e.preventDefault();

    const auth = getAuth();
    // state에 저장된 email과 password를 전달
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        // 회원가입성공후 가져오는 회원 정보
        const user = userCredential.user;
				
				console.log(user)
        // 받아온 user값 중에서 필요한 값만 리덕스, ContextAPI, state에 저장하여 사용할수 있다.
        navigater("/user", {
          state: {
            name: user.email,
            email: user.email,
            photo: null, // 이메일 회원가입이므로 아직 값이 없다
          },
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
				// 오류를 콘솔로 출력하여 확인
        console.log(errorCode,errorMessage)
      });
  };

  //import 할 내용 : signInWithEmailAndPassword
  // 이메일로 로그인 하는 함수
  const emailLogin = (e) => {
		e.preventDefault();

    const auth = getAuth();
    // state에 저장된 email과 password를 전달
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // 로그인 성공후 가져올 내용
        const user = userCredential.user;

				console.log(user)
        // 받아온 user값 중에서 필요한 값만 리덕스, ContextAPI, state에 저장하여 사용할수 있다.
        navigater("/user", {
          state: {
            name: user.email,
            email: user.email,
            photo: null,  // 이메일 로그인이므로 아직 값이 없다
          },
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
				// 오류를 콘솔로 출력하여 확인
				console.log(errorCode,errorMessage)
      });
  };

  return (
    <div>
      <h1>로그인페이지입니다</h1>
      <form action="">
        <label htmlFor="">이메일</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <label htmlFor="">비밀번호 : 6글자 이상</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <input type="submit" value="회원가입" onClick={emailNewUser} />
        <hr />
        <input type="submit" value="로그인" onClick={emailLogin} />
        <p>
          회원가입을 하지않고 로그인을 하면 로그인이 불가능 합니다 <br />
          오류는 개발자도구-콘솔에서 확인할수 있습니다
        </p>
      </form>

			<hr />

    </div>
  );
};

export default Login;
