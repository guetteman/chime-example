<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function __invoke()
    {
        return inertia('Home')->with([
            'meetings' => Auth::user()->meetings,
        ]);
    }
}
