$(document).ready(function () {
	/*function used in several places to show slide info in photo1*/
	var showInfo = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X1-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
	}

	/*Banana info*/
	$('#circle_banana').click(function () {
		showInfo();
		$('#popIn').text('The Banana is a year-round favorite, great tasting, nutritious, inexpensive and comes hermetically sealed.').addClass('popIn-info');
	});


	/*grapes info*/
	$('#circle_grapes').click(function () {
		showInfo();
		$('#popIn').text('The diminutive grape comes in green and red. Best sipped after fermenting.').addClass('popIn-info');
	});

	/*close info window*/

	$('#X1-close').click(function () {
		$('#X1-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	}); /*closes function for photo 1*/

	/*Start functions for photo2*/

	var showInfo2 = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X2-close').addClass('btn_close_show');
		$('#slide2').addClass('info_slides_show');
	}

	/*chair info*/
	$('#circle_chair').click(function () {
		showInfo2();
		$('#popIn2').text('Chair for bathing. rusted. wheels don\'t turn').addClass('popIn-info');
	});


	/*broom info*/
	$('#circle_broom').click(function () {
		showInfo2();
		$('#popIn2').text('Bristle brush broom withstands mold and rough floors.').addClass('popIn-info');
	});

	/*close info window*/

	$('#X2-close').click(function () {
		$('#X2-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide2').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	});
	/*Start functions for photo4*/

	var showInfo4 = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X4-close').addClass('btn_close_show');
		$('#slide4').addClass('info_slides_show');
	}
	/*french info*/
	$('#circle_french').click(function () {
		showInfo4();
		$('#popIn4').text('The Banana is a year-round favorite, great tasting, nutritious, inexpensive and comes hermetically sealed.').addClass('popIn-info');
	});

	$('#circle_spanish').click(function () {
		showInfo4();
		$('#popIn4').text('The Banana is a year-round favorite, great tasting, nutritious, inexpensive and comes hermetically sealed.').addClass('popIn-info');
	});

	/*close info window*/

	$('#X4-close').click(function () {
		$('#X4-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide4').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	}); /*closes function for photo 4*/

	/*Start functions for photo3*/

	var showInfo3 = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X3-close').addClass('btn_close_show');
		$('#slide3').addClass('info_slides_show');
	}
	/*french info*/
	$('#circle_snow').click(function () {
		showInfo3();
		$('#popIn3').text('The Banana is a year-round favorite, great tasting, nutritious, inexpensive and comes hermetically sealed.').addClass('popIn-info');
	});

	$('#circle_rain').click(function () {
		showInfo3();
		$('#popIn3').text('The Banana is a year-round favorite, great tasting, nutritious, inexpensive and comes hermetically sealed.').addClass('popIn-info');
	});

	/*close info window*/

	$('#X3-close').click(function () {
		$('#X3-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide3').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	}); /*closes function for photo 4*/

});