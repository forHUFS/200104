import React from 'react'

import "./RegisterPage.css"
function RegisterPage() {
    return (
        <>
        <div id="header">
            <a href="https://nid.naver.com/user2/V2Join.nhn?m=agree#agreeBottom" target="_blank" title="네이버 회원가입 페이지 보러가기">이미지</a>
        </div>


        <div id="wrapper">

            <div id="content">

                <div>
                    <h3 className="join_title">
                        <label for="id">아이디</label>
                    </h3>
                    <span className="box int_id">
                        <input type="text" id="id" className="int" maxlength="20"/>
                        <span className="step_url">@naver.com</span>
                    </span>
                    <span className="error_next_box"></span>
                </div>

                <div>
                    <h3 className="join_title"><label for="pswd1">비밀번호</label></h3>
                    <span className="box int_pass">
                        <input type="text" id="pswd1" className="int" maxlength="20"/>
                        <span id="alertTxt">사용불가</span>
이미지                    </span>
                    <span className="error_next_box"></span>
                </div>

                <div>
                    <h3 className="join_title"><label for="pswd2">비밀번호 재확인</label></h3>
                    <span className="box int_pass_check">
                        <input type="text" id="pswd2" className="int" maxlength="20"/>
                        <img src="m_icon_check_disable.png" id="pswd2_img1" className="pswdImg"/>
                    </span>
                    <span className="error_next_box"></span>
                </div>

                <div>
                    <h3 className="join_title"><label for="name">이름</label></h3>
                    <span className="box int_name">
                        <input type="text" id="name" className="int" maxlength="20"/>
                    </span>
                    <span className="error_next_box"></span>
                </div>

                <div>
                    <h3 className="join_title"><label for="yy">생년월일</label></h3>

                    <div id="bir_wrap">
                        <div id="bir_yy">
                            <span className="box">
                                <input type="text" id="yy" className="int" maxlength="4" placeholder="년(4자)"/>
                            </span>
                        </div>

                        <div id="bir_mm">
                            <span className="box">
                                <select id="mm" className="sel">
                                    <option>월</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>                                    
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </span>
                        </div>

                        <div id="bir_dd">
                            <span className="box">
                                <input type="text" id="dd" className="int" maxlength="2" placeholder="일"/>
                            </span>
                        </div>

                    </div>
                    <span className="error_next_box"></span>    
                </div>

                <div>
                    <h3 className="join_title"><label for="gender">성별</label></h3>
                    <span className="box gender_code">
                        <select id="gender" className="sel">
                            <option>성별</option>
                            <option value="M">남자</option>
                            <option value="F">여자</option>
                        </select>                            
                    </span>
                    <span className="error_next_box">필수 정보입니다.</span>
                </div>

                <div>
                    <h3 className="join_title"><label for="email">본인확인 이메일<span className="optional">(선택)</span></label></h3>
                    <span className="box int_email">
                        <input type="text" id="email" className="int" maxlength="100" placeholder="선택입력"/>
                    </span>
                    <span className="error_next_box">이메일 주소를 다시 확인해주세요.</span>    
                </div>

                <div>
                    <h3 className="join_title"><label for="phoneNo">휴대전화</label></h3>
                    <span className="box int_mobile">
                        <input type="tel" id="mobile" className="int" maxlength="16" placeholder="전화번호 입력"/>
                    </span>
                    <span className="error_next_box"></span>    
                </div>


                <div className="btn_area">
                    <button type="button" id="btnJoin">
                        <span>가입하기</span>
                    </button>
                </div>

                

            </div> 

        </div> 
        </>
    )
}

export default RegisterPage
