import React, { ReactNode } from 'react';
import { classNames } from '@/utils/utils';
import { Button } from './Button';

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  disabled?: boolean;
  className?: string;
}

export function ButtonLink({
  children,
  href,
  className = '',
  disabled = false,
}: ButtonLinkProps) {
  return disabled ? (
    <Button disabled>{children}</Button>
  ) : (
    <a
      href={href}
      className={classNames(
        'block rounded-md border border-transparent bg-slate-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2',
        className,
      )}
    >
      {children}
    </a>
  );
}
