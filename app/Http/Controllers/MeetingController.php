<?php

namespace App\Http\Controllers;

use Inertia\Response;
use App\Models\Meeting;

class MeetingController extends Controller
{
    public function __invoke(Meeting $meeting): Response
    {
        return inertia('Meeting')->with([
            'meeting' => $meeting,
        ]);
    }
}
