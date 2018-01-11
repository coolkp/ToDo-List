$(document).ready(function() { 
	var unit = $("#li1").html();

	console.log("clicked");
	function foo() {
    // code
    	$("li").click(function(){
		var text = $(this).css('text-decoration');
		console.log(text);
		var n = text.includes("line-through");
		console.log(n);
		if( n) 
		{
			$(this).css("text-decoration", "none");
			console.log("clicked");
		}
		else
		{
			$(this).css("text-decoration", "line-through");
			console.log("strike");
		}
		
	});
	var plusbar = true;
	$("span").click(function()
	{
		$(this).parent().fadeOut();
	});
	$("#plus").click(function()
	{
		if(plusbar)
		{
			$("input").fadeOut();
			plusbar = false;
		}
		else
		{
			$("input").fadeIn();
			plusbar = true;
		}
	});
	}
	
	$("input").focus(function(){
		var once = true;
		$(document).keypress(function(e) 
			{
					
		    	if(e.which == 13 && once == true) 
		    	{
		        	var custom = $("input").val();
		        	
		        	
		        	var str = unit;
		        	var pos = 7 + str.lastIndexOf("</span>");
		        	var n_entry = "<li>" + str.slice(0,pos)+$("input").val() + "</li>";
		        	
		        	//$("ul").append(n_entry);
		        	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $("input[type='text']").val() + "</li>")
		        	foo();
		        	once = false;
	    		}
			});
	})
	$("li").click(function(){
		var text = $(this).css('text-decoration');
		console.log(text);
		var n = text.includes("line-through");
		console.log(n);
		if( n) 
		{
			$(this).css("text-decoration", "none");
			console.log("clicked");
		}
		else
		{
			$(this).css("text-decoration", "line-through");
			console.log("strike");
		}
		
	});
	var plusbar = true;
	$("span").click(function()
	{
		$(this).parent().fadeOut();
	});
	$("#plus").click(function()
	{
		if(plusbar)
		{
			$("input").fadeOut();
			plusbar = false;
		}
		else
		{
			$("input").fadeIn();
			plusbar = true;
		}
	});
}
);