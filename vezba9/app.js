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
