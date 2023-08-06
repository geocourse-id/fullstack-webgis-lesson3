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

// 🗺️JAVASCRIPT STANDARD
// console.log('Faiz') //ok
// console.log("Geocourse.id") //hindari

// const stringExample = "<div class=''>Hello World</div>"

// const jakarta = 'Ibukota Negara'
// const bandung = 'Ibukota Provinsi'
// const cibinong = 'Ibukota Kota'

// // console.log('Jakarta adalah sebuah kota di Indonesia yang statusnya sebagai ' + jakarta)
// // console.log('Bandung adalah sebuah kota di Indonesia yang statusnya sebagai ' + bandung)

// console.log('terdapat status ' + jakarta + ', ' + bandung + ', ' + cibinong)
// console.log('terdapat status '+jakarta+'')//hindari

// // template literal --> menggunakan backtick ``
// const kalimat = `Terdapat status ${jakarta}, ${bandung}, ${cibinong}`
// console.log(kalimat)

// let kotaAdministrasi; //ok
// let kota_administrasi; //hindari
// let KotaAdministrasi; //hindari
// let Kota Administrasi; //error, memakai spasi

// let kota = 'Jakarta';
// let suhu = 25; //ketika variabel ini tidak dipanggil, tidak perlu didefinisikan

// const myFunction = function(){
//   console.log(kota)
// }

// let perempuan = true;

// if(perempuan) console.log('Anda seorang Perempuan') //ok

// if(perempuan) 
//   console.log('Anda seorang Perempuan') //hindari

// if(perempuan) {
//   console.log('Anda seorang Perempuan') //ok
// }

// const namaDepan = 'Faiz'
// const namadepan = 'Ahmad'

// console.log(namadepan)

// 🗺️ARRAY
// const buah1 = 'apel'
// const buah2 = 'jeruk'
// const buah3 = 'durian'
// const buah4 = 'sirsak'
// console.log(buah1, buah2, buah3)

// const buah = ['apel', 'jeruk', 'durian']
// console.log(buah)
// console.log(buah.length)

// console.log(buah1)
// console.log(buah[0])

// buah.push('sirsak')
// console.log(buah)
// console.log(buah.length)

// buah.length = 2
// console.log(buah)

// buah.length = 10
// console.log(buah)

// buah[1] = 'mangga'
// console.log(buah)

// buah[2] = 'nangka'
// console.log(buah)

// buah [5] = 'lemon'
// console.log(buah)

// console.log(buah[8])

// const klubLigaInggris = ['Manchester City', 'Liverpool', 'Manchester United', 'Chelsea'];
// const klubLigaSpanyol = ['Real Madrid', 'Barcelona', 'Atletico Madrid', 'Sevilla']
// const klubLigaPrancis = ['PSG', 'Marseille']

// const ligaChampions = klubLigaInggris.concat(klubLigaSpanyol, klubLigaPrancis)

// console.log(klubLigaInggris)
// console.log(ligaChampions.sort().reverse())
// console.log(ligaChampions.filter((kata) => kata.length > 10))

// const filterLigaChampions = ligaChampions.filter(function(kata){
//   return kata === 'Chelsea'
// })

// console.log(filterLigaChampions)

// console.log(ligaChampions)
// console.log(ligaChampions.slice(5))
// console.log(ligaChampions.slice(5, 7))
// console.log(ligaChampions.slice(0, 5))

// console.log(ligaChampions.indexOf('Sevilla'))

// 🗺️OBJECT
// const profileRealMadrid = {
//   liga: 'La Liga',
//   peringkatLiga: 3,
//   negara: 'Spanyol',
//   pelatih: 'Ancelotti',
//   stadion: 'Santiago Bernabeu'
// }

// console.log(profileRealMadrid)
// console.log(profileRealMadrid.pelatih)
// console.log(profileRealMadrid.stadion)

// profileRealMadrid.sponsor = 'Fly Emirates'

// console.log(profileRealMadrid)

// const profileManchesterUnited = {
//   liga: 'Premier League',
//   peringkatLiga: 4,
//   negara: 'Inggris',
//   pelatih: 'Ten Hag',
//   stadion: 'Old Trafford'
// }

// console.log(profileManchesterUnited)

// const profileLigaChampions = [profileRealMadrid, profileManchesterUnited]

// console.log(profileKlubLigaChampions)

// const profileKlubLigaChampions = {
//   realMadrid: profileRealMadrid,
//   manUnited: profileManchesterUnited
// }

// console.log(profileKlubLigaChampions)
// console.log(profileKlubLigaChampions.manUnited.stadion)

// 🗺️LOOP & ITERATION
// const buah = ['apel', 'jeruk', 'mangga', 'melon', 'durian', 'nangka']
// console.log(buah)

// console.log(`Saya makan ${buah[0]}`)
// console.log(`Saya makan ${buah[1]}`)
// console.log(`Saya makan ${buah[2]}`)
// console.log(`Saya makan ${buah[3]}`)
// console.log(`Saya makan ${buah[4]}`)
// console.log(`Saya makan ${buah[5]}`)
// console.log(`Saya makan ${buah[6]}`)

// function makanBuah(urutan){
//   return console.log(`Saya makan ${buah[urutan]}`)
// }

// buah.push('cempedak')
// console.log(buah)

// makanBuah(0)
// makanBuah(1)
// makanBuah(2)
// makanBuah(3)
// makanBuah(4)
// makanBuah(5)

// let urutan = 0
// console.log(urutan)

// urutan = urutan + 1
// urutan++
// console.log(urutan)

// urutan = urutan + 1
// urutan++
// console.log(urutan)

// console.log(buah.length)

// buah.push('salak')
// buah.push('anggur')

// for(let urutan = 0; urutan < buah.length; urutan++){
//   console.log(`Saya makan ${buah[urutan]}`)
// }

// const panitiaAgustusan = [
//   ['Andi', 'Warga', 24, true],
//   ['Budi', 'Warga', 28, true],
//   ['Putri', 'Warga', 19, false],
// ]

// console.log(panitiaAgustusan[0][3])

// console.log(`Namanya adalah ${panitiaAgustusan[0][0]}, statusnya ${panitiaAgustusan[0][1]}, umurnya ${panitiaAgustusan[0][2]}`)

// console.log(panitiaAgustusan[1][3])
// console.log(panitiaAgustusan[2][3])

// let urutan = 0

// while (panitiaAgustusan[urutan][3]){
//   console.log(`Namanya adalah ${panitiaAgustusan[urutan][0]}, statusnya ${panitiaAgustusan[urutan][1]}, umurnya ${panitiaAgustusan[urutan][2]}`)
//   urutan++
// }


const angka = [63, 59, 75, 69, 12]

let urutan = 0

while(angka[urutan] > 50){
  console.log(angka[urutan])
  urutan++
}