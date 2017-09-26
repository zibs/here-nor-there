$(document).ready(function() {
  $("#more-1").click(function() {
    $(".more-1").toggleClass("hidden");
    // if ($('.more-1').hasClass('hidden')) {
    //   $('.more-1').fadeIn().removeClass("hidden")
    // } else {
    //   $('.more-1').fadeOut().delay()addClass("hidden")
    // }
    if ($(".more-1").hasClass("hidden")) {
      $("#more-1").text("MORE");
    } else {
      $("#more-1").text("LESS");
    }
  });
  $("#more-2").click(function() {
    $(".more-2").toggleClass("hidden");
    if ($(".more-2").hasClass("hidden")) {
      $("#more-2").text("MORE");
    } else {
      $("#more-2").text("LESS");
    }
  });
  $("#more-3").click(function() {
    $(".more-3").toggleClass("hidden");
    if ($(".more-3").hasClass("hidden")) {
      $("#more-3").text("MORE");
    } else {
      $("#more-3").text("LESS");
    }
  });
});

var wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#dd621c",
  progressColor: "#4CDD28",
  height: 88
});

var IS_PLAYING = false;
var CURRENT_EPISODE;
var CONTROLS_VISIBLE = false;
var WAVEFORM_VISIBLE = true;

function playOrPause(episodeName) {
  if (CURRENT_EPISODE !== episodeName) {
    $(".spinner").fadeTo('500', 1);
    wavesurfer.stop();
    CURRENT_EPISODE = episodeName;
    wavesurfer.load("../media/" + episodeName + ".mp3");
    wavesurfer.on("ready", function() {
      $(".spinner").fadeTo("500", 0);
      wavesurfer.play();
      IS_PLAYING = true;
      if (!CONTROLS_VISIBLE) {
        $(".controls").fadeToggle();
        CONTROLS_VISIBLE = true;
      }
      if (!WAVEFORM_VISIBLE) {
        $("#waveform").fadeTo("500", 1);
        WAVEFORM_VISIBLE = true;
      }
    });
  } else {
    if (IS_PLAYING) {
      wavesurfer.pause();
      IS_PLAYING = false;
    } else {
      wavesurfer.play();
      IS_PLAYING = true;
    }
  }
}

function play() {
  wavesurfer.play();
  IS_PLAYING = true;
}

function pause() {
  wavesurfer.pause();
  IS_PLAYING = false;
}

function stop() {
  $(".controls").fadeToggle();
  $("#waveform").fadeTo("500", 0);
  CONTROLS_VISIBLE = false;
  WAVEFORM_VISIBLE = false;
  IS_PLAYING = false;
  CURRENT_EPISODE= '';
  wavesurfer.stop();
}
