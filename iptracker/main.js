import "/style.css"

const ipAddress = document.getElementById("text")
const searchbar = document.getElementById('button');


function result() {
    const ipId = document.getElementById("ip");
    const locId = document.getElementById("location");
    const timeId = document.getElementById("time");
    const ispId = document.getElementById("isp");

    const link = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_KEY}&ipAddress=${ipAddress.value}`

    const myIcon = L.icon({
        iconUrl: './images/icon-location.svg',
        iconSize: [40, 50],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    })

    fetch(link)
        .then((res) => res.json())
        .then((data) => {
                ipId.innerText = data.ip;
                locId.innerText = data.location.region + ", " +
                    data.location.country + " " +
                    data.location.postalCode;
                timeId.innerText = "UTC " + data.location.timezone;
                ispId.innerText = data.isp;

                const x = data.location.lat
                const y = data.location.lng
                const map = L.map('map').setView([x, y], 17);
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 100,
                }).addTo(map);
                L.marker([x,y], {icon: myIcon}).addTo(map);


            }
        )
        .catch(error => console.log("Błąd: ", error.message));

    console.log(ipAddress.value)
}



ipAddress.addEventListener("change", result)