// dataset.js: Dataset berisi data pengguna dalam format "username:password,"
const memberDataString = `
  member1:password1,
  member2:password2,
  mRIZQYm:rizqypinterke1
`;

// Mengubah string menjadi array objek
const memberData = memberDataString.split(',').map(item => {
  const [username, password] = item.trim().split(':');
  return { username, password };
});