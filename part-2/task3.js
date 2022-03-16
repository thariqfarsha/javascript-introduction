const seleksiNilai = function(nilaiAwal, nilaiAkhir, dataArray){
    // Validasi nilaiAwal < nilaiAkhir
    if (nilaiAwal > nilaiAkhir) {
        return "Nilai akhir harus lebih besar dari nilai awal"
    }

    // Validasi data dalam dataArray harus lebih dari 5
    if (dataArray.length <= 5) {
        return "Jumlah angka dalam dataArray harus lebih dari 5"
    }
    
    let result = []
    dataArray.map((item) => {
        if (item > nilaiAwal && item < nilaiAkhir) {
            result.push(item)
        }
    })
    
    if (result.length === 0) {
        return "Nilai tidak ditemukan"
    }
    
    result.sort((a, b) => a - b)
    return result
}

console.log(seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(4, 17 , [2, 25, 4]))
console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]))