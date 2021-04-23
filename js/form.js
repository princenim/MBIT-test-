
function scrollUp() {
    // 각 문제를 감싸는 .test의 height을 가져오는 코드를 가져와 변수 선언
    const vheight = $('.test').height();
    $('html, body').animate({
      scrollTop: ((Math.ceil($(window).scrollTop() / vheight)-1) * vheight)
    }, 500);
};
  
function scrollDown() {
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight)+1) * vheight)
    }, 500);
}

 
$(function(){
    //  'next_btn'을 눌렀을 때, 문항 선택유무를 확인
        $('.next_btn').click(function(e){
        //  버튼(this)을 감싸고 있는 div태그(parent)의 이전태그(pre)의 자식들(child)를
        let divs = $(this).parent().prev().children();
        // 가지고와 체크 확인
        let inputs = divs.find('input:checked');
        
        // 만약에 input의 length가 1보다 작으면,
        if(inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        e.preventDefault();
        scrollDown();
    });
    // 이전 버튼을 눌렀을때, 이전으로 돌아가는 함수 호출
    $('.prev_btn').click(function(e){
        e.preventDefault();
        scrollUp();
    });

    // 폼 전체 제출할때 검사, 문항 선택 유무확인
    $("#form").submit(function() {
        let radios = $('input[type=radio]:checked');
        if(radios.length < 3) {
            alert("문항이 선택되지 않았습니다.");
            return false;
        }
        return true;
    });

    // 새로고침을 했을때, 초기화화면 이동
    $("html, body").animate({
        scrollTop: 0
    }, 500);
});
