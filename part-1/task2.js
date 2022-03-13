// Input Nilai Mata Pelajaran
const mtk = 90
const bahasaIndonesia = 56
const bahasaInggris = 89
const ipa = 67


// Validasi agar semua nilai diinput
if (mtk !== undefined && bahasaIndonesia !== undefined && bahasaInggris !== undefined && ipa !== undefined) {

    //Validasi agar semua nilai berupa angka
    if (typeof mtk === "number" && typeof bahasaIndonesia === "number" && typeof bahasaInggris === "number" && typeof ipa === "number") {

        //Validasi agar tidak ada nilai yang diinput < 0 atau > 100
        if (mtk < 0 || mtk > 100 || bahasaIndonesia < 0 || bahasaIndonesia > 100 || bahasaInggris < 0 || bahasaInggris > 100 || ipa < 0 || ipa > 100) {
            console.log("Nilai harus antara 0 - 100!")
        } else {

            //Perhitungan rata-rata dan grade
            const avg = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
            let grade

            if (avg >= 90 && avg <= 100) {
                grade = "A"
            } else if (avg >= 80 && avg < 90) {
                grade = "B"
            } else if (avg >= 70 && avg < 80) {
                grade = "C"
            } else if (avg >= 60 && avg < 70) {
                grade = "D"
            } else {
                grade = "E"
            }

            console.log(
                `Rata-rata: ${avg}
                Grade: ${grade}`
            )
        }
    } else {
        console.log("Data nilai harus berupa angka!")
    }
} else {
    console.log("Semua nilai harus diisi!")
}