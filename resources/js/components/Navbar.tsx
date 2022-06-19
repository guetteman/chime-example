import React from 'react';
import { Logo } from './icons/Logo';

export default function Navbar() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex space-x-2 py-4">
        <Logo className="h-6" />
        <span className="text-xl font-bold text-slate-700">Meet</span>
      </div>
    </div>
  );
}
