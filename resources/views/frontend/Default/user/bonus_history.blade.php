<?php
$detect = new \Detection\MobileDetect();
?>
<div class="popup-modal__inner popup-modal__no-title">
    <div class="my-account-icon">&nbsp;</div>
    <div class="cashier-popup-title">@if(!$detect->isMobile() && !$detect->isTablet()) My Account @else Bonus History @endif</div>
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
                                        <h3>Free Spins History</h3>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered" id="freespins_history_table" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th style="width:20%" scope="col">Date</th>
                                                <th style="width:20%" scope="col">Game</th>
                                                <th style="width:10%" scope="col">Free Spins</th>
                                                <th style="width:10%" scope="col">Remaining<br/>Free Spins</th>
                                                <th style="width:10%" scope="col">Win</th>
                                                <th style="width:10%" scope="col">Wager<br/>Need</th>
                                                <th style="width:10%" scope="col">Remaining<br/>Wager</th>
                                                <th style="width:10%" scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @if(isset($welcomepackage_history) && count($welcomepackage_history))
                                            @foreach($welcomepackage_history as $history)
                                            @if(date('Y-m-d', strtotime($history->started_at)) < date('Y-m-d'))
                                            <tr class="text-muted">
                                            @elseif(date('Y-m-d', strtotime($history->started_at)) > date('Y-m-d'))
                                            <tr class="text-dark">
                                            @else
                                            <tr class="text-primary">
                                            @endif
                                                @if($history->day == 1)
                                                <td>{{date('Y-m-d', strtotime($history->started_at))}}<br/>{{$history->day}}st Day</td>
                                                @elseif($history->day == 2)
                                                <td>{{date('Y-m-d', strtotime($history->started_at))}}<br/>{{$history->day}}nd Day</td>
                                                @elseif($history->day == 3)
                                                <td>{{date('Y-m-d', strtotime($history->started_at))}}<br/>{{$history->day}}rd Day</td>
                                                @else
                                                <td>{{date('Y-m-d', strtotime($history->started_at))}}<br/>{{$history->day}}th Day</td>
                                                @endif
                                                <td>{{$history->name}}</td>
                                                <td>{{$history->freespin}}</td>
                                                <td>{{$history->remain_freespin}}</td>
                                                <td>{{$history->win}}</td>
                                                <td>{{$history->wager}}</td>
                                                <td>{{$history->wager-$history->wager_played}}</td>
                                                @if(date('Y-m-d', strtotime($history->started_at)) < date('Y-m-d'))
                                                <td>Expired</td>
                                                @elseif(date('Y-m-d', strtotime($history->started_at)) > date('Y-m-d'))
                                                <td>Comming</td>
                                                @else
                                                <td>Today</td>
                                                @endif
                                            </tr>
                                            @endforeach
                                            @endif
                                        </tbody>
                                    </table>
                                </div>
                                <hr class="divider"></hr>
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3>Bonus History</h3>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered" id="bonus_history_table" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th style="width:30%" scope="col">Date</th>
                                                <th style="width:30%" scope="col">Deposit Number</th>
                                                <th style="width:10%" scope="col">Deposit</th>
                                                <th style="width:10%" scope="col">Bonus</th>
                                                <th style="width:10%" scope="col">Wager<br/>Need</th>
                                                <th style="width:20%" scope="col">Remaining<br/>Wager</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @if(isset($bonus_history) && count($bonus_history))
                                            @foreach($bonus_history as $history)
                                            @if($history->wager_played == $history->wager)
                                            <tr class="text-muted">
                                            @elseif($history->wager_played == 0)
                                            <tr class="text-dark">
                                            @else
                                            <tr class="text-primary">
                                            @endif
                                                <td>{{$history->created_at}}</td>
                                                @if($history->deposit_num == 1)
                                                <td>1st Deposit</td>
                                                @elseif($history->deposit_num == 2)
                                                <td>2nd Deposit</td>
                                                @elseif($history->deposit_num == 3)
                                                <td>3rd Deposit</td>
                                                @else
                                                <td>{{$history->deposit_num}}th Deposit</td>
                                                @endif
                                                <td>{{$history->deposit}}</td>
                                                <td>{{$history->bonus}}</td>
                                                <td>{{$history->wager}}</td>
                                                <td>{{$history->wager-$history->wager_played}}</td>
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