import React from 'react';
import './globals.scss';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], weight: ['400', '600', '700'] });

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
      <body className={`${montserrat.className} bg-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
} 
