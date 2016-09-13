document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    //window.open = cordova.InAppBrowser.open;
}

$(function(){
	

	$("a.linkexterno").click(function(ev){
		ev.preventDefault();
		var ref = window.open($(this).attr("href"), '_blank', 'location=yes'); 
	});
});