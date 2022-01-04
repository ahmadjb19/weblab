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

// rumus luas persegi
function luas(sisi){
    let luas_persegi = sisi * sisi; // mengitung luas persegi
    return `luas persegi =: ${luas_persegi}` // menampilkan hasil
}
//set nilai
let sisi = 6
console.log(luas(sisi))

//rumus luas segitiga
function luas_segitiga(alas, tinggi){
    let luas_segitiga = 0.5 * alas * tinggi; // menghitung luas segitiga
    return `luas segitiga = ${luas_segitiga}` // menampilkan hasil
}

//nilai
let alas = 5    
let tinggi = 10
console.log(luas_segitiga(alas, tinggi))

//rumus volume balok
function volume(p, l, t){
    let volume =p * l * t; //menghitung volume balok
    return `Volume Balok = ${volume}` //menampilkan hasil
}
 // set nilai
let p = 10
let l = 6
let t = 8
console.log(volume(p, l, t))

var buah = ["Apel", "Jeruk", "Mangga", "Pisang"];
console.log(buah[0]); // menampilkan Apel
console.log(buah[1]); // menampilkan Jeruk
console.log(buah[2]); // menampilkan Mangga
console.log(buah[3]); // menampilkan Pisang
buah[1] = "Anggur"; // mengganti Jeruk menjadi Anggur
console.log(buah); // mengecek perubahan
buah.push("Pepaya"); // menambah Pepaya di akhir Array
console.log(buah); // mengecek perubahan
buah.pop("Pepaya"); // melihat dan menghapus item dari Array
console.log(buah); // mengecek perubahan
console.log('Panjang Array = ', buah.length); // menghitung panjang Array
buah.unshift("Semangka"); // menambah Semangka di awal Array
console.log(buah); // mengecek perubahan
buah.shift(); // menampilkan dan menghapus item awal dari array
console.log(buah); // mengecek perubahan
console.log(buah.sort()); // mengurutkan Array
console.log(buah.reverse()); // membalikkan urutan Array

let profil = {
    namaDepan : "Ahmad",
    namaBelakang : "Jadibullah",
    alamat : "karya 1 jln.Rahmat kec.Bukit Raya",
    kontak : "+6282288875421",
    hobby : "Volyball",
    namaLengkap : function(){
        return this.namaDepan + " " + this.namaBelakang;
    }
}

console.log(profil.namaDepan); // menampilkan nama depan
console.log(profil.namaBelakang); // menampilkan nama belakang
console.log(profil.alamat); // menampilkan alamat
console.log(profil.kontak); // menampilkan kontak
console.log(profil.hobby); // menampilkan hobby
console.log(profil.namaLengkap()); // menampilkan nama lengkap

console.log(profil["namaDepan"]); // menampilkan nama depan
console.log(profil["namaBelakang"]); // menampilkan nama belakang
console.log(profil["alamat"]); // menampilkan alamat
console.log(profil["kontak"]); // menampilkan kontak
console.log(profil["hobby"]); // menampilkan hoby
console.log(profil["namaLengkap"]()); // menampilkan nama lengkap

//anomali

console.log(0.1 + 0.2 == 0.3); // menampilkan false karena hasil penjumlahannya tidak sama
console.log(1 + "1"); // menampilkan 11 karena merupakan penggabungan angka dan string
console.log(1 - "1"); // menampilkan 0 karena operator pengurangan hanya untuk numerik, setelah itu keduanya akan diubah ke numerik
console.log(1 < 2 < 3); // menampilkan true karena perbandingannya benar
console.log(3 > 2 > 1); // menampilkan false karena perbandingannya salah
console.log(null == 0); // menampilkan false karena null tidak sama dengan 0 int
console.log(null > 0); // menampilkan false karena null=+0 sama dengan 0
console.log(null >= 0); // menampilkan true karena null > = 0

