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

// const myImage = document.querySelector("img");
// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "./google.png") {
//     myImage.setAttribute("src", "./geocourse.png");
//   } else {
//     myImage.setAttribute("src", "./google.png");
//   }
// };

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


// const angka = [63, 59, 75, 69, 12]

// let urutan = 0

// while(angka[urutan] > 50){
//   console.log(angka[urutan])
//   urutan++
// }

// 🗺️DOM Manipulation - call element
// console.log(document)
// console.log(document.body)
// console.log(document.head.title) //cannot access title element
// console.log(document.getElementsByTagName('title'))
// console.log(document.childElementCount)
// console.log(document.head.childElementCount)
// console.log(document.children)
// console.log(document.head.children)
// console.log(document.head.children[0])
// console.log(document.head.children[2])

// 🗺️ DOM Manipulation - change inner HTML

// const testingDom = document.head
// testingDom.push('hello world') // DOM is array-like, not actual array

// console.log(testingDom)

// let judul = document.getElementsByTagName('h1')

// judul[6].innerHTML = 'Faiz'
// console.log(judul)

// const judulUbah = document.getElementsByClassName('ubah')
// judulUbah[0].innerHTML = 'Geocourse.id'
// console.log(judulUbah.length)

// const judulItem1 = document.getElementById('item-1');
// judulItem1.innerHTML = 'Geocourse.id'
// console.log(judulItem1)

// const test = document.getElementsByTagName('h1')
// test.innerHTML = 'Faiz' // tidak terubah karena masih dalam bentuk HTML Collection, breakdown terlebih dahulu
// console.log(test)

// test[0].innerHTML = 'Geocourse'
// test[1].innerHTML = 'Geocourse'
// test[2].innerHTML = 'Geocourse'
// test[3].innerHTML = 'Geocourse'
// test[4].innerHTML = 'Geocourse'
// test[5].innerHTML = 'Geocourse'
// test[6].innerHTML = 'Geocourse'

// for(let i = 0; i < test.length; i++){
//   test[i].innerHTML = 'Geocourse'
// }

// const judulUbah = document.getElementsByClassName('ubah')
// judulUbah[0].innerHTML = 'Geocourse.id'
// judulUbah[1].innerHTML = 'Geocourse.id'
// judulUbah[2].innerHTML = 'Geocourse.id'

// for(let i = 0; i < judulUbah.length; i++){
//   judulUbah[i].innerHTML = 'Geocourse.id'
// }

// 🗺️ DOM Manipulation - HTML attribute
// const judul = document.getElementsByTagName('h1')
// judul[6].className = 'testing'
// // judul[6].id = 'item-25'
// judul[6].setAttribute('id', 'item-50')
// judul[6].style.color = 'green'
// judul[6].style.fontFamily = 'Arial'

// console.log(judul[6])

// 🗺️ DOM Manipulation - add, delete dan replace element
// const divisi = document.createElement('div')
// const judul1 = document.createElement('h1')
// judul1.innerHTML = 'WebGIS'
// judul1.style.color = 'red'
// const judul2 = document.createElement('h2')
// judul2.innerHTML = 'JavaScript'
// const paragraf = document.createElement('p')
// paragraf.innerHTML = 'Lorem Ipsum'
// document.body.appendChild(divisi)
// divisi.append('Hello')
// divisi.appendChild(judul1)

// item di HTML Collection --- appendChild
// menambahkan string di HTML --- append 
// JavaScript Array --- push 

// divisi.removeChild(judul1)
// divisi.replaceChild(judul2, judul1)

// console.log(document.getElementsByTagName('body')[0])

// 🗺️ DOM Manipulation - Event Handler
// const divisi = document.createElement('div')
// document.body.appendChild(divisi)

// const tombol = document.createElement('button')
// tombol.innerHTML = 'Klik di sini'
// divisi.appendChild(tombol)

// tombol.onclick = function(){
//   const judul = document.getElementsByTagName('h1')[0]
//   if(judul.innerHTML === 'Hello World'){
//     return judul.innerHTML = 'Geocourse.id'
//   } else{
//     return judul.innerHTML = 'Hello World'
//   }
// }

// CASE INCREMENT DECREMENT
// const divisi2 = document.createElement('div')
// document.body.appendChild(divisi2)

// let angka = 0

// const angkaHTML = document.createElement('h1')
// angkaHTML.innerHTML = angka
// divisi2.appendChild(angkaHTML)

// const tombolTambah = document.createElement('button')
// tombolTambah.innerHTML = 'Naik'
// tombolTambah.style.backgroundColor = 'green'
// tombolTambah.style.color = 'white'
// divisi2.appendChild(tombolTambah)

// const tombolKurang = document.createElement('button')
// tombolKurang.innerHTML = 'Turun'
// tombolKurang.style.backgroundColor = 'red'
// tombolKurang.style.color = 'white'
// divisi2.appendChild(tombolKurang)

// tombolTambah.onclick = function(){
//   angka++
//   return angkaHTML.innerHTML = angka
// }

// tombolKurang.onclick = function(){
//   angka--
//   return angkaHTML.innerHTML = angka
// }

// 🗺️ DOM Manipulation - Query
// const element = document.getElementsByTagName('h1')
// console.log(element)

// const element2 = document.getElementsByClassName('ubah')
// console.log(element2)

