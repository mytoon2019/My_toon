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
      height={65}
      style={{marginBottom: 5, marginLeft: 30}}
    />
  );
}
