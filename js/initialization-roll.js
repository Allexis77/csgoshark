// let winNumber = 1;
// let tracks = 2;

// let options = {
// 	spacing: 10,      
// 	acceleration: 200, 
// 	fps: 80, 
// 	audio: "audio/click.wav",
// 	selector: ":scope > *",
// };

// let roulette = new Roulette(".roulette", options);

// document.getElementById("rollStart").addEventListener("click", function() {
// 	roulette.rotateTo(winNumber - 1, { tracks: tracks, random: false });
// });

    // transform: translateX(-8447px);
    // transition: all 9000ms cubic-bezier(0.4, 0, 0.2, 1) -6ms;



var winNumber = 15;
var winItem = (winNumber * (130 + 10)) - ($('.roulette-wrapper').width() / 2 + 42);

$('.roll-start').on('click', function() {
	$('.roullete__list').css('transform', `translateX(${-winItem}px)`)
	$('.roullete__list').css('transition', `all 6000ms cubic-bezier(0.4, 0, 0.2, 1) -6ms`)
})