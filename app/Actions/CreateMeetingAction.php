<?php

namespace App\Actions;

use App\Models\User;
use App\Models\Meeting;
use Aws\Chime\ChimeClient;
use Illuminate\Support\Str;

class CreateMeetingAction
{
    public function handle(string $title, User $user): Meeting
    {
        $meeting = Meeting::create([
            'title' => $title,
            'join_token' => Str::random(10),
        ]);

        /** @var ChimeClient */
        $chimeClient = app(ChimeClient::class);

        $chimeMeetingResponse = $chimeClient->createMeetingWithAttendees([
            'ClientRequestToken' => $meeting->join_token,
            'ExternalMeetingId' => $meeting->id,
            'Attendees' => [
                ['ExternalUserId' => $user->id],
            ],
        ]);

        $meeting->update([
            'join_data' => [
                'meeting' => $chimeMeetingResponse->get('Meeting'),
                'attendees' => $chimeMeetingResponse->get('Attendees'),
            ],
        ]);

        return $meeting;
    }
}
