function getPreloadImages( conf, slotConf, winLines, lang ) {
	var images = getPreloadImagesCommon( { 
		conf : conf,
		slotConf: slotConf,
		folder: 'ancientmagic',
		winLines: winLines,
		noCoinShower: true,
		bigWinFrames: true,
		attentionSpin: true,
		scatterWins: true,
		lang: lang
	});
	
	// ####
	if( conf.mode( 'l' ) == 0 ) { // layout 3:2
		images.push( 'gui/picts/rest/ancientmagic/<resol>/bg_top-fg.jpg' );
		images.push( 'gui/picts/rest/ancientmagic/<resol>/bg_top-fg2.jpg' );
	}
	
	// ####
	if( conf.mode( 'c') == 0 ) { // web 
		var conImages = [
			// info sites
			'gui/picts/rest/ancientmagic/<resol>/console_web_bg-fg.png',
			'gui/picts/rest/ancientmagic/<resol>/infoSites/web/button-close.png',
			'gui/picts/rest/ancientmagic/<resol>/infoSites/web/checkbox-off.png',
			'gui/picts/rest/ancientmagic/<resol>/infoSites/web/checkbox-on.png',
			'gui/picts/rest/ancientmagic/<resol>/infoSites/web/background.png',
		];
		
		images = images.concat( conImages );
	}
	else { // mobile
		var conImages = [
            'gui/picts/rest/ancientmagic/<resol>/console_mobile_bg-fg.png',
		];
		
		images = images.concat( conImages );
		
		if( conf.mode( 'c' ) == 2 ) { // supporting portrait mode
			var portConImages = [
    		    'gui/picts/rest/ancientmagic/<resol>/console_portrait_bg-fg.png',
    		    'gui/picts/rest/ancientmagic/<resol>/portrait_top.jpg',
    		    'gui/picts/rest/ancientmagic/<resol>/portrait_top-fg.jpg',
				'gui/picts/rest/ancientmagic/<resol>/portrait_top-fg2.jpg',
    		    'gui/picts/rest/ancientmagic/<resol>/portrait_top_small.jpg',
    		    'gui/picts/rest/ancientmagic/<resol>/portrait_top_small-fg.jpg',
				'gui/picts/rest/ancientmagic/<resol>/portrait_top_small-fg2.jpg',
    		    'gui/picts/rest/ancientmagic/<resol>/portrait_bottom_l32.jpg',
    		    'gui/picts/rest/ancientmagic/<resol>/portrait_bottom_l32-fg.jpg',
    		    'gui/picts/rest/ancientmagic/<resol>/portrait_bottom_l169.jpg',
    		    'gui/picts/rest/ancientmagic/<resol>/portrait_bottom_l169-fg.jpg'                     
			];
			images = images.concat( portConImages );
		}		
	}
	
	var common = [
      	// backgrounds
    	'gui/picts/rest/ancientmagic/<resol>/bg_middle.jpg',
    	'gui/picts/rest/ancientmagic/<resol>/bg_bottom.jpg',    	
    	'gui/picts/rest/ancientmagic/<resol>/bg_middle-fg.jpg',
		'gui/picts/rest/ancientmagic/<resol>/bg_middle-fg2.jpg',
    	'gui/picts/rest/ancientmagic/<resol>/bg_bottom-fg.jpg',
		'gui/picts/rest/ancientmagic/<resol>/bg_bottom-fg2.jpg', 
    	'gui/picts/rest/ancientmagic/<resol>/fadeout.png',
    	'gui/picts/rest/ancientmagic/<resol>/fadeout-fg.png',
		'gui/picts/rest/ancientmagic/<resol>/console_web_bg-fg.png',
		'gui/picts/rest/ancientmagic/<resol>/console_mobile_bg-fg.png',
    	
    	// linemarkers
    	'gui/picts/game/<resol>/linemarker/line-number-1.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-2.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-3.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-4.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-5.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-grey.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-dimm.png',
		
		// info sites
		'gui/picts/rest/ancientmagic/<resol>/infoSites/feature.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/feature2.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/lines.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/symbol_9.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/symbol_10.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/symbol_A.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/symbol_Flasche.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/symbol_Hexe.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/symbol_J.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/symbol_K.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/symbol_Kerzen.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/symbol_Q.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/symbol_Rabe.png',
		'gui/picts/rest/ancientmagic/<resol>/infoSites/symbol_Scatter.png',
    	
    	// symbols
		[ '/scatter_small.png', 'gui/picts/rest/ancientmagic/<resol>/symbols/scatter_small.png' ],
		[ '/scatter_smallb.png', 'gui/picts/rest/ancientmagic/<resol>/symbols/scatter_smallb.png' ],
		[ '/scatter_smallm.png', 'gui/picts/rest/ancientmagic/<resol>/symbols/scatter_smallm.png' ],
		[ '/scatter_smallt.png', 'gui/picts/rest/ancientmagic/<resol>/symbols/scatter_smallt.png' ],
		
		[ '/symbol-lv5.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-lv5.jpg' ],
		[ '/symbol-lv4.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-lv4.jpg' ],
		[ '/symbol-lv3.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-lv3.jpg' ],
		[ '/symbol-lv2.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-lv2.jpg' ],
		[ '/symbol-lv1.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-lv1.jpg' ],
		[ '/symbol-hv3.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-hv3.jpg' ],
		[ '/symbol-hv2.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-hv2.jpg' ],
		[ '/symbol-hv1.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-hv1.jpg' ],
		[ '/symbol-top.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-top.jpg' ],
		[ '/symbol-scatter.png', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-scatter.png' ],
		
		[ '/symbol-fg-lv5.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-fg-lv5.jpg' ],
		[ '/symbol-fg-lv4.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-fg-lv4.jpg' ],
		[ '/symbol-fg-lv3.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-fg-lv3.jpg' ],
		[ '/symbol-fg-lv2.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-fg-lv2.jpg' ],
		[ '/symbol-fg-lv1.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-fg-lv1.jpg' ],
		[ '/symbol-fg-hv3.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-fg-hv3.jpg' ],
		[ '/symbol-fg-hv2.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-fg-hv2.jpg' ],
		[ '/symbol-fg-hv1.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-fg-hv1.jpg' ],
		
		//TODO
		[ '/symbol-fg-top.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-top.jpg' ],
		
		[ '/symbol-m-lv5.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-m-lv5.jpg' ],
		[ '/symbol-m-lv4.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-m-lv4.jpg' ],
		[ '/symbol-m-lv3.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-m-lv3.jpg' ],
		[ '/symbol-m-lv2.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-m-lv2.jpg' ],
		[ '/symbol-m-lv1.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-m-lv1.jpg' ],
		[ '/symbol-m-hv3.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-m-hv3.jpg' ],
		[ '/symbol-m-hv2.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-m-hv2.jpg' ],
		[ '/symbol-m-hv1.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-m-hv1.jpg' ],
		[ '/symbol-m-scatter.png', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-m-scatter.png' ],
		[ '/symbol-m-top.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-m-top.jpg' ],
		
		[ '/symbol-s-lv5.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-s-lv5.jpg' ],
		[ '/symbol-s-lv4.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-s-lv4.jpg' ],
		[ '/symbol-s-lv3.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-s-lv3.jpg' ],
		[ '/symbol-s-lv2.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-s-lv2.jpg' ],
		[ '/symbol-s-lv1.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-s-lv1.jpg' ],
		[ '/symbol-s-hv3.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-s-hv3.jpg' ],
		[ '/symbol-s-hv2.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-s-hv2.jpg' ],
		[ '/symbol-s-hv1.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-s-hv1.jpg' ],
		[ '/symbol-s-top.jpg', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-s-top.jpg' ],
		
		[ 'scatterBlendTop', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-scatter_bot-dark.png' ],
		[ 'scatterBlendTopBottom', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-scatter_bot-top-dark.png' ],
		[ 'scatterBlendBottom', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-scatter_top-dark.png' ],
    	
    	// small symbols for mini paytable in free games    	
    	[ 'fgSymbolSmall1', 'gui/picts/rest/ancientmagic/<resol>/freegame/symbSmall/symbol-s-lv5_small.jpg' ],
    	[ 'fgSymbolSmall2', 'gui/picts/rest/ancientmagic/<resol>/freegame/symbSmall/symbol-s-lv4_small.jpg' ],
    	[ 'fgSymbolSmall3', 'gui/picts/rest/ancientmagic/<resol>/freegame/symbSmall/symbol-s-lv3_small.jpg' ],
    	[ 'fgSymbolSmall4', 'gui/picts/rest/ancientmagic/<resol>/freegame/symbSmall/symbol-s-lv2_small.jpg' ],
    	[ 'fgSymbolSmall5', 'gui/picts/rest/ancientmagic/<resol>/freegame/symbSmall/symbol-s-lv1_small.jpg' ],
    	[ 'fgSymbolSmall6', 'gui/picts/rest/ancientmagic/<resol>/freegame/symbSmall/symbol-s-hv3_small.jpg' ],
    	[ 'fgSymbolSmall7', 'gui/picts/rest/ancientmagic/<resol>/freegame/symbSmall/symbol-s-hv2_small.jpg' ],
    	[ 'fgSymbolSmall8', 'gui/picts/rest/ancientmagic/<resol>/freegame/symbSmall/symbol-s-hv1_small.jpg' ],
    	[ 'fgSymbolSmall9', 'gui/picts/rest/ancientmagic/<resol>/freegame/symbSmall/symbol-s-top_small.jpg' ] 	
    	
    ];
	
	images = images.concat( common );
	
	if( conf.playSymbolAnims() ) {
		var rImages = [
		 	// symbol anims
	    	[ 'feature1_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/feature1_0.jpg' ],
			[ 'feature2_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/feature2_0.jpg' ],
			[ 'feature3_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/feature3_0.jpg' ],
			[ 'feature4_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/feature4_0.jpg' ],
			[ 'feature5_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/feature5_0.jpg' ],
			[ 'feature6_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/feature6_0.jpg' ],
			[ 'feature7_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/feature7_0.jpg' ],
			[ 'feature8_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/feature8_0.jpg' ],
			[ 'feature9_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/feature9_0.jpg' ],
			
			[ 'scatterBonus_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/scatterBonus_0.jpg' ],
			[ 'scatterBonus_1.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/scatterBonus_1.jpg' ],
			[ 'scatterBonusMask_0.png', 'gui/picts/rest/ancientmagic/<resol>/symanim/scatterBonusMask_0.png' ],
			[ 'scatterBonusMask_1.png', 'gui/picts/rest/ancientmagic/<resol>/symanim/scatterBonusMask_1.png' ],
			[ 'scatterBonusEnd.png', 'gui/picts/rest/ancientmagic/<resol>/symanim/scatterBonusEnd.png' ],
			
			[ 'symbolTeaser10_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/symbolTeaser10_0.jpg' ],
			[ 'symbolTeaser10Mask_0.png', 'gui/picts/rest/ancientmagic/<resol>/symanim/symbolTeaser10Mask_0.png' ],
			[ 'symbolTeaser10End.png', 'gui/picts/rest/ancientmagic/<resol>/symanim/symbolTeaser10End.png' ],
			
			[ 'top_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/top_0.jpg' ],
			
			[ 'wild_0.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/wild_0.jpg' ],
			[ 'wildMask_0.png', 'gui/picts/rest/ancientmagic/<resol>/symanim/wildMask_0.png' ],

	    	

	    ];
		
		images = images.concat( rImages );
		
		if( conf.mode( 'r' ) == 0 ) {
			var rImages = [
				[ 'scatterBonus_2.jpg', 'gui/picts/rest/ancientmagic/<resol>/symanim/scatterBonus_2.jpg' ],
				[ 'scatterBonusMask_2.png', 'gui/picts/rest/ancientmagic/<resol>/symanim/scatterBonusMask_2.png' ],
				//	    	//hype film assets
				'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_10.png',
				'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_J.png',
				'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_Q.png',
				'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_K.png',
				'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_A.png',
				'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_Candles.png',
				'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_Poison.png',
				'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_Crow.png',
				'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_Witch.png'
			];
			
			images = images.concat( rImages );
		}
		else {
			// bonus symbols from hype film assets
			rImages = [
				[ 'AM_Feature_Sym_10', 'gui/picts/anim/1280/amfreegame/AM_Feature_Sym_10.png'],
				[ 'AM_Feature_Sym_J', 'gui/picts/anim/1280/amfreegame/AM_Feature_Sym_J.png' ],
				[ 'AM_Feature_Sym_Q', 'gui/picts/anim/1280/amfreegame/AM_Feature_Sym_Q.png' ],
				[ 'AM_Feature_Sym_K', 'gui/picts/anim/1280/amfreegame/AM_Feature_Sym_K.png' ],
				[ 'AM_Feature_Sym_A', 'gui/picts/anim/1280/amfreegame/AM_Feature_Sym_A.png' ],
				[ 'AM_Feature_Sym_Candles', 'gui/picts/anim/1280/amfreegame/AM_Feature_Sym_Candles.png' ],
				[ 'AM_Feature_Sym_Poison', 'gui/picts/anim/1280/amfreegame/AM_Feature_Sym_Poison.png' ],
				[ 'AM_Feature_Sym_Crow', 'gui/picts/anim/1280/amfreegame/AM_Feature_Sym_Crow.png' ],
				[ 'AM_Feature_Sym_Witch', 'gui/picts/anim/1280/amfreegame/AM_Feature_Sym_Witch.png' ],

				[ 'optSlotSymbolSelection_bg', 'gui/picts/rest/ancientmagic/<resol>/optanim/optSlotSymbolSelection_bg.png']
			];
			
			images = images.concat( rImages );
		}
	}
	else{
		var oImages = [
       		// optimal slot animations
    		[ 'wild', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Scatter_Wild.png' ],
    		[ 'wildGlow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Scatter_Wild_glow.png' ],
			[ 'feature1', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_10_001.png' ],
			[ 'feature1Glow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_10_001_glow.png' ],
			[ 'feature2', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_J_001.png' ],
			[ 'feature2Glow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_J_001_glow.png' ],
			[ 'feature3', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Q_001.png' ],
			[ 'feature3Glow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Q_001_glow.png' ],
			[ 'feature4', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_K_001.png' ],
			[ 'feature4Glow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_K_001_glow.png' ],
			[ 'feature5', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_A_001.png' ],
			[ 'feature5Glow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_A_001_glow.png' ],
			[ 'feature6', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Candles_001.png' ],
			[ 'feature6Glow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Candles_001_glow.png' ],
			[ 'feature7', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Poison_001.png' ],
			[ 'feature7Glow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Poison_001_glow.png' ],
			[ 'feature8', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Crow_001.png' ],
			[ 'feature8Glow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Crow_001_glow.png' ],
			[ 'feature9', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Witch_001.png' ],
			[ 'feature9Glow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Witch_001_glow.png' ],
			[ 'symbolTeaser10', 'gui/picts/rest/ancientmagic/<resol>/symbols/symbol-scatter.png' ],
			[ 'symbolTeaser10Glow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Scatter_Teaser_001_glow.png' ],
			[ 'scatterBonus', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Scatter_Bonus.png' ],
			[ 'scatterBonusGlow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Scatter_Bonus_glow.png' ],
			
			
		];
		
		images = images.concat( oImages );
		
		if( conf.mode( 'r' ) == 0 ) {
			oImages = [
				// bonus symbols from hype film assets
				// you have to use "<resol>" instead of "1280" because otherwise the oryx version will not work properly
				[ 'AM_Feature_Sym_10', 'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_10.png'],
				[ 'AM_Feature_Sym_J', 'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_J.png' ],
				[ 'AM_Feature_Sym_Q', 'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_Q.png' ],
				[ 'AM_Feature_Sym_K', 'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_K.png' ],
				[ 'AM_Feature_Sym_A', 'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_A.png' ],
				[ 'AM_Feature_Sym_Candles', 'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_Candles.png' ],
				[ 'AM_Feature_Sym_Poison', 'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_Poison.png' ],
				[ 'AM_Feature_Sym_Crow', 'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_Crow.png' ],
				[ 'AM_Feature_Sym_Witch', 'gui/picts/anim/<resol>/amfreegame/AM_Feature_Sym_Witch.png' ],

				[ 'optSlotSymbolSelection_bg', 'gui/picts/anim/<resol>/amfreegame/AM_FG_Schild.png'],
			];
		}
		else {
			oImages = [
				// bonus symbols from hype film assets
				[ 'AM_Feature_Sym_10', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Sym_10.png'],
				[ 'AM_Feature_Sym_J', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Sym_J.png' ],
				[ 'AM_Feature_Sym_Q', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Sym_Q.png' ],
				[ 'AM_Feature_Sym_K', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Sym_K.png' ],
				[ 'AM_Feature_Sym_A', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Sym_A.png' ],
				[ 'AM_Feature_Sym_Candles', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Sym_Candles.png' ],
				[ 'AM_Feature_Sym_Poison', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Sym_Poison.png' ],
				[ 'AM_Feature_Sym_Crow', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Sym_Crow.png' ],
				[ 'AM_Feature_Sym_Witch', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_Feature_Sym_Witch.png' ],

				[ 'optSlotSymbolSelection_bg', 'gui/picts/rest/ancientmagic/<resol>/optanim/AM_FG_Schild.png'],
			];
		}
		
		images = images.concat( oImages );
		
	}	
	return images;
}
