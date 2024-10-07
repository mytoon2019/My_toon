'use client';

import Image from 'next/image';

export default function HomeNav() {
  const home_direction = () => {
    window.location.href = '/';
  };
  return (
    <Image
      onClick={home_direction}
      src="/b0.jpg"
      alt="웹툰 이미지"
      width={65}
      height={70}
      style={{marginBottom: 0, marginLeft: 30}}
    />
  );
}
