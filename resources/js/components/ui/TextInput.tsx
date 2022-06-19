import React, { ChangeEvent } from 'react';

interface TextInputProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: 'email' | 'password' | 'text';
  required?: boolean;
  value: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({
  id,
  label,
  placeholder,
  type = 'text',
  required,
  value,
  onChange,
  className = '',
}: TextInputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
