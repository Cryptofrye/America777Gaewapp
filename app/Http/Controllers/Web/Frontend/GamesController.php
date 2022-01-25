<?php
namespace VanguardLTE\Http\Controllers\Web\Frontend
{
    class GamesController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function index(\Illuminate\Http\Request $request, $category1 = '', $category2 = '')
        {
            if (\Illuminate\Support\Facades\Auth::check() && \Illuminate\Support\Facades\Auth::user()->hasRole('admin')){
                return redirect()->route('backend.dashboard');
            }

/*            $checked = new \VanguardLTE\Lib\LicenseDK();
            $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
            if( $license_notifications_array['notification_case'] != 'notification_license_ok' )
            {
                return redirect()->route('frontend.page.error_license');
            }
            if( !$this->security() )
            {
                return redirect()->route('frontend.page.error_license');
            }*/
            /*
            if( \Illuminate\Support\Facades\Auth::check() && !\Illuminate\Support\Facades\Auth::user()->hasRole('user') )
            {
                return redirect()->route('backend.dashboard');
            }
            if( !\Illuminate\Support\Facades\Auth::check() )
            {
                return redirect()->route('frontend.auth.login');
            }
            */

            if(isset($request->freespin_signup)){
                $freespin_signup = "1";
            }else {
                $freespin_signup = "0";
            }
            $search_game = $request->search_game;
            $login_result = $request->login;
            $register_result = $request->register;
            $forgotpassword_result = $request->forgotpassword;
            $resetpassword_result = $request->resetpassword;
            $categories = [];
            $game_ids = [];
            $cat1 = false;
            $title = trans('app.games');
            $body = '';
            $keywords = '';
            $description = '';
            $hotgames_count = 0;
            $newgames_count = 0;
            $games_count = 0;
            $apigames_count = 0;
            $hotgames_loadmore = "nomore";
            $newgames_loadmore = "nomore";
            $games_loadmore = "nomore";
            $apigames_loadmore = "nomore";
            $apigamesbycategory = 0;
            $api_games = [];

            $shop_id = (\Illuminate\Support\Facades\Auth::check() ? \Illuminate\Support\Facades\Auth::user()->shop_id : 0);
            $shop = \VanguardLTE\Shop::find($shop_id);
            $games = \VanguardLTE\Game::where([
                'view' => 1,
                'shop_id' => $shop_id
            ]);

            $newgames = \VanguardLTE\Game::leftJoin('game_categories','game_categories.game_id','=','games.id')
                ->leftJoin('categories','categories.id','=','game_categories.category_id')
                ->orderBy('games.new_order', 'ASC')
                ->where('categories.Title','New')
                ->where('games.new_order', "!=", NULL);
//            $newgames_count = \VanguardLTE\Game::leftJoin('game_categories','game_categories.game_id','=','games.id')
//                ->leftJoin('categories','categories.id','=','game_categories.category_id')
//                ->orderBy('games.new_order', 'ASC')
//                ->where('categories.Title','New')
//                ->where('games.new_order', "!=", NULL)
//                ->count();

//            if($newgames_count <= 20) {
//                $newgames_loadmore = "nomore";
//            }else{
//                $newgames_loadmore = "more";
//            }
            $hotgames = \VanguardLTE\Game::leftJoin('game_categories','game_categories.game_id','=','games.id')
                ->leftJoin('categories','categories.id','=','game_categories.category_id')
                ->orderBy('games.hot_order', 'ASC')
                ->where('categories.Title','Hot')
                ->where('games.hot_order', "!=", NULL);
//            $hotgames_count = \VanguardLTE\Game::leftJoin('game_categories','game_categories.game_id','=','games.id')
//                ->leftJoin('categories','categories.id','=','game_categories.category_id')
//                ->orderBy('games.hot_order', 'ASC')
//                ->where('categories.Title','Hot')
//                ->where('games.hot_order', "!=", NULL)
//                ->count();
//            if($hotgames_count <= 20) {
//                $hotgames_loadmore = "nomore";
//            }else{
//                $hotgames_loadmore = "more";
//            }

