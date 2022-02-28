// brojGodina = prompt("Unesi koliko imas godina");

// console.log(brojGodina);

// console.log(1 > 5);
// console.log(7 > 5);
// console.log(5 >= 5);
// console.log(4 <= 5);

// console.log(5 == "5");
// console.log(5 === "5");

// console.log("D" === "D");
// console.log("D" === "D");

// console.log(Boolean(0));
// console.log(Boolean(5));

// console.log(Boolean(""));
// console.log(Boolean("ASDFGHJKL"));

// var1 = true;

// var2 = false;

// null

// console.log(Boolean(NaN));

// && AND

// || OR

// false || false === false
// true || false === true
// true || true ===true
// false||true === true

// true && true === true;
// false && false === false;
// false && true === false;
// true && false === false;

// a = 5;
// b = 10;

// console.log(a < b);

// a = prompt("Unesi broj izmedju 1 i 10");

// console.log(a < 10 && a > 1 );

// console.log(true || (false && true));

// a = prompt("Unesi broj ");

// console.log(a % 2 === 0);

// a = 5;

// b = 3;

// c = a === b;

// console.log(c);

// console.log("Daris".length);

// a = "Daris";
// console.log(a.length);

// ime = prompt("Unesi ime");
// duzina = ime.length;

// console.log("Duzina vaseg imena je : ", duzina);

// ime = "Daris";
//     01234
// console.log(ime[5]);

// a = "Daris";
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.concat("Nesto"));
// console.log("Darisa".indexOf("a"));
// console.log("Darisa".includes("g"));

// str = "Apple, Banana, Kiwi";
// part = str.slice(7, 13);

// console.log(part);

// str = "Apple, Banana, Kiwidsgfhghkjlkl";
// part = str.slice(7);

// console.log(part);

// text = "Please visit Microsoft!";

// newText = text.replace("Microsoft", "W3Schools");

// console.log(newText);

// text = "kiwi,banana,daris,kiwi";

// console.log(text.split(","));

// a = 5 + 2;

// console.log("Ovaj broj je", a, "i on je u stringu");
// console.log(`Ovaj broj je ${a} i on je u stringu`);

// a = Math.random() * 100;

// console.log(Math.round(a));

// if (5 > 2) {
//   console.log("tacno je");
// }

// console.log("ostali code");
// console.log("ostali code");

// a = 150;
// b = 20;

// if (a > b) {
//   console.log("A je vece");
// }

// if (b > a) {
//   console.log("B je vece");
// }

// a = prompt("Unesi broj 1-10: ");

// if (a > 1 && a < 10) {
//   console.log("Unos je tacan");
// }

// if (a < 1 || a > 10) {
//   console.log("Unos je POGRESAN");
// }

// if (5 > 1) {
//   console.log("IF JE TACAN");
// } else {
//   console.log("IF SE NIJE IZVRSI,IZVRSIO SE ELSE");
// }

//-----------------------------------------
//Domaci:
//Napisati program da proveri da li je uneti string "dupliran",EXAMPLE:
// "darisdaris"
// console.log("daris" === "daris");
//-----------------------------------------

// a = parseInt(prompt("UNesi broj izmedju 1-7"));
// switch (a) {
//   case 1:
//     console.log("Ponedeljak");
//     break;
//   case 2:
//     console.log("Utorak");
//     break;
//   case 3:
//     console.log("Sreda");
//     break;
//   case 4:
//     console.log("Cetvertak");
//     break;
//   case 5:
//     console.log("Petak");
//     break;
//   case 6:
//     console.log("Subota");
//     break;
//   case 7:
//     console.log("Nedelja");
//     break;
//   default:
//     console.log("Pogresan UNsos");
// }

// a = parseInt(prompt("Uneis broj izmedju 0 - 100"));

// switch (true) {
//   case a > 0 && a < 30:
//     console.log("LOW");
//     break;
//   case a > 30 && a < 60:
//     console.log("Medium");
//     break;
//   case a > 70 && a < 100:
//     console.log("HIGH");
//     break;
//   default:
//     console.log("Pogresan unos");
// }

