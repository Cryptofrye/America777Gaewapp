<?php
$detect = new \Detection\MobileDetect();
?>
<div class="popup-modal__inner popup-modal__no-title">
    <div class="my-account-icon">&nbsp;</div>
    <div class="cashier-popup-title">@if(!$detect->isMobile() && !$detect->isTablet()) My Account @else Account Verification @endif</div>
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
                            <div class="layout-column layout-column-1" data-column-id="column-1" id="column-1">
                                <div class="portlet-dropzone portlet-column-content fn-portlet-container column-1">
                                    <div class="portlet portlet-wrapper fn-portlet-wrapper portlet-boundary portlet-56 portlet_type_no-border">
                                        <div class="fn-portlet portlet__content portlet__content_border_none portlet__content_type_56 ">
                                            <article data-web-content-id="ACCOUNT_VERIFICATION">
                                                <div class="generic-text-wrapper">
                                                    <h1>Account Verification</h1>
                                                    <div class="account-verification-wrapper">
                                                        <div class="account-verification-header">
                                                            <p> To verify your account and continue playing at canada777.com, please upload the requested documents below. </p>
                                                        </div>
                                                        <div class="account-verification-body">
                                                            <div class="box-wrapper">
                                                                <div class="line">
                                                                    <div class="box-item" name="idArea">
                                                                        <a href="javascript:javascript:void(0);" target="_self">
                                                                            <img class="box-content" src="/frontend/Page/image/account-verification-id.png">
                                                                            @if(!$idVerified)
                                                                            <img class="plus-icon" id="addIdImage" src="/frontend/Page/image/account-verification-link.png" onClick="uploadImg('id');">
                                                                            @else
                                                                            <img class="plus-icon" id="addIdImage" src="/frontend/Page/image/account-verification-submit.png">
                                                                            @endif
                                                                        </a>
                                                                    </div>
                                                                    <div class="box-item" name="addressArea">
                                                                        <a href="javascript:javascript:void(0);"> 
                                                                            <img class="box-content" src="/frontend/Page/image/account-verification-address.png">
                                                                            @if(!$addressVerified)
                                                                            <img class="plus-icon" id="addAddressImage" src="/frontend/Page/image/account-verification-link.png" onClick="uploadImg('address');">
                                                                            @else
                                                                            <img class="plus-icon" id="addAddressImage" src="/frontend/Page/image/account-verification-submit.png">
                                                                            @endif
                                                                        </a>
                                                                    </div>
                                                                    <input type="file" id="imageFile" style="display:none" accept="image/*">
                                                                    <input type="text" id="imageType" style="display:none">
                                                                </div>
                                                            </div>
                                                            <div class="line-item">
                                                                <p>*Max Size 20MB.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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