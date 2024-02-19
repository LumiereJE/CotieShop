$(document).ready(function () {
  //top_btn_motion
  let w_height = $(window).innerHeight();
  let f_o_top = $("footer").offset().top - 100;

  $(window).scroll(function () {
    let s_top = $(window).scrollTop();
    let s_bot = s_top + w_height;

    // header-------------------------------------------------------
    if (0 < s_top) {
      $("header").addClass("header_active");
    } else if (0 >= s_top) {
      $("header").removeClass("header_active");
    }

    // top_btn-------------------------------------------------------
    //    if(s_bot >= f_o_top) {
    //        $('.top_btn').addClass('top_btn_active')
    //    }
    //    else {
    //        $('.top_btn').removeClass('top_btn_active')
    //    }
    // -------------------------------------------------------
  });

  $(window).resize(function () {
    w_height = $(window).innerHeight();
  });

  let cate = get_url_info("cate");
  console.log(cate);
  //let data = ITEM_LIST[cate];

  //모든 상품 보기
  if (cate == 999) {
    for (let i = 0; i < ITEM_LIST.length; i++) {
      for (j = 0; j < ITEM_LIST[i].length; j++) {
        let list = `
                        <li class="item_box">
                            <a href="Coties_detail.html?cate=${i}&item_no=${j}">
                                <div class="img_box">
                                    <img src="img/item_detail/${ITEM_LIST[i][j].folder}/${ITEM_LIST[i][j].covered_src}" alt="이미지를 찾을 수 없습니다.">
                                    <img src="img/item_detail/${ITEM_LIST[i][j].folder}/${ITEM_LIST[i][j].src}" alt="이미지를 찾을 수 없습니다." class="tmp_img">
                                </div>
                                <div class="txt_box">
                                    <p>${ITEM_LIST[i][j].desc}</p>
                                    <p>${ITEM_LIST[i][j].title}</p>
                                </div>
                            </a>
                        </li>`;

        $(".item_container").append(list);
      }
    }
  } else {
    for (let i = 0; i < ITEM_LIST[cate].length; i++) {
      let list = `<li class="item_box">
                            <a href="Coties_detail.html?cate=${cate}&item_no=${ITEM_LIST[cate][i].item_no}">
                                <div class="img_box">
                                    <img src="img/item_detail/${ITEM_LIST[cate][i].folder}/${ITEM_LIST[cate][i].covered_src}" alt="">
                                    <img src="img/item_detail/${ITEM_LIST[cate][i].folder}/${ITEM_LIST[cate][i].src}" alt="" class="tmp_img">
                                </div>
                                <div class="txt_box">
                                    <p>${ITEM_LIST[cate][i].desc}</p>
                                    <p>${ITEM_LIST[cate][i].title}</p>
                                </div>
                            </a>
                        </li>`;

      $(".item_container").append(list);
    }
  }
});
