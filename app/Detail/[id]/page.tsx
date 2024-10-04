'use client';

import React, {useEffect, useState} from 'react';
import './style.css';
import Image from 'next/image';
import {API_URL} from '../../../components/api';
import axios from 'axios';

import {GoPlusCircle} from 'react-icons/go';

import Nav from './nav';

interface data_type {
  title: string;
  about: string;
  genre: string;
  age: string;
  thumb: string;
}

export default function Detail({
  //id값 가져오기
  params: {id},
}: {
  params: {id: string};
}) {
  console.log('id값은', id);

  //api 가져오기ㅏ
  const get_episodes = async () => {
    try {
      const res = await axios.get(`${API_URL}/${id}`);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  //웹툰 정보는 객체였음....
  const [episodes, setEpisodes] = useState<data_type | null>(null);

  useEffect(() => {
    const res = async () => {
      const episode_list = await get_episodes();

      if (episode_list) {
        setEpisodes(episode_list);
      }
    };
    res();
  }, []);

  //최신 에피소드 가져오기
  // const get_latest = async () => {
  //   const res = await axios.get(`${API_URL}/${id}/episodes`);
  //   return res.data;
  // };

  // const [get_latest_episodes, setGet_latest_episodes] = useState<null>(null);

  // useEffect(() => {
  //   const res = async () => {
  //     const sucess_api = await get_latest();

  //     if (sucess_api) {
  //       setGet_latest_episodes(sucess_api);
  //     }
  //   };
  //   res();
  // });

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
      {episodes ? (
        <section key={episodes.title}>
          <img
            src={episodes.thumb}
            width={410}
            height={200}
            alt=""
            className="main_img"
          />
          <span>{episodes.title}</span>
          <p>{episodes.genre}</p>
          <p>{episodes.about}</p>
          <Image
            src="/cookie.jpg"
            width={410}
            height={70}
            className="main_img"
            alt=""
          />
        </section>
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
      <main>
        <header className="main_header">
          <p>전체 회차</p>
        </header>
        {/* {episodes.map(v => (
          <section className="main_section" key={v.title}>
            <img
              src={v.thumb}
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
        ))} */}
        {/* {get_latest_episodes} */}
      </main>
      <footer className="none_footer"></footer>
    </div>
  );
}