// console.log("Daris");
//------------------------------------------------------------------------

// for (i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//----------------------------------------------------------
//----------------------------------------------------------
// pocetna = parseInt(prompt("Unesi pocetnu vrednost"));
// krajnja = parseInt(prompt("Unesi kranjnu vrednost"));

// for (i = pocetna; i <= krajnja; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//----------------------------------------------------------

// for (i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`Broj ${i} je paran `);
//   } else {
//     console.log(`Broj ${i} je neparan `);
//   }
// }

//----------------------------------------------------------

// pocetna = parseInt(prompt("Unesi pocetnu vrednost"));
// krajnja = parseInt(prompt("Unesi kranjnu vrednost"));

// for (i = pocetna; i <= krajnja; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

//----------------------------------------------------------

// kolicina = parseInt(prompt("Koliko brojeve zelite da uneste"));
// sum = 0;
// for (i = 0; i < kolicina; i++) {
//   unos = parseInt(prompt("Unesi broj"));
//   sum += unos;
// }
// console.log(sum / kolicina);
//--------------------------
// pocetna = parseInt(prompt("Unesi pocetnu vrednost"));
// krajnja = parseInt(prompt("Unesi kranjnu vrednost"));

// sumP = 0;
// sumN = 0;

// for (i = pocetna; i < krajnja; i++) {
//   if (i % 2 === 0) {
//     sumP += i;
//   } else {
//     sumN += i;
//   }
// }

// console.log("Suma parnih je: ", sumP);
// console.log("Suma neparnih je: ", sumN);

//--------------------------------------
//Domaci:
//Uneti string i  za dati string ispisati svako slovo pojedinacno sa for petljom
//Example: unos: DARIS , izlaz: D A R I S
//--------------------------------------

// unos = prompt("Unesi rec");

// for (i = 0; i < unos.length; i++) {
//   console.log(unos[i]);
// }

//--------------------------------------

// for (i = 7; i > 0; i--) {
//   console.log(i);
// }

//--------------------------------------

// for (i = 0; i < 7; i++) {
//   for (j = 0; j < 7; j++) {
//     console.log("unutrasnja for", j);
//   }

//   console.log("spoljasnja for", i);
// }

//--------------------------------------

// for (i = 1; i <= 10; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(i, "*", j, "=", i * j);
//   }
// }

//--------------------------------------

// sum = "";
// char = " *";
// for (i = 0; i < 5; i++) {
//   console.log((sum += char));
// }

//--------------------------------------

// unos = prompt("Unesi text");
// unosR = "";

// for (i = unos.length - 1; i >= 0; i--) {
//   unosR += unos[i];
// }
// if (unos === unosR) {
//   console.log("Vasa rec je palindrom");
// } else {
//   console.log("Vassa rec nije palindrom");
// }

//--------------------------------------

// unos = prompt("Unesi broj: ");

// for (i = 1; i <= unos; i++) {
//   sum = "";

//   for (j = 1; j <= i; j++) {
//     sum += i;
//   }
//   console.log(sum);
// }

//--------------------------------------
//DOmaci napraviti program da izracuna factorial unetog broja
//factorial od 5 = 1*2*3*4*5 = 120

// unos = parseInt(prompt("Unesite broj"));

// fact = 1;
// for (i = 1; i <= unos; i++) {
//   fact *= i;
// }
// console.log(fact);

// pocetna = parseInt(prompt("Unesi pocetnu vrednost"));
// krajnja = parseInt(prompt("Unesi kranjnu vrednost"));

// for (i = pocetna; i < krajnja; i++) {
//   console.log(i ** 3);
// }

// pocetna = parseInt(prompt("Unesi pocetnu vrednost"));
// krajnja = parseInt(prompt("Unesi kranjnu vrednost"));

// for (i = pocetna; i < krajnja; i++) {
//   delioci = 0;

//   for (j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       delioci++;
//     }
//   }
//   if (delioci === 2) {
//     console.log(i);
//   }
// }

// prvi = parseInt(prompt("Unesi prvi broj"));
// drugi = parseInt(prompt("Unesi drugi broj"));

