$(function(){
	$("a").click(function(ev){
		ev.preventDefault();
		var ref = cordova.InAppBrowser.open($(this).attr("href"), '_blank', 'location=yes');

	});
});