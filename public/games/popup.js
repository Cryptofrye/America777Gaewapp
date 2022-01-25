'use Strict';

/* when player is playing for free for 120s, show popup  */

var gameUrl = document.location.href.split("?")[0];
if(gameUrl.split("/")[5] || gameUrl.split("/")[5] === "Pre_go") {
    /* show welcome bonus popup when player is not login in 120 s.  */
    lepopup_add_event("onload", {
        item:        "popup-welcome-bonus",
        item_mobile: "popup-welcome-bonus-mobile",
        mode:        "every-time",
        period:      24,
        delay:       120,
        close_delay: 0
    });

    function open_signup_modal () {
        
        lepopup_close("popup-welcome-bonus*popup-welcome-bonus-mobile");

    }
    /* --- */
}