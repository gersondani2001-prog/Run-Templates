// codigo fuente de javascript cconponentes logiccos

// Cod. Javascript
console.log("Cod. Javascript");

// preload
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}
function showPage() {
    document.getElementById("loader_bg").style.display = "none";
    document.getElementById("mybody").style.display = "block";
}  

// slider
var main = function() {

	var paused = false

	$('.arrowR').click(function() {
		paused = true;
		$('#slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
	});
		
	$('.arrowL').click(function() {
		paused = true;
		$('#slideshow > div:last')
		.fadeIn(1000)
		.prependTo('#slideshow')
		.next()
		.fadeOut(1000)
		.end();
	});


	
	setInterval(function() {
		if (paused === false) { 
			$('#slideshow > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow');
		};
	},  100000);
   
	
};

$(document).ready(main);



// Cod. Jquery
$(document).ready(function(){
    console.log("Cod. Jquery");
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.ir-arriba').fadeIn();
        } else {
            $('.ir-arriba').fadeOut();
        }
    });

    $('.ir-arriba').click(function () {
        $("html, body").animate({
            scrollTop: 0,
        }, 600);
        return false;
    });

});
const btnToggle = document.querySelector('.toggle-btn');
// funcion para mostrar menu y activarlo
btnToggle.addEventListener('click', function () {
    console.log('clik')
    document.getElementById('sidebar').classList.toggle('active');
    console.log(document.getElementById('sidebar'))
});

// Cod. AngularJS
var app = angular.module("app",[]);
app.controller("myCtrl", function($scope) {
    $scope.CodAngularJs = "Cod. AngularJs";
    console.log($scope.CodAngularJs);
    // escribir codigo de angular js abajo
});