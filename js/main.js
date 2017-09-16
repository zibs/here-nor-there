$(document).ready(function() {
  $('#more-1').click(function() {
    $('.more-1').toggleClass('hidden')
    // if ($('.more-1').hasClass('hidden')) {
    //   $('.more-1').fadeIn().removeClass("hidden")
    // } else {
    //   $('.more-1').fadeOut().delay()addClass("hidden")
    // }
    if ($('.more-1').hasClass("hidden")) {
      $('#more-1').text("MORE")
    } else {
      $('#more-1').text("LESS")
    }
  })
  $('#more-2').click(function() {
    $('.more-2').toggleClass('hidden')
    if ($('.more-2').hasClass("hidden")) {
      $('#more-2').text("MORE")
    } else {
      $('#more-2').text("LESS")
    }
  })
  $('#more-3').click(function() {
    $('.more-3').toggleClass('hidden')
    if ($('.more-3').hasClass("hidden")) {
      $('#more-3').text("MORE")
    } else {
      $('#more-3').text("LESS")
    }
  })
})





$(document).ready(function() {
  // var player = document.getElementById('player');
  // document.getElementById('player').play();
  // player.addEventListener("timeupdate", function() {
  //     var currentTime = player.currentTime;
  //     var duration = player.duration;
  //     $('.hp_range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
  // });
}
