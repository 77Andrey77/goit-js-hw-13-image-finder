import "./css/common.css";
import cardTpl from "./templates/photo-card.hbs";
import NewsApiService from "./apiService"

// var debounce = require('lodash.debounce');
// import debounce from "lodash.debounce";


const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.form-control');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

const newsApiService = new NewsApiService();

formEl.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);


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
      
}
 
function appendHitsMarkup(hits) {
    galleryEl.insertAdjacentHTML('beforeend', cardTpl(hits));    
}

function creatHitsContainer() {
    galleryEl.innerHTML = '';    
}



