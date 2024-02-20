$(document).ready(function () {
  let sec_top = $("main").offset().top;
  let L_1 = $(".L_1").offset().top;
  let L_2 = $(".L_2").offset().top;

  let R_1 = $(".R_1").offset().top;
  let R_2 = $(".R_2").offset().top;

  //top_btn_motion
  let w_height = $(window).innerHeight();
  let f_o_top = $("footer").offset().top - 100;

  $(window).scroll(function () {
    let s_top = $(window).scrollTop();
    let s_bot = s_top + w_height;

    // header-------------------------------------------------------
    if (0 < s_top) {
      $("header").addClass("header_active");
      $(".ham").addClass("ham_active");
    } else if (0 >= s_top) {
      $("header").removeClass("header_active");
      $(".ham").removeClass("ham_active");
    }

    // top_btn-------------------------------------------------------
    // if(s_bot >= f_o_top) {
    //     $('.top_btn').addClass('top_btn_active')
    // }
    // else {
    //     $('.top_btn').removeClass('top_btn_active')
    // }
    // -------------------------------------------------------

    console.log(s_top, L_1, L_2);
    if (s_top + 600 >= L_1) {
      $(".L_1").addClass("opacity");
    }
    if (s_top + 600 >= L_2) {
      $(".L_2").addClass("opacity");
    }
    if (s_top + 600 >= R_1) {
      $(".R_1").addClass("opacity");
    }
    if (s_top + 600 >= R_2) {
      $(".R_2").addClass("opacity");
    }
  });

  $(window).resize(function () {
    w_height = $(window).innerHeight();
  });
});
