import { useForm } from '@inertiajs/inertia-react';
import React, { FormEvent } from 'react';
import { Button } from './ui/Button';
import { TextInput } from './ui/TextInput';

export function CreateMeetingForm() {
  const { data, setData, post } = useForm({
    title: '',
  });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/meetings');
  };

  return (
    <form className="mt-8 flex items-end space-x-4" onSubmit={submit}>
      <TextInput
        className="w-full"
        id="title"
        label="Title"
        placeholder="Meeting with Joe"
        value={data.title}
        onChange={e => setData('title', e.target.value)}
      />
      <div>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
