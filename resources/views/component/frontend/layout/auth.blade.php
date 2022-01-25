<div id="signin-modal" class="signin-modal modal">
    <div class="sign-in-modal-content">
        <form id="sign-in-form" class="modal-form" action="{{url('login')}}" method="POST">
            @csrf
            <h2 class="text-center mb-2">Log In</h2>
            <fieldset>
                @if(isset($login_result))
                <input type="hidden" id="loginresult" value="{{$login_result}}">
                    @if($error = $errors->first())
                    <div class="alert alert-danger alert-dismissible fade show">
                        <button type="button" class="close" data-dismiss="alert" onclick="$(this).parent().hide();">&times;</button>
                        <strong>Wrong!</strong> {{$error}}
                    </div>
                    @endif
                @endif
                <!-- avoid user have different account to get bonus with fingerprintjs -->
                <input type="hidden" id="login_visitorId" name="login_visitorId" value="">
                <!--  -->
                <label for="username" class="mb-2">Enter Your Email or Username *</label>
                <input type="text" name="username" placeholder="Email or Username" required/>
                <label for="password" class="mb-2">Enter Your Password *</label>
                <input type="password" name="password" placeholder="Password" required/>
                <a href="#forgotpassword-modal" class="d-block text-center mb-2">Forgot your password?</a>
                <button type="submit" class="btn btn-success btn-lg btn-block mb-2">Login</button>
                <p><a href="#signup-modal" class="btn btn-outline-warning btn-lg btn-block">Sign Up</a></p>
            </fieldset>
        </form>
    </div>
</div>

<div id="signup-modal" class="signup-modal modal">
    <div class="sign-up-modal-content">
        <div class="modal-left-side modal-side">
            <div class="sign-up-header">
                <h2>Sign Up</h2>
                <p>Already have an account? <a href="#signin-modal">Sign In</a></p>
            </div>
            <div class="sign-up-banner">
                <img src="{{asset('frontend/Page/image/sign-up-banner.jpg')}}" />
            </div>
        </div>
        <div class="modal-right-side modal-side">
            <form id="sign-up-form" class="modal-form" action="{{url('register')}}" method="POST">
                @csrf
                <h3 class="fs-subtitle">Login Detail</h3>
                <fieldset>
                    @if(isset($register_result))
                    <input type="hidden" id="registerresult" value="{{$register_result}}">
                        @if($error = $errors->first())
                        <div class="alert alert-danger alert-dismissible fade show">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong>Wrong!</strong> {{$error}}
                        </div>
                        @endif
                    @endif
                    <!-- avoid user have different account to get bonus with fingerprintjs -->
                    <input type="hidden" id="visitorId" name="visitorId" value="">
                    <!--  -->
                    <div class="row">
                        <label for="username">Username *</label>
                        <input type="text" id="username" name="username" placeholder="Username" class="required" />
                    </div>
                    <div class="row">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" placeholder="Email" class="required" />
                    </div>
                    <div class="row">
                        <label for="password">Password *</label>
                        <input type="password" id="password" name="password" placeholder="Password" class="required" />
                    </div>
                    <div class="row">
                        <label for="currency">Currency</label>
                        <select id="currency" name="currency" placeholder="Currency">
                            @if(isset($currencys) && count($currencys))
                            @foreach($currencys as $currency)
                            <option value="{{$currency->id}}">{{$currency->currency}}</option>
                            @endforeach
                            @endif
                        </select>
                    </div>
                </fieldset>

                <h3 class="fs-subtitle">Personal Info</h3>
                <fieldset>
                    <div class="row">
                        <label for="firstName">First Name *</label>
                        <input type="text" id="firstName" name="first_name" placeholder="First Name" class="required" />
                    </div>
                    <div class="row">
                        <label for="lastName">Last Name *</label>
                        <input type="text" id="lastName" name="last_name" placeholder="Last Name" class="required" />
                    </div>
                    <div class="row">
                        <label for="birthday">Date of Birth *</label>
                        <input type="text" id="birthday" name="birthday" placeholder="Date of Birth" class="required" />
                    </div>
                    <div class="row">
                        <label for="phoneNumber">Mobile Phone *</label>
                        <!-- <input type="tel" id="phoneNumber" name="phone" placeholder="Mobile Phone" class="required" /> -->
                        <input id="phoneNumber" type="tel" name="phone" />
                        <div class="invalid-phone" role="alert" style="display: none"></div>
                    </div>
                </fieldset>

                <h3 class="fs-subtitle">Confirm Your Detail</h3>
                <fieldset>
                    <div class="row">
                        <label for="country">Country *</label>
                        <select id="country" name="country" class="selectpicker" data-live-search="true">
                            @if(isset($countrys) && count($countrys))
                            @foreach($countrys as $country)
                            <option value="{{$country->id}}">{{$country->country}}</option>
                            @endforeach
                            @endif
                        </select>
                    </div>
                    <div class="row">
                        <label for="address">Address *</label>
                        <input type="text" id="address" name="address" placeholder="Address" class="required" />
                    </div>
                    <div class="row">
                        <label for="city">City *</label>
                        <input type="text" id="city" name="city" placeholder="City" class="required" />
                    </div>
                    <div class="row">
                        <label for="postalCode">Postal Code *</label>
                        <input type="text" id="postalCode" name="postalCode" class="col-sm-6" placeholder="Postal Code" class="required" required />
                    </div>
                    <div class="row">
                        <label class="checkbox-container">Receive Email Promos
                            <input type="checkbox" id="receiveEmail" name="receiveEmail" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Receive SMS Promos
                            <input type="checkbox" id="receiveSMS" name="receiveSMS" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </fieldset>

                <h3 class="fs-subtitle">Welcome Package</h3>
                <fieldset>
                    <legend>Terms and Conditions</legend>
                    <!-- <legend>Terms and Conditions</legend>

                    <input id="acceptTerms-2" name="acceptTerms" type="checkbox" class="required"> <label for="acceptTerms-2">I agree with the Terms and Conditions.</label> -->

                    <label class="checkbox-container" for="acceptTerms-2">I agree with the Terms and Conditions.
                        <input type="checkbox" id="acceptTerms-2" name="acceptTerms"class="required" />
                        <span class="checkmark"></span>
                    </label>
                    <br>
                    <br>
                    <label class="checkbox-container">I am 18 years old and I accept the Terms and Conditions and Privacy Policy
                        <input type="checkbox" id="acceptAge" name="acceptAge" />
                        <span class="checkmark"></span>
                    </label>
                </fieldset>
            </form>
        </div>
    </div>
