import './globals.css';
import type { Metadata } from 'next';
import TRPCReactProvider from './_trpc/TRPCReactProvider';

export const metadata: Metadata = {
  title: 'Fully type-safe monorepo',
  description: 'Generated by NestJS, Next.js, tRPC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
