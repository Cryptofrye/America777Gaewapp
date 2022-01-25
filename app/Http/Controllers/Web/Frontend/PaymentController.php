<?php 
namespace VanguardLTE\Http\Controllers\Web\Frontend
{
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Http;
    use Illuminate\Support\Facades\Log;
    use Illuminate\Http\Client\Response;
    use Illuminate\Http\Client\RequestException;

    class PaymentController extends \VanguardLTE\Http\Controllers\Controller
    {
        /* cryptoprocessing  */
        private $crypto = "https://app.alphapo.net/api/v2";
        private $api_key = "F96EmCRfFv0v2zaAb8mrr08bUNUd12PC";
        private $secret_key = "8p5GHD6m4vQQMb3G7J9b4o7k0rK7CiDZl6lNsfeouICf1oyvrr3lctA3CGWSFZJQ";

        private function createRequestHeaders($params = [])
        {
            $signature = hash_hmac( "sha512", json_encode($params), $this->secret_key );
            return $signature;
        }

        public function crypto_deposit(\Illuminate\Http\Request $request) {
            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => $this->crypto,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_HTTPHEADER => $this->createRequestHeaders(),
            ));

            $response = curl_exec($curl);
            curl_close($curl);
            var_dump(json_decode($response));
        }

        public function cryptocurrencies_list(\Illuminate\Http\Request $request) {
            $params = [
                'visible' => true
            ];

            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => $this->crypto.'/currencies/list',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode(array( 
                    'visible' => true
                )),
                CURLOPT_HTTPHEADER => array(
                    'X-Processing-Key:'.$this->api_key,
                    'X-Processing-Signature:'.$this->createRequestHeaders($params),
                    'Content-Type: application/json',       
                )
            ));

            $response = curl_exec($curl);
            curl_close($curl);
            return $response;
        }
        /* --- */
        public function gigadat(\Illuminate\Http\Request $request)
        {
            set_time_limit(300);
            
            $user = \Auth::user();
            $visitorId = $user->visitor_id;
            $multiAccounts = [];
            $multiDeposit = 0;

            if(\VanguardLTE\User::where(['visitor_id' => $visitorId])->count() > 1 ) {
                $multiAccounts = \VanguardLTE\User::where(['visitor_id' => $visitorId])->get();
                foreach($multiAccounts as $multiAccount) {
                
                    if($user->id != $multiAccount->id){
                        if(\VanguardLTE\Transaction::where(['user_id' => $multiAccount->id])->count() > 0){
                            $multiDeposit = 1;
                        }else{
                            $multiDeposit = 0;
                        }
                    }
                } 
            }
            $userId = $user->id;
            $userName = $user->username;
            $userEmail = $user->email;
            $transactionId = hash('crc32b', rand());
            $type = 'CPI';
                $amount = $request->deposit_amount;
                $email = $request->deposit_email;
                $mobile = $request->deposit_phone;
                $currency = $request->cur_deposit_currency;

            ini_set('display_errors', 1);
            ini_set('display_startup_errors', 1);
            error_reporting(E_ALL);

            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://interac.express-connect.com/api/payment-token/5578ad563e2da4ccf5da8ab02ecf18c1',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode(array( 
                    "userId"=> $userId,
                    "transactionId"=> $transactionId, // merchant defined value
                    "name"=> $userName,
                    "email"=> $email,
                    "site"=> "https://www.canada777.com",
                    "userIp"=> $_SERVER['REMOTE_ADDR'],
                    "mobile"=> $mobile,
                    "currency"=> $currency,
                    "language"=> "en",
                    "amount"=> $amount,
                    "type"=> $type,
                    "hosted"=> true, 
                    "sandbox" => false,
                )),
                CURLOPT_HTTPHEADER => array(
                    'Authorization: Basic '.base64_encode(sprintf('%s:%s', 'eed58d71-35a5-4071-8860-21b9fba29f7b', 'c986ca3b-0436-46e8-9f68-4844a8bff349')),
                    'Content-Type: application/json'                    
                )
            ));

            $response = curl_exec($curl);
            curl_close($curl);
            
            $response = json_decode($response, true);
            if (isset($response['err']))
                return response()->json(['error' => true, 'msg' => $response['err']], 200);

            return response()->json(['error' => false, 'multiDeposit'=> $multiDeposit, 'multimsg'=> trans('app.notdeposit_to_multiaccount'), 'redirectUrl' => 'https://interac.express-connect.com/webflow?token='.$response['token'].'&transaction='.$transactionId], 200);
        }

        public function gigadatSuccess(\Illuminate\Http\Request $request)
        {
            Log::channel('payment')->info('***Gigadat Success***', ['request' => $request]);
        }

        public function gigadatFail(\Illuminate\Http\Request $request)
        {
            Log::channel('payment')->info('***Gigadat Failed***', ['request' => $request]);
        }

        public function gigadatListener(\Illuminate\Http\Request $request)
        {
            Log::channel('payment')->info('***Gigadat Listener***', ['request' => $request]);
            $transaction = $request->post('transactionId');
            $status = $request->get('status');
            $userId = $request->post('userId');
            $amount = $request->post('amount');
            $type = $request->post('type');
            $email = $request->post('email');
            $phone = $request->post('mobile');
            $ip = $request->post('userIp');
            
            $user = \VanguardLTE\User::where('id', $userId)->first();
            if (!$user) {
                return response()->json(['error' => true, 'msg' => trans('app.wrong_user')], 200);
            }

            if ($status == 'STATUS_INITED') {
            }
            else if ($status == 'STATUS_PENDING') {
            }
            else if ($status == 'STATUS_SUCCESS') {
                if ($type == 'CPI') {
                    $deposit_count = \VanguardLTE\Transaction::leftjoin('users', 'transactions.user_id', '=', 'users.id')->where(['users.visitor_id'=>$user->visitor_id, 'type'=>'in'])->count();
                    $payment = \VanguardLTE\Transaction::create([
                        'user_id' => $userId,
                        'system' => 'interac',
                        'type' => 'in',
                        'summ' => $amount,
                        'email' => $email,
                        'phone' => $phone,
                        'ip' => $ip,
                        'status' => 1,
                        'transaction' => $transaction
                    ]);
                    $user->increment('balance', $amount);
                    $user->increment('count_balance', $amount);
                    switch ($deposit_count) {
                        case 0:
                            $welcomepackages = \VanguardLTE\WelcomePackage::leftJoin('games', function ($join)
                                                                {
                                                                    $join->on('games.original_id','=','welcomepackages.game_id');
                                                                    $join->on('games.id','=','games.original_id');
                                                                })->select('welcomepackages.*', 'games.name')->get();
                            foreach ($welcomepackages as $welcomepackage) {
                                $welcomepackagelog = \VanguardLTE\WelcomePackageLog::create([
                                    'user_id' => $userId,
                                    'day' => $welcomepackage->day,
                                    'freespin' => $welcomepackage->freespin,
                                    'remain_freespin' => $welcomepackage->freespin,
                                    'game_id' => $welcomepackage->game_id,
                                    'max_bonus' => 20,
                                    'started_at' => date('Y-m-d', strtotime('+'.($welcomepackage->day-1).' days'))
                                ]);
                            }
                        case 1:
                        case 2:
                            $bonus = \VanguardLTE\Bonus::where('deposit_num', $deposit_count + 1)->first();
                            if ($bonus) {
                                $bonus_amount = $bonus->bonus;
                                if ($amount < $bonus_amount)
                                    $bonus_amount = $amount;
                                if ($amount < 10)
                                    break;
                                $user->increment('balance', $bonus_amount);
                                $user->increment('bonus', $bonus_amount);
                                $user->increment('count_bonus', $bonus_amount);
                                $user->increment('wager', $bonus_amount * 70);
    
                                \VanguardLTE\BonusLog::create([
                                    'user_id' => $userId,
                                    'deposit_num' => $deposit_count + 1,
                                    'deposit' => $amount,
                                    'bonus' => $bonus_amount,
                                    'wager' => $bonus_amount * 70,
                                    'wager_played' => 0
                                ]);
                            }
                            break;
                    }
                }
                else if ($type == 'ETO') {
                    $curWithdraw = \VanguardLTE\Transaction::where('user_id', $userId)->where('transaction', $transaction)->first();
                    if ($curWithdraw != null){
                        $curWithdraw->status = 1;
                        $curWithdraw->save();
                    }
                }
            }
            else if ($status == 'STATUS_REJECTED'){
                if ($type == 'CPI') {
                    \VanguardLTE\Transaction::create([
                        'user_id' => $userId,
                        'system' => 'interac',
                        'type' => 'in',
                        'summ' => $amount,
                        'email' => $email,
                        'phone' => $phone,
                        'ip' => $ip,
                        'status' => -2,
                        'transaction' => $transaction
                    ]);
                }
                else if ($type == 'ETO') {
                    $curWithdraw = \VanguardLTE\Transaction::where('user_id', $userId)->where('transaction', $transaction)->first();
                    if ($curWithdraw != null){
                        $curWithdraw->status = -2;
                        $curWithdraw->save();
                    }
                }
            }
            else if ($status == 'STATUS_ERROR') {
                /* if transaction is not confirmed, send message to user.  */
                $user->notify(new \VanguardLTE\Notifications\NotConfirmTransaction($user));
                /* --- */
            }

            return response()->json(['error' => false, 'msg' => trans('app.success')], 200);
        }

        public function withdraw(\Illuminate\Http\Request $request){
            $user = \Auth::user();
            if ($user->balance < $user->bonus)
                $user->update(['bonus' => $user->balance]);

            if ($user->balance == 0) {
                \VanguardLTE\BonusLog::where([
                    ['user_id', '=', $user->id],
                    ['wager', '>', '0']
                ])->update(['wager' => 0, 'wager_played'=> 0]);
                \VanguardLTE\WelcomePackageLog::where([
                    ['user_id', '=', $user->id],
                    ['wager', '>', '0']
                ])->update(['wager' => 0, 'wager_played'=> 0]);
            }
            else {
                $wager_played = $user->bonus * 70 - $user->wager;
                if ($wager_played > 0) {
                    $bonus_logs = \VanguardLTE\BonusLog::where([
                        ['user_id', '=', $user->id],
                        ['wager', '>', '0']
                    ])->get();
                    foreach ($bonus_logs as $bonus_log) {
                        $wager_remaining = $bonus_log->wager - $bonus_log->wager_played;
                        if ($wager_remaining <= 0)
                            break;
                        if ($wager_played > $wager_remaining) {
                            $bonus_log->update(['wager_played'=> $bonus_log->wager]);
                            $wager_played = $wager_played - $wager_remaining;
                            $user->incrument('bonus', -1 * min($bonus_log->bonus, $user->bonus));
                        }
                        else {
                            $bonus_log->update(['wager_played' => $wager_played]);
                            $wager_played = 0;
                        }
                    }

                    $welcomepackage_logs = \VanguardLTE\WelcomePackageLog::where([
                        ['user_id', '=', $user->id],
                        ['wager', '>', '0']
                    ])->get();
                    foreach ($welcomepackage_logs as $welcomepackage_log) {
                        $wager_remaining = $welcomepackage_log->wager - $welcomepackage_log->wager_played;
                        if ($wager_remaining <= 0)
                            break;
                        if ($wager_played > $wager_remaining) {
                            $wager = $welcomepackage_log->wager;
                            $welcomepackage_log->update([
                                'wager' => 0,
                                'wager_played'=> 0
                            ]);
                            $wager_played = $wager_played - $wager_remaining;
                            $user->incrument('bonus', -1 * min($wager / 70, $user->bonus));
                        }
                        else {
                            $welcomepackage_log->update(['wager_played' => $wager_played]);
                            $wager_played = 0;
                        }
                    }
                }
            }

            $withdrawable = $user->balance - $user->wager / 70;
            if ($withdrawable < $request->amount){
                return response()->json(['error' => true, 'msg' => 'Maximun withdrawable balance is '.$withdrawable], 200);
            }
            $newWithdraw = new \VanguardLTE\Transaction;
            $newWithdraw->user_id = $user->id;
            $newWithdraw->system = $request->payment_method;
            $newWithdraw->type = 'out';
            $newWithdraw->summ = -1 * $request->amount;
            $newWithdraw->email = $request->email;
            $newWithdraw->phone = $request->phone;
            $newWithdraw->transaction = hash('crc32b', rand());
            $newWithdraw->ip = $_SERVER['REMOTE_ADDR'];
            $newWithdraw->save();
            $user->balance -= $request->amount;
            if ($user->balance < $user->bonus){
                $user->bonus = $user->balance;
            }
            $user->save();
            return response()->json(['error' => false], 200);
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