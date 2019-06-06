<?php

namespace App\Http\Middleware;

use App\Model\UcUser;
use Closure;
use Illuminate\Support\Facades\Auth;
use Request;
use App\Model\User;
class AuthWithToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $apiToken = $request->header('api_token') ? $request->header('api_token') : $request->input('api_token') ;//'81eebbb0318765f6deec54aba98925b2';
        //$apiToken = '3d7096738887b1359c014ad8f7e83330';
        if( !empty($apiToken) && $user = \App\Model\User::findByApiToken($apiToken) ){
            Auth::login($user);
        }
        else{
            Auth::logout();
        }
        return $next($request);
    }
}
