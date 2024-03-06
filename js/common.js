// url에서 특정정보
function get_url_info(key) {
  // 1) url에 있는 문자열 가져오기
  let url = location.href; // product.html?xcode=044&cate_no=0&genre=men

  // 2) ? 뒤에꺼만(정보) 잘라내기
  url = url.split("?"); // [product.html , xcode=044&cate_no=0&genre=men]

  if (url.length > 1) {
    url = url[1]; // xcode=044&cate_no=0&genre=men

    // 3) &(정보별)로 나누기
    url = url.split("&"); // [xcode=044  ,  cate_no=0#review  ,  genre=men]

    // console.log(url)

    // 4) 각 방마다 'cate_no' 있는지 체크
    for (let i = 0; i < url.length; i++) {
      // a 태그 눌러서 #이 별도로 생기면
      if (url[i].indexOf("#") > -1) {
        // cate_no=0#review
        url[i] = url[i].split("#")[0]; // [cate_no=0  ,  review]
      }

      let tmp_url = url[i].split("="); // i:0 =>[xcode , 044]
      // i:1 =>[cate_no , 0]
      if (tmp_url[0] == key) {
        // 5) 있으면 'cate_no'의 실제값 return 해주기
        return tmp_url[1];
      }
    }
    return -1;
  } else {
    return -1;
  }
}

$(".top_btn").mousemove(function (event) {
  // top_btn 영역에서 마우스 움직이면
  // 페이지 맨 꼭대기부터 현재 마우스 좌표 - 페이지 맨 꼭대기부터 빨간박스의 위치 = 빨간박스 기준 마우스 위치
  $(".tb_img").css({
    left: event.pageX - $(".top_btn").offset().left,
    top: event.pageY - $(".top_btn").offset().top,
  });
});

$(document).ready(function () {
  function move(el, aa, bb) {
    if (aa != -1) {
      el.css({
        transform: aa,
      });
    }

    setTimeout(function () {
      el.css({
        transform: bb,
      });
    }, timer);
  }

  let ham_chk = true;
  const timer = 300;
  $(".ham").click(function () {
    if (ham_chk) {
      move(
        $("#line_top"),
        "translateY(11px)",
        "translateY(11px) rotate(45deg)"
      );
      move($("#line_mid"), -1, "scale(0)");
      move(
        $("#line_bot"),
        "translateY(-11px)",
        "translateY(-11px) rotate(-45deg)"
      );
      ham_chk = false;
    } else if (!ham_chk) {
      move(
        $("#line_top"),
        "translateY(12.5px) rotate(0)",
        "translateY(0)",
        "scale(1)"
      );
      move($("#line_mid"), -1, "scale(1)");
      move(
        $("#line_bot"),
        "translateY(-12.5px) rotate(0)",
        "translateY(0)",
        "scale(1)"
      );
      ham_chk = true;
    }
    $(".ham_pan").toggleClass("active_pan");
  });
});
$(window).scroll(function () {
  let s_top = $(window).scrollTop();
  // let s_bot = s_top + w_height;

  // header-------------------------------------------------------
  if (0 < s_top) {
    $("header").addClass("header_active");
    $(".ham").addClass("ham_active");
  } else if (0 >= s_top) {
    $("header").removeClass("header_active");
    $(".ham").removeClass("ham_active");
  }
});
