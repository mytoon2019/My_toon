import './Login.css';
import {SiGithub} from 'react-icons/si';
import Link from 'next/link';

export default function Login_page() {
  return (
    <div className="Login_container">
      <header>
        <h2>MyToon2019</h2>
      </header>
      <form>
        <main className="Login_main">
          <input
            placeholder="아이디 또는 전화번호"
            className="Login_id"></input>
          <input placeholder="비밀번호" className="Login_pw"></input>
          <button type="submit">로그인</button>
        </main>
      </form>
      <footer>
        <p>©made by Ilseung Koo & Nambin Kim</p>
        <aside>
          <Link href="https://github.com/bun0531">
            <SiGithub className="SiGithub" />
          </Link>
          <Link href="https://github.com/kimnambin">
            <SiGithub />
          </Link>
        </aside>
        <h4>MyToon2019</h4>
      </footer>
    </div>
  );
}