// for (i = prvi; i < 9000; i++) {
//   if (i % prvi === 0 && i % drugi === 0) {
//     console.log(i);
//     break;
//   }
// }

// kolicina = prompt("Unesite kolicinu:");
// sum = "";
// for (i = 0; i < kolicina; i++) {
//   unos = prompt("unesite slovo");
//   sum += unos;
// }
// console.log(sum);

// i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// while (true) {
//   console.log("asd");
// }

// unos = prompt("Unesite broj ili END");

// while (unos.toUpperCase() !== "END") {
//   unos = prompt("Unesite broj ili END");
// }

// unos = parseInt(prompt("Unesite broj: "));
// sum = 0;
// while (unos >= 0) {
//   sum += unos;
//   unos = parseInt(prompt("Unesite broj opet: "));
// }

// console.log(sum);

// unos = prompt("Unesi nesto");

// while (unos !== "END") {
//   console.log(unos);
//   unos = prompt("Unesi nesto opet");
// }

// console.log("KRAJ");

// ocena = parseInt(prompt("Unesi ocenu 1-5"));
// zbir = 0;
// kolicina = 0;

// while (ocena >= 1 && ocena <= 5) {
//   zbir += ocena;
//   kolicina++;
//   ocena = parseInt(prompt("Unesi ocenu 1-5"));
// }

// console.log("Sredina je: ", zbir / kolicina);

// broj = Math.round(Math.random() * 10);
// unos = parseInt(prompt("Unesi broj"));

// while (unos !== broj) {
//   if (unos > broj) {
//     unos = parseInt(prompt("Broj je too high try again"));
//   } else {
//     unos = parseInt(prompt("Broj je too small try again"));
//   }
// }

// console.log("Pogodiliste broj");

//Domaci:Napraviti kalkulator koji ce sve dok korisnik ne unese STOP pitati za operaciju +,-,*,/ i nakon odabira
//pitati za dva broja na koje ce se primeniti operacija i ispisati rezultat i sve se ponoviti

// operator = prompt("Unesi operaciju");

// while (operator !== "STOP") {
//   prviBroj = parseInt(prompt("Unesite prvi broj"));
//   drugiBroj = parseInt(prompt("Unesite drugi broj"));
//   if (operator === "+") {
//     console.log(prviBroj + drugiBroj);
//   } else if (operator === "-") {
//     console.log(prviBroj - drugiBroj);
//   } else if (operator === "*") {
//     console.log(prviBroj * drugiBroj);
//   } else if (operator === "/") {
//     console.log(prviBroj / drugiBroj);
//   }
//   operator = prompt("Unesi operaciju");
// }

//-----------------------------------------------

// tezina = prompt("Unesite vasu tezinu");
// visina = prompt("Unesite vasu visinu");

// bmi = tezina / visina ** 2;

// if (bmi < 18.5) {
//   console.log("Underweight");
// } else if (bmi < 25) {
//   console.log("Normal");
// } else if (bmi < 30) {
//   console.log("Overweaight");
// } else if (bmi > 30) {
//   console.log("Obese");
// }

//-----------------------------------------------

// n = parseInt(prompt("Unesi krajnji broj"));
// brojac = 1;

// while (brojac <= n) {
//   if (brojac % 2 !== 0) {
//     console.log(brojac);
//   }
//   brojac++;
// }

//-----------------------------------------------

// unos = prompt("Unesite nesto");

// while (unos !== "STOP") {
//   if (unos == 0) {
//     console.log("ZERO");
//   } else if (unos > 0) {
//     console.log("POSITIVE");
//   } else if (unos < 0) {
//     console.log("NEGATIVE");
//   }
//   unos = prompt("Unesite nesto opet");
// }
//---------------------------------
// pocetna = prompt("Unesi pocetnu vrednost");
// krajnju = prompt("Unesi krajnju vrednost");

// for (i = pocetna; i <= krajnju; i++) {
//   if (i % 4 === 0) {
//     console.log(i);
//   }
// }
//--------------------------------------------

// broj = parseInt(prompt("Unesi broj"));
// brojac = 1;
// factorial = 1;

