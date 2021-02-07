import React from "react";
import "./LoginPage.css";
function LoginPage() {
  return (
    <div>
      <form className="log-in-form">
          <input type="string" placeholder="로그인" />
        <br/>
          <input type="password" placeholder="Password" />
        
        <span>
        <a href="#" className="myButton">로그인</a>
        </span>
        <p className="text-center">
            <span>회원가입</span>

            <span style={{position:"relative", marginLeft:"40px"}}>
          <a href="#">아이디/비밀번호 찾기</a>
            </span>
            
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
