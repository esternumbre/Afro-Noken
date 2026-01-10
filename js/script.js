function sendWA(namaProduk, harga) {
    const noWA = "6281234567890"; // GANTI DENGAN NOMOR WHATSAPP ANDA (Awali dengan 62)
    const pesan = `Halo Afro Noken, saya ingin memesan:\n\n` +
                  `📦 Produk: *${namaProduk}*\n` +
                  `💰 Harga: *RP. ${harga}*\n\n` +
                  `Mohon informasi langkah selanjutnya. Terima kasih!`;
    
    // Encode pesan agar bisa dibaca URL
    const url = `https://wa.me/${628124779785}?text=${encodeURIComponent(pesan)}`;
    
    // Buka WhatsApp di tab baru
    window.open(url, '_blank');
}