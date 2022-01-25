@extends('frontend.Default.layouts.app')
@section('slider')
<section class="mainVisualImage hiddAction">
    <ul>
        <li>
            <img class="back slide first" alt="">
            <div class="mvTit02 first" onClick="@if(!Auth::check())javascript:playNow();@endif"></div>
        </li>
        <li>
            <img class="back slide second" alt="">
            <div class="mvTit02 second" onClick="@if(!Auth::check())javascript:playNow();@endif"></div>
        </li>
        <li>
            <img class="back slide third" alt="">
            <div class="mvTit02 third" onClick="@if(!Auth::check())javascript:playNow();@endif"></div>
        </li>
    </ul>
</section>
@endsection
@section('content')
<section id="game-list">
    <!-- GAMES - BEGIN -->
    <div class="section-title">
        <h3>{{$currentListTitle}} Games</h3>
    </div>
    <div class="game-category-section">
        <div class="section-content" id="section-game">
        @if ($games && count($games) > 0)
            @foreach ($games as $key=>$game)
            <div class="game-item">
                <img data-original="{{asset('frontend/Default/ico/')}}/{{$game->name.'.jpg'}}" />
                <div class="game-overlay">
                    @if(Auth::check())
                        @if (strpos($game->name, 'NET') !== false)
                        <a href="{{ route('frontend.game.go.prego', ['game'=>$game->name, 'prego'=>'real_go']) }}">Play For Real</a>
                        @else
                        <a href="{{ route('frontend.game.init', ['game'=>$game->name]) }}">Play For Real</a>
                        @endif
                    @else
                    <a href="javascript:fn_playreal_auth()">Play For Real</a>
                    @endif
                    
                    @if (strpos($game->name, 'NET') !== false)
                    <a href="{{ route('frontend.game.go.prego', ['game'=>$game->name, 'prego'=>'pre_go']) }}">Play For Fun</a>
                    @else
                    <a href="{{ route('frontend.game.init', ['game'=>$game->name, 'prego'=>'1']) }}">Play For Fun</a>
                    @endif
                </div>
                @if($game->label)
                    @if ($game->label == "hot" || $game->label == "new" || $game->label == "exclusive" || $game->label == "top")
                        <div class="bage-game-item"><div class="bage-label bage-label-{{$game->label}}">{{$game->label}}</div></div>
                    @endif
                @endif
            </div>
            @endforeach
        @endif

        @if ($api_games && count($api_games) > 0)
        @foreach ($api_games as $key=> $api_game)
            <div class="game-item api-game-item">
                <img data-original="{{ $api_game['name'] ? $api_game['image_filled'] : '' }}" alt="{{ $api_game['name'] }}" />										
                <div class="game-overlay">
                    @if(Auth::check())
                    <a href="{{ route('frontend.game.apigame', ['game'=>$api_game['id'], 'type'=>'api_go']) }}">Play For Real</a>
                        @if($api_game['play_for_fun_supported'] == 1)
                            <a href="{{ route('frontend.game.apigame', ['game'=>$api_game['id'], 'type'=>'demo_go']) }}" >Play For Fun</a>
                        @endif
                    @else
                    <a href="javascript:fn_playreal_auth()">Play For Real</a>
                        @if($api_game['play_for_fun_supported'] == 1)
                            <a href="javascript:fn_playreal_auth()" >Play For Fun</a>
                        @endif
                    @endif
                </div>
            </div>	
            @endforeach
        @endif
        </div>
    </div>
    @if(!$search_game)
        @if($category1 == "hot" || $category1 == "new")
            @if($games_loadmore == "more")
            <div style="text-align: center; margin: 20px;">
                <button id="btn_loadmore_game" onclick="fn_loadmore('GAME','{{$currentListTitle}}')" class="btn btn-outline-secondary btn-lg">Load More</button>
            </div>
            @endif
        @else
            @if($games_loadmore == "more" || $apigames_loadmore == "more")
            <div style="text-align: center; margin: 20px;">
                <button id="btn_loadmore_game" onclick="fn_loadmore('GAME','{{$currentListTitle}}')" class="btn btn-outline-secondary btn-lg">Load More</button>
            </div>
            @endif
        @endif
    @endif
    @if($currentSliderNum != "hot")
    <div class="section-title">
        <h3>Hot Games</h3>
    </div>
    <div class="game-category-section">
        <div class="section-content" id="section-hot">
        @if ($hotgames && count($hotgames))
            @foreach ($hotgames as $key=>$hotgame)
            <div class="game-item">
                <img data-original="{{asset('frontend/Default/ico/')}}/{{$hotgame->name.'.jpg'}}" />
                <div class="game-overlay">
                    @if(Auth::check())
                    <a href="{{ route('frontend.game.go', ['game'=>$hotgame->name, 'prego'=>'real_go']) }}">Play For Real</a>
                    @else
                    <a href="javascript:fn_playreal_auth()">Play For Real</a>
                    @endif
                    <a href="{{ route('frontend.game.go.prego', ['game'=>$hotgame->name, 'prego'=>'pre_go']) }}">Play For Fun</a>
                </div>
            </div>
            @endforeach
        @endif
        </div>
    </div>
    @if($hotgames_loadmore == "more")
    <div style="text-align: center; margin: 20px;">
        <button id="btn_loadmore_hot" onclick="fn_loadmore('HOT')" class="btn btn-outline-secondary btn-lg">Load More</button>
    </div>
    @endif
    @endif
    @if($currentSliderNum != "new")
    <div class="section-title">
        <h3>New Games</h3>
    </div>
    <div class="game-category-section">
        <div class="section-content" id="section-new">
        @if ($newgames && count($newgames))
            @foreach ($newgames as $key=>$newgame)
            <div class="game-item">
                <img data-original="{{asset('frontend/Default/ico/')}}/{{$newgame->name.'.jpg'}}" />
                <div class="game-overlay">
                    @if(Auth::check())
                    <a href="{{ route('frontend.game.go', ['game'=>$newgame->name, 'prego'=>'real_go']) }}">Play For Real</a>
                    @else
                    <a href="javascript:fn_playreal_auth()">Play For Real</a>
                    @endif
                    <a href="{{ route('frontend.game.go.prego', ['game'=>$newgame->name, 'prego'=>'pre_go']) }}">Play For Fun</a>
                </div>
            </div>
            @endforeach
        @endif
        </div>
    </div>
    @if($newgames_loadmore == "more")
    <div style="text-align: center; margin: 20px;">
        <button id="btn_loadmore_new" onclick="fn_loadmore('NEW')" class="btn btn-outline-secondary btn-lg">Load More</button>
    </div>
    @endif
    @endif
