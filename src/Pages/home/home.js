import { 
    pages
} from '../../Pages.js';

import {
    Card
} from '../../Components/Card/card.js';

for (let page of pages) {
    //get page summary
    const card = Card(page, page, page);
    document.getElementById('cardContainer').appendChild(card);
}