// while (brojac <= broj) {
//   factorial *= brojac;
//   brojac++;
// }
// console.log(factorial);

//--------------------------------------------

// unos = prompt("Unesite rec");
// newString = unos.slice(1) + unos[0];
// console.log(newString);
//===============================================
// unos = prompt("Unesite string")
// novi=""
// for(i = 0;i<unos.length-1;i++){
//     if(i===0){
//         novi+=unos[0].toUpperCase()
//     }
//     if(unos[i]===" "){
//         novi+=unos[i+1].toUpperCase()
//     }else{
//         novi+=unos[i+1]
//     }
// }

// console.log(novi);
//===============================================

// unos = parseInt(prompt("Unesi minute"))

// sati = Math.floor(unos/60)

// minute = unos % 60

// console.log("Sati:",sati);
// console.log("Minute:",minute);

//===============================================

// ar = [7,"Hello world",true]

// console.log(ar);

// ar[1] = "ads"
// console.log(ar);

//===============================================

// arr = [];
// kolicina = parseInt(prompt("Unesi kolicinu"));

// for (i = 0; i < kolicina; i++) {
//   el = prompt("Unesite element");
//   arr[i] = el;
// }
// console.log(arr);
//=====================================
// arr = [];
// kolicina = parseInt(prompt("Unesi kolicinu"));

// for (i = 0; i < kolicina; i++) {
//   el = prompt("Unesite element");
//   arr[i] = el;
// }
// console.log(arr);

// for (i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }
//=====================================

// arr = [];
// kolicina = parseInt(prompt("Unesi kolicinu"));

// for (i = 0; i < kolicina; i++) {
//   el = parseInt(prompt("Unesite element"));
//   arr[i] = el;
// }

// sum = 0;
// for (i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);
//=====================================

// arr = [2, 12, 1, 7, 19, 74, 23, 4, 3];
// max = arr[0];

// for (i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

//============================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);

// newLength = fruits.push("NEW");

// console.log(fruits);
// console.log("newLength", newLength);

//============================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);
// returnValue = fruits.pop();
// console.log(fruits);

// console.log("RETURN=VALUE:", returnValue);

//============================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// strinfOfFruits = fruits.join("+");

// console.log(fruits);
// console.log(strinfOfFruits);

//============================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);
// a = fruits.shift();
// console.log(fruits);
// console.log(a);

//===================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);
// a = fruits.unshift("NOVI");
// console.log(fruits);
// console.log(a);

//===================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// nesto = [true, 2, "ccc", "asdsa"];

// noviAr = fruits.concat(nesto, [2, "Novi", "Treci"]);

// console.log(noviAr);

//===================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];
// deletedItems = fruits.splice(1, 2, "NOVIIII", "Nesto");

// console.log(fruits);
// console.log(deletedItems);

//===================================================

// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// a = fruits.slice(1, 4);
// console.log(fruits);
// console.log(a);

//===================================================

// food1 = ["Noodle", "Pasta", "Ice-cream"];
// food2 = ["Fries", "Ice-cream", "Pizza"];

// sameFood = [];

// for (i = 0; i < food1.length; i++) {
//   for (j = 0; j < food2.length; j++) {
//     if (food1[i] === food2[j]) {
//       sameFood.push(food1[i]);
//     }
//   }
// }

// console.log(sameFood);

//===================================================

// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// for (fruit of fruits) {
//   console.log(fruit);
// }

//===================================================

// data = [0, 1, false, 2, undefined, 3, "", null];
// newData = [];
// for (i = 0; i < data.length; i++) {
//   if (data[i]) {
//     newData.push(data[i]);
//   }
// }

// console.log(data);
// console.log(newData);

// data = [1, 2, 3, 1, 2];

// newData = [];

// for (el of data) {
//   if (el !== 2 && el !== 1) {
//     newData.push(el);
//   }
// }

// console.log(newData);
//==============================================================
// kolicina = parseInt(prompt("Koliko zelite elemenate"));
// elements = [];
// for (i = 0; i < kolicina; i++) {
//   el = prompt("Unesi element");
//   elements.push(el);
// }
// console.log(elements);