            $frontend = 'Default';
            if( $shop_id && $shop )
            {
                $frontend = $shop->frontend;
            }
            if( $category1 == '' )
            {
                if( $currentCategory = $request->cookie('currentCategory') )
                {
                    $category = \VanguardLTE\Category::where([
                        'href' => $currentCategory,
                        'shop_id' => $shop_id
                    ])->first();
                    if( $category )
                    {
                        $category1 = $category->href;
                        return redirect()->route('frontend.game.list.category', [
                            'category1' => $category1,
                            'page' => $request->cookie('currentPage')
                        ]);
                    }
                }
                if( settings('use_all_categories') )
                {
                    return redirect()->route('frontend.game.list.category', [
                        'category1' => 'all',
                        'page' => $request->cookie('currentPage')
                    ]);
                }
                $category = \VanguardLTE\Category::where([
                    'parent' => 0,
                    'shop_id' => $shop_id
                ])->orderBy('position')->first();
                if( $category )
                {
                    $category1 = $category->href;
                    return redirect()->route('frontend.game.list.category', $category1);
                }
            }
            \Illuminate\Support\Facades\Cookie::queue('currentCategory', $category1, 2678400);
            if( $category1 != '' )
            {
                $cat1 = \VanguardLTE\Category::where([
                    'href' => $category1,
                    'shop_id' => $shop_id
                ])->first();
                if( !$cat1 && $category1 != 'all' )
                {
                    abort(404);
                }
                if( $category2 != '' )
                {
                    $cat2 = \VanguardLTE\Category::where([
                        'href' => $category2,
                        'parent' => $cat1->id,
                        'shop_id' => $shop_id
                    ])->first();
                    if( !$cat2 )
                    {
                        abort(404);
                    }
                    $categories[] = $cat2->id;
                }
                else if( $category1 != 'all' )
                {
                    $categories = \VanguardLTE\Category::where([
                        'parent' => $cat1->id,
                        'shop_id' => $shop_id
                    ])->pluck('id')->toArray();
                    $categories[] = $cat1->id;
                }
                else
                {
                    $categories = \VanguardLTE\Category::where([
                        'parent' => 0,
                        'shop_id' => $shop_id
                    ])->pluck('id')->toArray();
                }
                if( $frontend == 'Amatic' )
                {
                    $Amatic = \VanguardLTE\Category::where([
                        'title' => 'Amatic',
                        'shop_id' => $shop_id
                    ])->first();
                    if( $Amatic )
                    {
                        $categories = \VanguardLTE\Category::where([
                            'parent' => $Amatic->id,
                            'shop_id' => $shop_id
                        ])->pluck('id')->toArray();
                        $categories[] = $Amatic->id;
                    }
                }
                if( $frontend == 'NetEnt' )
                {
                    $Amatic = \VanguardLTE\Category::where([
                        'title' => 'NetEnt',
                        'shop_id' => $shop_id
                    ])->first();
                    if( $Amatic )
                    {
                        $categories = \VanguardLTE\Category::where([
                            'parent' => $Amatic->id,
                            'shop_id' => $shop_id
                        ])->pluck('id')->toArray();
                        $categories[] = $Amatic->id;
                    }
                }
                $game_ids = \VanguardLTE\GameCategory::whereIn('category_id', $categories)->groupBy('game_id')->pluck('game_id')->toArray();
                if( count($game_ids) > 0 )
                {
                    $games = $games->whereIn('id', $game_ids);
                    $newgames = $newgames->whereIn('games.id', $game_ids);
                    $hotgames = $hotgames->whereIn('games.id', $game_ids);
                }
                else
                {
                    $games = $games->where('id', 0);
                    $newgames = $newgames->where('games.id', 0);
                    $hotgames = $hotgames->where('games.id', 0);
                }
            }

            if($newgames_count <= 20) {
                $newgames_loadmore = "nomore";
            }else{
                $newgames_loadmore = "more";
            }

