let cate = get_url_info("cate");
let item_no = get_url_info("item_no");

console.log(ITEM_LIST[cate], [item_no]);

let data = ITEM_LIST[cate][item_no];

let list = `
<div class="top_sec">
    <div class="img_box">
        <img src="img/item_detail/${data.folder}/${data.src}" alt="">
        <img src="img/item_detail/${data.folder}/${data.covered_src}" alt="">
    </div>

    <div class="txt_box">
        <div class="txt_pos">
            <div class="brand_name">BRAND : ${data.desc}</div>
            <div class="hash font_kor">`;
// <a href="#">#귀여운</a>
// <a href="#">#인형놀이</a>
// <a href="#">#프랑스</a>
// <a href="#">#장난감</a>
// <a href="#">#동물모양</a>
// <a href="#">#삑삑이</a>

for (let i = 0; i < data.hash.split(",").length; i++) {
  list += `<span>${data.hash.split(",")[i]}</span>`;
}

list += `</div>
        </div>
        <p class="item_name">${data.title}</p>
        <p class="item_price">${data.price}<span>원</span></p>
        <div class="more_btn">
            <a href="#">
                <p>구매하러 가기</p>
                <img class="filter" src="img/main/svg/button-basic-fill.svg" alt="">
                <img class="more_stroke" src="img/main/svg/button-basic-stroke.svg" alt="">
            </a>    
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="143rem" height="36rem" viewBox="0 0 143 36" fill="none" class="scallop">
            <path d="M142.955 32.2994C142.001 26.0424 140.549 19.7119 137.279 14.2187C134.36 9.3129 129.96 5.28842 124.783 2.86492C114.281 -2.05552 102.299 -0.616112 93.3961 6.87471C90.7561 9.09258 88.5415 11.8098 86.8401 14.8062C83.9068 9.29821 78.9348 4.97997 72.8481 2.86492C63.8428 -0.263603 53.7668 3.11461 47.7241 10.3117C46.1841 12.1477 44.9228 14.1599 43.9695 16.2896C39.1001 9.37165 30.9455 4.77434 22.3508 4.93591C15.8828 5.03872 10.0895 7.80005 6.23213 13.0289C2.84413 17.6262 1.34813 23.3839 0.0868013 28.8625C-0.763865 32.5491 4.89747 34.106 5.74813 30.4194C6.7748 25.9836 7.8748 21.4157 10.2948 17.494C12.9641 13.1758 17.3055 10.8845 22.3655 10.7964C31.2388 10.6348 39.5695 16.9947 42.0041 25.4989C42.9428 28.7597 47.5921 27.9959 47.7681 24.7205C48.2521 15.8784 56.1575 7.84411 65.0601 7.55035C73.8748 7.25659 82.5721 14.4537 83.6721 23.3104C83.8481 24.7646 84.6548 26.013 86.2095 26.1893C87.6028 26.3508 89.0841 25.5283 89.4215 24.0889C91.5041 15.2615 98.6468 8.07911 107.549 6.19907C116.496 4.30433 126.543 8.50506 131.559 16.1428C135.02 21.4304 136.355 27.7021 137.293 33.871C137.528 35.4426 139.508 36.3092 140.901 35.9273C142.588 35.4573 143.189 33.871 142.955 32.2994Z" fill="black"/>
        </svg>
        <p class="item_text">${data.detail}</p>
        <div class="info">
            <div class="info_title">
                <p>INPORMATION</p>
                <img class="arrow" src="img/main/icon/free-icon-chevron-6367846.png" alt="">
            </div>

            <div class="info_text font_kor">
                <ul><b>소재</b>
                    <li>· ${data.material}</li>
                </ul>
            </div>
        </div>

        <div class="info">
            <div class="info_title">
                <p>Delivery & Exchanges / Return</p>
                <img class="arrow" src="img/main/icon/free-icon-chevron-6367846.png" alt="">
            </div>    

            <div class="info_text info_long font_kor">
                <ul><b>배송정보</b>
                    <li>
                        <p>
                    · 친환경 포장: 꼬띠샵은 종이테이프, 종이완충제 등 친환경 포장제를 사용합니다.<br>

                    · 배송기간 : 3일~7일 (영업일 기준) 상품 종류나 재고 상황에 따라 배송이 다소 지연될 수 있습니다.<br>
                        
                    · 배송지역: 전국지역 (도서 산간지역, 제주도의 경우 평균 배송일보다 1~2일 더 소요 가능)<br>
                        
                    · 배송비용 : 3,500원 (5만원 이상 주문 시 무료배송)<br>
                        </p>
                    </li>
                </ul>
                <ul><b>교환 및 반품안내</b>
                    <li>
                        <p>
                    · 상품하자, 오배송의 경우 택배비는 무료로 반품/교환이 가능합니다.<br>

                    · 반품/교환은 미사용 제품에 한해 배송 완료 후 7일 이내 고객센터 또는 Q&A 게시판을 통해 접수하여 주십시오.<br>
                    
                    · 고객 부주의로 상품이 훼손 및 변경된 경우, 털뭍음 등의 사용 흔적이 있는 경우 반품/교환이 불가능합니다.<br>
                    
                    · 택 제거, 상품 포장이 훼손되어 상품 가치가 상실된 경우 반품/교환이 불가능합니다.<br>
                    
                    · 모니터 해상도의 차이로 인해 색상이나 이미지가 실제와 다른 경우는 무료 반품/교환 사유가 아닙니다.<br>
                    
                    · 상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품의 경우 택배비는 고객 부담이며, 무료배송 상품인 경우에도 왕복 택배비가 발생합니다.<br>
                    
                    · 본 제품은 AS가 불가합니다.<br>
                        </p>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" width="143rem" height="36rem" viewBox="0 0 143 36" fill="none" class="d_scallop">
            <path d="M142.955 32.2994C142.001 26.0424 140.549 19.7119 137.279 14.2187C134.36 9.3129 129.96 5.28842 124.783 2.86492C114.281 -2.05552 102.299 -0.616112 93.3961 6.87471C90.7561 9.09258 88.5415 11.8098 86.8401 14.8062C83.9068 9.29821 78.9348 4.97997 72.8481 2.86492C63.8428 -0.263603 53.7668 3.11461 47.7241 10.3117C46.1841 12.1477 44.9228 14.1599 43.9695 16.2896C39.1001 9.37165 30.9455 4.77434 22.3508 4.93591C15.8828 5.03872 10.0895 7.80005 6.23213 13.0289C2.84413 17.6262 1.34813 23.3839 0.0868013 28.8625C-0.763865 32.5491 4.89747 34.106 5.74813 30.4194C6.7748 25.9836 7.8748 21.4157 10.2948 17.494C12.9641 13.1758 17.3055 10.8845 22.3655 10.7964C31.2388 10.6348 39.5695 16.9947 42.0041 25.4989C42.9428 28.7597 47.5921 27.9959 47.7681 24.7205C48.2521 15.8784 56.1575 7.84411 65.0601 7.55035C73.8748 7.25659 82.5721 14.4537 83.6721 23.3104C83.8481 24.7646 84.6548 26.013 86.2095 26.1893C87.6028 26.3508 89.0841 25.5283 89.4215 24.0889C91.5041 15.2615 98.6468 8.07911 107.549 6.19907C116.496 4.30433 126.543 8.50506 131.559 16.1428C135.02 21.4304 136.355 27.7021 137.293 33.871C137.528 35.4426 139.508 36.3092 140.901 35.9273C142.588 35.4573 143.189 33.871 142.955 32.2994Z" fill="black"/>
</svg>
<div class="d_img">`;
console.log(data.detail_img.split(","));

for (let i = 0; i < data.detail_img.split(",").length; i++) {
  list += `<img class="d_img" src="img/item_detail/${data.folder}/${
    data.detail_img.split(",")[i]
  }" alt="상품이미지">`;
}
list += `</div>`;

$(".real_main").prepend(list);

// 상세 정보 화살표 클릭이벤트
$(".arrow").click(function () {
  $(this).toggleClass("arrow_action");
  var infoText = $(this).parent().next(".info_text");
  infoText.toggleClass("info_action");
});
