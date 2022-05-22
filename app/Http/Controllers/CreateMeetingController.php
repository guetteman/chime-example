<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Actions\CreateMeetingAction;
use Illuminate\Support\Facades\Auth;

class CreateMeetingController extends Controller
{
    public function __invoke(Request $request, CreateMeetingAction $createMeetingAction)
    {
        $createMeetingAction->handle(
            title: $request->input('title'),
            user: Auth::user(),
        );

        redirect(route('home'));
    }
}
