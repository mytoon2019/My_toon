'use client';

import Image from 'next/image';

export default function Navigate() {
  const mypage = () => {
    window.location.href = '/MyPage';
    console.log('클릭됨');
  };
  return (
    <Image
      onClick={mypage}
      src="/b4.jpg"
      alt="웹툰 이미지"
      width={80}
      height={80}
      style={{marginBottom: -6}}
    />
  );
}
