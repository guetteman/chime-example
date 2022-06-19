import React from 'react';
import { Meeting } from '@/types';

interface MeetingPageProps {
  meeting: Meeting;
}

export default function MeetingPage({ meeting }: MeetingPageProps) {
  return <h1>{meeting.title}</h1>;
}