// odabir = prompt("da li je ok?");

// while (odabir !== "0") {
//   promena = prompt("Unesite 1 da dodate element ili 2 da maknete element!");
//   inx = parseInt(prompt("Unesite index"));
//   if (promena === "1") {
//     noviEl = prompt("Unesite element");
//     elements.splice(inx, 0, noviEl);
//   } else if (promena === "2") {
//     elements.splice(inx, 1);
//   }
//   console.log(elements);
//   odabir = prompt("da li je ok?");
// }
//==============================================================

// data = [3, 21, 32, 36, 37, 56, 8, 12, 16, 18, 20, 68, 69];

// unos = parseInt(prompt(`Unesite trazeni broj: ${data}`));

// for (i = 0; i < data.length; i++) {
//   if (data[i] === unos) {
//     console.log("Vas broj", unos, "je na indeksu: ", i);
//     break;
//   }
// }
//==============================================================

// arr1 = [3, 21, 32, 36, 37, 56];
// arr2 = [3, 21, 31, 36, 37, 56, 2];
// tacnost = true;

// if (arr1.length !== arr2.length) {
//   console.log("Nisu isti");
//   tacnost = false;
// } else if (tacnost) {
//   for (i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       tacnost = false;
//       break;
//     }
//   }

//   if (tacnost) {
//     console.log("Isti su");
//   } else {
//     console.log("Nisu");
//   }
// }

//==============================================================

// a = 5;
// b = 5;

// console.log(a === b);

// a = [1, 2, 3];
// b = [1, 2, 3];

// console.log(a === b);

// a = [1, 2, 3];

// b = a;

// a.pop();

// console.log(b);

// a = 5;
// b = a;
// a = 4;
// console.log(b);

// a = [3, 6, 23, 9, 44, 14, 83, 22, 5, 1];
// sum = 0;
// for (i = 0; i < a.length; i++) {
//   sum += a[i];
// }
// console.log(sum / a.length);a = [3, 6, 23, 9, 44, 14, 83, 22, 5, 1];
// sum = 0;
// for (i = 0; i < a.length; i++) {
//   sum += a[i];
// }
// console.log(sum / a.length);

//==============================================

// arr = [3, 6, 0, 23, 0, 9, 44, 14, 0, 83, 22, 5, 0, 1];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     arr.splice(i, 1);
//     arr.push(0);
//   }
// }

// console.log(arr);

//==============================================

// arr = [3, 6, 23, 9, 44, 14, 0, 83, 22, 5];

// min = arr[0];
// max = arr[0];

// for (el of arr) {
//   if (el > max) {
//     max = el;
//   } else if (min > el) {
//     min = el;
//   }
// }

// console.log("Razlika je: ", max - min);

//==============================================

// arr = [3, 6, 23, 9, 44, 14, 0, 83, 22, 5];

// sadrzi = false;

// for (el of arr) {
//   if (el === 67 || el === 87) {
//     sadrzi = true;
//   }
// }

// console.log(sadrzi);

//==============================================

// arr = [3, 6, 23, 9, 44, 14, -254, 0, 83, 22, 5];

// max = arr[0];

// for (el of arr) {
//   if (Math.abs(el) > Math.abs(max)) {
//     max = el;
//   }
// }

// console.log(max);

//==============================================

// arr = [3, 6, 23, 9, 44, 14, -254, 0, 83, 22, 5];
// min1 = arr[0];
// min2 = arr[0];

// for (el of arr) {
//   if (el < min1) {
//     min1 = el;
//   } else if (el < min2 && el > min1) {
//     min2 = el;
//   }
// }

// console.log("Najmanji je", min1);
// console.log("drugi manji je", min2);

//==============================================

// function find(niz) {
//   min1 = niz[0];
//   min2 = niz[0];

//   for (el of niz) {
//     if (min1 > el) {
//       min1 = el;
//     } else if (min2 > el && min1 < el) {
//       min2 = el;
//     }
//   }
//   console.log("Najmanji je: ", min1);
//   console.log("Drugi Najmanji je: ", min2);
// }

// find([3, 5, 1, 9, 4, 2]);

