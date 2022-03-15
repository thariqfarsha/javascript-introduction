// Javascript Built-in Function

/*
1. toExponential()
toExponential() akan menampilkan suatu bilangan dalam notasi eksponensial,
walaupun sebenarnya masih dapat ditampilkan secara utuh oleh javascript

Sintaksnya adalah:
number.toExponential([fractionDigits])

- fractionDigits (opsional): jumlah bilangan desimal di belakang koma.
Jika dikosongkan, fungsi ini akan menampilkan bilangan desimal sebanyak yang dibutuhkan.
*/

let num = 12.345678913456789123456789

console.log(
`-- toExponential() --
Parameter dikosongkan: ${num.toExponential()}
Parameter diisi angka 2: ${num.toExponential(2)}
Parameter diisi angkan 4: ${num.toExponential(4)}
`
)

/*
2. charAt()
charAt() akan mengembalikan karakter pada indeks yang ditentukan

Sintaks: 
string.charAt(index)
*/

let string = "Hello World"

console.log(
`-- charAt() --
Karakter pada index 0: ${string.charAt(0)}
Karakter pada index 6: ${string.charAt(6)}
Karakter pada index 20: ${string.charAt(20)}
`
)

/*
3. indexOf()
indexOf() akan mengembalikan nilai index dari string pertama yang ditemukan
dari string yang ingin dicari. Jika tidak ditemukan, makan akan dikembalikan nilai -1.

Sintaks:
string.indexOf(searchValue[, fromIndex])

- searchValue: substring yang akan dicari
- fromIndex (opsional): posisi awal (index awal) dilakukannya pencarian substring pada string.
Nilai defaultnya adalah 0.
*/

string = "this is a string and this is also a string"

console.log(
`-- indexOf() --
String "this" ditemukan pada index: ${string.indexOf("this")}
Jika pencarian dimulai dari index 5, string "this" ditemukan pada index: ${string.indexOf("this", 5)}
`
)

/*
4. includes()
includes() akan mengecek apakah sebuah string mengandung substring yang ditentukan dan akan
me-return nilai true atau false.
Method ini bersifat case sensitive.

Sintaks:
string.includes(searchValue [, fromIndex])

- searchValue: substring yang akan dicari
- fromIndex (opsional): posisi awal (index awal) dilakukannya pencarian substring pada string.
Nilai defaultnya adalah 0.
*/

string = "It's a dummy text for includes() method example"

console.log(
`-- includes() --
Apakah string mengandung kata "dummy"? ${string.includes("dummy")}
Apakah string mengandung kata "Dummy"? ${string.includes("Dummy")}
Apakah string mengandung kata "dummy" jika dicari mulai dari index 10? ${string.includes("dummy", 10)}
`
)

/*
5. slice()
slice() digunakan untuk mengekstrak atau mengambil sebagian dari string lalu me-return hasilnya.
slice() juga dapat digunakan untuk data berupa array.

sintaks:
string.slice(start [, end])

- start: posisi (index) awal bagian yang ingin diekstrak
- end (opsional): batas dilakukannya slicing (index akhir). Karakter atau item pada index ini
tidak akan diambil). Defaultnya adalah panjang string.
- jika index start/end diisi dengan angka negatif, maka index akan dihitung dari belakang dimulai
dari -1
*/

string = "It's a dummy text for slice() method example"

let fruitArray = ["apple", "pumpkin", "blueberry", "pineapple", "lemon"]

console.log(
`-- slice() --
Dimulai dari awal string hingga batas tertentu: ${string.slice(0, 3)}
Dimulai dari awal tertentu tanpa batas akhir: ${string.slice(10)}
Dimulai dari awal dan batas tertentu: ${fruitArray.slice(1,3)}
Menggunakan index negatif: ${fruitArray.slice(-3, 4)}
`
)

