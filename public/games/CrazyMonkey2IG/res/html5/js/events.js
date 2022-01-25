function onCloseGame()
{
	parent.postMessage("CloseGame","*");
	var event = {
		"event": "close"
	};
	parent.postMessage(JSON.stringify(event),"*");
	switch (exitUrl) {
	case undefined:
		break;
	case "":
		break;
	case "back":
		window.history.back();
		break;
	default:
		window.location.replace(exitUrl);
	}
}
function closeGame()
{
	onCloseGame();
}
/*
function onAddedCredit(currentCredit)
{
	console.log("onAddedCredit("+currentCredit+")");
	var event = {
		"event": "add-credit",
		"credit": currentCredit
	};
	parent.postMessage(JSON.stringify(event),"*");
}
function onPlayedBet(bet)
{
	//console.log("onPlayedBet("+bet+")");
	var event = {
		"event": "bet-played",
		"bet": bet
	};
	parent.postMessage(JSON.stringify(event),"*");
}
*/
function onBeginSpin(credit,bet)
{
	console.log("onBeginSpin("+credit+", "+bet+")");
	var event = {
		"event": "spin-begin",
		"credit": credit-bet,
		"bet": bet
	};
	parent.postMessage(JSON.stringify(event),"*");
}
function onFinishSpin(credit,win)
{
	console.log("onFinishSpin("+credit+", "+win+")");
	var event = {
		"event": "spin-finish",
		"credit": credit+win,
		"win": win
	};
	parent.postMessage(JSON.stringify(event),"*");
}
function onNeedChangeLines(credit)
{
	console.log("onNeedChangeLines("+credit+")");
	var event = {
		"event": "change-lines",
		"credit": credit
	};
	parent.postMessage(JSON.stringify(event),"*");
}
function onNeedChangeBet(credit)
{
	console.log("onNeedChangeBet("+credit+")");
	var event = {
		"event": "change-bet",
		"credit": credit
	};
	parent.postMessage(JSON.stringify(event),"*");
}


function onKeyPress(e)
{
	var btId='';
	e = e || window.event;

	
	var kArr=setObj.slotKeyConfig;
	
	for(var keyId in kArr){
	console.log(kArr[keyId]);
	for(var i=0;i<kArr[keyId].length;i++){
		
	if(kArr[keyId][i]==e.keyCode){
	
	btId = keyId;	
	
	document.getElementById(btId).click();
		
	return;	
	
	}
		
	
		
	}	
		
	}
	
	
	

}
