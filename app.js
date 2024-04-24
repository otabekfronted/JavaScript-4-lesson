"use strict";

// for1

// let k = +prompt("Birinchi sonni kiriting");
// let n = +prompt("Ikkinchi sonni kiriting");
// if (n > 0) {
//     for (let i = 1; i <= n; i++) {
//         console.log(k);
//     }
// } else {
//     console.log("Siz noldan kichik son kiritingiz");
// }

// for2

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let i = a;
// let sum = 0;
// if (a < b) {
//     for (a; a <= b; a++) {
//         sum++;
//         console.log(a);
//     }
//     console.log(`Oraliqdagi raqamalr soni ${sum}ta`);
// } else {
//     console.log("Siz shartga mos raqam kiritmadingiz");
// }

// for3
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let i = b;
// let sum = 0;
// if (a < b) {
//     for (b; b > a + 1; b--) {
//         sum++;
//         console.log(b - 1);
//     }
//     console.log(`Oraliqdagi raqamalar soni ${sum}ta`);
// } else {
//     console.log("Siz shartga mos raqam kiritmadingiz");
// }

// for4

// let weight = +prompt("Konfetning kilosini kiriting");
// let cost = +prompt("Konfetning narxini kiriting");

// if (weight > 0 && weight <= 10) {
//     for (let i = 1; i <= weight; i++) {
//         console.log(`${i} kg konfetning narxi ${i * cost} ming so'm`);
//     }
// } else {
//     console.log("Siz belgilangan kg lardan ko'p yoki oz miqdorda oldingiz");
// }

// for5

// let weight = +prompt("Konfetning kilosini kiriting");
// let cost = +prompt("Konfetning narxini kiriting");

// if (weight > 0 && weight <= 10) {
//     for (let i = 1; i <= weight; i++) {
//         console.log(
//             `${i / 10} kg konfetning narxi ${(i / 10) * cost} ming so'm`
//         );
//     }
// } else {
//     console.log("Siz belgilangan kg lardan ko'p yoki oz miqdorda oldingiz");
// }

// for6
// let weight = +prompt("Konfetning kilosini kiriting");
// let cost = +prompt("Konfetning narxini kiriting");

// if (weight >= 10 && weight <= 20) {
//     for (let i = 10; i <= weight; i++) {
//         console.log(
//             `${i / 10} kg konfetning narxi ${(i / 10) * cost} ming so'm`
//         );
//     }
// } else {
//     console.log("Siz belgilangan kg lardan ko'p yoki oz miqdorda oldingiz");
// }

// for7

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let sum = 0;

// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }

// for8

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let sum = 1;

// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         sum *= i;
//     }
//     console.log(sum);
// }

// for9
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let sum = 0;

// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         sum += i * i;
//     }
//     console.log(sum);
// }

// for10

// let n = +prompt("Son kiriting   ");
// let sum = 0;

// if (n > 0) {
//     for (let i = 1; i <= n; i++) {
//         sum += 1 / i;
//         console.log(i);
//     }
//     console.log(Math.floor(sum)); //Chiqan javobni yaxlitlab qo'ydim
// } else {
//     console.log("Noldan kichkina son kiritingiz");
// }

// for11
// let n = +prompt(" son kiriting");
// let sum = 0;
// for (let i = n; i <= n * 2; i++) {
//     sum += i * i;
//     console.log(i * i);
// }
// console.log(`yig'indi: ${sum}`);

// for12
// let n = +prompt("Son kiriting");
// let sum = 1;

// if (n > 0) {
//     for (let i = 1; i <= n; i++) {
//         sum *= i / 10 + 1;
//     }
//     console.log(`Ko'paytma  ${sum}`);
// } else {
//     console.log("Noldan kichik son kiritingiz");
// }