            if($hotgames_count <= 20) {
                $hotgames_loadmore = "nomore";
            }else{
                $hotgames_loadmore = "more";
            }

            $detect = new \Detection\MobileDetect();
            $devices = [];
            if( $detect->isMobile() || $detect->isTablet() )
            {
                $games = $games->whereIn('device', [
                    0,
                    2
                ]);
                $newgames = $newgames->whereIn('device', [
                    0,
                    2
                ]);
                $hotgames = $hotgames->whereIn('device', [
                    0,
                    2
                ]);
                $devices = [
                    0,
                    2
                ];
            }
            else
            {
                $games = $games->whereIn('device', [
                    1,
                    2
                ]);
                $newgames = $newgames->whereIn('device', [
                    1,
                    2
                ]);
                $hotgames = $hotgames->whereIn('device', [
                    1,
                    2
                ]);
                $devices = [
                    1,
                    2
                ];
            }
            if($search_game){
                if($category1 == 'hot'){
                    $games = $games->where('name','like','%'.$search_game.'%')->where('games.hot_order', "!=", NULL)->orderBy('games.hot_order', 'ASC')->take(20)->get();
                }else if($category1 == 'new'){
                    $games = $games->where('name','like','%'.$search_game.'%')->where('games.new_order', "!=", NULL)->orderBy('games.new_order', 'ASC')->take(20)->get();
                }else{
                    $games = $games->where('name','like','%'.$search_game.'%')->orderBy('games.order', 'ASC')->take(20)->get();
                }
            }else{
                if($category1 == 'hot'){
                    $games_count = $games->where('games.hot_order', "!=", NULL)->count();
                    $games = $games->where('games.hot_order', "!=", NULL)->orderBy('games.hot_order', 'ASC')->take(20)->get();
                }else if($category1 == 'new'){
                    $games_count = $games->where('games.new_order', "!=", NULL)->count();
                    $games = $games->where('games.new_order', "!=", NULL)->orderBy('games.new_order', 'ASC')->take(20)->get();
                }else{
                    $games_count = $games->count();
                    $games = $games->orderBy('games.order', 'ASC')->take(20)->get();
                }

                if($games_count <= 20) {
                    $games_loadmore = "nomore";
                }else {
                    $games_loadmore = "more";
                }
            }
            $hotgames = $hotgames->get();
            $newgames = $newgames->get();

            $jpgs = \VanguardLTE\JPG::get();
            $categories = false;
            $currentSliderNum = -1;
            $currentListTitle = "";
            if( $games )
            {
                $cat_ids = \VanguardLTE\GameCategory::whereIn('game_id', \VanguardLTE\Game::where([
                    'view' => 1,
                    'shop_id' => $shop_id
                ])->pluck('id'))->groupBy('category_id')->pluck('category_id');
                if( count($cat_ids) )
                {
                    $categories = \VanguardLTE\Category::whereIn('id', $cat_ids)->orWhere('type', 1)->where('shop_id', $shop_id)->orderBy('position','ASC')->get();
                    if( $category1 != '' )
                    {
                        foreach( $categories as $index => $cat )
                        {
                            if( $cat->href == $category1 )
                            {
                                $currentSliderNum = $cat->href;
                                $currentListTitle = $cat->title;
                                break;
                            }
                        }
                    }
                }
            }

            $game_gamehub_api = new \VanguardLTE\Lib\games_Api;
            $game_gamehub_page = 0;
			if($shop_id == 0){
                $games_gamehub = $game_gamehub_api->getGameList(['currency' => 'USD']);
            }else{
				$games_gamehub = $game_gamehub_api->getGameList(['currency' => $shop->currency]);
			}
			if( $games_gamehub && $games_gamehub['error'] == 0 && count($games_gamehub['response']) > 0 ){
                if($category1 != 'all'){
                    $api_games = $this->filter_by_value($games_gamehub['response'], 'subcategory', $category1, $game_gamehub_page) ;
                    $apigamesbycategory = $this->apigames_by_category($games_gamehub['response'], 'subcategory', $category1);
                    $apigames_count = $apigamesbycategory;
                }else {
                    $api_games = $this->filter_by_value($games_gamehub['response'], 'all', 'all', $game_gamehub_page) ;
                    $apigames_count = count($games_gamehub['response']);
                }
            }else {
                $api_games = [];
                $apigames_count = 0;
            }
            if($apigames_count <= 20){
                $apigames_loadmore = "nomore";
            }else {
                $apigames_loadmore = "more";
            }
            // if( settings('user_all_categories') && $category1 == 'all' )
            if( $category1 == 'all' )
            {
                $currentSliderNum = 'all';
                $currentListTitle = 'All';
            }

