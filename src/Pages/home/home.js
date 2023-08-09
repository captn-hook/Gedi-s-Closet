import { 
    pages
} from '../../Pages.js';

import {
    Card
} from '../../Components/Card/Card.js';


function homePage() {
    for (let page of pages) {
        if (page === 'home') continue;
        //get page summary
        const card = Card(page, page, page);
        document.getElementById('cardContainer').appendChild(card);
    }
    import('./homeENG.txt').then(module => {
        document.getElementById('mainArticle').innerHTML = module.default;
    });
}

homePage();