document.querySelector("#search").addEventListener("submit", (event) => {
    event.preventDefault();

    const cityName = document.querySelector("#city_name").value;

    if (!cityName) {
        return showAlert('Por favor, digite o nome de uma cidade.');
    }
});

function showAlert(msg) {
    document.querySelector("#alert").innerHTML = msg;
}