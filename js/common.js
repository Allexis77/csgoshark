(function ($){

  $.fn.bekeyProgressbar = function(options){

      options = $.extend({
        animate     : true,
        animateText : true
      }, options);

      let $this = $(this);
    
      let $progressBar = $this;
      let $progressCount = $progressBar.find('.ProgressBar-percentage--count');
      let $circle = $progressBar.find('.ProgressBar-circle');
      let percentageProgress = $progressBar.attr('data-progress');
      let percentageRemaining = (100 - percentageProgress);
      let percentageText = $progressCount.parent().attr('data-progress');
    
      //Calcule la circonférence du cercle
      let radius = $circle.attr('r');
      let diameter = radius * 2;
      let circumference = Math.round(Math.PI * diameter);

      //Calcule le pourcentage d'avancement
      let percentage =  circumference * percentageRemaining / 100;

      $circle.css({
        'stroke-dasharray' : circumference,
        'stroke-dashoffset' : percentage
      })
      
      //Animation de la barre de progression
      if(options.animate === true){
        $circle.css({
          'stroke-dashoffset' : circumference
        }).animate({
          'stroke-dashoffset' : percentage
        }, 3000 )
      }
      
      //Animation du texte (pourcentage)
      if(options.animateText == true){

        $({ Counter: 0 }).animate(
          { Counter: percentageText },
          { duration: 3000,
           step: function () {
             $progressCount.text( Math.ceil(this.Counter) + '%');
           }
          });

      }else{
        $progressCount.text( percentageText + '%');
      }
    
  };

})(jQuery);

function getMessages(letter) {
  var div = $(".right-sidebar__chat-bottom");
  div.scrollTop(div.prop('scrollHeight'));
}

function copyFunc() {
  var copyText = document.getElementById("myPromoCode");
  copyText.select();
  document.execCommand("copy");
}
$(function() {
  getMessages();
});

$('.nav__li__more').on('click', function(e) {

  if($('.win__regime-visible').hasClass('win__regime-visible_show')) {
    $('.win__regime-visible').removeClass('win__regime-visible_show')
    $('.hidden-menu').toggleClass('visible-main__menu')
  } else {
    $('.hidden-menu').toggleClass('visible-main__menu')
  }

})


$('.win-regime__mobile').on('click', function(e) {

  if($('.hidden-menu').hasClass('visible-main__menu')) {
    $('.win__regime-visible').toggleClass('win__regime-visible_show')
  } else {
    $('.hidden-menu').addClass('visible-main__menu')
    $('.win__regime-visible').toggleClass('win__regime-visible_show')
  }


  if ($('.win__regime-visible').hasClass('win__regime-visible_show')) {
    e.preventDefault();
  }

})

$(document).ready(function(){

$('.ProgressBar--animateNone').bekeyProgressbar({
  animate : false,
  animateText : false
});

$('.ProgressBar--animateCircle').bekeyProgressbar({
  animate : true,
  animateText : false
});

$('.ProgressBar--animateText').bekeyProgressbar({
  animate : false,
  animateText : true
});

$('.ProgressBar--animateAll').bekeyProgressbar();

})


// Active weapon box
var actives = document.getElementsByClassName('center-content__box-item-active');
for (i = 0; document.getElementsByClassName('center-content__box-item').length > i; i++) {
  document.getElementsByClassName('center-content__box-item')[i].onclick = function() {
    var currentActive = actives[0];
    if (currentActive)
      currentActive.classList.remove('center-content__box-item-active');

    if (currentActive !== this)
      this.classList.add('center-content__box-item-active');
  };
}

// Active game mode
$('.game-mode-item').on('click', function() {
  $('.game-mode_active').removeClass('game-mode_active')
  $(this).addClass('game-mode_active')
})

$('[data-remodal-id=modalTelega]').remodal({
  modifier: 'with-red-theme'
});
// Pagination

if($('body').width() < 1370) {
	
	$('.pagination__page_active').next().css({
		'display' : 'flex',
		'margin-right' : '15px',
	});

	$('.pagination__page_active').next().css({
		'display' : 'flex',
		'margin-right' : '15px',
	});

	$('.pagination__page_active').prev().css({
		'display' : 'none',
		'margin-right' : '0px',
	});

	if($('.pagination__page_active').next()[0] === undefined) {
		$('.pagination__page_active').prev().css({
			'display' : 'flex',
			'margin-right' : '0px',
		});

		$('.pagination__page_active').css('cssText', 'margin-right: 15px !important;');
	}

}


