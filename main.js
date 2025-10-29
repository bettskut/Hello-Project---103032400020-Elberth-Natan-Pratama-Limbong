let saldoAwal = Number (prompt ("berapa saldo awal anda?"))
let saldoTambahan = Number (prompt ("berapa saldo tambahan anda?"))
let saldoKeluar = Number (prompt ("berapa saldo yang anda keluarkan?"))

const saldoAkhir = saldoAwal + saldoTambahan - saldoKeluar

alert (`saldo akhir kamu adalah Rp.${saldoAkhir}`)

let hari = new Date().getDay()
let namaHari

switch (hari) {
    case 1:
        namaHari = 'Senin'
    break
    case 2:
        namaHari = 'Selasa'
    break
    case 3:
        namaHari = 'Rabu'
    break
    case 4:
        namaHari = 'Kamis'
    break
    case 5:
        namaHari = 'Jumat'
    break
    case 6:
        namaHari = 'Sabtu'
    break
    case 7:
        namaHari = 'Minggu'
    break
}

alert(`hari ini adalah hari ${namaHari}`)