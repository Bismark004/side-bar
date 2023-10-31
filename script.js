const body = document.querySelector("body"),
 sideBar = body.querySelector("nav"),
 toggle  = body.querySelector(".toggle"),
 searchBtn = body.querySelector(".search-box"),
 modeSwitch = body.querySelector(".toggle-switch"),
 modeText = body.querySelector("mode-text");

 toggle.addEventListener("click", () => {
    sideBar.classList.toggle("close");
 });

 searchBtn.addEventlistener("click", () => {
    sideBar.classList.add.remove("close");
 });

 modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "light Mode";
        
    } else {
        modeText.innerText = "Dark Mode";
    }
 });

 