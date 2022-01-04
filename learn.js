// membuat variabel
let myNumber = 16;
let myString = "Hello"
let myBoolean = true
const phi = 3.14
// menampilkan informasi ke console
console.log(myNumber)
console.log(myString)
console.log(myBoolean)
console.log(phi)
// menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : " + myNumber)
window.alert('Angka favorit saya adalah : ' + myNumber)
window.alert(`Angka favorit saya adalah : ${myNumber}`)

// menampilkan oprasi aritmetika
let x = 8;
let y = 4;
console.log(x, y); // menampilkan 8, 4
console.log('x + y =', x + y); // menampilkan 12
console.log('x - y =', x - y); // menampilkan 4
console.log('x * y =', x * y); // menampilkan 32
console.log('x / y =', x / y); // menampilkan 2
console.log('x % y =', x % y); // menampilkan 0
console.log('x++ =', x++); // menampilkan 8
console.log('++x =', ++x); // menampilkan 10
console.log('x-- =', x--); // menampilkan 10
console.log('--x =', --x); // menampilkan 8

// oprator perbandingan
let a = 8;
let b = 4;
console.log(a, b); // menampilkan 8, 4
console.log('a > b =', a > b); // menampilkan true
console.log('a < b =', a < b); // menampilkan false
console.log('a >= b =', a >= b); // menampilkan true
console.log('a <= b =', a <= b); // menampilkan false
console.log('a == b =', a == b); // menampilkan false
console.log('a != b =', a != b); // menampilkan true
console.log('a === b =', a === b); // menampilkan false
console.log('a !== b =', a !== b); // menampilkan false

// oprator logika
console.log('true && true =', true && true); // menampilkan true
console.log('true && false =', true && false); // menampilkan false
console.log('false && true =', false && true); // menampilkan false
console.log('false && false =', false && false); // menampilkan false
console.log('true || true =', true || true); // menampilkan true
console.log('true || false =', true || false); // menampilkan true 
console.log('false || true =', false || true); // menampilkan true 
console.log('false || false =', false || false); // menampilkan false
console.log('!true =', !true); // menampilkan false
console.log('!false =', !false); // menampilkan true

function luas(sisi){
    let luas_persegi = sisi * sisi;
    return `luas persegi =: ${luas_persegi}`
}

let sisi = 6
console.log(luas(sisi))

function luas_segitiga(alas, tinggi){
    let luas_segitiga = 0.5 * alas * tinggi;
    return `luas segitiga = ${luas_segitiga}`
}

let alas = 5
let tinggi = 10
console.log(luas_segitiga(alas, tinggi))

function volume(p, l, t){
    let volume =p * l * t;
    return `Volume Balok = ${volume}`
}

let p = 10
let l = 6
let t = 8
console.log(volume(p, l, t))