//=================================================

// function find(niz) {
//   max = niz[0];
//   for (el of niz) {
//     if (Math.abs(max) <= Math.abs(el)) {
//       max = el;
//     }
//   }
//   console.log("Broj sa najvise cifara je : ", max);
// }

// find([3, 23, 843, 41, -1233, 1233]);

//========================================

// data = [3, 0, 24, 54, 0, 123, 0, 32, 63];

// function sort(niz) {
//   for (i = 0; i < niz.length; i++) {
//     if (niz[i] === 0) {
//       niz.splice(i, 1);
//       niz.push(0);
//     }
//   }
//   console.log(niz);
// }

// sort(data);

//===================================
// data = [3, 24, 54, 123, 32, 63];

// function calculateAverage(niz) {
//   sum = 0;
//   for (el of niz) {
//     sum += el;
//   }
//   console.log("Average is: ", Math.ceil(sum / niz.length));
// }

// calculateAverage(data);

// //Domaci:
// data = [3,0, 24,1, 54,0, 123,1, 32, 63];
//jedinice pomeriti na pocetak a nule na kraj

// data = [[1, 2, 3], 2];

// console.log(data[0][2]);

// function sortZeroToEnd() {
//   arr = [3, 6, 0, 23, 0, 9, 44, 14, 0, 83, 22, 5, 0, 1];

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//       arr.push(0);
//     }
//   }

//   console.log(arr);
// }

// sortZeroToEnd();

// sortZeroToEnd();

// sortZeroToEnd();

//==========================================

// function sayHello(ime) {
//   console.log("HELLO", ime);
// }

// sayHello("Hika");

//==========================================

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(3, 5);

// function mojaF() {
//   console.log("a");
// }

// b = function () {
//   console.log("b");
// };

// b();

// c = () => {
//   console.log("c");
// };

//=====================================================

// const a = 5;
// console.log(a);
// a = 7;
// console.log(a);

//=====================================================
// for (index = 0; index < 7; index++) {
//   const a = 5;
//   a += 1;
//   console.log(a);
// }
//============================================
"use strict";

// function mojaF() {
//   let funA = 7;
//   for (let i = 0; i < 5; i++) {
//     let forA = 5;
//     console.log(forA);
//     console.log(funA);
//   }
// }

// mojaF();

//============================================

// const arr = [1, 2, 3];

// console.log(arr);

// arr[3] = "Hello World";

// console.log(arr);

//============================================

// const car = {
//   name: "Audi",
//   color: "red",
//   price: 5043,
// };

// const person = {
//   name: "Vahid",
//   lastname: "Gasnanin",
//   age: 99,
//   gender: "male",
//   friends: ["Medzid"],
//   run: () => {
//     console.log("Vahid trci");
//   },
// };

// person.run();

// console.log([1, 2, 3].join("-"));

// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// for (let i = 0; i < library.length; i++) {
//   console.log(library[i].author, library[i].readingStatus);
// }

// function creatingUser() {
//   const ime = prompt("Unesite Ime");
//   const prezime = prompt("Unesite prezime");
//   const godina = parseInt(prompt("Unesite Godina"));
//   const visina = parseInt(prompt("Unesite Visinu"));

//   const user = {
//     ime: ime,
//     prezime: prezime,
//     godina: godina,
//     visina: visina,
//   };
//   return user;
// }

// console.log(creatingUser());

// const car = {
//   name: "Audi",
//   model: "A7",
// };

// const keys = Object.keys(car);

// for (let key of keys) {
//   console.log(car[key]);
// }

// const cars = [];

// function createCar(name, mark, outsideColor, insideColor) {
//   return {
//     name: name,
//     mark: mark,
//     outsideColor: outsideColor,
//     insideColor: insideColor,
//   };
// }

// for (let i = 0; i < 5; i++) {
//   cars.push(createCar(i, "vw", "red", "black"));
// }

// console.log(cars);

// const student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// const keysOfStudent = Object.keys(student);

// console.log(keysOfStudent.length);

