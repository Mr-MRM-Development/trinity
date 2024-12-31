   // Menambahkan event listener pada textarea untuk menangani perubahan input
   document.getElementById("code").addEventListener("input", updateOutput);

   // Memperbarui posisi scroll div highlight jika textarea di-scroll
   document.getElementById("code").addEventListener("scroll", syncScroll);

   function updateOutput() {
     const input = document.getElementById("code").value;

     // Filter dan menyoroti kode HTML
     const highlightedHTML = highlightHTML(input);

     // Mengatur konten div dengan HTML yang disorot
     document.getElementById("highlight").innerHTML = highlightedHTML;
   }


   function syncScroll() {
     const editor = document.getElementById("code");
     const highlightDiv = document.getElementById("highlight");
     highlightDiv.scrollTop = editor.scrollTop;
     highlightDiv.scrollLeft = editor.scrollLeft;
   }

   // Fungsi untuk memberikan highlight pada kode HTML
   function highlightHTML(input) {
     // Menyoroti tag HTML dengan warna yang berbeda
     return input
      // HTML
      // HTML
      // Tag Dasar
       .replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;')

      // Strings
       
       .replace(/("(.*?)")/g, '<span style="color: #ce9178;">$1</span>') // Warna untuk nilai atribut
       .replace(/('(.*?)')/g, '<span style="color: #ce9178;">$1</span>') // Warna untuk nilai atribut
       .replace(/(`(.*?)`)/g, '<span style="color: #ce9178;">$1</span>') // Warna untuk nilai atribut
              
      // CSS
      // Property 
       .replace(/(:\/?)(\s\w+)(.*?;)/g, '$1<span style="color: #a47;">$2</span>$3') // Warna untuk isi value CSS
       .replace(/(\[\/?(.*?)\])/g, '<span style="color: #fb6;">$1</span>') // Warna untuk isi value CSS
       
      // @
      .replace(/(@\w+)/g, '<span style="color: orange;">$1</span>') // Warna untuk isi value CSS

      // JavaScript
      // Logika
       .replace(/(function\s)(\w+)/g, '<span style="color: #36b;">$1</span><span style="color:#70bfff;">$2</span>')
       .replace(/(if)/g, '<span style="color: #36b;">$1</span>')
       .replace(/(else)/g, '<span style="color: #36b;">$1</span>')
       .replace(/(while)/g, '<span style="color: #36b;">$1</span>')
       .replace(/(for)/g, '<span style="color: #36b;">$1</span>')

       // Variable
       .replace(/(let\s)(\w+)/g, '<span style="color: #38d;">$1</span><span style="color: #3af;">$2</span>')
       .replace(/(var\s)(\w+)/g, '<span style="color: #38d;">$1</span><span style="color: #3af;">$2</span>')
       .replace(/(const\s)(\w+)/g, '<span style="color: #d34;">$1</span><span style="color: #3af;">$2</span>')
       
       //  Symbols
       .replace(/(\s=\s)/g, '<span style="color: #6df;">$1</span>')

      // Kurung
       .replace(/(\((.*?)\))/g, '<span style="color: lightblue;">$1</span>')
       .replace(/(\{(.*?)\})/g, '<span style="color: lightblue;">$1</span>')

      // Command
      .replace(/(\/\/.*)/d, '<span style="color: #382;">$1</span>') //Command CSS + JS
      .replace(/\/\*[\s\S]*?\*\//g, '<span style="color: #382;">$&</span>') // Command JS
      
      // Titik Dan Koma
      .replace(/(\.(\w+))/g, '<span style="color: #adf;">$1</span>') // Warna untuk nama tag

      // Untuk Yang Ada Akhiran Dan Awalan
      .replace(/(&lt;\/?)(\w+)(.*?&gt;)/g, '$1<span style="color: #569cd6;">$2</span>$3') // Warna untuk nama tag
      // <!DOCTYPE html>
      .replace(/(&lt;\!DOCTYPE\shtml&gt;)/g, '<span style="color: #df6;">$1</span>') // Warna tag <!DOCTYPE html>
      // Command
      .replace(/&lt;\!--[\s\S]*?--&gt;/g, '<span style="color: #382;">$&</span>') // Command JS
    }
    setInterval(highlightHTML, 5);