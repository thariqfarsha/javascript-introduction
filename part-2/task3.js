const seleksiNilai = function(nilaiAwal, nilaiAkhir, dataArray){
    let errorMsg = []
    
    // Validasi parameter nilaiAwal harus berupa number
    if (typeof nilaiAwal !== 'number') {
        errorMsg.push("Nilai awal harus berupa number")
    }

    // Validasi parameter nilaiAkhir harus berupa number
    if (typeof nilaiAkhir !== 'number') {
        errorMsg.push("Nilai akhir harus berupa number")
    }

    // Validasi seluruh elemen dataArray harus berupa number
    if (!dataArray.every(num => typeof num === 'number')) {
        errorMsg.push("Seluruh value pada data array harus berupa number")
    }

    // Validasi nilaiAwal < nilaiAkhir
    if (nilaiAwal > nilaiAkhir) {
        errorMsg.push("Nilai akhir harus lebih besar dari nilai awal")
    }

    // Validasi data dalam dataArray harus lebih dari 5
    if (dataArray.length <= 5) {
        errorMsg.push("Jumlah angka dalam dataArray harus lebih dari 5")
    }
    
    if (errorMsg.length > 0) {
        errorMsg = errorMsg.join("\n")
        return errorMsg
    }

    let result = dataArray.filter((item) => {
        return item > nilaiAwal && item < nilaiAkhir
    })
    
    return result.length > 0 ? result.sort((a, b) => a - b) : "Nilai tidak ditemukan"
}

// console.log(seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]))
// console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(40, "17" , [2, 25, "4"]))
// console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]))