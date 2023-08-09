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
        const img = undefined;
        const txt = require(`../../Pages/${page}/${page}ENG.txt`);
        const card = Card(page, txt.default, img);
        document.getElementById('cardContainer').appendChild(card);
    }
    import('./homeENG.txt').then(module => {
        document.getElementById('mainArticle').innerHTML = module.default;
    });
}

homePage();