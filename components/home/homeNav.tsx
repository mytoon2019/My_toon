'use client';

import {IoIosHome} from 'react-icons/io';

export default function HomeNav() {
  const home_direction = () => {
    window.location.href = '/';
  };

  return (
    <IoIosHome
      onClick={home_direction}
      style={{marginBottom: 0, marginLeft: 30, width: 45, height: 45}}
    />
  );
}
