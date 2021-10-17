$(document).ready(function(){

	function openMenu()	

	{
		$('.nav').addClass('is-visible');	
		

	} 


	function hideMenu()
	{  
		$('.nav').removeClass('is-visible');

	}



	$('.header__burger').click(openMenu);

	$('.header__close').click(hideMenu);

	

});	
