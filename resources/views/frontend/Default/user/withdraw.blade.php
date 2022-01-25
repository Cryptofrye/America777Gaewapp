<?php
$detect = new \Detection\MobileDetect();
?>
<div class="popup-modal__inner popup-modal__no-title">
    <div class="my-account-icon">&nbsp;</div>
    <div class="cashier-popup-title">@if(!$detect->isMobile() && !$detect->isTablet()) My Account @else Withdraw @endif</div>
    <!-- <span class="micon-close-btn popup-modal__button_type_close fn-close"></span> -->
    <div class="popup-modal__content fn-popup-content">
        <div class="popup-modal__content-inner fn-popup-loader fn-popup-content">
            <div class="page-content fn-page-content">
                <div class="fn-layout-wrapper layout-wrapper" id="main-content">
                    <div class="portlet-layout page-layout layout-100">
                        @if(!$detect->isMobile() && !$detect->isTablet())
                        <div class="navigation-bar-container fn-navigation-bar-container">
                            @include('frontend.Default.user.tab')
                        </div>
                        @endif
                        <div class="navigation-sibling">
                            <div class="layout-column layout-column-1">
                                <div class="portlet-dropzone portlet-column-content fn-portlet-container column-1">
                                    <div class="portlet portlet_name_56 portlet-wrapper fn-portlet-wrapper portlet-boundary portlet-boundary_56_INSTANCE_8jhHr00eAgvG_ portlet-56 portlet_type_border">
                                        <div class="portlet-title fn-portlet-title">
                                            <span class="fn-portlet-title-region portlet-title__text-wrapper"><span class="portlet-title-text">Withdraw</span></span>
                                        </div>
                                        <div class="fn-portlet portlet__content portlet__content_border_show portlet__content_type_56 ">
                                            <article data-web-content-id="Withdraw">
                                                <p>
                                                    <div class="fn-replacer js-replacer change-password-replacer">
                                                    <form id="withdraw-form" class="form form_name_cashier-withdraw" action="{{route('frontend.withdraw.payment')}}" method="GET" target="_blank">
                                                        <div class="form-messages fn-form-messages"></div>
                                                        <div class="form__description">
                                                            <!-- <p>Real balance {{$realBalance}}   Bonus balance {{$bonusBalance}}   Withdrawable {{$realBalance + $bonusBalance}}</p> -->
                                                        </div>
                                                        <label class="mb-2 text-dark">All Withdrawal Methods</label>
                                                        <div class="row" style="margin-bottom: 3em;">
                                                            <div class="btn-group-vertical w-100 payment-button-group">
                                                                <button type="button" class="btn btn-outline-success mb-1 col-sm-6 rounded-0 payment-method-button-element payment-method-button-element-selected" onclick="fn_payment_method_select(this, 'interac')">
                                                                    <img src="{{asset('frontend/Default/img/interac2.png')}}" alt="">
                                                                </button>
                                                                <button type="button" class="btn btn-outline-success ml-2 col-sm-6 rounded-0 payment-method-button-element payment-method-button" onclick="fn_payment_method_select(this, 'crypto')">
                                                                    <img src="{{asset('frontend/Default/img/bitcoin-payment-icon.png')}}" alt="">
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="error-body alert alert-danger alert-dismissible fade show">
                                                            <button type="button" class="close" data-dismiss="alert" onclick="fn_alert_close()">&times;</button>
                                                            <strong>Wrong!</strong> <div class="error-content"></div>
                                                        </div> 
                                                        <div class="form__description"><p>® Trade-mark of Interac Corp. Used under license</p></div>
                                                        <input type="hidden" name="payment_method" id="payment_method" value="interac">
                                                        <div class="form__fieldset">
                                                            <div class="field field_name_amount">
                                                                <div class="field__control" data-currency-symbol="$" data-currency-symbol-length="1">
                                                                    <input id="amount" type="number" inputmode="decimal" name="amount" placeholder="Amount" required>
                                                                </div>
                                                            </div>
                                                            <div class="field deposit-suggestions fn-suggestions-container"></div>
                                                            <div class="field field_name_field1 fn-validate fn-account-id fn-account-key-field text" data-validation-type="field1">
                                                                <div class="field__control">
                                                                    <input id="withdrawemail" type="text" name="email" value="" placeholder="Email" required>
                                                                </div>
                                                            </div>
                                                            <div class="field field_name_field2 fn-validate text" data-validation-type="field2">
                                                                <div class="field__control">
                                                                    <input id="phone" type="text" name="phone" value="" placeholder="Telephone" required>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form__actions">
                                                            <button type="button" class="btn" onClick="fn_withdraw_submit()">Withdraw</button></div>
                                                        <div class="form__fieldset"></div>
                                                    </form>
                                                    </div>
                                                </p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>