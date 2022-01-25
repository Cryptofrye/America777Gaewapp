<?php
$detect = new \Detection\MobileDetect();
?>
<div class="popup-modal__inner popup-modal__no-title">
    <div class="my-account-icon">&nbsp;</div>
    <div class="cashier-popup-title">@if(!$detect->isMobile() && !$detect->isTablet()) My Account @else Payment History @endif</div>
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
                                        <h3>Payments</h3>
                                    </div>
                                </div>
                                <div class="row my-2">
                                    <div class="col-md-12">
            {{--                            <div class="code-input-content py-4 px-5 mt-2 border border-secondary rounded bg-light">--}}
            {{--                                <div class="form-inline">--}}
            {{--                                    <div class="form-group">--}}
            {{--                                        <label for="currency">Currency</label>--}}
            {{--                                        <select class="form-control ml-2" id="currency">--}}
            {{--                                            <option>1</option>--}}
            {{--                                            <option>2</option>--}}
            {{--                                            <option>3</option>--}}
            {{--                                            <option>4</option>--}}
            {{--                                            <option>5</option>--}}
            {{--                                        </select>--}}
            {{--                                    </div>--}}
            {{--                                    <div class="form-group ml-4">--}}
            {{--                                        <label for="action">Action</label>--}}
            {{--                                        <select class="form-control ml-2" id="action">--}}
            {{--                                            <option>1</option>--}}
            {{--                                            <option>2</option>--}}
            {{--                                            <option>3</option>--}}
            {{--                                            <option>4</option>--}}
            {{--                                            <option>5</option>--}}
            {{--                                        </select>--}}
            {{--                                    </div>--}}
            {{--                                    <div class="form-group ml-4">--}}
            {{--                                        <label for="action">Status</label>--}}
            {{--                                        <select class="form-control ml-2" id="status">--}}
            {{--                                            <option>1</option>--}}
            {{--                                            <option>2</option>--}}
            {{--                                            <option>3</option>--}}
            {{--                                            <option>4</option>--}}
            {{--                                            <option>5</option>--}}
            {{--                                        </select>--}}
            {{--                                    </div>--}}
            {{--                                    <button type="submit" class="btn btn-primary ml-4">Filter</button>--}}
            {{--                                </div>--}}
            {{--                            </div>--}}
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered" id="payment_history_table" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th style="width: 40%" scope="col">Date</th>
                                            <th style="width: 20%" scope="col">Status</th>
                                            <th style="width: 20%" scope="col">Payment System</th>
                                            <th style="width: 20%" scope="col">Type</th>
                                            <th style="width: 20%" scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @if(isset($payment_history) && count($payment_history))
                                        @foreach($payment_history as $history)
                                        <tr>
                                            <td>{{ $history->created_at }}</td>
                                            <td>
                                                @php

                                                if($history->status == 1)
                                                    echo "Confirm";
                                                else
                                                    echo "Unconfirm";
                                                @endphp
                                            </td>
                                            <td>{{ $history->system }}</td>
                                            <td>{{ $history->type }}</td>
                                            <td>{{ abs($history->summ) }}</td>
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