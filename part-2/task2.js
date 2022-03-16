const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

const searchName = function(keyword, limitNumber, callback = limitResult) {
    let errorMsg = []

    // Validasi keyword harus berupa string
    if (typeof keyword !== 'string') {
        errorMsg.push("Keyword harus berupa string")
    }

    // Validasi limit number harus berupa number
    if (typeof limitNumber !== 'number') {
        errorMsg.push("Limit number harus berupa number")
    }

    // Validasi limit number minimal harus 1
    if (limitNumber < 1) {
        errorMsg.push("Limit number minimal 1 atau lebih")
    }

    // Menampilkan pesan error jika ada
    if (errorMsg.length > 0) {
        errorMsg = errorMsg.join("\n")
        return errorMsg
    }

    let filteredName = name.filter((item) => {
        return item.toLowerCase().includes(keyword.toLowerCase())
    })

    return filteredName.length > 0 ? callback(filteredName, limitNumber) : "Data tidak ditemukan"
}

function limitResult(dataArray, limitation) {
    return dataArray.slice(0, limitation)
}

console.log(searchName("el", 3, limitResult))