'use Strict';
function playNow()
{
	$('#signup-modal').modal({fadeDuration: 300});
}
$(document).ready(function(){
	/* Google Analytics for tracking traffic */
	window.dataLayer = window.dataLayer || [];
    function gtag(){
        dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'G-YV3LJDK5G6');
	/* --- */
	var deposit_amount;
    var deposit_currency;

	if($("#freespin_signup").val() == "1") {
		/* avoid user have different account to get bonus with fingerprintjs */
		if(!localStorage.getItem("visitorId")){
			initFingerprintJS();
		}

		$("#visitorId").val(localStorage.getItem("visitorId"));
		/* --- */
		$("#signup-modal").modal({
			fadeDuration: 300
		});
	}
	if($("#loginresult").val()){
		/* avoid user have different account to get bonus with fingerprintjs */
		if(!localStorage.getItem("visitorId")){
			initFingerprintJS();
		}
		$("#login_visitorId").val(localStorage.getItem("visitorId"));
		/* --- */

		$("#signin-modal").modal({
            fadeDuration: 300
        });
	}
	var iframe = $('.d-sm-block').contents();
        iframe.find("#choose_pics").click(function(){
               alert("test");
        });
	window.addEventListener('message', function(event){
		if ( event.data.from == 'child'){
		  if ( event.data.type == 'playNow') {
			console.log('Play Now');
		  }
		}
	});

	if($("#registerresult").val()){
		/* avoid user have different account to get bonus with fingerprintjs */
		if(!localStorage.getItem("visitorId")){
			initFingerprintJS();
		}
		$("#visitorId").val(localStorage.getItem("visitorId"));
		/* --- */
		$("#signup-modal").modal({
            fadeDuration: 300
        });
	}

	if($("#forgotpasswordresult").val()){
		$("#forgotpassword-modal").modal({
            fadeDuration: 300
        });
	}

	if($("#resetpasswordresult").val()){
		$("#resetpassword-modal").modal({
            fadeDuration: 300
        });
	}

    fn_deposit=(auth)=>{
        if(!auth){
			/* avoid user have different account to get bonus with fingerprintjs */
			if(!localStorage.getItem("visitorId")){
				initFingerprintJS();
			}
			$("#login_visitorId").val(localStorage.getItem("visitorId"));
			/* --- */
            $("#signin-modal").modal({
                fadeDuration: 300
            });
        }else{
            $("#deposit-modal").modal({
                fadeDuration: 300
            });
        }
    };
	/* modify deposit like canada777.com */
    fn_price=(value, e)=>{
        deposit_amount = value;
        $("#deposit_amount").val(deposit_amount);
        $("input[name='deposit_amount']").val(value);
        $("span#deposit_currency").text($("#deposit_currency option:selected").text());

		if (!$(e).hasClass("modal-selected-deposit-currency")) {
			$(e).addClass("modal-selected-deposit-currency") ;

			$('.modal-content-deposit-amount').map((index, elet) => {
				if(elet !== e){
					if($(elet).hasClass('modal-selected-deposit-currency')){
						$(elet).removeClass("modal-selected-deposit-currency") ;
					}
				}
			})
		}else {

		}
    };

	fn_payment_method_select = (e, type = 'interac') => {
		if (!$(e).hasClass("payment-method-button-element-selected")) {
			if(type == 'crypto'){
				$('.payment-crypto-style').css('display', 'block');
				$('.payment-interac-style').css('display', 'none');
				$.ajax({
					url:"/cryptocurrencies_list",
					type : "POST",
					headers: {
						'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
					},
					dataType:"JSON",
					success:(res)=>{
						if(res.error) {
							$('.error-body').show("slow", function () {
								$('.error-body').css('display', 'block');
							});
							$('.error-content').append('<span>'+ res.error +'</span>');
							return;
						}else {
							var currencies_ = '';
							var currencies_list = res.data;
							if(currencies_list.length > 0){
								for(var i=0;i<currencies_list.length;i++) {
									currencies_+=  '<div class="game-item">\
															<img src="/frontend/Default/ico/'+games[i].name+'.jpg" data-original="/frontend/Default/ico/'+games[i].name+'.jpg" data-image-blur-on-load-update-occured="true" style="filter: opacity(1);"/>\
															<div class="game-overlay">\
																<a href="javascript:fn_playreal_auth()">Play For Real</a>\
																<a href="/game/'+games[i].name+'/pre_go">Play For Fun</a>\
															</div>\
														</div>';
								}
							}
						}
					},
					error:(error)=>{
						console.log(error);
					}
				});
			}else {
				$('.payment-interac-style').css('display', 'block');
				$('.payment-crypto-style').css('display', 'none');
			}
			$(e).addClass("payment-method-button-element-selected") ;
			$("#payment_method").val(type);
			$('.payment-method-button-element').map((index, elet) => {
				if(elet !== e){
					if($(elet).hasClass('payment-method-button-element-selected')){
						$(elet).removeClass("payment-method-button-element-selected") ;
					}
				}
			})
		}else {

		}
	}

	fn_add_currency_type = () => {

	}
	/* --- */

    fn_amount_input=()=>{
        $("span#deposit_currency").text($("#deposit_currency option:selected").text());
    };
    fn_change_currency=()=>{
        $("span#deposit_currency").text($("#deposit_currency option:selected").text());
    };

    fn_deposit_submit=()=> {
		deposit_currency = $("#deposit_currency option:selected").text();
		$("#cur_deposit_currency").val(deposit_currency);
		if($("#deposit_amount").val() && $("#deposit_email").val() && $("#deposit_phone").val()){
			$.ajax({
				url: $("#deposit-form").attr('action'),
				type: $("#deposit-form").attr('method'),
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				},
				data: $("#deposit-form").serialize(),
				success:(data)=>{
					if (data.error) {
						$('.error-body').show("slow", function () {
							$('.error-body').css('display', 'block');
						});
						$('.error-content').innerHTML = data.msg;
						return;
					}
					/* show message but not return so window.open() command will be excuted. */
					if(data.multiDeposit == 1){
						$('.error-body').show("slow", function () {
							$('.error-body').css('display', 'block');
						});
						$('.error-content').innerHTML = data.multimsg;
					}
					/* --- */
					window.open(data.redirectUrl);
				},
				error:()=>{
				},
				complete:()=>{
				}
			});
		}
    };

	fn_withdraw_submit=()=> {
		if($("#amount").val() && $("#withdrawemail").val() && $("#phone").val()){
			if (/^(1)?\d{10}$/.test($("#phone").val())){
				$.ajax({
					url: $("#withdraw-form").attr('action'),
					type: $("#withdraw-form").attr('method'),
					headers: {
						'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
					},
					data: $("#withdraw-form").serialize(),
					success:(data)=>{
						if (data.error) {
							$('.error-body').show("slow", function () {
								$(".error-body").removeClass("alert-success");
								$(".error-body").addClass("alert-danger");
								$('.error-body').css('display', 'block');
								$(".error-body strong").html("Wrong");
							});
							$('.error-content').html('<span>'+ data.msg +'</span>');
							return;
						}
						$('.error-body').show("slow", function () {
							$(".error-body").removeClass("alert-danger");
							$(".error-body").addClass("alert-success");
							$('.error-body').css('display', 'block');
							$(".error-body strong").html("Success");
						});
						$('.error-content').html('<span>'+ "Your withdrawal has been requested." +'</span>');
						$(".form__actions button").prop('disabled', true);
					},
					error:()=>{
					},
					complete:()=>{
					}
				});
			}
			else{
				$('.error-body').show("slow", function () {
					$('.error-body').css('display', 'block');
				});
				$('.error-content').html('<span>'+ "Telephone number is not correct" +'</span>');
				return;
			}
		}
    };

	fn_alert_close = () => {
		$('.error-body').fadeOut("slow", function () {
			$('.error-body').css('display', 'none');

		});
	}

	fn_cashout=()=>{
        $("#cashout-modal").modal({
            fadeDuration: 300
        });
    }
    fn_cashout_submit=()=>{
    	if($("#cashout_amount").val()){
			$.ajax({
				url: $("#cashout-form").attr('action'),
				type: $("#cashout-form").attr('method'),
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				},
				data: $("#cashout-form").serialize(),
				success:(data)=>{
					if (data.error) {
						alert(data.msg);
						return;
					}
					window.open(data.redirectUrl);
				},
				error:()=>{
				},
				complete:()=>{
				}
			});
		}
    }
	fn_forgetPassword=()=>{
        if($("#forget_email").val()){
			$.ajax({
				url: $("#forgot-password-form").attr('action'),
				type: $("#forgot-password-form").attr('method'),
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				},
				data: $("#forgot-password-form").serialize(),
				success:(data)=>{
					$(".alert-danger").hide();
					$(".alert-success").hide();
					if (data.type == 'error') {
						$(".alert-danger").show();
						$(".alert-danger span").html(data.msg);
					}
					else{
						$(".alert-success").show();
						$(".alert-success span").html(data.msg);
					}
					return;
				},
				error:()=>{
				},
				complete:()=>{
				}
			});
		}
    }
	$("img").lazyload({
		effect : "fadeIn"
	});

	$("#menu-toggle").on("click", function(){
		if ($("#menu_checkbox").prop("checked"))
        {
            console.log("true");
            $("#menu_checkbox").prop("checked", false);
        }
		else
        {
            console.log("false");
            $("#menu_checkbox").prop("checked", true);
        }

		$("header").toggleClass("active");
		$("main").toggleClass("active");
		$("body").toggleClass("position-fixed");
	});

	$("#menu_label").on("click", function(e){
		e.stopPropagation();
	});

	/* Sign-in Modal functions*/
	$("a[href='#signin-modal']").on("click", function(e){

		/* avoid user have different account to get bonus with fingerprintjs */
		if(!localStorage.getItem("visitorId")){
			initFingerprintJS();
		}

		$("#login_visitorId").val(localStorage.getItem("visitorId"));
		/* --- */
		$("#signin-modal").modal({
			fadeDuration: 300
		});
	});

	/* Sign-up Modal functions*/
	$("a[href='#signup-modal']").on("click", function(e){
		/* avoid user have different account to get bonus with fingerprintjs */
		if(!localStorage.getItem("visitorId")){
			initFingerprintJS();
		}

		$("#visitorId").val(localStorage.getItem("visitorId"));
		/* --- */
		$("#signup-modal").modal({
			fadeDuration: 300
		});
	});

	/* Forgot Password Modal functions*/
	$("a[href='#forgotpassword-modal']").on("click", function(e){
		$("#forgotpassword-modal").modal({
			fadeDuration: 300
		});
	});

	/* validate signup form */
	jQuery.validator.addMethod("noSpace", function(value, element) {
		return value == '' || value.trim().length != 0;
	}, "No space please and don't leave it empty");

	jQuery.validator.addMethod("checkEmail", function(value, element) {
		var check_format = /\S+@\S+\.\S+/;
		if( check_format.test(value) == true ){
			return check_format.test(value);
		};
	}, "Please enter a valid email address");

	jQuery.validator.addMethod("validateCity", function(value, element) {
		var patternForCity = /^([a-zA-Z][a-zA-Z ]{0,49})$/;
		if(patternForCity.test(value)) {
			return patternForCity.test(value);
		}
	}, "Please enter a valid city address");

	jQuery.validator.addMethod("validatePostalCode", function(value, element) {
		var patternForPostalCode = /^([a-zA-Z][a-zA-Z ]{0,49})$/;
		if(patternForPostalCode.test(value)) {
			return patternForPostalCode.test(value);
		}
	}, "Please enter a valid Postal Code");
	/* -- */
	var form = $("#sign-up-form").show();

    form.validate({
        rules: {
            username: {
                minlength: 2,
            	maxlength: 50,
				noSpace: true
            },
            password: {
                minlength: 8,
				maxlength: 50
            },
			email: {
				required: true,
				checkEmail: true
			},
			first_name: {
                minlength: 2,
            	maxlength: 50,
				noSpace: true
            },
			last_name: {
                minlength: 2,
            	maxlength: 50,
				noSpace: true
            },
			city: {
                minlength: 2,
            	maxlength: 50,
				noSpace: true
            },
			address: {
                minlength: 2,
            	maxlength: 50,
				noSpace: true
            },
			postalCode: {
                minlength: 2,
            	maxlength: 50,
				noSpace: true
            },
        }
    });
	form.steps({
		headerTag: "h3",
		bodyTag: "fieldset",
		transitionEffect: "slideLeft",
		onStepChanging: function (event, currentIndex, newIndex)
		{
	        // Allways allow previous action even if the current form is not valid!
	        if (currentIndex > newIndex)
	        {
	        	return true;
	        }
	        // Forbid next action on "Warning" step if the user is to young
	        if (newIndex === 3 && Number($("#age-2").val()) < 18)
	        {
	        	return false;
	        }

	        // Needed in some cases if the user went back (clean up)
	        if (currentIndex < newIndex)
	        {
	            // To remove error styles
	            form.find(".body:eq(" + newIndex + ") label.error").remove();
	            form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
	        }

			/* check format of phone number  */
			if( currentIndex == 1){
				if (!phoneInput.isValidNumber()) {
					var error = document.querySelector(".invalid-phone");
					error.style.display = "";
					error.innerHTML = 'Invalid phone number';
					form.validate().settings.ignore = ":disabled,:hidden";
					form.valid();
				}else {
					$(".invalid-phone").css('display', 'none');
					form.validate().settings.ignore = ":disabled,:hidden";
	        		return form.valid();
				}
			}else{
				form.validate().settings.ignore = ":disabled,:hidden";
	        	return form.valid();
			}
			/* --- */
	    },
	    onStepChanged: function (event, currentIndex, priorIndex)
	    {
			/* phone number format (000) 000-0000 */
			$('#phoneNumber').attr('placeholder', "(000) 000-0000")
			/*  */
	        // Used to skip the "Warning" step if the user is old enough.
	        if (currentIndex === 2 && Number($("#age-2").val()) >= 18)
	        {
	        	form.steps("next");
	        }
	        // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
	        if (currentIndex === 2 && priorIndex === 3)
	        {
	        	// form.steps("previous");
	        }
	    },
	    onFinishing: function (event, currentIndex)
	    {
	    	form.validate().settings.ignore = ":disabled";
	    	return form.valid();
	    },
	    onFinished: function (event, currentIndex)
	    {
			$('#phoneNumber').val(phoneInput.getNumber());
	    	form.submit();
	    }
	}).validate({
		errorPlacement: function errorPlacement(error, element) { element.before(error); },
		rules: {
			acceptAge: {
				required: true
			}
		}
	});

	/* phone check for sign up */
	if ( $("#phoneNumber").is(":focus") ) {
		$(".invalid-phone").css('display', 'none');
	}

	const phoneField = document.querySelector("#phoneNumber");
	phoneField.addEventListener('focus', (event) => {
		$(".invalid-phone").css('display', 'none');
	});
	phoneField.addEventListener("focusout", (event) => {
		if (!phoneInput.isValidNumber()) {
			var error = document.querySelector(".invalid-phone");
			error.style.display = "";
			error.innerHTML = 'Invalid phone number';
		}else {
			$(".invalid-phone").css('display', 'none');
		}
	});
	const phoneInput = window.intlTelInput(phoneField, {
		preferredCountries: ["ca", "us", "ru", "in", "de"],
		utilsScript:
		"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
	});
	/* --- */

	/* datepicker */
	var date_input=$('input[name="birthday"]'); //our date input has the name "date"
	var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
	date_input.datepicker({
		format: 'mm/dd/yyyy',
		container: container,
		todayHighlight: true,
		autoclose: true,
        startDate: '1910-01-01',
        endDate: new Date(new Date().setFullYear(new Date().getFullYear() - 18))
	});

    // var phones = [{ "mask": "(###) ###-####" }];
    // $('#phoneNumber').inputmask({
    //     mask: phones,
    //     greedy: false,
    //     definitions: { '#': { validator: "[0-9]", cardinality: 1}} });

    $('.top-category-list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 967,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.mobile-top-category-list').slick({
        dots: false,
        infinite: false,
		variableWidth: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
    });

    $(".dropdown-toggle").on("click", function (e) {
		$(".category-toggle-button").toggleClass("show");
		$(".dropdown-menu").toggleClass("show");
	});

	$(".dropdown-menu").on("click", function (e) {
		e.stopPropagation();
	});

	$('.welcomepackage-games').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

	fn_profile=()=>{
        $("#profile-modal").modal({
			fadeDuration: 300
		});

		fn_profile_load('balance');
    };
	fn_side_menu=()=>{
		// $("#side-modal").toggleClass("opened");
		$("#side-modal").modal({
			fadeDuration: 300
		});
	};
	fn_profile_load=(param)=>{
		/* modify deposit UI like canada.com */
		if($('#profile-modal').css("display") === 'none'){
			$("#profile-modal").modal({
				fadeDuration: 300
			});
		}
		/* ---  */
		$.ajax({
			url: '/profile/' + param,
			type: 'GET',
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			},
			success:(data)=>{
				if (data.success) {
					$('#profile-modal>div.profile-modal-modal-content').html(data.html);
					return;
				}
			},
			error:()=>{
			},
			complete:()=>{
			}
		});
	}
	enableButton=()=>{
		$("button[name='updatedetail']").attr('disabled', false);
	};

	changePassword=()=>{
		var oldPass = $("input[name='oldPassword']").val();
		var pass1 = $("input[name='newPassword']").val();
		var pass2 = $("input[name='passwordVerify']").val();
		$(".message.error").css("display", "block");
		if (oldPass == ""){
			$(".message.error").html("Input old password!");
			return;
		}
		if (pass1 == ""){
			$(".message.error").html("Input new password!");
			return;
		}
		if (pass2 == ""){
			$(".message.error").html("Input confirm new password!");
			return;
		}
		if (pass1 != pass2){
			$(".message.error").html("Two password is not matched!");
			return;
		}
		$(".message.error").css("display", "none");
		$.ajax({
			url: '/profile/password/update',
			type: 'POST',
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			},
			data:{
				old_password : oldPass,
				password : pass1
			},
			success:(data)=>{
				if (data.status == 1) {
					location.reload();
				}
			},
			error:(data)=>{
				if (data.responseJSON) {
					if (data.responseJSON.status == -1)
					{
						$(".message.error").html("Invalid old password");
						$(".message.error").css("display", "block");
						return;
					}
				}
			},
			complete:()=>{
			}
		});
	};
	$('.game-item img').each(function() {
		$(this).attr("src", $(this).data("original"));
	});
});

