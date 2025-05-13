import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const inter = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Surfbreak - Календарь программы',
  description: 'Выберите даты для вашей программы серфинга',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-white min-h-screen text-slate-900`}>
        {children}
      </body>
    </html>
  );
} 
