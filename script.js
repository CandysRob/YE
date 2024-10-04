const url = "https://api.kanye.rest/"

async function fetchMessages() {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            location.reload();
        }
    });
    for (let i = 0; i < 20; i++) {
        const response = await fetch(url);
        const data = await response.json();
        const element = document.querySelector(".quote");
        element.innerHTML += "<p>" + data.quote + "</p>";
    }
}

fetchMessages()