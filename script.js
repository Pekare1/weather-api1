const apiKey = 'b3049ad1c1b5474fa95125432233103';

const header = document.querySelector('.header');
const inputCity = document.querySelector('#inputCity');
const form = document.querySelector('#form');


form.onsubmit = function (e) {

    e.preventDefault();

    let city = inputCity.value.trim();


    // адрес запроса
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;


    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {

        console.log(data);

        if (data.error) {

            const prevCard = document.querySelector('.card')
            if (prevCard) prevCard.remove()

            const html = `<div class="card">${data.error.message}</div>`
            header.insertAdjacentHTML('afterend', html)
        } else {
            const prevCard = document.querySelector('.card')
            if (prevCard) prevCard.remove()

            const html = `<div class="card">
        <h2 class="card-city">${data.location.name}<span>${data.location.country}</span> </h2>

        <div class="card-weather">
            <div class="card-value">${data.current.temp_c} °C</div>
            <img class="card-img" src="./img/example.png">
        </div>

        <div class="card-desciption">${data.current.condition.text}</div></div>`


            header.insertAdjacentHTML('afterend', html)
        }







    });


}

