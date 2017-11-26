$(document).ready(function() {
// all your jQuery code goes in here!

//click on item in experience section, will bring up corresponding resume info
$('.resume').click(function() {

	// jQuery Function Number 1 .text()
	let name = $(this).text();


	// jQuery Function Number 2 .css()
	if($('.image4').css('z-index') == 10) {

		//fade out the background iage stacked over the text box
		//fade in text box

		// jQuery Function Number 3 .fadeOut()
		$('.image4').fadeOut(1000);
		//change zindex so if statement is never entered again
		$('.image4').css('z-index', 0);

		// jQuery Function Number 4 .fadeIn()
		$('#resumepopup').fadeIn(1200);

		//fade in correct text
		$('#' + name).css('display', 'inline-block');

	} else {
		//bring in relevant text in when this isnt the first click in the resume
		//ik this is like the ugliest way to do this im sorry :'(((
		//ya girl has a deadline
		$('#education').css('display', 'none');
		$('#activities').css('display', 'none');
		$('#work').css('display', 'none');
		$('#skills').css('display', 'none');
		$('#interests').css('display', 'none');

		$('#' + name).fadeIn(900);
	}

	//EVENTUALLY LINK ALL OF THE RESUME HEADER BULLETS TO ACTUSL PLACES
});

//back to top button now has smooth scroll; code from voidynullness.net
$('#topbutton').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});



























});