// const kueri = document.querySelectorAll('h1.ubah')
// console.log(kueri)

// element.forEach(function(){
//   console.log(globalThis)
// }) // error, karena fungsi forEach hanya tersedia di kueri

// kueri.forEach(function(){
//   console.log(this)
// })

// const kueri = document.querySelectorAll('div.primer > h2[data="invalid"]')
// console.log(kueri)

// 🗺️ DOM Manipulation - CASE: Change image by number
// CASE:
// 1. Facebook
// 2. Instagram
// 3. Tiktok
// 4. LinkedIn
// 5. Twitter

const divisi = document.createElement('div')
document.body.appendChild(divisi)

const gambar = document.createElement('img')
gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-S8HTBQqmfcs%2FXN0ACIRD9PI%2FAAAAAAAAAlo%2FFLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw%2Fs1600%2Ff_logo_RGB-Blue_1024.png&f=1&nofb=1&ipt=e10f40cc2c622f2922096defefed8a82b8831a692d040f830711a6469deb4aa9&ipo=images'
gambar.height = '100'
divisi.appendChild(gambar)

let angka = 1
const teks = document.createElement('h3')
teks.innerHTML = `Peringkat: ${angka}`
divisi.appendChild(teks)

const tombolNaik = document.createElement('button')
tombolNaik.innerHTML = 'Naik'
tombolNaik.style.backgroundColor = 'green'
tombolNaik.style.color = 'white'
divisi.appendChild(tombolNaik)

tombolNaik.onclick = function(){
  angka++
  if(angka === 1){
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-S8HTBQqmfcs%2FXN0ACIRD9PI%2FAAAAAAAAAlo%2FFLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw%2Fs1600%2Ff_logo_RGB-Blue_1024.png&f=1&nofb=1&ipt=e10f40cc2c622f2922096defefed8a82b8831a692d040f830711a6469deb4aa9&ipo=images'
  } else if(angka === 2){
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.JtmXSh_uyZBaTg1eXd-NtgHaHa%26pid%3DApi&f=1&ipt=d584034ef42e320a3e263cb7450f0657ff2be6402e7320755a132fa3df3db11a&ipo=images'
  } else if(angka === 3){
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IMt2d1p04pNAyBdnlHC7-gHaHa%26pid%3DApi&f=1&ipt=c730693b75bcf83ebb76465ff5b2bd721777329038920b8bd5709c38c43fd66c&ipo=images'
  } else if(angka === 4){
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.w_zDkEJ9aLiWR-g0rff8hwHaHa%26pid%3DApi&f=1&ipt=75d65cf122503b69cea4946661a0708aa667466a3c7a7c93b338a89bb16fd1b7&ipo=images'
  } else if(angka === 5){
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.H836RvDYYgQZcZn0TC8qBAHaHa%26pid%3DApi&f=1&ipt=c95aedcf75b0eb29c531166d452aa8f969977680fcb0d2c1c40809cf77ce41d7&ipo=images'
  } else{
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AIqkBUv22YkLhZ5vBIyhQwHaHa%26pid%3DApi&f=1&ipt=384f5d825937ebd4609726b5d98811d0f7232cc4807d8f3bc167d94d7025ee91&ipo=images'
  }
  return teks.innerHTML = `Peringkat: ${angka}`
}

const tombolTurun = document.createElement('button')
tombolTurun.innerHTML = 'Turun'
tombolTurun.style.backgroundColor = 'red'
tombolTurun.style.color = 'white'
divisi.appendChild(tombolTurun)

tombolTurun.onclick = function(){
  angka--
  if(angka === 1){
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-S8HTBQqmfcs%2FXN0ACIRD9PI%2FAAAAAAAAAlo%2FFLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw%2Fs1600%2Ff_logo_RGB-Blue_1024.png&f=1&nofb=1&ipt=e10f40cc2c622f2922096defefed8a82b8831a692d040f830711a6469deb4aa9&ipo=images'
  } else if(angka === 2){
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.JtmXSh_uyZBaTg1eXd-NtgHaHa%26pid%3DApi&f=1&ipt=d584034ef42e320a3e263cb7450f0657ff2be6402e7320755a132fa3df3db11a&ipo=images'
  } else if(angka === 3){
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IMt2d1p04pNAyBdnlHC7-gHaHa%26pid%3DApi&f=1&ipt=c730693b75bcf83ebb76465ff5b2bd721777329038920b8bd5709c38c43fd66c&ipo=images'
  } else if(angka === 4){
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.w_zDkEJ9aLiWR-g0rff8hwHaHa%26pid%3DApi&f=1&ipt=75d65cf122503b69cea4946661a0708aa667466a3c7a7c93b338a89bb16fd1b7&ipo=images'
  } else if(angka === 5){
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.H836RvDYYgQZcZn0TC8qBAHaHa%26pid%3DApi&f=1&ipt=c95aedcf75b0eb29c531166d452aa8f969977680fcb0d2c1c40809cf77ce41d7&ipo=images'
  } else{
    gambar.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AIqkBUv22YkLhZ5vBIyhQwHaHa%26pid%3DApi&f=1&ipt=384f5d825937ebd4609726b5d98811d0f7232cc4807d8f3bc167d94d7025ee91&ipo=images'
  }
  return teks.innerHTML = `Peringkat: ${angka}`
}