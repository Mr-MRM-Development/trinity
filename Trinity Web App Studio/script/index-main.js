
let code = document.getElementById("code");
let nama = document.getElementById("nama");

function baru(){
	 			code.value = `<!DOCTYPE html>

<html>
<head>
 <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8">
 <title>Pages</title>
 <style>
  .pages {
    width: 200px;
    height: 150px;
    border: solid 2px #38f;
    background: #ddd;
    border-radius: 5px;
    text-align: center;
    padding-bottom: 12px;
  }
  .nav-off{
   width: auto;
   background: #38f;
   justify-content: right;
   padding: 5px;
   display: flex;
  }
  .x,.help {
   background: #f00;
   border: none;
   margin: 3px;
   color: #fff;
  }
  .x:hover{
    background: #a00
  }
  .help {
    background: #38f;
  }
  .help:hover{
    background: #26d;
  }
  input {
   margin: 12px 0;
  }
 </style>
</head>
<body>
 <div class="pages">
  <header class="nav-off">
   <button class="help">?</button>
   <button class="x">X</button>
  </header>
  <main>
   
  </main>
 </div>
 
 <script>
  
 </script>
</body>
</html>		`
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
						 		pilih.style.top = "-100%"
					}
}

function buka(){
					let pilih = document.getElementById("pilih");
					pilih.style.top = "50%"
}

function batal(){
					let pilih = document.getElementById("pilih");
					pilih.style.top = "-100%"
}

function mulai_simpan(){
					let pilih = document.getElementById("pilih-simpan");
					pilih.style.top = "50%"
}

function batal_simpan(){
					let pilih = document.getElementById("pilih-simpan");
					pilih.style.top = "-100%"
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
            					  pilih.style.top = "-100%"
            } else {
                alert('Pilih file terlebih dahulu!');
            }
        }