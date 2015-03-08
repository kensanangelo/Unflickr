$( document ).ready(function() {
    $( "#btn-comment" ).click(function() {
  		$( "#post-comment" ).toggleClass('hidden');
		$( "#btn-comment" ).toggleClass("btn-success btn-default");
	});
});