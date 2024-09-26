'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Navigate() {
  const path = usePathname();
  return (
    <div>
      <Link href="/">{path === '/' ? 'ggg' : 'bbb'}</Link>
      <Link href="/">{path === '/' ? 'ggg' : 'bbb'}</Link>
      <Link href="/">{path === '/' ? 'ggg' : 'bbb'}</Link>
      <Link href="/">{path === '/' ? 'ggg' : 'bbb'}</Link>
    </div>
  );
}
