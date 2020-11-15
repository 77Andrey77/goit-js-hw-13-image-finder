export default class newApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    feachArticales() {
        // console.log(this);
    const BASE_URL = 'https://pixabay.com/api';
    const KEY = '19032313-4dd4b1c57c2e902bf9f549139';
 
return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`)
        .then(response => response.json())
    .then(data => {
        // console.log(data);
        this.incrementPage();

        return data.hits;
    })
    }

    incrementPage() {
     this.page += 1;
}
    resetPage() {
        this.page = 1;
}
    
    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}

//  const BASE_URL = 'https://pixabay.com/api';
// const KEY = '19032313-4dd4b1c57c2e902bf9f549139';

// export default function fetchApiService(searchQuery) {
// return
// fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${KEY}`)
//         .then(response => response.json())
//     .then(console.log)
// };