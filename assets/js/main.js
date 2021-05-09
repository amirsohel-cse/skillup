$(document).ready(function() {
	// grab the initial top offset of the navigation 
	   var stickyNavTop = $('.stickyNavbar').offset().top;
	   
	   // our function that decides weather the navigation bar should have "fixed" css position or not.
	   var stickyNav = function(){
		var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			 
		// if we've scrolled more than the navigation, change its position to fixed to stick to top,
		// otherwise change it back to relative
		if (scrollTop > stickyNavTop) { 
			$('.stickyNavbar').addClass('sticky');
		} else {
			$('.stickyNavbar').removeClass('sticky'); 
		}
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});
});

// hero date picker
$( function() {
    $( "#datepickerOne" ).datepicker();
} );
$( function() {
    $( "#datepickerTwo" ).datepicker();
} );

$(document).ready(function () {
	if ($(window).width() > 767){
	$('.navbar-light .d-menu').hover(function () {
			$(this).find('.sm-menu').first().stop(true, true).slideDown(150);
		}, function () {
			$(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
		});
	}
});

// $(document).ready(function() {
// 	$('.gallery-img').magnificPopup({
// 		type:'image',
// 		delegate: 'a',
// 		gallery: {
// 			enabled: true,
// 		}
// 	});
// });


// $(document).ready(function(){
// 	$('.about--part1').waypoint(function(direction){
// 		$('.about--part1').addClass('animated animate__animated animate__fadeInRight')
// 	}, {
// 		offset: '80%'
// 	})
// })
// $(document).ready(function(){
// 	$('.about--part2').waypoint(function(direction){
// 		$('.about--part2').addClass('animated animate__animated animate__fadeInLeft')
// 	}, {
// 		offset: '80%'
// 	})
// })
// $(document).ready(function(){
// 	$('.part4').waypoint(function(direction){
// 		$('.part4').addClass('animated animate__animated animate__fadeInDown')
// 	}, {
// 		offset: '80%'
// 	})
// })
// $(document).ready(function(){
// 	$('.part5').waypoint(function(direction){
// 		$('.part5').addClass('animated animate__animated animate__fadeInDown')
// 	}, {
// 		offset: '80%'
// 	})
// })
// $(document).ready(function(){
// 	$('.part6').waypoint(function(direction){
// 		$('.part6').addClass('animated animate__animated animate__fadeInDown')
// 	}, {
// 		offset: '80%'
// 	})
// })


// // rotated
// $(".text").click(function () {
// 	$("#arrowTopIcon").toggleClass("down");
// })

// // Hide Section 
// function myFunction() {
// 	var x = document.getElementById("hideSec");
// 	if (x.style.display === "none") {
// 	  x.style.display = "block";
// 	  x.style.animation = "fade 1s"
// 	} else {
// 	  x.style.display = "none";
// 	}
// }

// DataTable
$('.mydatatable').DataTable();


// function passwordShow() {
// 	var x = document.getElementById("inputPassord");
// 	if (x.type === "password") {
// 	  x.type = "text";
// 	} else {
// 	  x.type = "password";
// 	}
// }

// function passwordShowTwo() {
// 	var x = document.getElementById("inputConfirmPassword");
// 	if (x.type === "password") {
// 	  x.type = "text";
// 	} else {
// 	  x.type = "password";
// 	}
// }

// Img Preview 
// function readURL(input) {
// 	if (input.files && input.files[0]) {
// 		var reader = new FileReader();
		
// 		reader.onload = function (e) {
// 			$('#blah').attr('src', e.target.result);
// 		}
		
// 		reader.readAsDataURL(input.files[0]);
// 	}
// }

// $("#imgInp").change(function(){
// 	readURL(this);
// });

// Img Preview 

// var loadFile = function(event) {
//     var reader = new FileReader();
//     reader.onload = function(){
//       var output = document.getElementById('output');
//       output.src = reader.result;
//     };
//     reader.readAsDataURL(event.target.files[0]);
// };

// var loadFileTwo = function(event) {
//     var reader = new FileReader();
//     reader.onload = function(){
//       var output = document.getElementById('outputTwo');
//       output.src = reader.result;
//     };
//     reader.readAsDataURL(event.target.files[0]);
// };

// var loadFileNomineePhoto = function(event) {
//     var reader = new FileReader();
//     reader.onload = function(){
//       var output = document.getElementById('nomineePhoto');
//       output.src = reader.result;
//     };
//     reader.readAsDataURL(event.target.files[0]);
// };

// var loadFileNomineePhoto = function(event) {
//     var reader = new FileReader();
//     reader.onload = function(){
//       var output = document.getElementById('nomineeNid');
//       output.src = reader.result;
//     };
//     reader.readAsDataURL(event.target.files[0]);
// };

// var loadFileSignature = function(event) {
//     var reader = new FileReader();
//     reader.onload = function(){
//       var output = document.getElementById('signature');
//       output.src = reader.result;
//     };
//     reader.readAsDataURL(event.target.files[0]);
// };

// var loadFileAttachment = function(event) {
//     var reader = new FileReader();
//     reader.onload = function(){
//       var output = document.getElementById('attachment');
//       output.src = reader.result;
//     };
//     reader.readAsDataURL(event.target.files[0]);
// };
