let tema = false

function theme(){

    //Bagian Variable Dari ID
    const body = document.getElementById("body")
    const container = document.getElementById("container")
    const container2 = document.getElementById("container2")
    const container3 = document.getElementById("container3")
    //Tema Gelap
    if (tema == true){
        body.style.background = "#000"
        container.style.background = "#333"
        container.style.border = "solid 2px white"
        container2.style.background = "#333"
        container2.style.border = "solid 2px white"
        container3.style.background = "#333"
        container3.style.border = "solid 2px white"
        body.style.color = "white"
        tema = false
    }
    
    //Tema Terang
    else {
        body.style.background = "#fff"
        container.style.background = "#daf"
        container.style.border = "solid 2px black"
        container2.style.background = "#daf"
        container2.style.border = "solid 2px black"
        container3.style.background = "#daf"
        container3.style.border = "solid 2px black"
        body.style.color = "black"
        tema = true
    }
}
