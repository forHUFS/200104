import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import "./RegisterPage.css";
function RegisterPage(props) {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");

  // handler 만들기
  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    console.log("submit");
    event.preventDefault();
                                 //정규식으로 아이디 비밀번호 이메일 검증 필요
    if (Password !== ConfirmPassword) {
      return alert("비밀번호 재확인");
    }

    let body = {
      id: Id,
      password: Password,
      email: Email,
    };

    registerUser(body); // to action
  };

  return (
    <>
      <div className="header">헤더</div>
      <div className="content">
        <form onSubmit={onSubmitHandler}>
          <div>
            <h3>
              <label>아이디</label>
            </h3>
            <input type="text" value={Id} onChange={onIdHandler} />
          </div>

          <div>
            <h3 className="join_title">
              <label>비밀번호</label>
            </h3>
            <input
              type="password"
              value={Password}
              onChange={onPasswordHandler}
            />
          </div>

          <div>
            <h3 className="join_title">
              <label>비밀번호 재확인</label>
            </h3>
            <input
              type="password"
              value={ConfirmPassword}
              onChange={onConfirmPasswordHandler}
            />
          </div>

          <div>
            <h3 className="join_title">
              <label>본인확인 이메일</label>
            </h3>
            <input type="email" value={Email} onChange={onEmailHandler} />
          </div>
          <br />
          <input type="submit" value="가입" />
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
