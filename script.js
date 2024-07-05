// script.js
document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit default

    const distance = document.getElementById('distance').value; // Mengambil nilai jarak dari input
    const cost = distance * 15000; // Menghitung biaya pengiriman

    document.getElementById('result').textContent = `Biaya Pengiriman: Rp. ${cost}`; // Menampilkan hasil biaya pengiriman

    // Mengirim data ke PHP untuk disimpan ke file .txt
    const formData = new FormData();
    formData.append('distance', distance);
    formData.append('cost', cost);

    fetch('save_data.php', {
        method: 'POST', 
        body: formData // Mengirim data sebagai FormData
    });
});
