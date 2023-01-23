import "/style.css"

const searchbar = document.getElementById('button');

const link = "https://geo.ipify.org/api/v2/country?apiKey=at_t90B5nRqiZf6qkR6L5buzbhY0DE1C&ipAddress=8.8.8.8"


function result() {
    const ipId = document.getElementById("ip");
    const locId = document.getElementById("location");
    const timeId = document.getElementById("time");
    const ispId = document.getElementById("isp");

    fetch(link)
        .then((res) => res.json())
        .then((data) => {
                console.log(data.ip)
                ipId.innerText = data.ip
                locId.innerText = data.location.region + ", " + data.location.country
                timeId.innerText = "UTC " + data.location.timezone
                ispId.innerText = data.isp
            }
        )
        .catch(error => console.log("Błąd: ", error));


}

searchbar.addEventListener("click", result)


