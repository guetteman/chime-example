import React, { ReactNode } from 'react';
import { classNames } from '@/utils/utils';

interface ButtonProps {
  children: ReactNode;
  type: 'submit' | 'button';
  className?: string;
}

export function Button({ children, type, className = '' }: ButtonProps) {
  return (
    <button
      type={type}
      className={classNames(
        'rounded-md border border-transparent bg-slate-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2',
        className,
      )}
    >
      {children}
    </button>
  );
}
