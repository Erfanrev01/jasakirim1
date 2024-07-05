<?php
// save_data.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $distance = $_POST['distance']; // Mengambil jarak dari data POST
    $cost = $_POST['cost']; // Mengambil biaya dari data POST

    $entry = "Jarak: " . $distance . " km, Biaya: Rp. " . $cost . "\n"; // Membuat entri string
    file_put_contents('data.txt', $entry, FILE_APPEND); // Menyimpan entri ke file data.txt

    echo 'Data berhasil disimpan.'; // Menampilkan pesan sukses
}
?>
