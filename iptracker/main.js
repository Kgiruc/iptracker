import "/style.css"
const searchbar = document.getElementById('button');

function result() {
    console.log("osz ty kurwa")
    const box = document.createElement("div")
    box.className ="inline-block bg-black w-[20vw] h-[20vh]"
    box.innerText = "chidori"
    document.body.appendChild(box)
}

searchbar.addEventListener("click", result)