</section>
@endsection
@section('page_bottom')
<script>
    var page_hot = 0;
    var page_new = 0;
    var page_game = 0;
    fn_playreal_auth=()=>{
        $("#signin-modal").modal({
            fadeDuration: 300
        });
    }

    fn_loadmore=(type, category)=>{
        if(type == "HOT"){
            page_hot++;
        }
        else if(type == "NEW"){
            page_new++;
        }
        else if(type == "GAME"){
            page_game++;
        }
        $.ajax({
            url:"{{ route('frontend.loadmore.game') }}",
            type:"GET",
            data:{
                pagehot:page_hot,
                pagenew:page_new,
                pagegame:page_game,
                type:type,
                category:category
            },
            dataType:"JSON",
            success:(data)=>{
                var games = data.games;
                var apigames = data.api_games;
                var section_game = "";
                var games_loadmore = data.games_loadmore;
                var apigames_loadmore = data.apigames_loadmore;
                var cur_category = data.current_category;

                switch (data.type) {
                    case "HOT":
                        if(games_loadmore == "nomore"){
                            $("#btn_loadmore_hot").hide();
                        }
                        break;
                    case "NEW":
                        if(games_loadmore == "nomore"){
                            $("#btn_loadmore_new").hide();
                        }
                    case "GAME":
                        if(cur_category == "hot" || cur_category == "new"){
                            if(games_loadmore == "nomore"){
                                $("#btn_loadmore_game").hide();
                            }
                        }else {
                            if(games_loadmore == "nomore" && apigames_loadmore == "nomore"){
                                $("#btn_loadmore_game").hide();
                            }
                        }
                        break;
                    default:
                        break;
                }

                if(games.length == 0){
                    switch (data.type) {
                        case "HOT":
                            $("#btn_loadmore_hot").hide();
                            break;
                        case "NEW":
                            $("#btn_loadmore_new").hide();
                            break;
                        default:
                            break;
                    }
                }

                if(games.length == 0 && Object.keys(apigames).length == 0){ 
                    if(data.type == "GAME"){
                        $("#btn_loadmore_game").hide();
                        return;
                    }
                }
                if( $("#auth_status").val() != "1" ){
                    if(games.length > 0){
                        for(var i=0;i<games.length;i++) {
                            section_game+=  '<div class="game-item">\
                                                    <img src="/frontend/Default/ico/'+games[i].name+'.jpg" data-original="/frontend/Default/ico/'+games[i].name+'.jpg" data-image-blur-on-load-update-occured="true" style="filter: opacity(1);"/>\
                                                    <div class="game-overlay">\
                                                        <a href="javascript:fn_playreal_auth()">Play For Real</a>\
                                                        <a href="/game/'+games[i].name+'/pre_go">Play For Fun</a>\
                                                    </div>\
                                                </div>';
                        }
                    }
                    if(Object.keys(apigames).length > 0){
                        for( val in apigames) {
                            if(apigames[val].play_for_fun_supported == 1){
                            section_game+=  '<div class="game-item api-game-item">\
                                                    <img src="'+apigames[val].image+'" data-original="'+apigames[val].image+'" data-image-blur-on-load-update-occured="true" style="filter: opacity(1);"/>\
                                                    <div class="game-overlay">\
                                                        <a href="javascript:fn_playreal_auth()">Play For Real</a>\
                                                        <a href="javascript:fn_playreal_auth()">Play For Fun</a>\
                                                    </div>\
                                                </div>';
                            }else{
                            section_game+=  '<div class="game-item api-game-item">\
                                                <img src="'+apigames[val].image+'" data-original="'+apigames[val].image+'" data-image-blur-on-load-update-occured="true" style="filter: opacity(1);"/>\
                                                <div class="game-overlay">\
                                                    <a href="javascript:fn_playreal_auth()">Play For Real</a>\
                                                </div>\
                                            </div>';
                            }
                        }
                    }
                }else {
                    if(games.length > 0){
                        for(var i=0;i<games.length;i++) {
                            section_game+=  '<div class="game-item">\
                                                    <img src="/frontend/Default/ico/'+games[i].name+'.jpg" data-original="/frontend/Default/ico/'+games[i].name+'.jpg" data-image-blur-on-load-update-occured="true" style="filter: opacity(1);"/>\
                                                    <div class="game-overlay">\
                                                        <a href="/game/'+games[i].name+'/real_go">Play For Real</a>\
                                                        <a href="/game/'+games[i].name+'/pre_go">Play For Fun</a>\
                                                    </div>\
                                                </div>';
                        }
                    }
                    if(Object.keys(apigames).length > 0){
                        for( val in apigames) {
                            if(apigames[val].play_for_fun_supported == 1){
                            section_game+=  '<div class="game-item api-game-item">\
                                                    <img src="'+apigames[val].image+'" data-original="'+apigames[val].image+'" data-image-blur-on-load-update-occured="true" style="filter: opacity(1);"/>\
                                                    <div class="game-overlay">\
                                                        <a href="/apigame/'+apigames[val].id+'/api_go">Play For Real</a>\
                                                        <a href="/apigame/'+apigames[val].id+'/demo_go">Play For Fun</a>\
                                                    </div>\
                                                </div>';
                            }else{
                            section_game+=  '<div class="game-item api-game-item">\
                                                <img src="'+apigames[val].image+'" data-original="'+apigames[val].image+'" data-image-blur-on-load-update-occured="true" style="filter: opacity(1);"/>\
                                                <div class="game-overlay">\
                                                    <a href="/apigame/'+apigames[val].id+'/api_go">Play For Real</a>\
                                                </div>\
                                            </div>';
                            }
                        }
                    }
                }

                switch (data.type) {
                    case "HOT":
                        $("#section-hot").append(section_game);
                        break;
                    case "NEW":
                        $("#section-new").append(section_game);
                        break;
                    case "GAME":
                        $("#section-game").append(section_game);
                        break;
                    default:
                        break;
                }

            },
            error:()=>{
                alert("error");
            }
        });
    }
    
</script>
<script type="text/javascript" src="{{asset('frontend/Page/js/jquery.bxslider.min.js')}}"></script>
<script type="text/javascript" src="{{asset('frontend/Page/js/websiting.main.js')}}"></script>
@endsection