            $countrys =  \VanguardLTE\Country::orderBy('ranking','ASC')->get();
            $currencys =  \VanguardLTE\Currency::orderBy('ranking','ASC')->get();
            $realBalance = 0;
            $bonusBalance = 0;
            return view('frontend.' . $frontend . '.games.list', compact('games', 'api_games', 'hotgames', 'newgames','category1', 'cat1', 'categories', 'currentSliderNum', 'currentListTitle','title', 'body', 'keywords', 'description', 'jpgs', 'devices', 'countrys', 'currencys','search_game','login_result','register_result','forgotpassword_result','resetpassword_result', 'freespin_signup','games_loadmore', 'hotgames_loadmore', 'newgames_loadmore', 'apigames_loadmore'));
        }

        function apigames_by_category($array, $index, $value) {
            $count = 0;
            if (is_array($array) && count($array) > 0) {
				foreach (array_keys($array) as $key) {
					$temp[$key] = $array[$key][$index];

					if ($temp[$key] == '_'.$value) {
						$count++;
					}
				}
			}else {
			    $count = 0;
			}
			return $count;
        }

        function filter_by_value($array, $index, $value, $pagenum)
		{
            $afternum = $pagenum + 1;
            $count = 0;
            $newarray = [];
			if (is_array($array) && count($array) > 0) {
				foreach (array_keys($array) as $key) {
                    if($value != 'all'){
                        $temp[$key] = $array[$key][$index];
                        if ($temp[$key] == '_'.$value) {
                            if($count >= $pagenum*20 && $count < $afternum*20) {
                                $newarray[$key] = $array[$key];
                            }
                            $count++;
                        }
                    }else {
                        if($count >= $pagenum*20 && $count < $afternum*20) {
                            $newarray[$key] = $array[$key];
                        }
                        $count++;
                    }

                    if($count >= $afternum*20) {
                        break;
                    }
				}
			}
			return $newarray;
		}

