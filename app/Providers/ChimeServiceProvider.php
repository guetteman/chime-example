<?php

namespace App\Providers;

use Aws\Chime\ChimeClient;
use Aws\Laravel\AwsFacade as AWS;
use Illuminate\Support\ServiceProvider;

class ChimeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ChimeClient::class, fn () => AWS::createClient('chime'));
    }
}
