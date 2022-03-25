const cardList = (title, sub, text) => {
    return `
    <div class='card'>
        <h3>${title}</h3>
        <h4>${sub}</h4>
        <h5>${text}</h5>
    </div>
    `
};

window.addEventListener('load', async () => {
    let jsonData = await fetch('./public/data.json');
    let parsedData = await jsonData.json();

    let cardData = parsedData.cards;
    
    let result = '';
    
    cardData.map(data => {
        result += cardList(data.title,data.sub,data.text)
    });
    
    document.querySelector(".container").insertAdjacentHTML('beforeend', result);
});