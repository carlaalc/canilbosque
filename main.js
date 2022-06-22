$(window).on("scroll", function(){
	var distanciaDoTopo = $(window).scrollTop();

	if (distanciaDoTopo > 300) {
		distanciaDoTopo = 300;
	}

	$("#header_shadow").css("top", (distanciaDoTopo / 10) + "px");
})

var opcoesSR = {
	delay: 150,
	duration: 500,
	origin: 'bottom',
	distance: '50px',
	viewOffset: {
        bottom: 300
    }
}

//Leia Mais
$('#shitsu1_collapse').on('show.bs.collapse', function () {
  $('a[href="#shitsu1_collapse"]').text("Ver menos");
})

$('#shitsu1_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#shitsu1_collapse"]').text("Saiba mais sobre a raça");
})

$('#shitsu2_collapse').on('show.bs.collapse', function () {
  $('a[href="#shitsu2_collapse"]').text("Ver menos");
})

$('#shitsu2_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#shitsu2_collapse"]').text("Saiba mais sobre a raça");
})

$('#shitsu3_collapse').on('show.bs.collapse', function () {
  $('a[href="#shitsu3_collapse"]').text("Ver menos");
})

$('#shitsu3_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#shitsu3_collapse"]').text("Saiba mais sobre a raça");
})

$('#shitsu4_collapse').on('show.bs.collapse', function () {
  $('a[href="#shitsu4_collapse"]').text("Ver menos");
})

$('#shitsu4_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#shitsu4_collapse"]').text("Saiba mais sobre a raça");
})

$('#shitsu5_collapse').on('show.bs.collapse', function () {
  $('a[href="#shitsu5_collapse"]').text("Ver menos");
})

$('#shitsu5_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#shitsu5_collapse"]').text("Saiba mais sobre a raça");
})

$('#pastor_collapse').on('show.bs.collapse', function () {
  $('a[href="#pastor_collapse"]').text("Ver menos");
})

$('#pastor_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#pastor_collapse"]').text("Saiba mais sobre a raça");
})

$('#pastor1_collapse').on('show.bs.collapse', function () {
  $('a[href="#pastor1_collapse"]').text("Ver menos");
})

$('#pastor1_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#pastor1_collapse"]').text("Saiba mais sobre a raça");
})

$('#pastor2_collapse').on('show.bs.collapse', function () {
  $('a[href="#pastor2_collapse"]').text("Ver menos");
})

$('#pastor2_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#pastor2_collapse"]').text("Saiba mais sobre a raça");
})

$('#coton_collapse').on('show.bs.collapse', function () {
  $('a[href="#coton_collapse"]').text("Ver menos");
})

$('#coton_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#coton_collapse"]').text("Saiba mais sobre a raça");
})
$('#dogue_collapse').on('show.bs.collapse', function () {
  $('a[href="#dogue_collapse"]').text("Ver menos");
})

$('#dogue_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#dogue_collapse"]').text("Saiba mais sobre a raça");
})

$('#dogue1_collapse').on('show.bs.collapse', function () {
  $('a[href="#dogue1_collapse"]').text("Ver menos");
})

$('#dogue1_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#dogue1_collapse"]').text("Saiba mais sobre a raça");
})

$('#rot_collapse').on('show.bs.collapse', function () {
  $('a[href="#rot_collapse"]').text("Ver menos");
})

$('#rot_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#rot_collapse"]').text("Leia menos");
})

$('#depoimento_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#depoimento_collapse"]').text("Leia mais");
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
