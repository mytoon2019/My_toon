'use client';

import {useEffect, useState} from 'react';
import './main.css';
import Image from 'next/image';
import axios from 'axios';
import {API_URL} from '@/components/api';

// 웹툰 객체의 타입 정의
interface data_type {
  id: string;
  title: string;
  thumb: string;
}

export default function Home() {
  //반복하기 이건 나중에 실제 api로 변경할 것
  const [recom_toons] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [days] = useState<string[]>(['일', '월', '화', '수', '목', '금', '토']);
  const now = new Date();
  const today = days[now.getDay()];

  //api에서 데이터 가져오기
  const get_toon_list = async () => {
    try {
      const res = await axios.get(`${API_URL}/today`);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  //가져온 데이터 담을 공간
  const [show_toon_list, setShow_toon_list] = useState<data_type[]>([]);

  useEffect(() => {
    const data_toon_list = async () => {
      const toon_list = await get_toon_list();

      if (toon_list) {
        setShow_toon_list(toon_list);
      }
    };

    data_toon_list();
  }, []);

  //디테일 페이지로 이동
  const Detail_page = (id: string) => {
    window.location.href = `/Detail/${id}`;
    console.log('클릭됨', id);
  };

  return (
    <div className="Main_container">
      {/* 헤더 부분 */}
      <header className="Main_header">
        <Image
          src="/cookie.jpg"
          alt="쿠키"
          className="cookie_img"
          width={140}
          height={220}
        />
        <p className="header_p">사용자 이름</p>
        <p className="icon_ci"></p>
      </header>
      {/* 추천 부분 */}
      <header className="section_header">
        <span>지금! 인기 급상승</span>
        <p>TOP 8</p>
        {/* <FaChevronRight className="section_icon" /> */}
        <p className="section_icon"></p>
      </header>
      <div className="sec_div">
        {recom_toons.map(v => (
          <section key={v}>
            <article>
              <img
                // onClick={Detail_page}
                src="/w10.jpg"
                alt="웹툰 이미지"
                width={140}
                height={160}
                className="article_Image"
              />

              <footer>
                <h1>{v}</h1>
                <p>웹툰 제목</p>
              </footer>
            </article>
          </section>
        ))}
      </div>
      {/* 이제 메인 부분 */}
      <main>
        <div className="main_div">
          {days.map(v => (
            <header key={v}>
              <p className={today == v ? 'bold_today' : 'Noooooo_bold_today'}>
                {v}
              </p>
            </header>
          ))}
        </div>

        <div className="main_container">
          {/* <section>dasdsa</section> */}
          {/* {recom_toons.map(v => (
            <section key={v}>
              <Image
                onClick={Detail_page}
                src="/w10.jpg"
                alt="웹툰 이미지"
                width={120}
                height={140}
                className="article_Image"
              />
              <p className="toon_p">웹툰제목</p>
            </section>
          ))} */}
          {show_toon_list.map(toon => (
            <section key={toon.id} onClick={() => Detail_page(toon.id)}>
              <img
                src={toon.thumb}
                alt="웹툰 이미지"
                width={120}
                height={140}
                className="article_Image"
                onError={e => {
                  e.currentTarget.src = '';
                }}
              />
              <p className="toon_p">{toon.title}</p>
            </section>
          ))}
        </div>
      </main>
      <footer className="none_footer"></footer>
    </div>
  );
}