</div>

<div id="forgotpassword-modal" class="forgotpassword-modal modal">
    <div class="forgot-password-modal-content">
        <form id="forgot-password-form" class="modal-form" action="{{url('forgotpassword')}}" method="GET" onsubmit="return false">
            @csrf
            <h2 class="text-center mb-2">Forgot your password?</h2>
            <fieldset>
                <div class="alert alert-danger alert-dismissible fade show" style="display:none">
                    <button type="button" class="close" data-dismiss="alert" onClick="$(this).parent().hide();">&times;</button>
                    <strong>Wrong!</strong> <span></span>
                </div>
                <div class="alert alert-success alert-dismissible fade show" style="display:none">
                    <button type="button" class="close" data-dismiss="alert" onClick="$(this).parent().hide();">&times;</button>
                    <span></span>
                </div>
                <label for="email" class="mb-2">Enter Your Email *</label>
                <input type="text" id="forget_email" name="email" placeholder="Email" class="required" />
                <button type="button" class="btn btn-success btn-lg btn-block mb-2" onClick="fn_forgetPassword();">Get New Password</button>
            </fieldset>
        </form>
    </div>
</div>

<div id="resetpassword-modal" class="resetpassword-modal modal">
    <div class="reset-password-modal-content">
        <form id="reset-password-form" class="modal-form" action="{{url('password/reset')}}" method="POST">
            @csrf
            <h2 class="text-center mb-2">Reset your password</h2>
            <fieldset>
                @if(isset($resetpassword_result))
                <input type="hidden" id="resetpasswordresult" value="{{$resetpassword_result}}">
                    @if($error = $errors->first())
                    <div class="alert alert-danger alert-dismissible fade show">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <strong>Wrong!</strong> {{$error}}
                    </div>
                    @endif
                    @if (session('success'))
                        <div class="alert alert-success alert-dismissible fade show">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            {{ session('success') }}
                        </div>
                    @endif
                @endif
                <input type="hidden" name="token" value="{{session('token')}}">
                <label for="username" class="mb-2">Your Username *</label>
                <input type="text" name="username" placeholder="Username" class="required" value="{{session('username')}}" readonly/>
                <label for="email" class="mb-2">Your Email *</label>
                <input type="text" name="email" placeholder="Email" class="required" value="{{session('email')}}" readonly/>
                <label for="password">Password *</label>
                <input type="password" name="password" placeholder="Password" class="required" />
                <label for="password_confirmation">Password Confirmation *</label>
                <input type="password" name="password_confirmation" placeholder="Password Confirmation" class="required" />
                <button type="submit" class="btn btn-success btn-lg btn-block mb-2">Reset Your Password</button>
            </fieldset>
        </form>
    </div>
</div>