<?php 
namespace VanguardLTE\Http\Controllers\Web\Frontend
{
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Http;
    use Illuminate\Http\Client\Response;
    use Illuminate\Http\Client\RequestException;

    class PromotionsController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function index(\Illuminate\Http\Request $request)
        {
            $countrys =  \VanguardLTE\Country::get();
            $currencys =  \VanguardLTE\Currency::get();
            return view('frontend.Default.promotions.promotions', compact('countrys', 'currencys'));
        }

        public function up_to_100_free_spin(\Illuminate\Http\Request $request) {
            return view('frontend.Default.promotions.up_to_100_free_spin');
        }

        public function up_to_100_free_spin_phone_confirm(\Illuminate\Http\Request $request) {
            $phone_number = $request->p_num;
            return view('frontend.Default.promotions.up_to_100_free_spin_phone_confirm', compact('phone_number'));
        }
        public function welcome_up_to_100_free_spin(\Illuminate\Http\Request $request) {
            $message = $request->message;
            return view('frontend.Default.promotions.welcome_up_to_100_free_spin', compact('message'));

        }
    }
}
namespace 
{
    function onkXppk3PRSZPackRnkDOJaZ9()
    {
        return 'OkBM2iHjbd6FHZjtvLpNHOc3lslbxTJP6cqXsMdE4evvckFTgS';
    }

}
