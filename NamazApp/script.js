

async function getAllCountries() {

    const allCountries = await fetch("https://ezanvakti.herokuapp.com/ulkeler");
    const response = await allCountries.json();
    console.log(response);
    getEveryCountry(response)

}

getAllCountries();

function getEveryCountry(response) {

    const country = response.map(entry => {
        
        return entry.UlkeAdiEn 
    })

    console.log(country);
}