@extends('frontend.Default.layouts.app')

@section('title', 'Page Title')

@section('content')
  
 
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <title>Canada777 | Register</title>
    <link rel="icon" type="image/x-icon" href="/frontend/userdashboard/assets/img/favicon.ico"/>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap" rel="stylesheet">
    <link href="/frontend/userdashboard/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="/frontend/userdashboard/assets/css/plugins.css" rel="stylesheet" type="text/css" />
    <link href="/frontend/userdashboard/assets/css/authentication/form-1.css" rel="stylesheet" type="text/css" />
    <!-- END GLOBAL MANDATORY STYLES -->    
    <link rel="stylesheet" type="text/css" href="/frontend/userdashboard/assets/css/forms/theme-checkbox-radio.css">
    <link rel="stylesheet" type="text/css" href="/frontend/userdashboard/assets/css/forms/switches.css">
</head>
<body class="form">

    <div class="form-container">
        <div class="form-form">
            <div class="form-form-wrap">
                <div class="form-container">
                    <div class="form-content">

                        <h1 class="">Get started now</h1>
                        <p class="signup-link" style="margin-bottom:1px !important;">Already have an account? <a href="/login">Log in</a></p>
                        <form class="text-left" action="{{ route('frontend.auth.register.post') }}" method="POST">
                            {{ csrf_field() }}
                            <div class="form">

                                <div id="username-field" class="field-wrapper input">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    <input id="username" name="username" type="text" class="form-control" placeholder="Username">
                                    @if($errors->has('username'))
                                        <div class="error"><p class="help-block">{{ $errors->first('username') }}</p></div>
                                    @endif
                                </div>
                                
                                <div id="phone-field" class="field-wrapper input">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    <input id="phone" name="phone" type="text" class="form-control" placeholder="Phone">
                                </div>
                                <div id="email-field" class="field-wrapper input">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                                    <input id="email" name="email" type="text" value="" placeholder="Email">
                                    @if($errors->has('email'))
                                    <div class="error"><p class="help-block">{{ $errors->first('email') }}</p></div>
                                    @endif
                                
                                </div>
                                <div id="password-field" class="field-wrapper input mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    <input id="password" name="password" type="password" value="" placeholder="Password">
                                </div>
                                <div class="field-wrapper terms_condition">
                                    <div class="n-chk new-checkbox checkbox-outline-primary">
                                        <label class="new-control new-checkbox checkbox-outline-primary">
                                          <input type="checkbox" class="new-control-input">
                                          <span class="new-control-indicator"></span><span>I agree to the <a href="javascript:void(0);">  terms and conditions </a></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="d-sm-flex justify-content-between">
                                    <div class="field-wrapper toggle-pass">
                                        <p class="d-inline-block">Show Password</p>
                                        <label class="switch s-primary">
                                            <input type="checkbox" id="toggle-password" class="d-none">
                                            <span class="slider round" style="padding-bottom: 10px; !important;"></span>
                                        </label>
                                        
                                        @if($errors->has('password'))
                                        <div class="error"><p class="help-block">{{ $errors->first('password') }}</p></div>
                                        @endif
                                    </div>
                                    <div class="field-wrapper">
                                        <button type="submit" class="btn btn-primary" value="">Get Started!</button>
                                    </div>
                                </div>

                            </div>
                        </form>                        
                        <p class="terms-conditions">© 2020 All Rights Reserved. <a href="/">Canada777.com</a> </p>

                    </div>                    
                </div>
            </div>
        </div>
        <div class="form-image">
            <div class="l-image">
            </div>
        </div>
    </div>

    
    <!-- BEGIN GLOBAL MANDATORY SCRIPTS -->
    <script src="/frontend/userdashboard/assets/js/libs/jquery-3.1.1.min.js"></script>
    <script src="/frontend/userdashboard/bootstrap/js/popper.min.js"></script>
    <script src="/frontend/userdashboard/bootstrap/js/bootstrap.min.js"></script>
    
    <!-- END GLOBAL MANDATORY SCRIPTS -->
    <script src="/frontend/userdashboard/assets/js/authentication/form-1.js"></script>

</body>
</html>
 
 
@endsection