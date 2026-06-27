const btnHome = document.getElementById('btn-home');
const btnWorks = document.getElementById('btn-works');

const pageHome = document.getElementById('page-home');
const pageWorks = document.getElementById('page-works');

btnWorks.addEventListener('click', function() {
    pageHome.classList.add('hidden');     // 홈 페이지에 hidden을 붙여서 숨김
    pageWorks.classList.remove('hidden'); // 작품 페이지에서 hidden을 떼서 보여줌
});

btnHome.addEventListener('click', function() {
    pageHome.classList.remove('hidden');  // 홈 페이지에서 hidden을 떼서 보여줌
    pageWorks.classList.add('hidden');    // 작품 페이지에 hidden을 붙여서 숨김
});
