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
		$('#popIn').text('Despite having a rate of overdose deaths from heroin and fentanyl nearly identical to the Bronx in 2016, residents of Staten Island, whose population is 62 percent white, were more likely than residents of the Bronx to receive buprenorphine for addiction treatment.').addClass('popIn-info');
	});


	/*grapes info*/
	$('#circle_grapes').click(function () {
		showInfo();
		$('#popIn').text('According to the New York City Department of Health, Staten Island accounted for 20 percent of the city’s  buprenorphine prescriptions in 2016. The Bronx accounted for 18 percent of all buprenorphine prescriptions. Despite having a greater share of prescriptions, Staten Island had less than half the population of the Bronx (473,000 vs. 1.4 million).').addClass('popIn-info');
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
		$('#popIn2').text('According to the New York City Department of Health, the Bronx, which is 85 percent black and Latino, had the greatest share among boroughs (36%) of people who sought methadone treatment in 2016. That’s despite being fourth among boroughs in total population size.').addClass('popIn-info');
	});


	/*broom info*/
	$('#circle_broom').click(function () {
		showInfo2();
		$('#popIn2').text('In 2016, the Bronx also had a higher rate of overdose deaths from heroin and fentanyl than Manhattan, Queens and Brooklyn; but it had an overdose rate comparable to Staten Island. ').addClass('popIn-info');
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
		$('#popIn4').text('The Wellness Center at Port Morris is one of three opioid addiction treatment clinics in the Bronx operated by the Montefiore-Einstein medical system. The clinics are unique in that they offer a methadone treatment, as well as a buprenorphine treatment program.').addClass('popIn-info');
	});

	$('#circle_spanish').click(function () {
		showInfo4();
		$('#popIn4').text('Located in the Port Morris section of the South Bronx, the clinic assists clientele living in an area that’s recorded some of the highest rates of opioid-related overdose deaths in New York City.').addClass('popIn-info');
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
		$('#popIn3').text('A majority of New York City residents (53 percent) were actively enrolled in a Methadone program were Hispanic/Latino. A plurality of active Methadone patients in 2016 were from the Bronx (36 percent)').addClass('popIn-info');
	});

	$('#circle_rain').click(function () {
		showInfo3();
		$('#popIn3').text('Of the 107,867 prescriptions of Buprenorphine in New York City, 76.1 percent were paid for with private insurance; 10.9 percent were paid for with Medicaid; 3.7 percent were paid for with Medicare; 4.3 percent were paid for out-of-pocket.').addClass('popIn-info');
	});

	/*close info window*/

	$('#X3-close').click(function () {
		$('#X3-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide3').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	}); /*closes function for photo 4*/

});
