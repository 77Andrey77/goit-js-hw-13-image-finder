import "./css/common.css";
import cardTpl from "./templates/photo-card.hbs";
import NewsApiService from "./apiService"

// var debounce = require('lodash.debounce');
// import debounce from "lodash.debounce";


const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.form-control');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
// const btn = document.querySelector('.button');

const newsApiService = new NewsApiService();

loadMoreVisibilityOff();
formEl.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

//  btn.classList.add("is-hidden");

function onSearch(e) {
    e.preventDefault();
    

    creatHitsContainer();
    newsApiService.query = e.currentTarget.elements.query.value;
    
    if (newsApiService.query === "") {
        return alert('Введите нормальный запрос!!!')
    }
    newsApiService.resetPage();
    newsApiService.feachArticales().then(appendHitsMarkup);
};

function onLoadMore() {
    newsApiService.feachArticales().then(appendHitsMarkup);

    // window.scrollTo({
    //     top: document.body.scrollHeight -1000 ,
    //     behavior: 'smooth',
    // })
    setTimeout(() => {
        window.scrollTo({
        top: document.body.scrollHeight -1300 ,
        behavior: 'smooth',
    })
    },1000)
}
 
function appendHitsMarkup(hits) {
    if (hits.length < 12) {
        loadMoreVisibilityOff();
    } else {
        loadMoreVisibilityOn();
    }

    galleryEl.insertAdjacentHTML('beforeend', cardTpl(hits)); 

    
}

function creatHitsContainer() {
    galleryEl.innerHTML = '';    
}

// function scrollOnLoadMore() {
//     onLoadMore()
//        .then(
//       setTimeout(() => {
//         window.scrollBy({
//           top: document.documentElement.scrollTop,
//           behavior: 'smooth',
//         });
//       }, 1500),
//     )
//     .catch(err => console.log(err));
// }

function loadMoreVisibilityOff() {
    loadMoreBtn.classList.add("is-hidden");
}

function loadMoreVisibilityOn() {
    loadMoreBtn.classList.remove("is-hidden");
}

