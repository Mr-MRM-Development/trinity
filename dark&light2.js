let tema = false

function theme(){

    //Bagian Variable Dari ID
    const body = document.getElementById("body")
    const container = document.getElementById("container")
    //Tema Gelap
    if (tema == true){
        body.style.background = "#000"
        container.style.background = "#333"
        container.style.border = "solid 2px white"
        body.style.color = "white"
        tema = false
    }
    
    //Tema Terang
    else {
        body.style.background = "#fff"
        container.style.background = "#daf"
        container.style.border = "solid 2px black"
        body.style.color = "black"
        tema = true
    }
}