/* avoid user have different account to get bonus with fingerprintjs */
function initFingerprintJS() {
	FingerprintJS.load({token: fingerprintConfig.browser_token})
	.then(fp => fp.get())
	.then(result => {
		if(!result.visitorId) {
			alert("You can not use this website!!!");
		}
		localStorage.setItem("visitorId", result.visitorId);
	});
}
/* --- */

/* show welcome bonus popup when player is not login in 120 s.  */
if($("#auth_status").val() !== "1") {
	lepopup_add_event("onload", {
		item:        "popup-welcome-bonus",
		item_mobile: "popup-welcome-bonus-mobile",
		mode:        "every-time",
		period:      24,
		delay:       120,
		close_delay: 0
	});
}

function open_signup_modal () {

	lepopup_close("popup-welcome-bonus*popup-welcome-bonus-mobile");

	/* avoid user have different account to get bonus with fingerprintjs */
	if(!localStorage.getItem("visitorId")){
		initFingerprintJS();
	}

	$("#visitorId").val(localStorage.getItem("visitorId"));
	/* --- */
	if($('#signup-modal').css('display') == "inline-block") {
		$('#signup-modal').css('display', 'none');
		$("#signup-modal").modal({
			fadeDuration: 300
		});
	}else {
		$("#signup-modal").modal({
			fadeDuration: 300
		});
	}

}

