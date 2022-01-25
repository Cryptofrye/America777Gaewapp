<?php
$detect = new \Detection\MobileDetect();
?>
<div class="popup-modal__inner popup-modal__no-title">
    <div class="my-account-icon">&nbsp;</div>
    <div class="cashier-popup-title">@if(!$detect->isMobile() && !$detect->isTablet()) My Account @else Bet History @endif</div>
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
                            <div class="main-section px-4 py-4">
                            @include('frontend.Default.user.transaction_header')
                                <hr class="divider"></hr>
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3>Bets History</h3>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered" id="bet_history_table" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th style="width: 40%" scope="col">Datetime</th>
                                                <th style="width: 20%" scope="col">Balance</th>
                                                <th style="width: 20%" scope="col">Bet</th>
                                                <th style="width: 20%" scope="col">Win</th>
                                                <th style="width: 20%" scope="col">Game</th>
                                                <th style="width: 20%" scope="col">Percent</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @if(isset($bet_history) && count($bet_history))
                                            @foreach($bet_history as $history)
                                            <tr>
                                                <td>{{$history->date_time}}</td>
                                                <td>{{$history->balance}}</td>
                                                <td>{{$history->bet}}</td>
                                                <td>{{$history->win}}</td>
                                                <td>{{$history->game}}</td>
                                                <td>{{$history->percent}}</td>
                                            </tr>
                                            @endforeach
                                            @endif
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>