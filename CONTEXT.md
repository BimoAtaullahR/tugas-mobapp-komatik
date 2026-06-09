# Glossary

### Task
Sebuah entitas pekerjaan yang akan dicatat oleh pengguna.
- Memiliki **Judul** (minimal 3 karakter).
- Memiliki **Deskripsi** (minimal 10 karakter).
- Memiliki **Status** (Belum / Selesai).
- Memiliki **Kategori** (Kuliah, Pribadi, Organisasi).

### State Management (Route Params Listener)
Pola penyimpanan data lokal dimana `Task` disimpan di *Home Screen*. Penambahan atau perubahan data dilakukan dengan mengirim kembali parameter melalui navigasi (`navigation.navigate`), yang kemudian ditangkap dan diproses oleh *Home Screen*.

### Form Validation
Validasi dilakukan dengan pendekatan **Validasi saat Submit (Submit-Time Validation)**. Fungsi validasi dijalankan secara terpisah ketika tombol submit ditekan. State error disimpan dalam *object state* terpisah dari data form.

### Optional Features
Prioritas pengerjaan fitur tambahan adalah **Hapus Tugas** dan **Filter Status (Semua/Belum/Selesai)**. Fitur responsif tablet (`useWindowDimensions`) bersifat *nice-to-have* dan dikerjakan paling akhir jika sisa waktu memungkinkan.

### Styling Approach
Menggunakan **Vanilla `StyleSheet`** bawaan React Native. Hal ini untuk memastikan demonstrasi pemahaman fundamental terhadap Flexbox dan layout dasar berjalan lancar saat presentasi, tanpa bergantung pada library pihak ketiga.
