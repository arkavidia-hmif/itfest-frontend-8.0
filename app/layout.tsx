import React from 'react';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/context/AuthContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="w-full bg-slate-100 flex items-center justify-center">
          <main className="bg-white min-h-screen">
            <AuthProvider>{children}</AuthProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
