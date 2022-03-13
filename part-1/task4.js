let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874"
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

// Soal a
data = {
    ...data,
    name: "Muhammad Thariq Farsha",
    email: "mthariqfarsha@gmail.com",
    hobby: ["baking", "hiking", "karaoke", "traveling"]
}

console.log(data)


// Soal b
const {street, city} = data.address

console.log(
    `street: ${street}
    city: ${city}`
)

