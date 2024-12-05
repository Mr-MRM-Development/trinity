//Data
let user = document.getElementById("user")
let pwd  = document.getElementById("pwd")
let dPWD = ["admin123"]
let dUser= ["Rizqy-Admin"]

//Validasi
function masuk(){
    if (user.value == dUser){
        if (pwd.value == dPWD){
            form.action = "../index.html"
        }
        else {
            alert("Masukan Anda Tidak Valid")
        }
    }else {
        alert("Masukan Anda Tidak Valid")
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
