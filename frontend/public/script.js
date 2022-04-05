const pageStart = (cards) => {
    return `
    <nav>
        <div>
            <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
            <h3>Best Beers</h3>
        </div>
        <div>
            <button>Buy Beer</button>
        </div>
    </nav>
    <img class="foam" src="./public/foam.png">
    <h1>CHOOSE YOUR FAVOURITE</h1>
    <div class="container">${cards}</div>
    <img class="beer-mug" src="./public/beer-mug.png">
    `
}

const cardList = (url,title, sub, text) => {
    return `
    <div class='card'>
        <img src="${url}">
        <h3>${title}</h3>
        <h4>${sub}</h4>
        <h5>${text}</h5>
        <button>Buy</button>
    </div>
    `
};

const footer = `
<div class="footer">
    <div>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
    </div>
</div>
`

window.addEventListener('load', async () => {
    let jsonData = await fetch('./public/data.json');
    let parsedData = await jsonData.json();

    let cardData = parsedData.cards;

    let result = '';

    cardData.map(data => {
        result += cardList(data.image,data.title, data.sub, data.text)
    });

    document.getElementById("root").insertAdjacentHTML('beforeend', pageStart(result));

    document.getElementById("root").insertAdjacentHTML('beforeend', footer);
});