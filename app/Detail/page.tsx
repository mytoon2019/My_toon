'use client';

import React, {useState} from 'react';
import './style.css';
import Image from 'next/image';

import {GoPlusCircle} from 'react-icons/go';

import Nav from './nav';

export default function Detail() {
  const [episodes] = useState<number[]>([1, 2, 3, 4, 5]);
  return (
    <div className="detail_contanier">
      <header className="header">
        <div className="detail_header00">
          <Nav />
        </div>
        <div className="detail_header">
          <GoPlusCircle className="FaChevronLeft" />
          <p>관심</p>
        </div>
      </header>
      <section>
        <Image
          src="/w10.jpg"
          width={420}
          height={200}
          alt=""
          className="main_img"
        />
        <span>웹툰 제목</span>
        <p>작가 / 무슨 요일</p>
        <p>웹툰 설명</p>
        <Image
          src="/cookie.jpg"
          width={410}
          height={70}
          className="main_img"
          alt=""
        />
      </section>
      <main>
        <header className="main_header">
          <p>전체 회차</p>
        </header>
        {episodes.map(v => (
          <section className="main_section" key={v}>
            <Image
              src="/w10.jpg"
              className="main_img"
              width={110}
              height={70}
              alt=""
            />
            <span className="main_span">
              <p className="main_span_p">화</p>
              <p className="main_span_pp">날짜</p>
            </span>
          </section>
        ))}
      </main>
    </div>
  );
}
