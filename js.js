
const button = document.querySelector("button");
const form = document.querySelector("form");
const container1 = document.getElementById("container1")
const container = document.getElementById("container")
const input = document.querySelector("input");




form.addEventListener("submit",(eo) => {
    eo.preventDefault() ;
    container.innerHTML += 
    `
    <div class="tect">
    <span class="icon-star"></span>
    <p>${input.value}</p>
    <div>
        <span class="icon-trash"> </span>
        <span class="icon-frown-o"> </span>
    </div>
    </div>
    `
    input.value = ""
    // localStorage.setItem("click", container.innerHTML)
});


// setTimeout(()=>{
//     container.innerHTML = localStorage.getItem("click")
// },10)


container1.addEventListener("click",(eo) => {
    switch (eo.target.className) {
        case "icon-trash":
            eo.target.parentElement.parentElement.remove();
            break;


        case "icon-frown-o":
            eo.target.classList.add("eo")
            const heart = `<span class="icon-heart"> </span>`
            eo.target.parentElement.parentElement.querySelector("p")
            .classList.add("eo1");
            eo.target.parentElement.innerHTML += heart
            break;
        case "icon-heart":
            eo.target.parentElement.parentElement.querySelector("p")
            .classList.remove("eo1");
            eo.target.style.display = "none"
            const frown = `<span class="icon-frown-o"> </span>`
            eo.target.parentElement.innerHTML += frown
            break;
        case "icon-star":
            eo.target.classList.add("orange");
            container.prepend(eo.target.parentElement)
            break;
        case "icon-star orange":
            eo.target.classList.remove("orange");
            break;
        default:
            break;
    }


 })


function timecol() {
    var data = new Date();
    var settiem = document.getElementById("settime");
    settiem.innerHTML = data.getHours() + " : " + data.getMinutes() + " : " + data.getSeconds();
    var setdata = document.getElementById("setdata");
    setdata.innerHTML = data.getDate() + " - " + parseInt(data.getMonth() + 1) + " - " + data.getFullYear();
}
setInterval(timecol, 100);
onload = timecol() 

