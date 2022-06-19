import React, { useState } from 'react';
import { ButtonLink } from './ui/ButtonLink';
import { TextInput } from './ui/TextInput';

export default function JoinMeetingForm() {
  const [joinToken, setJoinToken] = useState<string>('');
  return (
    <div className="mt-8 flex items-end space-x-4">
      <TextInput
        className="w-full"
        id="join_token"
        label="Join Token"
        placeholder="123SAD87RG"
        value={joinToken}
        onChange={e => setJoinToken(e.target.value)}
      />
      <div>
        <ButtonLink href={`/meetings/${joinToken}`} disabled={!joinToken}>
          Join
        </ButtonLink>
      </div>
    </div>
  );
}