// const students = [
//   {
//     name: "Aldin",
//     height: 187,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Vahid",
//     height: 187,
//     gender: "male",
//     age: 19,
//   },
//   {
//     name: "Medzid",
//     height: 187,
//     gender: "male",
//     age: 5,
//   },
//   {
//     name: "Almir",
//     height: 187,
//     gender: "male",
//     age: 29,
//   },
//   {
//     name: "Damir",
//     height: 187,
//     gender: "male",
//     age: 6,
//   },
// ];

// function filterByAge(arr) {
//   const noviArr = [];
//   for (let el of arr) {
//     if (el.age > 18) {
//       noviArr.push(el);
//     }
//   }
//   return noviArr;
// }

// newArrByage = filterByAge(students);
// console.log(newArrByage);

// osigh98fqiejoi
// const o1 = {
//   name: "Damir",
//   height: 187,
//   gender: "male",
//   age: 6,
//   // 982ffijosdfj
//   location: {
//     city: "NP",
//     postcode: 36300,
//   },
// };

// // osigh98fqiejoi = osigh98fqiejoi
// const o2 = { ...o1, location: { ...o1.location } };

// console.log(o1);
// console.log(o2);
// console.log("==============================");

// o2.name = "dzemil";
// o1.age = 200;
// o2.location.postcode = 99999;

// console.log(o1);
// console.log(o2);

// const a = [1, 2, 3];

// const b = [...a];

// b[0] = 7;
// console.log(a);

// console.log(b);

// const data = { a: 1, b: 2 };

// const keys = Object.keys(data);
// const arr = [];
// for (let el of keys) {
//   arr.push([el, data[el]]);
// }

// console.log(arr);

// function myDisplayer(arg) {
//   console.log("====================");
//   console.log(arg);
//   console.log("====================");
//   return 3;
// }

// function myCalculator(num1, num2, b) {
//   let sum = num1 + num2;

//   console.log("for");
//   console.log("if");
//   console.log("for");
//   console.log("Pozivamo callback");
//   b(sum);
//   console.log("Callback se izvrsio");
// }

// myCalculator(5, 3);

// const arr = ["Helloasdsad", "World", "Todayasdasdas", "Centar", "NIT"];

// const a = (el) => {
//   if (el.length > 6) {
//     console.log(el);
//   }
// };

// for (let i = 0; i < arr.length; i++) {
//   a(arr[i], i);
// }

// function a() {
//   console.log("L");
// }

// function forB(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback();
//   }
// }

// arr.forEach(a);

// forB(arr, a);

// const numbers = [45, 4, 9, 16, 25];

// numbers.forEach((el) => {
//   console.log(el ** 2);
// });

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];

// numbers.forEach((el) => {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];
// const evenNumbers = [];

// numbers.forEach((el) => {
//   if (el > 20) {
//     evenNumbers.push(el);
//   }
// });

// let str = "the quick brown fox";

// let nStr = "";
// str = str.split("");
// str.forEach((el, i) => {
//   if (i % 2 === 0) {
//     nStr += el.toLowerCase();
//   } else {
//     nStr += el.toUpperCase();
//   }
// });

// console.log(nStr);

// const data = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// let brojac = 0;
// data.forEach((el) => {
//   if (!Boolean(el)) {
//     brojac++;
//   }
// });
// console.log(brojac);

// const a = [1, 2, 3, 4];

// const b = a.map((el, i) => {
//   return el + i;
// });

// console.log(b);

// const numbers = [45, 4, 25, 13, 38, 29];

// const quad = numbers.map((number) => {
//   return number ** 2;
// });

// console.log(quad);

// const numbers = [45, 4, 25, 13, 38, 29];

// const quad = numbers.map((number) => {
//   return number * 2;
// });
// console.log(quad);

// function stringItUp(arr) {
//   return arr.map((el) => {
//     return el.toString();
//   });
// }

// console.log(stringItUp([2, 5, 100]));

// function capitalizeNames(arr) {
//   return arr.map((el) => {
//     el = el.toLowerCase();
//     el = el[0].toUpperCase() + el.slice(1);
//     return el;
//   });
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// function namesOnly(arr) {
//   return arr.map((el) => {
//     return el.name;
//   });
// }

