document.getElementById("kirim").addEventListener('click', function() {
    console.log(Text)
})

document.getElementById("input-nama").addEventListener('input', function() {
    var nama = document.getElementById("input-nama").value
    console.log(nama)
})

function showOutput() {
    var nama = document.getElementById("input-nama").value;
    var tanggalLahir = document.getElementById("tanggal-lahir").value;
    var jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
    var pesan = document.getElementById("pesan").value;

    var output = document.getElementById("output");
    output.innerHTML = "Nama: " + nama + "<br>Tanggal Lahir: " + tanggalLahir + "<br>Jenis Kelamin: " + jenisKelamin + "<br>Pesan: " + pesan;
}

const profilLink = document.querySelector('a[href="profile.html"]');

if (window.location.href.includes('profile.html')) {
    profilLink.classList.add('active');
}