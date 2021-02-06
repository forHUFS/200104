import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { List } from "./List";
import "./Post.css"
function Post() {
  const [list, setList] = useState([]);
  const [perPage, setperPage] = useState(0)  // 시작 페이지는 0 
  useEffect(() => {
    //  getPostList from DB //
    setList(List);
  }, []);

  const changePage = (data) => {
    let selected = data.selected;  // 클릭한 숫자-1이 selected 값
    console.log(list.slice(selected*4, selected*4 +4)); // 4 = 페이지 당 보여줄 게시글 수
    setperPage(selected) 
  };
  return (
    <div>
      <h3>안녕하세요</h3>
      {list.slice(perPage*4, perPage*4+4).map((e, index) => {           {/*slice이용해 페이지에 해당하는 게시글만 map함수 실행*/}
        return (
          <tbody key={index}>
            <td> {e.no} </td>
            <td> </td>
            <td> {e.content} </td>
            <tr />
          </tbody>
        );
      })} {/* 총 페이지 수 = 총 데이터 수  나누기 페이지 당 게시글 수 */}
      <ReactPaginate
        pageCount={Math.ceil(list.length / 4)} 
        breakLabel={"..."}
        pageRangeDisplayed={4}
        onPageChange={changePage} 
        previousLabel={"이전"}
        nextLabel={"다음"}
        containerClassName={"pageContainer"}
        pageClassName={"pageList"}
        previousClassName={"previousBtn"}
        nextClassName={"nextBtn"}
      />
    </div>
  );
}
export default Post;

// 1. 페이지 레이아웃
// 3. pagination
