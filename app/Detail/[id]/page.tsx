'use client';

import React, {useEffect, useState} from 'react';
import './style.css';
import {API_URL} from '../../../components/api';
import axios from 'axios';
import {GoPlusCircle} from 'react-icons/go';
import {MdOutlineComment} from 'react-icons/md';
import Nav from '../../../components/detail/nav';
import Link from 'next/link';

interface data_type {
  title: string;
  about: string;
  genre: string;
  age: string;
  thumb: string;
  date: string;
  id: string;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //최신 에피소드 가져오기
  const get_latest = async () => {
    const res = await axios.get(`${API_URL}/${id}/episodes`);
    console.log('에피소드', res.data);
    return res.data;
  };

  const [get_latest_episodes, setGet_latest_episodes] = useState<data_type[]>(
    [],
  );

  useEffect(() => {
    const res = async () => {
      const sucess_api = await get_latest();

      if (sucess_api) {
        setGet_latest_episodes(sucess_api);
      }
    };
    res();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const comment_page = (id: string) => {
    window.location.href = `/Detail/${id}/comment`;
    console.log('클릭됨');
  };

  return (
    <div className="detail_contanier">
      <header className="header">
        <div className="detail_header00">
          <Nav />
        </div>
        <div className="detail_header">
          <MdOutlineComment
            className="FaChevronLeft"
            onClick={() => comment_page(id)}
          />
          <p onClick={() => comment_page(id)}>댓글</p>
          <GoPlusCircle className="FaChevronLeft" />
          <p>관심</p>
        </div>
      </header>
      {episodes ? (
        <section className="header_section" key={episodes.title}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
        </section>
      ) : (
        <h1 className="loading">⌛Loading...</h1>
      )}
      <header className="main_header">
        <p>전체 회차</p>
      </header>

      <main>
        {get_latest_episodes.map(v => (
          <Link
            key={v.id}
            href={`https://comic.naver.com/webtoon/detail?titleId=${id}&no=${v.id}`}>
            <section className="main_section" key={v.id}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={v.thumb}
                className="main_img"
                width={110}
                height={70}
                alt=""
              />
              <span className="main_span">
                <p className="main_span_p">{v.title}</p>
                <p className="main_span_pp">{v.date}</p>
              </span>
            </section>
          </Link>
        ))}

        {/* {get_latest_episodes} */}
      </main>
    </div>
  );
}
