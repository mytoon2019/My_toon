import {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from '../api';

export default function HomeComponent() {
  interface data_type {
    id: string;
    title: string;
    thumb: string;
  }

  //반복하기 이건 나중에 실제 api로 변경할 것
  const [recom_toons] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [days] = useState<string[]>(['일', '월', '화', '수', '목', '금', '토']);
  const now = new Date();
  const today = days[now.getDay()];

  //api에서 데이터 가져오기
  const get_toon_list = async () => {
    try {
      const res = await axios.get(`${API_URL}/today`);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  //가져온 데이터 담을 공간
  const [show_toon_list, setShow_toon_list] = useState<data_type[]>([]);

  useEffect(() => {
    const data_toon_list = async () => {
      const toon_list = await get_toon_list();

      if (toon_list) {
        setShow_toon_list(toon_list);
      }
    };

    data_toon_list();
  }, []);

  //디테일 페이지로 이동
  const Detail_page = (id: string) => {
    window.location.href = `/Detail/${id}`;
    console.log('클릭됨', id);
  };

  return {recom_toons, days, today, show_toon_list, Detail_page};
}
