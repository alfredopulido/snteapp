$(function(){
	

	$("a").click(function(ev){
		ev.preventDefault();
		var ref = window.open($(this).attr("href"), '_blank', 'location=yes'); 
		alert("open"+$(this).attr("href"));

	});
});