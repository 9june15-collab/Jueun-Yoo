// 1. HTML에서 버튼 2개와 페이지 2개를 자바스크립트로 정확히 불러옵니다.
// (HTML에 적으신 버튼의 id를 여기 'btn-home', 'btn-works' 자리에 넣어주셔야 합니다)
const btnHome = document.getElementById('btn-home'); 
const btnWorks = document.getElementById('btn-works');

// 회원님이 지정하신 ID인 'home'과 'works'를 정확히 매칭합니다.
const pageHome = document.getElementById('home');
const pageWorks = document.getElementById('works');


// 2. Works 버튼을 클릭했을 때
btnWorks.addEventListener('click', function() {
    // 첫 번째 페이지(home)에 hidden 클래스를 "추가"해서 숨깁니다.
    pageHome.classList.add('hidden');
    // 두 번째 페이지(works)에서 hidden 클래스를 "제거"해서 보여줍니다.
    pageWorks.classList.remove('hidden');
});


// 3. Home 버튼을 클릭했을 때
btnHome.addEventListener('click', function() {
    // 첫 번째 페이지(home)에서 hidden 클래스를 "제거"해서 보여줍니다.
    pageHome.classList.remove('hidden');
    // 두 번째 페이지(works)에 hidden 클래스를 "추가"해서 숨깁니다.
    pageWorks.classList.add('hidden');
});
