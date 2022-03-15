const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

const searchName = function(keyword, limitNumber, callback) {
    let filteredName = name.filter((item) => {
        return item.toLowerCase().includes(keyword.toLowerCase())
    })

    return callback(filteredName, limitNumber)
}

function limitResult(dataArray, limitation) {
    return dataArray.slice(0, limitation)
}

console.log(searchName("el", 3, limitResult))