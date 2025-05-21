'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-700 mb-6">Страница не найдена</h2>
      <p className="text-slate-600 max-w-md mb-8">
        Извините, но страница, которую вы искали, не существует.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Вернуться на главную
      </Link>
    </div>
  );
} 