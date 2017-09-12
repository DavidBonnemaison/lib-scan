//
// Dynamsoft JavaScript Library for Basic Initiation of Dynamic Web TWAIN
// More info on DWT: http://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
//
// Copyright 2017, Dynamsoft Corporation 
// Author: Dynamsoft Team
// Version: 13.1
//
/// <reference path="dynamsoft.webtwain.initiate.js" />
var Dynamsoft = Dynamsoft || { WebTwainEnv: {} };

Dynamsoft.WebTwainEnv.AutoLoad = true;
///
Dynamsoft.WebTwainEnv.Containers = [{ContainerId:'dwtcontrolContainer', Width:270, Height:350}];

/// If you need to use multiple keys on the same server, you can combine keys and write like this 
/// Dynamsoft.WebTwainEnv.ProductKey = 'key1;key2;key3';
Dynamsoft.WebTwainEnv.ProductKey = '53850AF2C813CBC6F46065C9EBD093A6A6C495A12886241A96288419EF72CE366EA7DC3971A6CF4FFB3BE9569F9D77B9B7984912B653653F9D0155098F9CB6A506F385404604431D8B8655B6E7FA862BDE3611F38B00952A807C4AA97D9CF790E1AFD87A383F42D7A6F33D4EDB8DE63BEB043E8EEEABA89F26D2261F2C0DE8D95AB3DA584E920C00FC5AF05CEFD05A0DBF634655E6478D40A7C1C9FA979BADB8AE86234445860508C17497A27FA4EF7F01;t00926QAAADdcZu1RZ18BS1EADCKgXNvud/pYH1OqNuRowegN+Y60xvMnWq/FwksIhZGVJtGzo1mH2Dj6v/guQz2K7PmxNv7Bv/FBpkaf48Tsw0R7jYSBqrO631pLLoA=';
///
Dynamsoft.WebTwainEnv.Trial = true;
///
Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB = false;


(function(){
    var p = document.location.protocol;
    if (p !== 'https:' && p !== 'http:')
		Dynamsoft.WebTwainEnv.ResourcesPath = 'https://www.dynamsoft.com/Demo/DWT/Resources';
})();


/// All callbacks are defined in the dynamsoft.webtwain.install.js file, you can customize them.

// Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', function(){
// 		// webtwain has been inited
// });

