let selectedFolder = null;  // Variabel untuk menyimpan folder yang dipilih
        const fileTree = document.getElementById('file-tree');  // Mengakses elemen tree-view

        // Mengupload folder ketika tombol "Upload Folder" diklik
        document.getElementById('upload-folder').addEventListener('click', async () => {
            try {
                // Meminta pengguna memilih folder untuk diupload
                const directoryHandle = await window.showDirectoryPicker();
                fileTree.innerHTML = '';  // Kosongkan tree view sebelum mengisi ulang
                await populateTreeView(directoryHandle, fileTree);  // Memuat file dan folder ke dalam tree
            } catch (err) {
                console.error('Folder upload cancelled or unsupported:', err);
            }
        });

        // Membuat file baru saat tombol "New File" diklik
        document.getElementById('new-file').addEventListener('click', () => {
            const fileName = prompt('Enter the name of the new file:');  // Menanyakan nama file baru
            if (fileName) {
                const li = document.createElement('li');
                li.classList.add('file');  // Menandai item ini sebagai file
                li.textContent = fileName;

                // Jika folder dipilih, tambahkan file ke dalam folder, jika tidak, tambahkan ke tree utama
                if (selectedFolder && selectedFolder.classList.contains('folder')) {
                    const folderContent = selectedFolder.querySelector('ul');
                    folderContent.appendChild(li);
                } else {
                    fileTree.appendChild(li);
                }

                // Menangani klik pada file untuk menampilkan konten file (kosong untuk saat ini)
                li.addEventListener('click', () => {
                    document.getElementById('file-content').value = '';
                });
            }
        });

        // Membuat folder baru saat tombol "New Folder" diklik
        document.getElementById('new-folder').addEventListener('click', () => {
            const folderName = prompt('Enter the name of the new folder:');  // Menanyakan nama folder baru
            if (folderName) {
                const li = document.createElement('li');
                li.classList.add('folder');  // Menandai item ini sebagai folder
                li.textContent = folderName;

                const ul = document.createElement('ul');  // Membuat elemen untuk menyimpan file dalam folder
                li.appendChild(ul);

                // Menangani klik pada folder untuk membuka/menutup folder
                li.addEventListener('click', (e) => {
                    e.stopPropagation();  // Mencegah event bubble ke elemen lain
                    selectedFolder = li;  // Menandai folder yang dipilih
                    li.classList.toggle('open');  // Menyembunyikan/memperlihatkan isi folder
                });

                // Menambahkan folder ke dalam folder yang dipilih atau ke tree utama
                if (selectedFolder && selectedFolder.classList.contains('folder')) {
                    const folderContent = selectedFolder.querySelector('ul');
                    folderContent.appendChild(li);
                } else {
                    fileTree.appendChild(li);
                }
            }
        });

        // Fungsi untuk memuat file dan folder ke dalam tree view
        async function populateTreeView(handle, parentElement) {
            for await (const [name, entry] of handle.entries()) {
                const li = document.createElement('li');
                li.textContent = name;

                // Jika entry adalah file
                if (entry.kind === 'file') {
                    li.classList.add('file');
                    li.addEventListener('click', async () => {
                        const file = await entry.getFile();
                        const content = await file.text();
                        displayContent(content);  // Menampilkan konten file
                    });
                } else if (entry.kind === 'directory') {  // Jika entry adalah folder
                    li.classList.add('folder');
                    const ul = document.createElement('ul');
                    li.appendChild(ul);

                    // Menangani klik pada folder untuk membuka/menutup folder
                    li.addEventListener('click', async (e) => {
                        e.stopPropagation();  // Mencegah event bubble
                        selectedFolder = li;

                        if (!li.classList.contains('open')) {
                            ul.innerHTML = '';  // Menghapus isi sebelumnya
                            await populateTreeView(entry, ul);  // Memuat isi folder
                        }

                        li.classList.toggle('open');  // Membuka atau menutup folder
                    });
                }

                parentElement.appendChild(li);  // Menambahkan item ke elemen induk
            }
        }

        // Fungsi untuk menampilkan konten file pada textarea
        function displayContent(content) {
            const textarea = document.getElementById('code');
            textarea.value = content;
        highlightHTML();
        }

        // Menangani klik tombol "Download ZIP"
        document.getElementById('download').addEventListener('click', async () => {
            let namaFile = prompt("Namai File Terlebih Dahulu!")
            const zip = new JSZip();
            const rootFolderName = namaFile;  // Nama default untuk file ZIP

            // Mengiterasi tree file dan folder untuk menambahkannya ke dalam ZIP
            await zipTree(fileTree, zip);

            // Menghasilkan file ZIP dan memulai proses download
            zip.generateAsync({ type: 'blob' }).then(function(content) {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(content);
                link.download = `${rootFolderName}.zip`;
                link.click();  // Memulai proses download
            });
        });

        // Fungsi untuk menambah file dan folder ke dalam ZIP
        async function zipTree(element, zip, folderPath = '') {
            const children = element.querySelectorAll('li');
            for (const child of children) {
                const childName = child.textContent.trim();
                const childPath = folderPath ? `${folderPath}/${childName}` : childName;

                if (child.classList.contains('folder')) {
                    const folder = zip.folder(childPath);  // Membuat folder di dalam ZIP
                    const subFolders = child.querySelector('ul');
                    await zipTree(subFolders, folder, childPath);  // Menambah folder-subfolder
                } else {
                    const fileContent = "This is a placeholder for file content";  // Ganti dengan konten file asli
                    zip.file(childPath, fileContent);  // Menambahkan file ke dalam ZIP
                }
            }
        }
