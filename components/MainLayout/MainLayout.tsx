import Head from 'next/head';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import s from './MainLayout.module.scss'

interface Props {
  title: string,
  children?: ReactNode;
}

export const MainLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Practice project fo next.js learning' />
      </Head>
      <div>
        <nav className={s.nav}>
          <Link href="/" className={s.link}>
            Home
          </Link>
          <Link href="/about" className={s.link}>
            About
          </Link>
          <Link href="/posts" className={s.link}>
            Posts
          </Link>
        </nav>
        <main>
          <div className={s.container}>
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