function close_popup () {
	lepopup_close("popup-welcome-bonus*popup-welcome-bonus-mobile");
}
/* --- */

function uploadImg(type){
	$("#imageType").val(type);
	$("#imageFile").click();
	$('#imageFile').change(handleFileSelect);
}
function handleFileSelect (e) {
    var files = e.target.files;
    if (files.length < 1) {
        alert('select a file...');
        return;
    }
    var file = files[0];
    var reader = new FileReader();
    reader.onload = onFileLoaded;
    reader.readAsDataURL(file);
}

function onFileLoaded (e) {
    var match = /^data:(.*);base64,(.*)$/.exec(e.target.result);
    if (match == null) {
        return;
    }
	var type = $("#imageType").val();
	var formData = new FormData();
	formData.append("type", type);
	formData.append("file", $("#imageFile")[0].files[0]);
	formData.append("user_id", $("#imageFile")[0].files[0]);
    $.ajax({
		url: '/profile/verify/submit',
		type: 'POST',
		processData: false,
		contentType: false,
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		},
		data: formData,
		success:(data)=>{
			imageUploadFinish(type);
		},
		error:()=>{
		},
		complete:()=>{
		}
	});
}
function imageUploadFinish(type) {
	var imgTag;
	if (type == 'id'){
		imgTag = $("#addIdImage");
	}
	else if (type == 'address'){
		imgTag = $("#addAddressImage");
	}
	if (imgTag){
		imgTag.attr('src', '/frontend/Page/image/account-verification-submit.png');
		imgTag[0].onclick = function() {
			return false;
		}
	}
}
/* --- */
