let nomorAntrian = 0;
let queue = [];

function ambilAntrian() {
  nomorAntrian++;
  queue.push(nomorAntrian);
  tampilkanDaftar();
  alert("🎟️ Kamu dapat nomor antrian: " + nomorAntrian);
}

function panggilAntrian() {
  if (queue.length > 0) {
    let sekarang = queue.shift();
    document.getElementById("nomorSekarang").innerText = sekarang;
    document.getElementById("statusPanggilan").innerText = 
      "📢 Sedang dipanggil: Antrian " + sekarang;
    tampilkanDaftar();
  } else {
    alert("Tidak ada antrian! 😢");
  }
}

function tampilkanDaftar() {
  let list = document.getElementById("listAntrian");
  list.innerHTML = "";
  queue.forEach((nomor) => {
    let li = document.createElement("li");
    li.innerText = "Antrian " + nomor;
    list.appendChild(li);
  });
}
