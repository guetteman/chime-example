import React from 'react';
import Navbar from '@/components/Navbar';
import { CreateMeetingForm } from '@/components/CreateMeetingForm';
import { ButtonLink } from '@/components/ui/ButtonLink';
import JoinMeetingForm from '@/components/JoinMeetingForm';
import { Meeting } from '@/types';

interface HomeProps {
  meetings: Meeting[];
}

export default function HomePage({ meetings }: HomeProps) {
  return (
    <>
      <Navbar />

      <div className="mx-auto mt-32 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between divide-x">
          <div className="w-3/5 pr-10">
            <h2 className="text-3xl font-bold text-slate-700">
              Create a new meeting
            </h2>

            <CreateMeetingForm />

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
          </div>
          <div className="w-2/5 pl-10">
            <h2 className="text-3xl font-bold text-slate-700">Join meeting</h2>

            <JoinMeetingForm />
          </div>
        </div>
      </div>
    </>
  );
}
