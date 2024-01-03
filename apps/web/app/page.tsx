'use client';

import styles from './page.module.css';
import { trpc } from 'app/_trpc/client';

export default function Page() {
  const greeting = trpc.greeting.useQuery({ name: 'tom' });

  return (
    <main className={styles.main}>
      <h1>Fully type-safe monorepo</h1>
      <p>{greeting.data?.message}</p>
      <span>
        Powered by{' '}
        <a className={styles.link} href="https://nestjs.com/" target="_blank">
          NestJS
        </a>
        {', '}
        <a className={styles.link} href="https://nextjs.org/" target="_blank">
          Next.js
        </a>
        {', '}
        <a className={styles.link} href="https://trpc.io/" target="_blank">
          tRPC
        </a>
      </span>
    </main>
  );
}
