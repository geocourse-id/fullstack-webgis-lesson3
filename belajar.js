// 🗺️PENGENALAN TYPE DATA
/*
console.log("hello world")
console.log(typeof("hello world"))

const myHeading = document.querySelector("h1");
myHeading.textContent = "Geocourse.id";

let myVariable = null;
console.log(myVariable);
console.log(typeof(myVariable));

let payung;
console.log(payung)
console.log(typeof(payung))

let indonesia = false;
console.log(indonesia)

let angka = 1 <= 2
console.log(angka)
console.log(typeof(indonesia), typeof(angka))

let angka1 = 5
let angka2 = 8

console.log(angka1, angka2)
console.log(typeof(angka1), typeof(angka2))

let nama = 'geocourse.id'
console.log(nama);
console.log(typeof(nama))
*/

// 🗺️VARIABEL LET, CONST & VAR
// var tempat = 'Jakarta'
// tempat = 'Surabaya'
// console.log(tempat);

// let nama = 'Bambang'
// console.log(nama);

// nama = 'Faiz'
// console.log(nama);

// const phi = 3.14
// console.log(phi);

// phi = 4
// console.log(phi);

// 🗺️OPERATOR
// console.log(5 + 2)
// console.log('Ahmad' + 'Faiz')

// console.log('5' + 2)
// console.log(5 + '2')

// console.log(10 - 4)
// console.log('Faiz' - 'a')

// console.log(5 * 2)
// console.log(5 * '2')
// console.log('5' * 2)
// console.log('Faiz' * 'Geocourse')

// console.log(10 / 2)

// let laptop = 'Asus'
// console.log(laptop)

// laptop = 'HP'
// console.log(laptop)

// console.log(laptop == 'HP')
// console.log(laptop == 'Asus')

// console.log(laptop === 'HP')
// console.log(laptop === 'Asus')

// console.log(laptop !== 'Asus')

// 🗺️CONDITIONAL
// const kewarganegaraan = 'Indonesia'

// if(kewarganegaraan === 'Indonesia'){
//   console.log('Warga Negara Indonesia')
// } else {
//   console.log('Warga Negara Asing')
// }

// const kota = 'Semarang'

// if(kota === 'Jakarta'){
//   console.log('DKI Jakarta')
// } else if(kota === 'Bandung'){
//   console.log('Jawa Barat')
// } else if(kota === 'Surabaya'){
//   console.log('Jawa Timur')
// } else{
//   console.log('Tidak diketahui')
// }

// 🗺️FUNGSI
// namaLengkap('John', 'Foe', 'Doe')

// function namaLengkap(namaDepan, namaTengah, namaBelakang){
//   return console.log(namaDepan + ' ' + namaTengah + ' ' + namaBelakang)
// }

// namaLengkap('Ahmad', 'Zaenun', 'Faiz')
// namaLengkap('Muhammad', 'Budi', 'Santoso')

// // angka(15)

// const angka = function(number){
//   return console.log(number)
// }

// angka(5)
// angka(10)

// 🗺️Built in feature JavaScript

// const aplikasi = 'zoom'

// console.log(aplikasi)
// console.log(aplikasi.toUpperCase())

// const alat = 'DRONE'
// console.log(alat)
// console.log(alat.toLocaleLowerCase())

// let angka = 5
// const angkaString = String(angka)

// console.log(typeof(angka))
// console.log(typeof(angkaString))

// let orang = prompt('Masukkan nama anda', 'Harry Potter')
// console.log(orang)
// console.log(typeof(orang))

// let angka1 = Number(prompt('Masukkan angka pertama'))
// let angka2 = Number(prompt('Masukkan angka kedua'))

// console.log(angka1 + angka2)
// console.log(typeof(angka1), typeof(angka2))

// 🗺️EVENT
// document.querySelector("html").addEventListener("click", function () {
//   alert("Anda salah klik");
// });

// document.querySelector("h1").addEventListener("click", function () {
//   alert("Halo semuanya, apa kabar");
// });

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./google.png") {
    myImage.setAttribute("src", "./geocourse.png");
  } else {
    myImage.setAttribute("src", "./google.png");
  }
};