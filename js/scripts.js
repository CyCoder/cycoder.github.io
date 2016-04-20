//Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=748305581880238";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

//Google Map JavaScript API
var map;
function initMap() {
  var myLocation = {lat: 40.753324, lng: -73.8287037}
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLocation
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: myLocation,
    title: 'Come Visit Me!'
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

$(document).ready(function(){
  
	//smooth scrolling
	var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    	var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  //Stellar
  $('#contact').stellar();

  //Tooltips
  $(function() {
    	$('[data-toggle="tooltip"]').tooltip();
  });

  //Contact Form
  $("#message").css({
  	"background-color": "white",
  	"color" : "black"
  });

  //Running Character Count on Message Box
  $("#message").on("keyup", function() {
  	console.log("keyup worked!");
  	//Here we set the length of the content of the textarea to a variable
  	var charCount = $("#message").val().length;
  	//Testing to make sure charCount is correct
  	console.log(charCount);
  	//Displaying the character count to user
  	$("#char-count").html(charCount);

  	if(charCount > 50) {
  		$("#char-count").css("color", "red");
  	} else {
  		$("#char-count").css("color", "black");
  	};
  });

  //After clicking Send Button
  $("#send").on("click", function() {
  	console.log("clicked");

  	var name = $("#name").val().toUpperCase();
  	console.log(name);
  	$("#visible-name").html(name);
  	$("#name").hide("fast", function() {
  		console.log("Successfully hidden name box!");
  	});

  	var phone = $("#phone").val();
  	console.log(phone);
  	$("#visible-phone").html(phone);
  	$("#phone").hide("fast", function() {
  		console.log("Successfully hidden phone box!");
  	});

  	var email = $("#email").val().toUpperCase();
  	console.log(email);
  	$("#visible-email").html(email);
  	$("#email").hide("fast", function() {
  		console.log("Successfully hidden email box!");
  	});

  	var comment = $("#message").val();
		console.log(comment);

  	if(comment == "") {
  		$("#message").css("border","1px solid red");
  	} else {
  		$("#visible-comment").html(comment);
  		$("#message").hide("slow", function() {
  			console.log("Successfully hidden message box!");
  		});
  		alert("Thank you for sending me a message! Note: This is just a test so nothing is being sent yet")
  	}

  	return false;
  });

	//Work Section
	//Using For Loop
	for(var i = 0; i < works.length; ++i) {
		$("#works").append("\
			<div class='col-xs-6 col-md-3 col-lg-3'>\
				<a href='" + works[i].url + "' class='work-img'>\
        	<img class='img-responsive' src='" + works[i].pic + "'>\
        	<span class='info'><p class='proj-title'>Title:</p>'" + works[i].title + "'</span>\
        </a>\
      </div>\
		");
		var images = $("#works img");

		if (i % 2 === 0) {
			$(images[i]).css("border", "2px solid DodgerBlue");
		} else {
			$(images[i]).css("border", "2px solid salmon");
		};
		$(".work-img").mouseenter( function() {
			$(".info", this).show();
		}).mouseleave( function() {
			$(".info", this).hide();
		});
	};
});