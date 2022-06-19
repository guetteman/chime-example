import React from 'react';
import { Meeting } from '@/types';
import { ButtonLink } from './ui/ButtonLink';

interface MeetingListProps {
  meetings: Meeting[];
}

export function MeetingList({ meetings }: MeetingListProps) {
  return (
    <div className="mt-10 divide-y">
      {meetings.map(meeting => (
        <div className="flex items-center justify-between py-4">
          <div>
            <h4 className="text-lg font-bold text-slate-700">
              {meeting.title}
            </h4>
            <span className="text-sm font-bold uppercase text-slate-400">
              {meeting.join_token}
            </span>
          </div>

          <div>
            <ButtonLink href={`/meetings/${meeting.join_token}`}>
              Join
            </ButtonLink>
          </div>
        </div>
      ))}
    </div>
  );
}
