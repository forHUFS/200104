import React, { useEffect, useState } from "react";
import { List } from "./List";  // 백엔드 db에서 가져오게 변경.
function PostView({ history, location, match }) {
  const [list, setlist] = useState({});
  const num = +match.params.no; // +string을 이용해 숫자형으로 변경

  // const getPostByNum = (num) => {
  //     list
  // }

  useEffect(() => {
    setlist(List.find((e) => e.no === num));  // 가져온 데이터에서 url번호와 맞는 게시글 객체를 가져와 저장.

    console.log(num);
  }, []);
// url번호에 맞는 게시글이 없을 경우 에러 페이지 
  return (
    <div>
      <h1>안녕하세요</h1>
      {list ? <h2>{list.title}</h2> : <h3>없는 게시글</h3>}       
    </div>
  );
}

export default PostView;
