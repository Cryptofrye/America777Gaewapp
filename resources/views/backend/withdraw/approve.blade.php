@extends('backend.layouts.app')

@section('page-title', trans('app.edit_approve'))
@section('page-heading', 'Approve')

@section('content')

  <section class="content-header">
    @include('backend.partials.messages')
  </section>

  <section class="content">
    <div class="box box-default">
      {!! Form::open(['route' => array('backend.withdraw.approve', $approve[0]->id), 'files' => true, 'id' => 'approve-form']) !!}
      <div class="box-header with-border">
        <h3 class="box-title">@lang('app.approve')</h3>
      </div>

      <div class="box-body">
        <div class="row">

        </div>
      </div>

      <div class="box-footer">
        <button type="submit" class="btn btn-primary">
          @lang('app.approve')
        </button>

      </div>
      {!! Form::close() !!}
    </div>
  </section>

@stop