$('.right-sidebar__chat-rules a').on('click', function(e) {
  e.preventDefault();
})

$('.right-sidebar__chat-rules .right-sidebar__chat-link').on('click', function(e) {
  e.preventDefault();
})
// Tabs

$('.right-sidebar__tab').on('click', function() {
  let thatTab = $(this).attr('tab-name') + '_tab'

  let currentTab = $('.right-sidebar').find(`[tab-name='${thatTab}']`)

  $('.tab-wrapper').removeClass('tab-wrapper_active')

  currentTab.addClass('tab-wrapper_active')

  $('.right-sidebar__tab_active').removeClass('right-sidebar__tab_active')

  $(this).addClass('right-sidebar__tab_active')


  if ($('.right-sidebar__chat-bottom').hasClass('tab-wrapper_active')) {
    $('.right-sidebar__chat-send').css('display', 'flex')
    $('.right__inventory__btns').css('display', 'none')
  } else {
    $('.right-sidebar__chat-send').css('display', 'none')
    $('.right__inventory__btns').css('display', 'flex')
  }

})

$('.user__tabs__top__item').on('click', function() {
  let thatTab = $(this).attr('tab-name')

  let currentTab = $('.user__tabs__bottom').find(`[tab-name='${thatTab}']`)

  $('.user__tabs__wrapper').removeClass('user__tabs__wrapper_active')

  currentTab.addClass('user__tabs__wrapper_active')

  $('.user__tabs__top__item_active').removeClass('user__tabs__top__item_active')

  $(this).addClass('user__tabs__top__item_active')

})

$('.game-mode-item').on('click', function() {
  let thatTab = $(this).attr('game-items')

  let currentTab = $('.game-items-wrapper').find(`[game-items='${thatTab}']`)

  $('.game-items_active').removeClass('game-items_active')

  currentTab.addClass('game-items_active')

})

$('.right-sidebar__chat-rules span').on('click', function() {
  let thatTab = $(this).attr('tab-name')

  let currentTab = $('.right-sidebar').find(`[tab-name='${thatTab}']`)

  $('.tab-wrapper').removeClass('tab-wrapper_active')

  currentTab.addClass('tab-wrapper_active')

  $('.right__inventory__btns').css('display', 'none')
  $('.right-sidebar__chat-send').css('display', 'none')
  $('.right-sidebar__tab_active').removeClass('right-sidebar__tab_active')

})


// Lazyload
lazyload();

// Custom Select
$('select').selectric();

// Remodal
$('[data-remodal-id=modal2]').remodal({
  modifier: 'with-red-theme'
});

$('[data-remodal-id=modal3]').remodal({
  modifier: 'with-red-theme'
});



// Accordion
let accItem = document.getElementsByClassName('accordionItem');
let accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
}

// Hide right sidebar

$('.right-sidebar__chat-link').on('click', function(e) {
  $('.right-sidebar__chat').css('margin-left', '100%');
  $('.hidden__show__btn').css('display', 'flex');
  e.stopPropagation();
})

$('.hidden__show__btn').on('click', function(e) {
  $('.right-sidebar__chat').css('margin-left', '0');
  $('.hidden__show__btn').css('display', 'none');
  e.stopPropagation();
})
var seconds = document.querySelector('.seconds');
var miliseconds = document.querySelector('.miliseconds');
var secondsTime = 12;
var miliSecondsTime = 99;
var timerMiliSec;
var timerSec;


seconds.innerHTML = secondsTime;
miliseconds.innerHTML = miliSecondsTime;

timerSec = setInterval(function(){
  secondsTime = secondsTime - 1;
  
  if(secondsTime == 0) {
    clearTimeout(timerSec);
    clearTimeout(timerMiliSec);
    miliseconds.innerHTML = '0'
  }

  if (secondsTime >= 10) {
    seconds.innerHTML = secondsTime
  } else {
    seconds.innerHTML = '0' + secondsTime
  }


},1000);

timerMiliSec = setInterval(function(){
  miliSecondsTime -= 1;
  miliseconds.innerHTML = miliSecondsTime

  if(miliSecondsTime == 0) {
    miliSecondsTime = 100;
  }

},10);
