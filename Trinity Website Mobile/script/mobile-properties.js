let mobile = document.getElementById("website")
let pValue = document.getElementById("ipValue").value
let pBackground = document.getElementById("ipBackground").value
let pColor = document.getElementById("ipColor").value
let pWidth = document.getElementById("ipWidth").value
let pHeight = document.getElementById("ipHeight").value
function process(){
    mobile.style.color = pColor;
    mobile.style.background = pBackground;
    mobile.style.width = pWidth + "px";
    mobile.style.height = pHeight + "px";
}