/*
6. filter()
filter() akan membuat sebuah array baru yang berisikan elemen-elemen yang memenuhi kondisi
yang disyaratkan pada callback function. Jika tidak ada yang memenuhi maka filter() akan
me-return array kosong.

Sintaks:
array.filter((currentValue, index, arr) => {})

- currentValue: value dari elemen array yang sedang diproses
- index: nilai index dari currentValue
- arr: array yang sedang diproses menggunakan filter()
*/

let numberArray = [6, 7, 32, 12, 4, 10, 45, 73, 39]

let evenNumber = numberArray.filter(num => num % 2 === 0)

console.log(
`-- filter() --
Elemen numberArray yang bernilai genap: ${evenNumber}
`
)

/*
7. map()
map() akan membuat sebuah array baru yang berisikan hasil dari pemanggilan callback function
untuk setiap elemen dari array awal.

Sintaks:
array.map((currenValue, index, arr) => {})

- currentValue: value dari elemen array yang sedang diproses
- index: nilai index dari currentValue
- arr: array yang sedang diproses menggunakan map()
*/

numberArray = [6, 7, 32, 12, 4, 10, 45, 73, 39]

let newNumberArray = numberArray.map((num, index, arr) => {
    if (num === arr[arr.length-1]) {
        return num += arr[0]
    }
    
    return num += arr[index + 1]
})

console.log(
`-- map() --
Hasil dari menjumlahkan setiap elemen numberArray dengan elemen selanjutnya: ${newNumberArray}
`
)

/*
8. forEach()
forEach() akan menjalankan callback function untuk setiap elemen array secara berurutan.
forEach() selalu me-return nilai undefined sehingga tidak bisa disambung dengan method lain.

Sintaks:
array.forEach((currentValue, index, arr) => {})

- currentValue: value dari elemen array yang sedang diproses
- index: nilai index dari currentValue
- arr: array yang sedang diproses menggunakan forEach()
*/

fruitArray = ["apple", "pumpkin", "blueberry", "pineapple", "lemon"]

console.log("-- forEach() --")

fruitArray.forEach((fruit, index) => {
    console.log(`${index+1}. ${fruit}`)
})

console.log()

/*
9. sort()
sort() akan mengurutkan elemen-elemen array secara alfabetis dan ascending.
sort() dapat mengubah array yang asli.
Karena disusun secara alfabetis, menggunakan sort() pada bilangan akan menimbulkan kesalahan karena
sort() hanya akan membandingkan setiap angka tanpa mengetahui apakah angka tersebut merupakan satuan,
puluhan, ratusan, dsb, sehingga dibutuhkan function tambahan

Sintaks:
array.sort(compareFunction)

- compareFunction (opsional): function ini akan menentukan urutan elemen. Function ini akan me-return
nilai negatif, 0, atau positif sehingga sort() dapat mengetahui bilangan mana yang lebih besar/kecil.

Sintaks untuk compareFunction:
- untuk urutan ascending: function(a, b) {return a-b}
- untuk urutan descending: function(a, b) {return b-a}

*/

fruitArray = ["apple", "pumpkin", "blueberry", "pineapple", "lemon"]
numberArray = [6, 7, 32, 12, 4, 10, 45, 73, 39]

console.log(
`-- sort() --
fruitArray yang diurutkan ascending: ${fruitArray.sort()}
numberArray yang diurutkan tanpa compareFunction: ${numberArray.sort()}
numberArray yang diurutkan ascending: ${numberArray.sort((a, b) => a-b)}
numberArray yang diurutkan descending: ${numberArray.sort((a, b) => b-a)}
`
)

/*
10. reverse()
reverse() akan membalikkan urutan dari elemen-elemen pada array.
reverse() dapat mengubah array yang asli.

Sintaks:
array.reverse()
*/

fruitArray = ["apple", "pumpkin", "blueberry", "pineapple", "lemon"]

console.log(
`-- reverse() --
fruitArray yang urutannya dibalik: ${fruitArray.reverse()}
fruitArray yang disusun alfabetis lalu dibalik urutannya: ${fruitArray.sort().reverse()}
`
)