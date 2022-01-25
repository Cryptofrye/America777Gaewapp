<?php

namespace VanguardLTE\Listeners\Login;

use VanguardLTE\Events\User\RequestedPasswordResetEmail;
use VanguardLTE\Notifications\ResetPassword;
use VanguardLTE\Repositories\User\UserRepository;

class SendPasswordResetEmail
{
    /**
     * @var UserRepository
     */
    private $users;

    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    /**
     * Handle the event.
     *
     * @param  Registered  $event
     * @return void
     */
    public function handle(RequestedPasswordResetEmail $event)
    {
        $user = $event->getUser();

        $token = str_random(32);
        \VanguardLTE\PasswordReset::create([
            'username' => $user->username,
            'email' => $user->email,
            'token' => $token
        ]);

        $user->notify(new ResetPassword($token));
    }
}
