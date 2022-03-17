const cekHariKerja = (day) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

//---------------- then - catch ---------------------

cekHariKerja('selasa').then((result) => {
    console.log(`Hari ${result} adalah hari kerja`)
}).catch((error) => {
    console.log(error)
})

/*
Then and catch digunakan untuk menghandle hasil promise. 
Promise yang terpenuhi akan di-resolve dan nilainya (cek) akan dijadikan argumen untuk function pada then (result).
Promise yang gagal akan di-reject dan nilainya (cek) akan dijadikan argumen untuk function pada catch (error).
*/

//---------------- then - catch ---------------------

async function showResult() {
    try {
        let result = await cekHariKerja('senin')
        console.log(`Hari ${result} adalah hari kerja`)
    } catch (error) {
        console.log(error)
    }
}

showResult()

/*
Try and catch digunakan untuk menghandle hasil promise menggunakan async function.
Di dalam async function dibuat statement try dan catch.
Try berisikan code yang akan mungkin terjadi error, yaitu promise cekHariKerja().
Promise diawali dengan keyword await agar function menunggu promise selesai.
Promise yang berhasil akan di-resolve dan nilainya direturn dan disimpan ke dalam variabel result.
Promise yang gagal akan di-reject dan nilainya menjadi argumen untuk catch.
*/