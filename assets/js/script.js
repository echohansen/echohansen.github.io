$(document).ready(function() {
// all your jQuery code goes in here!

//click on item in experience section, will bring up corresponding resume info
//jQuery Function Number 1 .click()
$('.resume').click(function() {
	$('.resinner2').each(function() {
		//jQuery Function Number 2 .addClass()
		$(this).addClass('inactive');
	});
	$('.resinner').each(function() {
		//jQuery Function Number 3 .removeClass()
		$(this).removeClass('inactive');
	});

	//jQuery Function Number 4 .text()
	let name = $(this).text();


	// jQuery Function Number 5 .css()
	if($('.image4').css('z-index') == 10) {

		//fade out the background iage stacked over the text box
		//fade in text box

		// jQuery Function Number 6 .fadeOut()
		$('.image4').fadeOut(1000);
		//normalize
		$('.image3').css('opacity', .4);
		//change zindex so if statement is never entered again
		$('.image4').css('z-index', 0);

		// jQuery Function Number 7 .fadeIn()
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

//open up subtext under work experience when header is clicked
$('.resheader').click(function() {


		if($(this).hasClass("open")) {
			$(this).addClass('closed');
				$(this).removeClass('open');

			$('.resinner2').each(function() {
				$(this).addClass('inactive');
				
			});
		} else {
			$(this).removeClass('closed');
			$(this).addClass('open');
			//sloppy ik im sorry ok i dont wanna parse rn goddamn
			$('.resinner2').each(function() {
				$(this).addClass('inactive');
			});

			if($(this).hasClass('1')) {

				$('.w1').each(function () {
					$(this).removeClass('inactive');
				});
			}
			if($(this).hasClass('2')) {
				$('.w2').each(function () {
					$(this).removeClass('inactive');
				});
			}
			if($(this).hasClass('3')) {
				$('.w3').each(function () {
					$(this).removeClass('inactive');
				});
			}
			if($(this).hasClass('4')) {
				$('.w4').each(function () {
					$(this).removeClass('inactive');
				});
			}
			if($(this).hasClass('5')) {
				$('.w5').each(function () {
					$(this).removeClass('inactive');
				});
			}
		}

});


//back to top button now has smooth scroll; code from voidynullness.net
$('#topbutton').click(function() {
	//jQuery Function Number 8 .click()
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});

//smooth scroll for the anchor links within the site
//based on distance from top of browser bc everything else was fucking tricky
$('a[href^="#"]').click(function () {

	//jQuery Function Number 9 .hasClass()
	if ($(this).hasClass('abt')) {
		$('html, body').animate({scrollTop: '+1090px'}, 800);
	} else if ($(this).hasClass('proj')) {
		$('html, body').animate({scrollTop: '+2080px'}, 800);
	} else if ($(this).hasClass('exp')){
		$('html, body').animate({scrollTop: '+3080px'}, 800);
	}
	});
//end page
});

