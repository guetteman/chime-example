import React, { FormEvent } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Logo } from '@/components/icons/Logo';
import { TextInput } from '@/components/ui/TextInput';
import { Button } from '@/components/ui/Button';

export default function RegisterPage() {
  const { data, setData, post } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/register');
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 h-[740px] w-[740px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-400" />
      <div className="absolute bottom-0 right-0 h-[740px] w-[740px] translate-x-1/2 translate-y-1/2 rounded-full bg-slate-700" />
      <div className="relative w-full max-w-sm">
        <Logo className="mx-auto h-8" />
        <h2 className="mt-4 text-center text-3xl font-bold text-slate-700">
          Sign up and try
        </h2>

        <form className="mt-8 space-y-6" onSubmit={submit}>
          <TextInput
            id="name"
            label="Name"
            placeholder="Jon Doe"
            value={data.name}
            onChange={e => setData('name', e.target.value)}
          />

          <TextInput
            id="email"
            label="Email address"
            type="email"
            placeholder="jon@doe.com"
            value={data.email}
            onChange={e => setData('email', e.target.value)}
          />

          <TextInput
            id="password"
            label="Password"
            type="password"
            placeholder="*********"
            value={data.password}
            onChange={e => setData('password', e.target.value)}
          />

          <TextInput
            id="password_confirmation"
            label="Password confirmation"
            type="password"
            placeholder="*********"
            value={data.password_confirmation}
            onChange={e => setData('password_confirmation', e.target.value)}
          />

          <div>
            <Button type="submit" className="flex w-full justify-center">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
