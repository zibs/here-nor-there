$(document).ready(function() {
  $('#more-1').click(function() {
    $('.more-1').toggleClass('hidden')
    // if ($('.more-1').hasClass('hidden')) {
    //   $('.more-1').fadeIn().removeClass("hidden")
    // } else {
    //   $('.more-1').fadeOut().delay()addClass("hidden")
    // }
    if ($('.more-1').hasClass('hidden')) {
      $('#more-1').text('MORE')
    } else {
      $('#more-1').text('LESS')
    }
  })
  $('#more-2').click(function() {
    $('.more-2').toggleClass('hidden')
    if ($('.more-2').hasClass('hidden')) {
      $('#more-2').text('MORE')
    } else {
      $('#more-2').text('LESS')
    }
  })
  $('#more-3').click(function() {
    $('.more-3').toggleClass('hidden')
    if ($('.more-3').hasClass('hidden')) {
      $('#more-3').text('MORE')
    } else {
      $('#more-3').text('LESS')
    }
  })
})

$(document).ready(function() {
  // var player = document.getElementById('player')
  // document.getElementById('player').play()
})
$(document).ready(function() {
  var isPlaying = false
  $('#ep1').click(function() {
    var player = document.getElementById('epi1')
    if (isPlaying) {
      document.getElementById('epi1').pause()
      isPlaying = false
    } else {
      document.getElementById('epi1').play()
      isPlaying = true
    }
    player.addEventListener('timeupdate', function() {
      var currentTime = player.currentTime
      var duration = player.duration
      $('.range')
        .stop(true, true)
        .animate({ width: (currentTime + 0.25) / duration * 100 + '%' }, 250, 'linear')
    })
  })
  // var player = document.getElementById('player');
  // document.getElementById('player').play();
  // player.addEventListener("timeupdate", function() {
  //     var currentTime = player.currentTime;
  //     var duration = player.duration;
  //     $('.hp_range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
  // });
})

var IS_PLAYING = false
var CURRENT_ID;

function playOrPause(id) {
  if (!CURRENT_ID) {
    CURRENT_ID = id;
  }

  if (CURRENT_ID !== id && IS_PLAYING) {
    var oldPlayer = document.getElementById(CURRENT_ID)
    oldPlayer.pause()
    IS_PLAYING = false
  }

  CURRENT_ID = id;

  var player = document.getElementById(id)
  if (IS_PLAYING) {
    player.pause()
    IS_PLAYING = false
  } else {
    player.play()
    attachListenerAndAnimateControls(id)
    IS_PLAYING = true
  }
}

function attachListenerAndAnimateControls(id) {
  var player = document.getElementById(id)
  player.addEventListener('timeupdate', function() {
    var currentTime = player.currentTime
    var duration = player.duration
    $('.range')
      .stop(true, true)
      .animate({ width: (currentTime + 0.25) / duration * 100 + '%' }, 250, 'linear')
  })
}
