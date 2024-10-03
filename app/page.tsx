'use client';

import {useState} from 'react';
import './main.css';
import Image from 'next/image';

export default function Home() {
  //반복하기 이건 나중에 실제 api로 변경할 것
  const [recom_toons] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // 22
  // const [webtoon_num] = useState<number[]>([1, 2, 3, 4]);
  const [days] = useState<string[]>(['월', '화', '수', '목', '금', '토', '일']);

  //디테일 페이지로 이동
  const Detail_page = () => {
    window.location.href = '/Detail';
    console.log('클릭됨');
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
              <Image
                onClick={Detail_page}
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
              <p>{v}</p>
            </header>
          ))}
        </div>
        <div className="main_container">
          {/* <section>dasdsa</section> */}
          {recom_toons.map(v => (
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
          ))}
        </div>
      </main>
    </div>
  );
}
