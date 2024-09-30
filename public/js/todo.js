const todo = [
  { judul: "Membuat Website", status: "design", tanggal: "2024-09-12" },
];



function tamplate(judul, status, index) {
  const elementHTML = `
        <li>
            ${judul} | ${status} | @{NOW.format("YYYY-MM-DD")} | 
            <button onclick="hapus(${index})">Hapus</button>
            <button onclick="ubah(${index})">Ubah</button>
        </li>
    `;
  return elementHTML;
}

function tambah() {
  const judul = prompt("Masukan judul todo");
  const status = prompt("Masukan status todo");

  //   console.log(judul, status);

  const dataBaru = { judul: judul, status: status };
  todo.push(dataBaru); //selesai tambah data

  //update HTML
    todo.map((data, index) => {
        console.log(data, "ini index ke- ", index);
        document.getElementById("data").innerHTML += tamplate(data.judul, data.status, index);
    })

}

function ubah(index) {
  alert(`Ubah | ini adalah data dengan index ke ${index}`);
}

function hapus(index) {
  alert(`Hapus | ini adalah data dengan index ke ${index}`);
}
