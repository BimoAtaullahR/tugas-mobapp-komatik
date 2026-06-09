## Problem Statement
Aplikasi seluler "Personal Task Manager" perlu dibangun menggunakan React Native dan Expo untuk memenuhi kriteria tugas. Aplikasi ini harus mendemonstrasikan penguasaan konsep fundamental meliputi: React Navigation (Stack Navigator), manajemen *state* (`useState`), *controlled components* dengan validasi form, serta *styling* dasar dengan Flexbox. Pengerjaan proyek ini harus diselesaikan dalam batas waktu ketat maksimal 2 jam tanpa mengorbankan fungsionalitas inti.

## Solution
Membangun aplikasi React Native 3-screen (Home, Form, Detail) yang saling terhubung. Untuk menghindari *setup* yang rumit, aplikasi menggunakan Vanilla `StyleSheet` dan mengelola state secara lokal dengan mekanisme *Route Params Listener* untuk melempar data antar layar. Untuk memastikan kode tetap rapi dan teruji, logika utama dipisahkan menjadi *Deep Modules* yang mudah dites secara otomatis.

## User Stories

1. As a user, I want to see a list of my tasks on the Home Screen so that I can know what I need to do.
2. As a user, I want to see a summary of each task (title, short description, status) so that I can identify it quickly.
3. As a user, I want to press a button to toggle a task's status ("Selesai" or "Belum") from the Home Screen so that I can track my progress.
4. As a user, I want to navigate to the Form Screen by pressing a "Tambah Tugas" button so that I can create a new entry.
5. As a user, I want to enter a task title, description, and category (Kuliah/Pribadi/Organisasi) in the Form Screen so that my task is well-defined.
6. As a user, I want to be warned if my title is less than 3 characters or my description is less than 10 characters so that I provide sufficient information.
7. As a user, I want the form to validate only when I press "Submit" so that I am not interrupted while typing.
8. As a user, I want to automatically return to the Home Screen and see my new task added after a successful submission so that I know it was saved.
9. As a user, I want to press a task on the Home Screen to navigate to the Detail Screen so that I can view its complete information.
10. As a user, I want to view the full title, full description, category, and status in the Detail Screen so that I understand the task completely.
11. As a user, I want a "Kembali" button in the Detail Screen to return to the Home Screen so that I can browse other tasks.
12. As a user, I want to be able to delete a task so that I can remove unwanted items.
13. As a user, I want to filter my tasks by status (Semua / Belum / Selesai) so that I can focus on specific items.

## Implementation Decisions

- **Navigation**: `App.js` akan membungkus aplikasi dalam `NavigationContainer` dan `Stack.Navigator`. Layar diregistrasi dengan nama `Home`, `Form`, dan `Detail`.
- **State Management**: Data `tasks` (Array of Object) disimpan pada *local state* di `HomeScreen`. Sinkronisasi data pasca-penambahan atau penghapusan dilakukan dengan mengirim `route.params` (`newTask` atau `deletedTaskId`) yang dipantau melalui `useEffect` di `HomeScreen`.
- **Form Handling**: Menggunakan *controlled components* dengan pendekatan *Submit-Time Validation*. Objek *state* untuk error dipisahkan dari objek *state* data tugas.
- **Deep Modules**: 
  - `src/utils/validationUtils.js`: Kumpulan *pure function* untuk memvalidasi *string* teks.
  - `src/utils/taskUtils.js`: Kumpulan *pure function* untuk memanipulasi *array* tugas (Filter, Hapus, Tambah).
- **Styling Approach**: Murni menggunakan `StyleSheet` bawaan React Native dengan pendekatan Flexbox. Tidak memakai *library* eksternal.

## Testing Decisions

- Hanya menguji perilaku eksternal dari logika bisnis murni (*pure function*), bukan implementasi UI/komponen.
- Modul yang akan diuji secara komprehensif menggunakan **Jest** hanyalah `src/utils/validationUtils.js` dan `src/utils/taskUtils.js`.
- Pengujian komponen UI dan navigasi sengaja **dilewatkan** (*skipped*) untuk mengejar tenggat waktu penyelesaian 2 jam.

## Out of Scope

- **Persistensi Data**: Penyimpanan menggunakan `AsyncStorage` atau `SQLite` tidak akan diimplementasikan. Data bersifat sementara dan akan hilang saat aplikasi dimuat ulang.
- **Edit Task**: Fitur mengubah tugas tidak termasuk dalam cakupan saat ini.
- **Responsive Tablet Layout**: Penyesuaian responsif layar lebar (`useWindowDimensions`) diturunkan prioritasnya menjadi *nice-to-have*.
- **E2E Testing**: Tidak ada pengujian *end-to-end*.
- **External UI Library**: Penggunaan NativeWind atau React Native Paper.

## Further Notes

Karena arsitekturnya difokuskan pada isolasi antara modul logika dan UI, kode ini akan sangat mudah di-*refactor* di kemudian hari (misalnya jika ingin memigrasikan *Route Params Listener* ke *React Context API*).
