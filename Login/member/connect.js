// connect.js: Menangani koneksi dan validasi form login

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Mendapatkan nilai input
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  // Mencocokkan input dengan data pengguna
  const member = memberData.find(m => m.username === username && m.password === password);

  if (member) {
    errorMessage.textContent = ''; // Menghapus pesan error sebelumnya
    alert('Login Berhasil!');
    
    // Redirect ke halaman index.html setelah login berhasil
    window.location.href = "../../index.html"; // Ganti dengan URL tujuan jika perlu
  } else {
    errorMessage.textContent = 'Username atau password tidak valid!';
  }
});

