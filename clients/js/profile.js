`use strict`;

const base = "https://api.jimhua32.me";

fetch(base + "/user/",
    {
        method: "GET",
        headers: {
            "Authorization": sessionStorage.getItem("auth")
        }
    }
).then(response => {
    if (response.status >= 400) {
        console.log("error finding user");
        console.log(response);
    }
    return response.json();
}).then(response => {
    // user information
    let userInfo = document.getElementById("prof");
    let name = document.createElement("h1");
    name.classList.add("title");
    let info = document.createElement("p");
    info.classList.add("lead")
    name.innerText = response.FirstName + " " + response.LastName;
    info.innerText = response.Email;
    userInfo.appendChild(name);
    userInfo.appendChild(info);

    // free times
    let userFree = document.getElementById("userFreeT");
    let card = document.createElement("div");
    card.classList.add("card");
    let cardbod = document.createElement("div");
    cardbod.classList.add("card-body");
    let cardT = document.createElement("h5");
    cardT.classList.add("card-title");
    cardT.innerText = "Free Times";
    cardbod.appendChild(cardT);
    // free times
    let sun = document.createElement("p");
    sun.innerText = "Sunday: " + response.Week.Sunday;
    cardbod.appendChild(sun);

    let mon = document.createElement("p");
    mon.innerText = "Monday: " + response.Week.Monday;
    cardbod.appendChild(mon);

    let tues = document.createElement("p");
    tues.innerText = "Tuesday: " + response.Week.Tuesday;
    cardbod.appendChild(tues);

    let wed = document.createElement("p");
    wed.innerText = "Wednesday: " + response.Week.Wednesday;
    cardbod.appendChild(wed);

    let thurs = document.createElement("p");
    thurs.innerText = "Thursday: " + response.Week.Thursday;
    cardbod.appendChild(thurs);

    let fri = document.createElement("p");
    fri.innerText = "Friday: " + response.Week.Friday;
    cardbod.appendChild(fri);

    let sat = document.createElement("p");
    sat.innerText = "Saturday: " + response.Week.Saturday;
    cardbod.appendChild(sat);

    card.appendChild(cardbod);
    userFree.appendChild(card);
});

window.logoutUser = function() {
    document.getElementById("logoutUser").addEventListener("click", (event) => {
        sessionStorage.setItem("auth", "");
        window.location.href="index.html";
    })
}