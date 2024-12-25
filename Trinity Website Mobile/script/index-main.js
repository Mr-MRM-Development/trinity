
let code = document.getElementById("code");
let nama = document.getElementById("nama");

function baru(){
	 			code.value = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`
	 			nama.value = null
}

function simpan(){
					if (nama.value === ""){
										alert("Isikan Nama File Terlebih Dahulu !")
					}
					else{
					  let blob = new Blob([code.value], {type: "text/plains"})
					  let link = document.createElement('a')
					  link.href = URL.createObjectURL(blob)
					  link.download = nama.value;
					  link.click()
										let pilih = document.getElementById("pilih-simpan");
						 		pilih.style.top = "-50%"
					}
}

function buka(){
					let pilih = document.getElementById("pilih");
					pilih.style.top = "50%"
}

function batal(){
					let pilih = document.getElementById("pilih");
					pilih.style.top = "-50%"
}

function mulai_simpan(){
					let pilih = document.getElementById("pilih-simpan");
					pilih.style.top = "50%"
}

function batal_simpan(){
					let pilih = document.getElementById("pilih-simpan");
					pilih.style.top = "-50%"
}

function readFile() {
            const fileInput = document.getElementById('sumberfile');
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                const content = e.target.result;
                code.value = content;
            };

            if (file) {
                reader.readAsText(file);
            				  	let pilih = document.getElementById("pilih");
            					  pilih.style.top = "-50%"
            } else {
                alert('Pilih file terlebih dahulu!');
            }
        }