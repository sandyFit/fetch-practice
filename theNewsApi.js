const url = 'https://api.thenewsapi.com/v1/news/all?api_token=ZseIC4zIZHlfyTFhikp3z4MD0P4JrTbganyOEdRC&search=usd';

// async function getData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }



async function getData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData();
