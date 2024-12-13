const button = document.querySelector(".button")
const table = document.querySelector(".table")
const input = document.querySelector(".input")
const salom = document.querySelector(".salom")
const container = document.querySelector(".container")
const tugma = document.querySelector(".tugma")


const input2 = document.querySelector("#b2")
const input3 = document.querySelector("#d3")
const input4 = document.querySelector("#s4")
const input5 = document.querySelector("#e5")
const tbody = document.querySelector("tbody")
const b2 = document.querySelector(".b2")
const tugma12 = document.querySelector(".tugma12")

tugma12.addEventListener("click",(e)=>{
    salom.style.display = "none"
})

button.addEventListener("click", () => {
    salom.style.display = "flex";
})
let inputvalue1 = "";
let inputvalue2 = "";
let inputvalue3 = "";
let inputvalue4 = "";
let inputvalue5 = "";


input2.addEventListener("keyup", (e) => {
    if (e.target.value == "") {
        input2.style.border = "2px solid red";
    } else {
        input2.style.border = "1px solid black";
    }
    inputvalue2 = e.target.value
})
input3.addEventListener("change", (e) => {
    if (e.target.value == "") {
        input3.style.border = "2px solid red";
    } else {
        input3.style.border = "1px solid black";
    }
    inputvalue3 = e.target.value
})
input4.addEventListener("keyup", (e) => {
    if (e.target.value == "") {
        input4.style.border = "2px solid red";
    } else {
        input4.style.border = "1px solid black";
    }
    inputvalue4 = e.target.value
})
input5.addEventListener("keyup", (e) => {
    if (e.target.value == "") {
        input5.style.border = "2px solid red";
    } else {
        input5.style.border = "1px solid black";
    }
    inputvalue5 = e.target.value
})

window.onload = () => {
    tbody.innerHTML = `<tr id="id1"> <td colspan=6 class="col-x-[6] bg-[white]">Malunot mavjud emas</td> </tr>`
}

tugma.addEventListener("click", () => {
    if (inputvalue2 == "") {
        input2.style.border = "2px solid red"
    } if (inputvalue3 == "") {
        input3.style.border = "2px solid red"
    } if (inputvalue4 == "") {
        input4.style.border = "2px solid red"
    } if (inputvalue5 == "") {
        input5.style.border = "2px solid red"
    }
    else {

        const id1 = document.querySelector("#id1")
        if (id1) {
            tbody.removeChild(id1)
        }
        tbody.innerHTML += `<tr ><td>${tbody.children.length + 1}</td> <td>${inputvalue2}</td> <td>${inputvalue5}</td> <td>${inputvalue3}</td> <td>${inputvalue4}</td> <td> <button class="b2">Dalete</button></td> </tr> `
        salom.style.display = "none"
        tbody.style.backgroundColor = "white"
        inputvalue1 = "";
        inputvalue2 = "";
        inputvalue3 = "";
        inputvalue4 = "";
        inputvalue5 = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
    }
    const btns=document.querySelectorAll(".b2")
    for (let btn of btns) {
        btn.addEventListener("click", () => {
            btn.parentNode.parentNode.remove()
        })
    }
})