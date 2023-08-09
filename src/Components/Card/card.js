{/* <div class="card" style="background-image: url(../images/);">
    <div class="container">
        <h4><b>About</b></h4>
        <p>This would be a summary of the about page</p>
    </div>
</div> */}

export function Card(title, text, image) {
    //returns a card element
    console.log('Card()');
    const card = document.createElement('div');
    card.className = 'card';
    card.style = `background-image: url(${image});`;
    card.innerHTML = `
    <div class="container">
        <h4><b>${title}</b></h4>
        <p>${text}</p>
    </div>
    `;
    card.addEventListener('click', () => open(`${title}.html`, '_self'));
    return card;
}

function open(url, target) {
    //opens a new page
    console.log('open()');
    window.open(url, target);
}