// console.log(
//   namesOnly([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// function shortText(str) {
//   str = str.split(" ");
//   const newArr = str.map((el) => {
//     return el[0];
//   });
//   return newArr.join(".");
// }

// console.log(shortText("George Raymond Richard Martin"));

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];

// const filtered = numbers.filter((el) => {
//   return el > 30;
// });

// console.log(filtered);

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];
// const even = numbers.filter((number) => number % 2 === 0);

// console.log(even);

// function fiveAndGreaterOnly(arr) {
//   return arr.filter((el) => el >= 5);
// }
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// function fiveCharactersOrFewerOnly(arr) {
//   return arr.filter((el) => el.length <= 5);
// }

// console.log(
//   fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
// ); // ["by", "dog", "wolf", "eaten"]

// function peopleWhoBelongToTheIlluminati(arr) {
//   return arr.filter((el) => el.member);
// }
// // test
// console.log(
//   peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true },
//   ])
// );

// const data = ["dog", "wolf", "by", "family", "eaten", "camping"];

// const evenIndex = data.filter((el, i) => i % 2 === 0);
// console.log(evenIndex);

// const numbers = [45, 4, 9, 16, 25];

// const isAllHigh = numbers.every((value) => {
//   return value > 1;
// });

// console.log(isAllHigh);

// const numbers = [46, 4, 6, 16, 26];

// const isAllEven = numbers.every((number) => number % 2 === 0);
// console.log(isAllEven);

// const peoples = [
//   { name: "Angelina Jolie", member: true },
//   { name: "Eric Jones", member: false },
//   { name: "Paris Hilton", member: true },
//   { name: "Kayne West", member: false },
//   { name: "Bob Ziroll", member: true },
// ];

// const isAllMembers = peoples.every((people) => people.member);
// console.log(isAllMembers);

// const numbers = [45, 4, 9, 16, 25];

// const isAnyHigh = numbers.some((number) => {
//   return number > 18;
// });

// console.log(isAnyHigh);

// function mojaF() {
//   console.log("Hello");
// }

// mojaF();

// const a = [1, 2, 3];

// const b = a.map(() => {});

// console.log(b);

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];

// const b = numbers.filter((el) => {
//   return el > 15;
// });

// console.log(b);

// const numbers = [45, 4, 9, 45, 16, 25, 13, 38, 60, 61, 52, 29];

// const a = numbers.find((el) => {
//   return el % 2 === 0;
// });

// console.log(a);

// const numbers = [45, 4, 9, 45, 16, 25, 13, 38, 60, 61, 52, 29];

// const b = numbers.includes(9);

// console.log(b);

// const a = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5];
// const a2 = [];

// a.forEach((e) => {
//   if (e >= 5) {
//     a2.push(e);
//   }
// });

// console.log(a2);

// function shifter(s) {
//   const shiftChar = ["H", "I", "N", "O", "S", "X", "Z", "M", "W"];
//   const arr = [...new Set(s.split(" "))]; // [who, is]
//   let counter = 0;
//   arr.forEach((word) => {
//     const isShift = word.split("").every((l) => {
//       return shiftChar.includes(l);
//     });

//     if (isShift) {
//       counter += 1;
//     }
//   });
//   return counter;
// }

// console.log(shifter("WHO IS WHO"));
// console.log(shifter("JS"));
// console.log(shifter("I III I III"));

// function consecutiveOnes(nums) {
//   let counter = 0;
//   let maxIter = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       counter += 1;
//     } else if (nums[i] === 0) {
//       if (maxIter < counter) {
//         maxIter = counter;
//       }
//       counter = 0;
//     }
//   }
//   console.log(maxIter);
//   return maxIter;
// }

// consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]);

// function consecutiveOnes(nums) {
//   const strNums = nums.join("");
//   let strZero = strNums.split("0");
//   let maxLen = 0;
//   strZero.forEach((el) => {
//     if (el.length > maxLen) {
//       maxLen = el.length;
//     }
//   });
//   return maxLen;
// }

// console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]));

console.log(3 === 3 ? 1 : 2);
