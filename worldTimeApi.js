const url = 'http://worldtimeapi.org/api/timezone/America/Bogota';

async function getData() {
    const response = await fetch(url);

    const data = await response.json()
    console.log(data);
}
getData();