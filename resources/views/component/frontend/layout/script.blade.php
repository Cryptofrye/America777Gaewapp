<!-- Remember to include jQuery :) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<!-- jQuery Modal -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>

<!-- jQuery Validation -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.1.62/jquery.inputmask.bundle.js"></script>

<!-- jQuery Steps -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-steps/1.1.0/jquery.steps.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.js"></script>

<!-- Slick Slider Steps -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>
<!-- conflict issue
<script type="text/javascript" src="{{asset('frontend/Page/js/script.js')}}"></script>
 -->
<!-- Crypto Config Json -->
<script type="text/javascript" src="{{asset('frontend/assets/crypto_config.js')}}"></script>
<script type="text/javascript" src="{{asset('frontend/assets/fingerprint_config.js')}}"></script>

<!-- avoid user have different account to get bonus with fingerprintjs -->
<script
    async
    src="https://cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs-pro@3/dist/fp.min.js"
    onload="initFingerprintJS()"
></script>

<!-- integration green popups plugin -->
<script id="lepopup-remote" src="{{asset('/popup/content/plugins/halfdata-green-popups/js/lepopup.js?ver=7.24')}}" data-handler="{{asset('/popup/ajax.php')}}"></script>
<!--  -->
<!-- Google Analytics for tracking traffic -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YV3LJDK5G6"></script>
<!--  -->
<script type="text/javascript" src="{{asset('frontend/Page/js/script.js')}}"></script>

<script id="sbinit" src="{{asset('support/js/main.js')}}"></script>