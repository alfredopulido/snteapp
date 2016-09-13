$(function(){
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
	    window.open = cordova.InAppBrowser.open;
	    alert("device ready");
	}

	$("a").click(function(ev){
		ev.preventDefault();
		var ref = window.open($(this).attr("href"), '_blank', 'location=yes'); 
		alert("open"+$(this).attr("href"));

	});
});