document.querySelector("#search").addEventListener("submit", async (event) => {
    event.preventDefault();

    const cityName = document.querySelector("#city_name").value;

    if (!cityName) {
        return showAlert('Por favor, digite o nome de uma cidade.');
    }

    const apiKey = API_KEY;
    const apiUrl = API_URL;

    const results = await fetch(apiUrl);
    const json = await results.json();

    
});

function showAlert(msg) {
    document.querySelector("#alert").innerHTML = msg;
}

