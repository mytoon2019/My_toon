import type {Metadata} from 'next';
import './globals.css';
import Image from 'next/image';
import Navigate from '../components/navigate';

export const metadata: Metadata = {
  title: 'Mytoon2019',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="main_footer">
          <Image
            src="/b0.jpg"
            alt="웹툰 이미지"
            width={65}
            height={65}
            style={{marginBottom: 5, marginLeft: 30}}
          />
          <Navigate />
          <Image
            src="/b5.jpg"
            alt="웹툰 이미지"
            width={80}
            height={80}
            style={{marginRight: 30}}
          />
        </footer>
      </body>
    </html>
  );
}
