	<!--
	// ##############################################################
	// Interstitial Engine ™
	// Designed & Developed by Constantinos M. Demetriadis
	// version 2.5.2
	// © copyright 2000-2003 Oh My Lovely, all rights reserved.
	//
	// ##############################################################
	//
	// Initialize variables for interstitial
	//
	    var InterstitialWindow;
	//
	// Debugging Feature. Set on or off ( 1 | 0 )
		var Debugging = 0;
	//
	// Pop-Up window Specifications
		var popupWidth = 400;			// Window Width
		var popupHeight = 500;			// Window Height
		var popupName = "Offers";		// Window Name
		var popupType = 1;				// 1: Pop Under
										// 0: Pop Up
		var popupURL = "http://www.hellasnet.gr/campaigns/forthnet_summerOffers/summer.html";
	//
	// Cookie Name
	// This value should be unique for each and every campaign
		var CampaignName = "HellasNetSummer";
	//
	// Second Play Value (in hours)
	// This is how long it should take to display the second banner.
	// eg. 24 means that in 24 hours the second banner will play.
		var SecondPlayInHours = 24;
	//
	// Expire All Value (in hours)
	// This is how long it should take to reset all the banners.
	// eg. 168 means that in 168 hours (1 week) the script will be reset.
		var ExpireAllInHours = 168;
	//
	// ##############################################################
	//
	// DO NOT EDIT BEYOND THIS LINE
	//
	// ##############################################################
	// Interesting Functions
	//
	// function getCookie()
		function getCookie(CookieName) {
			var start = document.cookie.indexOf(CookieName + '=');
			var len = start + CookieName.length + 1;
			if ((!start) && (CookieName != document.cookie.substring(0,CookieName.length)))
				return null;
			if (start == -1)
				return null;
			var end = document.cookie.indexOf(';',len);
			if (end == -1) end = document.cookie.length;
				return unescape(document.cookie.substring(len,end));
		}
	//
	// function setCookie()
		function setCookie(CookieName,value,expires,path,domain,secure) {
			document.cookie = CookieName + "=" +escape(value) +
			( (expires) ? ";expires=" + expires.toGMTString() : "") +
			( (path) ? ";path=" + path : "") + 
			( (domain) ? ";domain=" + domain : "") +
			( (secure) ? ";secure" : "");
		}
	//
	// function deleteCookie()
		function deleteCookie(CookieName,path,domain) {
			if (getCookie(CookieName))
				document.cookie =
				CookieName + '=' +
				( (path) ? ';path=' + path : '') +
				( (domain) ? ';domain=' + domain : '') +
				';expires=Thu, 01-Jan-1970 00:00:01 GMT';
		}
	//	
	// browser detection
		browser = (((navigator.appName == "Netscape") &&
				    (parseInt(navigator.appVersion) >= 3 )) ||
				    ((navigator.appName == "Microsoft Internet Explorer") &&
				    (parseInt(navigator.appVersion) >= 4 )))
		ie4 = ((navigator.appName == "Microsoft Internet Explorer") &&
			   (parseInt(navigator.appVersion) >= 4 ))
		ns4 = ((navigator.appName == "Netscape") &&
			   (parseInt(navigator.appVersion) >= 4 ))
	//
	// ##############################################################
	//
	// First we'll check your browser. Then we'll see if how many time you've
	// seen the ad already. If your ad views fall between the limits we've set
	// then we'll pop a new window and record the new number of ad views.
		if(browser) {
			if(ie4) {
				// Set Today's Value
				var TodayIs = new Date();
				var TodayIsValue = new Date(TodayIs.getTime());
				
				// Set Long Term Expiration Value
				var ExpireLongTerm = new Date();
				var ExpireLongTermValue = new Date(ExpireLongTerm.getTime()+(1000 * 60 * 60 * 360000));
								
				// If FirstPlay exists
				if (eval("getCookie(\'"+CampaignName+"_FirstPlay\')")) {
				
					// Debugging
					if (Debugging == 1) alert("FirstPlay exists");
					
					// If ExpireFirst > Now 
					eval("var "+CampaignName+"_ExpireFirst = new Date(getCookie(\'"+CampaignName+"_ExpireFirst\'))");
					if (eval(CampaignName+"_ExpireFirst.valueOf() <= TodayIsValue.valueOf()")) {
					
						// Debugging
						if (Debugging == 1) alert("ExpireFirst is Greater Than Today");
						
						// Set the SecondPlay cookie
						eval("setCookie(\'"+CampaignName+"_SecondPlay\',\'1\',ExpireLongTermValue)");
						// Debugging
						if (Debugging == 1) alert("Set Cookie "+CampaignName+"_SecondPlay = 1");
						
						// Remove FirstPlay cookie
						eval("deleteCookie(\'"+CampaignName+"_FirstPlay\')");
						// Debugging
						if (Debugging == 1) alert("Deleted Cookie "+CampaignName+"_FirstPlay");
						
						// Remove ExpireFirst cookie
						eval("deleteCookie(\'"+CampaignName+"_ExpireFirst\')");
						// Debugging
						if (Debugging == 1) alert("Deleted Cookie "+CampaignName+"_ExpireFirst");
						
						// Pop the Interstitial
						// Debugging
						if (Debugging == 1) alert("Pop The Window");
						var H = screen.height * 2;
						var L = screen.width * 2;
						InterstitialWindow = window.open(popupURL,popupName,"status=no,scrollbars=no,resizable=no,height="+popupHeight+",width="+popupWidth+",top="+H+",left="+L);
						
						// Set the Window Type
						if (popupType == 1) {
							this.focus();
						} else {
							InterstitialWindow.focus();
						}
						
					} else {
					
						// Debugging
						if (Debugging == 1) alert("ExpireFirst is Smaller Than Today");
						
					}
				// Else if FirstPlay DOES NOT exist
				} else {
				
					// Debugging
					if (Debugging == 1) alert("FirstPlay DOES NOT exist");
					
					// If SecondPlay exists
					if (eval("getCookie(\'"+CampaignName+"_SecondPlay\')")) {
					
						// Debugging
						if (Debugging == 1) alert("SecondPlay exists");
						
						// If ExpireAll > Now
						eval("var "+CampaignName+"_ExpireAll = new Date(getCookie(\'"+CampaignName+"_ExpireAll\'))");
						if (eval(CampaignName+"_ExpireAll.valueOf() <= TodayIsValue.valueOf()")) {
							
							// Debugging
							if (Debugging == 1) alert("ExpireAll is Greater Than Today");
							
							// Remove SecondPlay cookie
							eval("deleteCookie(\'"+CampaignName+"_SecondPlay\')");
							// Debugging
							if (Debugging == 1) alert("Deleted Cookie "+CampaignName+"_SecondPlay");
							
							// Remove ExpireAll cookie
							eval("deleteCookie(\'"+CampaignName+"_ExpireAll\')");
							// Debugging
							if (Debugging == 1) alert("Deleted Cookie "+CampaignName+"_ExpireAll");
							
							// Set the FirstPlay cookie
							eval("setCookie(\'"+CampaignName+"_FirstPlay\',\'1\',ExpireLongTermValue)");
							// Debugging
							if (Debugging == 1) alert("Set Cookie "+CampaignName+"_FirstPlay = 1");
							
							// Set the ExpireFirst cookie
							var ExpireFirstValueDate = new Date();
							var ExpireFirstValue = new Date(ExpireFirstValueDate.getTime()+(1000 * 60 * 60 * SecondPlayInHours));
							eval("setCookie(\'"+CampaignName+"_ExpireFirst\',ExpireFirstValue,ExpireLongTermValue)");
							// Debugging
							if (Debugging == 1) alert("Set Cookie "+CampaignName+"_ExpireFirst = "+ExpireFirstValue);
							
							// Set the ExpireAll cookie
							var ExpireAllValueDate = new Date();
							var ExpireAllValue = new Date(ExpireAllValueDate.getTime()+(1000 * 60 * 60 * ExpireAllInHours));
							eval("setCookie(\'"+CampaignName+"_ExpireAll\',ExpireAllValue,ExpireLongTermValue)");
							// Debugging
							if (Debugging == 1) alert("Set Cookie "+CampaignName+"_ExpireAll = "+ExpireAllValue);
							
							// Pop the Interstitial
							if (Debugging == 1) alert("Pop The Window");
							var H = screen.height * 2;
							var L = screen.width * 2;
							InterstitialWindow = window.open(popupURL,popupName,"status=no,scrollbars=no,resizable=no,height="+popupHeight+",width="+popupWidth+",top="+H+",left="+L);
							
							// Set the Window Type
							if (popupType == 1) {
								this.focus();
							} else {
								InterstitialWindow.focus();
							}
							
						} else {
						
							// Debugging
							if (Debugging == 1) alert("ExpireAll is Smaller Than Today");
							
						}
					// Else if SecondPlay DOES NOT exist
					} else {
					
						// Debugging
						if (Debugging == 1) alert("SecondPlay DOES NOT exist");
						
						// Set the FirstPlay cookie
						setCookie('FNSum_FirstPlay','1',ExpireLongTermValue);
						eval("setCookie(\'"+CampaignName+"_FirstPlay\',\'1\',ExpireLongTermValue)");
						// Debugging
						if (Debugging == 1) alert("Set Cookie "+CampaignName+"_FirstPlay = 1");
						
						// Set the ExpireFirst cookie
						var ExpireFirstValueDate = new Date();
						var ExpireFirstValue = new Date(ExpireFirstValueDate.getTime()+(1000 * 60 * 60 * SecondPlayInHours));
						eval("setCookie(\'"+CampaignName+"_ExpireFirst\',ExpireFirstValue,ExpireLongTermValue)");
						// Debugging
						if (Debugging == 1) alert("Set Cookie "+CampaignName+"_ExpireFirst = "+ExpireFirstValue);
						
						// Set the ExpireAll cookie
						var ExpireAllValueDate = new Date();
						var ExpireAllValue = new Date(ExpireAllValueDate.getTime()+(1000 * 60 * 60 * ExpireAllInHours));
						eval("setCookie(\'"+CampaignName+"_ExpireAll\',ExpireAllValue,ExpireLongTermValue)");
						// Debugging
						if (Debugging == 1) alert("Set Cookie "+CampaignName+"_ExpireAll = "+ExpireAllValue);
						
						// Pop the Interstitial
						// Debugging
						if (Debugging == 1) alert("Pop The Window");
						var H = screen.height * 2;
						var L = screen.width * 2;
						InterstitialWindow = window.open(popupURL,popupName,"status=no,scrollbars=no,resizable=no,height="+popupHeight+",width="+popupWidth+",top="+H+",left="+L);
						
						// Set the Window Type
						if (popupType == 1) {
							this.focus();
						} else {
							InterstitialWindow.focus();
						}
					}
				}
			}
		}
		
	//-->