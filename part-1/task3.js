const printSegitiga = 10

if (typeof(printSegitiga) === "number") {
    for (let row = 0; row < printSegitiga; row++) {
        let barisanAngka = ""
        for (let n = 1; n <= printSegitiga - row; n++) {
            barisanAngka = barisanAngka + n + " "
        }
        console.log(barisanAngka)
    }
} else {
    console.log("Data harus number")
}
