const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);
const card = document.createElement('div');
card.setAttribute('class', 'card');

const p = document.createElement('p');

function generateJoke() {
    var joke = "";
    return fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        },
        method: 'GET',
    }).then(resp => {
        return resp.json()
    }).then(r => {
        console.log(r);
        joke = r.joke;

        r.joke = r.joke.substring(0, 300);
        p.textContent = `${r.joke}...`;

        container.appendChild(card);
        card.appendChild(p);

    })

}