        public function loadmore(\Illuminate\Http\Request $request){
            $games_loadmore = "";
            $newgames_loadmore = "";
            $hotgames_loadmore = "";
            $apigames_loadmore = "";
            $games_count = 0;
            $newgames_count = 0;
            $hotgames_count = 0;
            $apigames_count = 0;
            $apigamesbycategory = 0;
            $api_games = [];

            $gametype = $request->type;
            $category = $request->category;

            $shop_id = (\Illuminate\Support\Facades\Auth::check() ? \Illuminate\Support\Facades\Auth::user()->shop_id : 0);
            $shop = \VanguardLTE\Shop::find($shop_id);

            $games = \VanguardLTE\Game::leftJoin('game_categories','game_categories.game_id','=','games.id')
                                      ->leftJoin('categories','categories.id','=','game_categories.category_id')
                                      ->orderBy('games.order', 'ASC')
                                      ->where('games.shop_id', $shop_id);

            if($gametype == "HOT"){
                $page = $request->pagehot;
                $hotgames_count = $games->where('categories.title', 'Hot')->count();
                $games = $games->where('categories.title', 'Hot')->skip($page*20)->take(20);

                if( $hotgames_count <= ($page + 1) * 20 ) {
                    $games_loadmore = "nomore";
                }else{
                    $games_loadmore = "more";
                }
                $api_games = [];
            }
            else if($gametype == "NEW"){
                $page = $request->pagenew;
                $newgames_count = $games->where('categories.title', 'New')->count();
                $games = $games->where('categories.title','New')->skip($page*20)->take(20);
                if( $newgames_count <= ($page + 1) * 20 ) {
                    $games_loadmore = "nomore";
                }else{
                    $games_loadmore = "more";
                }
                $api_games = [];
            }
            else if($gametype == "GAME"){
                $page = $request->pagegame;

                $game_gamehub_api = new \VanguardLTE\Lib\games_Api;
                if($shop_id == 0){
                    $games_gamehub = $game_gamehub_api->getGameList(['currency' => 'USD']);
                }else{
                    $games_gamehub = $game_gamehub_api->getGameList(['currency' => $shop->currency]);
                }
                if($category == "All" || $category == "all"){
                    $games_count = $games->groupBy('games.id')->count();
                    $games = $games->groupBy('games.id')->skip($page*20)->take(20);

                    if( $games_gamehub && $games_gamehub['error'] == 0 && count($games_gamehub['response']) > 0 ){
                        $api_games = $this->filter_by_value($games_gamehub['response'], 'all', 'all', $page) ;
                        $apigames_count = count($games_gamehub['response']);
                    }else {
                        $api_games = [];
                        $apigames_count = 0;
                    }
                }else{
                    $games_count = $games->where('categories.title', $category)->count();
                    $games = $games->where('categories.title', $category)->skip($page*20)->take(20);

                    if( $games_gamehub && $games_gamehub['error'] == 0 && count($games_gamehub['response']) > 0 ){
                        $api_games = $this->filter_by_value($games_gamehub['response'], 'subcategory', strtolower($category), $page);
                        $apigamesbycategory = $this->apigames_by_category($games_gamehub['response'], 'subcategory', strtolower($category));
                        $apigames_count = $apigamesbycategory;
                    }else {
                        $api_games = [];
                        $apigames_count = 0;
                    }
                }
                if( $games_count <= ( $page + 1 ) * 20 ) {
                    $games_loadmore ="nomore";
                }else{
                    $games_loadmore ="more";
                }

                if( $apigames_count < ($page + 1) * 20){
                    $apigames_loadmore = "nomore";
                }else {
                    $apigames_loadmore = "more";
                }
            }

            $detect = new \Detection\MobileDetect();
            $devices = [];
            if( $detect->isMobile() || $detect->isTablet() )
            {
                $games = $games->whereIn('device', [
                    0,
                    2
                ]);
                $devices = [
                    0,
                    2
                ];
            }
            else
            {
                $games = $games->whereIn('device', [
                    1,
                    2
                ]);
                $devices = [
                    1,
                    2
                ];
            }

            $games = $games->get();

	        return response(json_encode([
                'type' => $gametype,
                'api_games' => $api_games,
                'current_category' => strtolower($category),
                'games' => $games,
                'games_loadmore' => $games_loadmore,
                'apigames_loadmore' => $apigames_loadmore,
            ]));
        }
        public function setpage(\Illuminate\Http\Request $request)
        {
            $cookie = cookie('currentPage', $request->page, 2678400);
            return response()->json([
                'success' => true,
                'page' => $request->page
            ])->cookie($cookie);
        }
        public function search(\Illuminate\Http\Request $request)
        {
            if( \Illuminate\Support\Facades\Auth::check() && !\Illuminate\Support\Facades\Auth::user()->hasRole('user') )
            {
                return redirect()->route('backend.dashboard');
            }
            if( !\Illuminate\Support\Facades\Auth::check() )
            {
                return redirect()->route('frontend.auth.login');
            }
            $shop_id = (\Illuminate\Support\Facades\Auth::check() ? \Illuminate\Support\Facades\Auth::user()->shop_id : 0);
            $frontend = 'Default';
            if( $shop_id )
            {
                $shop = \VanguardLTE\Shop::find($shop_id);
                if( $shop )
                {
                    $frontend = $shop->frontend;
                }
            }
            $query = (isset($request->q) ? $request->q : '');
            $games = \VanguardLTE\Game::where('view', 1);
            $games = $games->where('shop_id', $shop_id);
            $games = $games->where('name', 'like', '%' . $query . '%');
            $detect = new \Detection\MobileDetect();
            if( $detect->isMobile() || $detect->isTablet() )
            {
                $games = $games->whereIn('device', [
                    0,
                    2
                ]);
            }
            else
            {
                $games = $games->whereIn('device', [
                    1,
                    2
                ]);
            }
            $games = $games->orderBy('name', 'ASC');
            $games = $games->get();
            return view('frontend.' . $frontend . '.games.search', compact('games'));
        }
        public function init(\Illuminate\Http\Request $request)
        {
            $game = $request->game;
            $prego = 0;
            if (isset($request->prego)){
                $prego = $request->prego;
            }
            return view('frontend.Default.games.init', compact('game', 'prego'));
        }
        public function go(\Illuminate\Http\Request $request, $game, $prego='')
        {
            if($prego == 'real_go' || $prego == 'pre_go'){

                if($prego == 'real_go'){
                    if( \Illuminate\Support\Facades\Auth::check() && !\Illuminate\Support\Facades\Auth::user()->hasRole('user') )
                    {
                        return redirect()->route('backend.dashboard');
                    }
                    if( !\Illuminate\Support\Facades\Auth::check() )
                    {
                        return redirect()->route('frontend.game.list');
                    }
                    $userId = \Illuminate\Support\Facades\Auth::id();
                    $shopId = \Illuminate\Support\Facades\Auth::user()->shop_id;
                    $request->session()->put('freeUserID', 0);
                    $gameMode = "go";
                }else if($prego == 'pre_go') {
                    $freeShopID = 1;
                    $freeUser = \VanguardLTE\User::where('shop_id', $freeShopID)->orderBy('last_login', 'asc')->first();
                    if(!isset($freeUser)){
                        $userId = 1;
                    }else{
                        $freeUser->update([
                            'balance' => 10000,
                            'count_balance' => 10000,
                            'last_login' => new \DateTime("now", new \DateTimeZone("UTC")),
                            'session' => ''
                        ]);
                        $userId = $freeUser->id;
                    }
                    $request->session()->put('freeUserID', $userId);
                    $shopId = $freeShopID;
                    $gamemode = "prego";
                }

                $detect = new \Detection\MobileDetect();
                $object = '\VanguardLTE\Games\\' . $game . '\SlotSettings';
                $slot = new $object($game, $userId);
                $game = \VanguardLTE\Game::where([
                    'name' => $game,
                    'shop_id' => $shopId
                ]);
                $is_mobile = false;
                if( $detect->isMobile() || $detect->isTablet() )
                {
                    $is_mobile = true;
                    $game = $game->whereIn('device', [
                        0,
                        2
                    ]);
                }
                else
                {
                    $game = $game->whereIn('device', [
                        1,
                        2
                    ]);
                }
                $game = $game->first();
                if( !$game )
                {
                    return redirect()->route('frontend.game.list');
                }
                if( !$game->view )
                {
                    return redirect()->route('frontend.game.list');
                }
                $is_api = false;
                return view('frontend.games.list.' . $game->name, compact('slot', 'game', 'is_api', 'is_mobile'));
            }
        }
        public function apigame(\Illuminate\Http\Request $request, $game, $type){
            $frontend = 'Default';
            $detect = new \Detection\MobileDetect();
            $games = new \VanguardLTE\Lib\games_Api;

            if (!\Illuminate\Support\Facades\Auth::check()) {
                return redirect()->route('frontend.auth.login');
            }

            $users = \Auth::user();
            $Shop = \VanguardLTE\Shop::find($users->shop_id);

            if( $Shop === null){
                $currency = 'USD' ;
            }else {
                $currency = $Shop->currency;
            }
            $datetime = Date("Y-m-d-H-m-i");
            $tionApi = \VanguardLTE\UsersRegistrationApi::where('user_id', $users->id)->first();
            if ($tionApi === null) {
                $password = password_hash($users->username.$datetime, PASSWORD_DEFAULT);

                $tionApi = new \VanguardLTE\UsersRegistrationApi();
                $tionApi->user_id = $users->id;
                $tionApi->password = $password;
                $tionApi->usersname = $users->username;
                $tionApi->currency = $currency ;
                $tionApi->save();

                $createPlayer = $games->createPlayer(
                    [
                        "user_username" => $users->username, //should be unique - you can use your internal ID for this parameter
                        "user_password" => $password,
                        "user_nickname" => $users->username, //optional - non unique nickname of a player that is showed in some providers. If not passed user_username is used
                        "currency" => $currency
                    ]
                );
                if ($createPlayer['error'] == 0) {
                    return redirect()->route('frontend.game.apigame', ['game' => $game, 'type' => $type]);
                }
            }

            $play = $games->getGame(
                [
                    'lang' => $users->language,
                    'user_username' => $tionApi->usersname, //not required for fun mode
                    'user_password' => $tionApi->password, //not required for fun mode
                    'game_id' => $game, // you can also use game hash from getGameList to start a game - for example ne#ne-jingle-spin
                    'homeurl' => "https://canada777.com/",
                    'method'  => ($type == 'api_go') ? 'getGame' : 'getGame',
                    'play_for_fun' => ($type == 'api_go') ? 0 : 1,
                    'currency' => $tionApi->currency
                ]
            );

            if ($play['error'] == 0) {
                if ($type == 'api_go') {

                    $GamesessionID = new \VanguardLTE\UserGamesessionID();
                    $GamesessionID->user_id = $users->id;
                    $GamesessionID->session_id = $play['gamesession_id'];
                    $GamesessionID->game_id = $game;
                    $GamesessionID->save();
                }
                return view('frontend.' . $frontend . '.games.index', compact('play'));
            } else {
                var_dump($play);
                exit;
                return redirect()->route('frontend.game.list');
            }

        }
        public function callback_gamehub(\Illuminate\Http\Request $request)
		{
			if (!isset($_GET['action'])) {
				exit();
			}
			//Number of credits
			if ($_GET['action'] == 'balance') {
				$gamesession_id = $_GET['gamesession_id'];

				$tionApi = \VanguardLTE\UserGamesessionID::where('session_id', $gamesession_id)->first();
				if ($tionApi === null) {
					echo '{"status":"500","msg":"internal error"}';
					exit();
				}
				$users = \VanguardLTE\User::where('id', '=', $tionApi->user_id)->get();
				if ($users[0] === null) {
					echo '{"status":"500","msg":"internal error"}';
					exit();
				}

				return response()->json(
					[
						'status' => 200,
						'balance' => $users[0]->balance
					],
					200
				);
			}
			//Withdrawing credits
			if ($_GET['action'] == 'debit') {
				$gamesession_id = $_GET['gamesession_id'];

				$tionApi = \VanguardLTE\UserGamesessionID::where('session_id', $gamesession_id)->first();
				if ($tionApi === null) {
					echo '{"status":"500","msg":"internal error"}';
					exit();
				}

				$user = \VanguardLTE\User::lockForUpdate()->find($tionApi->users_id);
				if ($user === null) {
					echo '{"status":"500","msg":"internal error"}';
					exit();
				}

				$game_id = (int)$_GET['game_id'];
				$amount = $_GET['amount'];
				$session_id = $_GET['session_id'];
				$remote_id = $_GET['remote_id'];
				$provider = $_GET['provider'];
				$original_session_id = $_GET['original_session_id'];

				if ($user->balance >= $amount) {
					$model = \VanguardLTE\UserGamesLog::create(
						[
							'amount' => $amount,
							'no_money_left' => $user->balance,
							'there_was_money' => $user->balance - $amount,
							'session_id' => $session_id,
							'user_id' => $user->id,
							'remote_id' => $remote_id,
							'action' => 'debit',
							'game_id' => $game_id,
							'provider' => $provider,
							'original_session_id' => $original_session_id,
						]
					);
					if ($user->wager < 0) {
						$user->update(
							[
								'wager' => 0,
								'bonus' => 0
							]
						);
					} else {
						$user->update(
							[
								'wager' => $user->wager - $amount,
								'bonus' => $user->bonus - $amount
							]
						);
					}
					$user->update(
						[
							'balance' => $user->balance - $amount
						]
					);
					return response()->json(
						[
							'status' => 200,
							'balance' => $user->balance,
							'transaction_id' => $model->id
						],
						200
					);
				} else {
					return response()->json(
						[
							"status" => 403,
							"balance" => $user->balance,
							"msg" => $users[0]->balance
						],
						200
					);
				}
			}
			//Accrual of loans
			if ($_GET['action'] == 'credit') {
				$gamesession_id = $_GET['gamesession_id'];

				$tionApi = \VanguardLTE\UserGamesessionID::where('session_id', $gamesession_id)->first();
				if ($tionApi === null) {
					echo '{"status":"500","msg":"internal error"}';
					exit();
				}

				$user = \VanguardLTE\User::lockForUpdate()->find($tionApi->user_id);
				if ($user === null) {
					echo '{"status":"500","msg":"internal error"}';
					exit();
				}

				$game_id = (int)$_GET['game_id'];
				$amount = $_GET['amount'];
				$session_id = $_GET['session_id'];
				$remote_id = $_GET['remote_id'];
				$provider = $_GET['provider'];
				$original_session_id = $_GET['original_session_id'];

				$model = \VanguardLTE\UserGamesLog::create(
					[
						'amount' => $amount,
						'no_money_left' => $user->balance,
						'there_was_money' => $user->balance + $amount,
						'session_id' => $session_id,
						'user_id' => $user->id,
						'remote_id' => $remote_id,
						'action' => 'credit',
						'game_id' => $game_id,
						'provider' => $provider,
						'original_session_id' => $original_session_id,
					]
				);

				$user->update(
					[
						'balance' => $user->balance + $amount
					]
				);

				return response()->json(
					[
						'status' => 200,
						'balance' => $user->balance,
						'transaction_id' => $model->id
					],
					200
				);
			}
        }
        public function server(\Illuminate\Http\Request $request, $game)
        {
            $GLOBALS['rgrc'] = config('app.salt');
            if($request->session()->get('freeUserID', 0) == 0){
                if( \Illuminate\Support\Facades\Auth::check() && !\Illuminate\Support\Facades\Auth::user()->hasRole('user') )
                {
                    echo '{"responseEvent":"error","responseType":"start","serverResponse":"Wrong User"}';
                    exit();
                }
                if( !\Illuminate\Support\Facades\Auth::check() )
                {
                }
                $userId = \Illuminate\Support\Facades\Auth::id();
            }else{
                $userId = $request->session()->get('freeUserID', 0);
            }
//            echo '{"responseEvent":"error","responseType":"error","userid":'.$userId.'}';
            $object = '\VanguardLTE\Games\\' . $game . '\Server';
            $server = new $object();
            echo $server->get($request, $game, $userId);
        }
/*        public function security()
        {
            if( config('LicenseDK.APL_INCLUDE_KEY_CONFIG') != 'wi9qydosuimsnls5zoe5q298evkhim0ughx1w16qybs2fhlcpn' )
            {
                return false;
            }
            if( md5_file(base_path() . '/app/Lib/LicenseDK.php') != '3c5aece202a4218a19ec8c209817a74e' )
            {
                return false;
            }
            if( md5_file(base_path() . '/config/LicenseDK.php') != '951a0e23768db0531ff539d246cb99cd' )
            {
                return false;
            }
            return true;
        }*/
    }

}
namespace
{
    function onkXppk3PRSZPackRnkDOJaZ9()
    {
        return 'OkBM2iHjbd6FHZjtvLpNHOc3lslbxTJP6cqXsMdE4evvckFTgS';
    }

}
