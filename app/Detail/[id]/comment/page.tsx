'use client';

import styled from 'styled-components';
import {FaChevronLeft} from 'react-icons/fa';
import '../style.css';
// import Link from 'next/link';
import {useState} from 'react';

const Comment_page_container = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;
`;

const Header_container = styled.div`
  background-color: #000000;
  padding-left: 20px;
  height: 50px;
`;

const Main_container = styled.div`
  display: flex;
  flex-direction: column;
  height: 620px;
  margin-top: 40px;
  flex-wrap: wrap;
  overflow-y: auto;
  border-top: 1px solid grey;

  &::-webkit-scrollbar {
    width: 430px;
    display: none;
  }
`;

const Detail_page = (id: string) => {
  window.location.href = `/Detail/${id}`;
  console.log('클릭됨', id);
};

export default function Comment_page({
  //id값 가져오기
  params: {id},
}: {
  params: {id: string};
}) {
  console.log('댓글 달 id값은', id);

  const [comment_list] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

  return (
    <Comment_page_container>
      <Header_container>
        {/* <Link href="/Detail/[id]"> */}
        <FaChevronLeft
          className="GoPlusCircle"
          onClick={() => Detail_page(id)}
        />
        {/* </Link> */}
      </Header_container>
      <Main_container>
        {comment_list.map(v => (
          <div className="comment_detail" key={v}>
            <h4
              className="comment_detail_h4
            ">
              {v}
            </h4>
            <p
              className="comment_detail_p
             ">
              여기에 댓글 쓴 내용
            </p>
          </div>
        ))}
      </Main_container>
      <div className="Btn_container">
        <input
          placeholder="댓글을 입력해주세요:)"
          className="btn_input"></input>
        <button className="btn_btn">등록</button>
      </div>
    </Comment_page_container>
  );
}
