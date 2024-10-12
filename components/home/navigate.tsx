'use client';

import {CgProfile} from 'react-icons/cg';

export default function Navigate() {
  const mypage = () => {
    window.location.href = '/MyPage';
    console.log('클릭됨');
  };
  return (
    <CgProfile
      onClick={mypage}
      style={{marginBottom: -6, width: 45, height: 45}}
    />
  );
}
