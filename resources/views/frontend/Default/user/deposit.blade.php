<?php
$detect = new \Detection\MobileDetect();
?>
<div class="popup-modal__inner popup-modal__no-title">
    <div class="my-account-icon">&nbsp;</div>
    <div class="cashier-popup-title">@if(!$detect->isMobile() && !$detect->isTablet()) My Account @else Deposit @endif</div>
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
                                            <span class="fn-portlet-title-region portlet-title__text-wrapper"><span class="portlet-title-text">Deposit</span></span>
                                        </div>
                                        <div class="fn-portlet portlet__content portlet__content_border_show portlet__content_type_56 ">
                                            <article data-web-content-id="Deposit">
                                                <p>
                                                    <div class="fn-replacer js-replacer change-password-replacer">
                                                        <form id="deposit-form" class="modal-form container" action="{{route('frontend.deposit.payment')}}" method="GET" target="_blank">
                                                            <input type="hidden" name="payment_type" id="payment_type" value="1"/>
                                                            <input type="hidden" name="payment_method" id="payment_method" value="interac">
                                                            <div class="row mt-4 deposit-content-style">
                                                                <div class="col-sm-5 modal-content-body-card-list">
                                                                    <div class="row">
                                                                        <label for="currency" class="mb-2 mt-4 text-dark">Currency</label>
                                                                        <div class="row add-currency">
                                                                            <select class="mb-4 modal-content-deposit_currency" id="deposit_currency" name="deposit_currency" placeholder="Currency" onchange="fn_change_currency()">
                                                                                @if(isset($currencys) && count($currencys))
                                                                                @foreach($currencys as $currency)
                                                                                <option value="{{$currency->id}}">{{$currency->currency}}</option>
                                                                                @endforeach
                                                                                @endif
                                                                            </select>
                                                                            <button type="button" class="btn btn-secondary modal-content-deposit_currency-add" onclick="fn_add_currency_type()"><i class="fa fa-plus"></i></button>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <label class="mb-2 text-dark">All Payment Methods</label>
                                                                        <div class="row">
                                                                            <!-- <div class="btn-group-vertical w-100 payment-button-group">
                                                                                <button type="button" class="btn btn-outline-success mb-1 col-sm-6 rounded-0 payment-method-button-element payment-method-button-element-selected" onclick="fn_payment_method_select(this)">
                                                                                    <img src="{{asset('frontend/Default/img/interac.png')}}" alt="">
                                                                                </button>
                                                                            </div> -->
                                                                            <div class="btn-group-vertical w-100 payment-button-group">
                                                                                <button type="button" class="btn btn-outline-success mb-1 col-sm-6 rounded-0 payment-method-button-element payment-method-button-element-selected" onclick="fn_payment_method_select(this, 'interac')">
                                                                                    <img src="{{asset('frontend/Default/img/interac.png')}}" alt="">
                                                                                </button>
                                                                                <button type="button" id="crypto_payment" class="btn btn-outline-success ml-2 col-sm-6 rounded-0 payment-method-button-element payment-method-button" onclick="fn_payment_method_select(this, 'crypto')">
                                                                                    <img src="{{asset('frontend/Default/img/bitcoin-payment-icon.png')}}" alt="">
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-7 payment-interac-style">
                                                                    <span class="mb-2 text-dark interac-text">Interac</span><br />
                                                                    <span class="mb-1 text-dark">Amount</span>
                                                                    <div class="btn-group w-100 mb-4 modal-content-deposit-amount-button-group">
                                                                        <button type="button" class="btn btn-success m-1 rounded-0 modal-content-deposit-amount" onclick="fn_price(25, this)">25 $</button>
                                                                        <button type="button" class="btn btn-success m-1 rounded-0 modal-content-deposit-amount" onclick="fn_price(75, this)">75 $</button>
                                                                        <button type="button" class="btn btn-success m-1 rounded-0 modal-content-deposit-amount" onclick="fn_price(125, this)">125 $</button>
                                                                        <button type="button" class="btn btn-success m-1 rounded-0 modal-content-deposit-amount" onclick="fn_price(250, this)">250 $</button>
                                                                        <button type="button" class="btn btn-success m-1 rounded-0 modal-content-deposit-amount" onclick="fn_price(500, this)">500 $</button>
                                                                    </div>
                                                                    <div class="form-group m-0">
                                                                        <!-- <label class="mb-2 text-dark" for="deposit_amount">Amount</label> -->
                                                                        <div class="d-flex align-items-center mb-3 deposit-amount-wrap">
                                                                            <input type="text" id="deposit_amount" name="deposit_amount" class="border-0 m-0 p-0" oninput="fn_amount_input()" />
                                                                            <span id="deposit_currency"></span>
                                                                        </div>
                                                                        <div class="mb-2 text-dark modal-content-deposit-amount-limit">Instantly, min 20, max 3000, Payment CAD</div>
                                                                    </div>

                                                                    <div class="custom-control custom-checkbox mb-4 any-bonus-style">
                                                                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                                        <label class="custom-control-label text-dark p-1" for="customCheck1">I don't want to receive any bonus</label>
                                                                    </div>
                                                                    <div class="error-body alert alert-danger alert-dismissible fade show">
                                                                        <button type="button" class="close" data-dismiss="alert" onclick="fn_alert_close()">&times;</button>
                                                                        <strong>Wrong!</strong> <div class="error-content"></div>
                                                                    </div>
                                                                    <div class="form-group m-0">
                                                                        <label class="form-group text-dark p-1 m-0" for="deposit_email">Email</label>
                                                                        <input type="text" id="deposit_email" name="deposit_email" />
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label class="form-group text-dark p-1 m-0" for="deposit_phone">Phone</label>
                                                                        <input type="text" id="deposit_phone" name="deposit_phone" />
                                                                    </div>
                                                                    <input type="hidden" name="cur_deposit_currency" id="cur_deposit_currency"/>
                                                                    <button type="button" class="btn btn-warning btn-block mb-2 rounded-20 modal-content-deposit-button" onclick="fn_deposit_submit()">Deposit</button>
                                                                </div>
                                                                <!-- cryptoprocessing payment -->
                                                                <div class="col-sm-7 payment-crypto-style" style="display:none">
                                                                    <span class="mb-2 text-dark interac-text">Crypto</span><br />

                                                                    <div class="custom-control custom-checkbox mb-4 any-bonus-style">
                                                                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                                        <label class="custom-control-label text-dark p-1" for="customCheck1">I don't want to receive any bonus</label>
                                                                    </div>
                                                                    <button type="button" class="btn btn-warning btn-block mb-2 rounded-20 modal-content-deposit-button" onclick="fn_deposit_submit()">Deposit</button>
                                                                </div>
                                                            </div>
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
