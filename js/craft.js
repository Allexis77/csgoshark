// Range
let connectSlider = document.getElementById('range');

noUiSlider.create(connectSlider, {
  start: 50,
  connect: 'lower',
  tooltips: true,
  range: {
    'min': 5,
    'max': 80
  }
});

const R = 50;
const gap = Math.PI / 18;
const bPart = document.querySelector('.blue-part');
const rPart = document.querySelector('.red-part');

const bPartBlur = document.querySelector('.blue-part_blur');
const rPartBlur = document.querySelector('.red-part_blur');

const range = document.getElementById('range');
range.noUiSlider.on('update', updateRatio);
let rangeMinSpan = document.querySelectorAll(".range__min")[0];
let rangeMaxSpan = document.querySelectorAll(".range__max")[0];

function updateRatio(event) {
  let val = document.querySelector('.noUi-tooltip').textContent
  const bVal = +event[0];
  const rVal = 100 - bVal;

  const bStart = -Math.PI / 2 + gap / 2;
  const bAngle = Math.PI * 2 * bVal / 100 - gap;
  const bEnd = bStart + bAngle;

  const rStart = bEnd + gap;
  const rAngle = Math.PI * 2 * rVal / 100 - gap;
  const rEnd = rStart + rAngle;

  const bPath = 
  `M ${Math.cos(bStart) * R + R} ${Math.sin(bStart) * R + R}, ` +
  `A ${R} ${R} 0 ${bAngle > Math.PI ? 1 : 0} 1 ${Math.cos(bEnd) * R + R} ${Math.sin(bEnd) * R + R}`;
  bPart.setAttribute('d', bPath);
  bPartBlur.setAttribute('d', bPath);

  const rPath = 
  `M ${Math.cos(rStart) * R + R} ${Math.sin(rStart) * R + R}, ` +
  `A ${R} ${R} 0 ${rAngle > Math.PI ? 1 : 0} 1 ${Math.cos(rEnd) * R + R} ${Math.sin(rEnd) * R + R}`;
  rPart.setAttribute('d', rPath);
  rPartBlur.setAttribute('d', rPath);

  $( document ).ready(function() {
    if (val > 72) {
      rangeMaxSpan.style.opacity = '0'
    } else {
      rangeMaxSpan.style.opacity = '1'
    }

    if (val <= 12) {
      rangeMinSpan.style.opacity = '0'
    } else {
      rangeMinSpan.style.opacity = '1'
  }
  });

}


// craft brain
$('.craft__upload').on('click', function(e) {
  e.preventDefault();
  $('.craft__center__svg').toggleClass('craft__center__svg_scale')

  $('.chance-arrow').css('transform', `rotate(0deg)`)
})

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let win = 60;

$('.craft__start').on('click', function() {

  $('.craft__start').attr('disabled', true)
  $('.craft__upload').attr('disabled', true)
  range.setAttribute('disabled', true)

  setTimeout(function () {
    $('.craft__start').removeAttr('disabled')
    $('.craft__upload').removeAttr('disabled')
    range.removeAttribute('disabled')
  }, 5000);

  if ($('.craft__center__svg').hasClass('craft__center__svg_scale')) {

    $('.chance-arrow').css('transform', 'rotate(0deg)')

    setTimeout(function() {

      if($('.noUi-tooltip')[0].textContent > win) {
        let chance = getRandomIntInclusive(1, -win)
        $('.chance-arrow').css('transition', 'transform 5s cubic-bezier(0.15, 0.15, 0, 1)');
        $('.chance-arrow').css('transform', 'rotate(' + (3600 + (chance * 10) * 0.36) + 'deg)');

        setTimeout(function () {
          $('.chance-arrow').css('transition', 'none');
          $('.chance-arrow').css('transform', 'rotate(' + ((chance * 10) * 0.36) + 'deg)');
        }, 5000);
      } else {
        let chance = getRandomIntInclusive(-win, -97)
        $('.chance-arrow').css('transition', 'transform 5s cubic-bezier(0.15, 0.15, 0, 1)');
        $('.chance-arrow').css('transform', 'rotate(' + (3600 + (chance * 10) * 0.36) + 'deg)');

        setTimeout(function () {
          $('.chance-arrow').css('transition', 'none');
          $('.chance-arrow').css('transform', 'rotate(' + ((chance * 10) * 0.36) + 'deg)');
        }, 5000);
      }

    }, 50)
    
  } else {
    $('.chance-arrow').css('transform', 'rotate(0deg)')

    setTimeout(function() {
      if($('.noUi-tooltip')[0].textContent > win) {
        let chance = getRandomIntInclusive(1, win)
        $('.chance-arrow').css('transition', 'transform 5s cubic-bezier(0.15, 0.15, 0, 1)');
        $('.chance-arrow').css('transform', 'rotate(' + (3600 + (chance * 10) * 0.36) + 'deg)');

        setTimeout(function () {
          $('.chance-arrow').css('transition', 'none');
          $('.chance-arrow').css('transform', 'rotate(' + ((chance * 10) * 0.36) + 'deg)');
        }, 5000);
      } else {
        let chance = getRandomIntInclusive(win, 97)
        $('.chance-arrow').css('transition', 'transform 5s cubic-bezier(0.15, 0.15, 0, 1)');
        $('.chance-arrow').css('transform', 'rotate(' + (3600 + (chance * 10) * 0.36) + 'deg)');

        setTimeout(function () {
          $('.chance-arrow').css('transition', 'none');
          $('.chance-arrow').css('transform', 'rotate(' + ((chance * 10) * 0.36) + 'deg)');
        }, 5000);
      }
    },50)

  }

})

// show select image on craft
if ($('.craft__center').length) {
  $('.center-content-bottom .center-content__box-item').on('click', function() {

    if ($(this).hasClass('center-content__box-item-active')) {
      $('.craft__center .craft__center-img').attr('src', '')
      $('.spinner-grow').css('display', 'block')
    } else {
      let currentImg = $(this).find('.center-content__box-item-img img').attr('src');
      $('.craft__center .craft__center-img').attr('src', currentImg)
      $('.spinner-grow').css('display', 'none')
    }


  })
}