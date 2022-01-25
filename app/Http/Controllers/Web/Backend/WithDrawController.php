<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class WithDrawController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:withdraw.manage');
        }
        public function index(\Illuminate\Http\Request $request)
        {
            $transactions =  \VanguardLTE\Transaction::leftJoin('users','users.id','=','transactions.user_id')
                    ->where('transactions.type', 'out')
                    ->orderBy('transactions.id','DESC')
                    ->select('transactions.*', 'users.username', 'users.first_name', 'users.balance', 'users.count_balance', 'users.count_bonus', 'users.visitor_id')
                    ->get();
            foreach ($transactions as $transaction) {
                $transaction->wager_count = \VanguardLTE\StatGame::where('user_id', $transaction->user_id)->count();
                $wager = \VanguardLTE\StatGame::where('user_id', $transaction->user_id)->sum('bet');
                $transaction->wager = $wager;
                if($wager > 28000){
                    $transaction->approve = true;
                }else{
                    $transaction->approve = false;
                }

            }
            return view('backend.withdraw.list', compact('transactions'));
        }
        public function reject(\Illuminate\Http\Request $request, $id)
        {
            if ($request->method() == 'GET'){
                $reject =  \VanguardLTE\Transaction::leftJoin('users','users.id','=','withdraws.user_id')
                    ->where('withdraws.id', $id)
                    ->select('withdraws.*', 'users.username', 'users.first_name', 'users.balance', 'users.count_balance', 'users.count_bonus')
                    ->get();
                return view('backend.withdraw.reject', compact('reject'));    
            }
            else {
                \VanguardLTE\Transaction::where(['id'=> $id])->update(['status' => -3]);
                return redirect()->route('backend.withdraw.list');
            }
        }

        public function approve(\Illuminate\Http\Request $request, $id)
        {   
            $approve =  \VanguardLTE\Transaction::leftJoin('users','users.id','=','withdraws.user_id')
                ->where('withdraws.id', $id)
                ->select('withdraws.*', 'users.username', 'users.first_name', 'users.balance', 'users.count_balance', 'users.count_bonus')
                ->first();
            if ($request->method() == 'GET'){
                return view('backend.withdraw.approve', compact('approve'));
            }
            else {
                $curl1 = curl_init();
                curl_setopt_array($curl1, array(
                    CURLOPT_URL => 'https://interac.express-connect.com/api/payment-token/5578ad563e2da4ccf5da8ab02ecf18c1',
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => '',
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_FOLLOWLOCATION => true,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => 'POST',
                    CURLOPT_POSTFIELDS => json_encode(array( 
                        "userId"=> $approve->user_id,
                        "transactionId"=> $approve->transaction, // merchant defined value
                        "name"=> $approve->username,
                        "email"=> $approve->email,
                        "mobile"=> $approve->phone,
                        "site"=> "https://www.canada777.com",
                        "userIp"=> $approve->ip,
                        "currency"=> "CAD",
                        "language"=> "en",
                        "amount"=> $approve->summ,
                        "type"=> "ETO",
                        "hosted"=> "false", 
                        "sandbox" => "false",
                    )),
                    CURLOPT_HTTPHEADER => array(
                        'Authorization: Basic '.base64_encode(sprintf('%s:%s', 'eed58d71-35a5-4071-8860-21b9fba29f7b', 'c986ca3b-0436-46e8-9f68-4844a8bff349')),        
                        'Content-Type: application/json'                    
                    )
                ));
    
                $response1 = curl_exec($curl1);
                $response1 = json_decode($response1, true);
                curl_close($curl1);
                if (isset($response1['err'])){
                    $error = $response1['err'];
                    return view('backend.withdraw.approve', compact('approve', 'error'));
                }

                $curl2 = curl_init();
                curl_setopt_array($curl2, array(
                    CURLOPT_URL => 'https://interac.express-connect.com/webflow?token='.$response1['token'].'&transaction='.$approve->transaction,
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_CUSTOMREQUEST => 'GET',
                ));
                $response2 = curl_exec($curl2);
                $response2 = json_decode($response2, true);
                curl_close($curl2);
                $approve->status = -1;
                $approve->save();
                $curl3 = curl_init();
                curl_setopt_array($curl3, array(
                    CURLOPT_URL => 'https://interac.express-connect.com/webflow/deposit?token='.$response1['token'].'&transaction='.$approve->transaction,
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_CUSTOMREQUEST => 'GET',
                ));
                $response3 = curl_exec($curl3);
                $response3 = json_decode($response3, true);
                curl_close($curl3);
                return redirect()->route('backend.withdraw.list');
            }
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
