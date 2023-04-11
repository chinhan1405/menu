fetch('food.json')
.then(response => response.json())
.then(data => {
    // Get the card container element
    const cardContainer = document.getElementById('card-container');

    // Loop through the data and create a card for each object
    data.forEach(item => {
    // Create column
    const col = document.createElement('div');
    col.classList.add('col-6');
    col.classList.add('col-md-4');

    // Create the card element
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('text-center');

    // Create the card image element
    const img = document.createElement('img');
    img.src = item.image;
    img.classList.add('card-img-top');
    img.alt = item.title;

    // Create the card body element
    const body = document.createElement('div');
    body.classList.add('card-body');

    // Create the card title element
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = item.title;

    // Create the card text element
    const price = document.createElement('p');
    price.classList.add('card-text');
    price.textContent = item.price;

    // Create the button element
    const button = document.createElement('a');
    button.classList.add('btn', 'btn-primary');
    button.href = '#';
    button.textContent = 'Order';

    // Append the elements to the card and the card to the container
    body.appendChild(title);
    body.appendChild(price);
    //body.appendChild(button);
    card.appendChild(img);
    card.appendChild(body);
    col.appendChild(card);
    cardContainer.appendChild(col);
    });
})
.catch(error => console.error(error));