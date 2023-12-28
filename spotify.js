const url = 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb';

const getData = async () => {
    try  {        
        const request = new Request(url, {
            headers: {
                'Authorization': 
                    'Bearer BQAnj_mIVoCIKFTH3KYu8P-LjZTJxjbTe4rMvLPAHkSTeM-8TZAi37kEbdnMa1iZ1qFr3S_O4bmLKuRS4LQ5uosB2dW6n36-5bCN5BkCp_KlmnBCAt8'
            }
        })
        const response = await fetch(request);

        const data = await response.json();
        if (response.ok) {           
            console.log(`SUCCESS: ${data}`);
        }
        else {
            console.log(`SERVER ERROR: ${data.error.message}`);
        }
    }
    catch (err)
    {
        console.log(`FETCH ERROR: ${err}`);
    }
}
getData();