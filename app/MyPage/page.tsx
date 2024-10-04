'use client';

import {useState} from 'react';
import './mypage.css';
import Image from 'next/image';

export default function Mypage() {
  const [save_toon] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [saveToon, setsaveToon] = useState(true);
  const titleClick = () => {
    setsaveToon(!saveToon);
  };
  return (
    <div className="Mypage_container">
      {/* 헤더부분 */}
      <header className="MP_header">
        <div className="MP_h_top">
          <h2>MY</h2>
        </div>
        <div className="MP_h_bottom">
          <h4
            className={
              saveToon ? 'MP_h_bottom_title' : 'MP_h_bottom_Nooo_title'
            }
            onClick={titleClick}>
            관심웹툰
          </h4>
          <h4
            className={
              saveToon ? 'MP_h_bottom_Nooo_title' : 'MP_h_bottom_title'
            }
            onClick={titleClick}>
            댓글
          </h4>
        </div>
        {/* 메인부분 */}
        <main className="MP_main">
          {save_toon.map(v => (
            <section className="main_section" key={v}>
              <Image
                src="/w10.jpg"
                className="main_img"
                width={110}
                height={90}
                alt=""
              />
              <span className="main_span">
                <p className="main_span_p">화</p>
                <p className="main_span_pp">평점 / 날짜</p>
              </span>
            </section>
          ))}
        </main>
      </header>
    </div>
  );
}
