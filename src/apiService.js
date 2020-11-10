const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const KEY = '19032313-4dd4b1c57c2e902bf9f549139';

export default function fetchApiService(searchQuery) {
    return fetch(`${BASE_URL}&q=что_искать&page=номер_страницы&per_page=12&key=${KEY}`)
        .then(response => response.json());
}