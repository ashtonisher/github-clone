(function (window, document) {
    'use strict';
    //요소를 담고있으면 보통 변수명 앞에 $를 붙여준다. 안 붙여도 무방
    const $toggles = document.querySelectorAll('.toggle'); // NodeList 선택자로 찾는 것이라 . 클래스 붙임
    const $toggleBtn = document.getElementById('toggle-btn'); // 이미 id 찾는다고 되어있기에 # 안붙임

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    window.addEventListener('resize', function () {
        if(window.innerWidth > 1024) {
            offElements();//off toggle element
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)
