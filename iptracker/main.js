import "/style.css"
import pin from "./images/pin.png"

const ipAddress = document.getElementById("text")

const map = L.map('map').setView([1, 1], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 100,
}).addTo(map);

map.removeControl(map.zoomControl);

function result() {
    const ipId = document.getElementById("ip");
    const locId = document.getElementById("location");
    const timeId = document.getElementById("time");
    const ispId = document.getElementById("isp");

    const link = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_KEY}&ipAddress=${ipAddress.value}`

    const myIcon = L.icon({
        iconUrl: pin,
        iconSize: [50, 60],
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
                map.flyTo([x,y], 17)
                L.marker([x, y], {icon: myIcon}).addTo(map);
            }
        )
        .catch(error => console.log("Błąd: ", error.message));
}

ipAddress.addEventListener("change", result)