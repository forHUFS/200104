import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import "./RegisterPage.css";
function RegisterPage(props) {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");

  const [IdRegex, setIdRegex] = useState(true);
  const [PasswordMatched, setPasswordMatched] = useState(false);

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
      setPasswordMatched(false);
      return alert("비밀번호 재확인");
    } else {
      setPasswordMatched(true);
    }

    let body = {
      id: Id,
      password: Password,
      email: Email,
    };

    registerUser(body); // to action dispatch필요
  };

  const regType1 = /^[A-Za-z0-9+]{4,12}$/;

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
            {regType1.test(Id) ? (
              <input type="checkbox" checked />
            ) : (
              <input type="checkbox" />
            )}{" "}
            {/* 정규식 검증  */}
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
          {PasswordMatched ? <h4>일치</h4> : <h4>불일치</h4>}
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
