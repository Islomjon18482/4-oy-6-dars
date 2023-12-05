// 1-masala

// let  n = prompt("Ixtiyoriy son kiriting")
// let i = 1; 
// let sum = 0;
// while(i <= n){
//     if(i%2==0){
//         sum += i;
//     }
//     i++
// }
// alert(sum)

// 2-masala

// let  n = prompt("Ixtiyoriy son kiriting")
// let i = 1;
// let sum = 1;
// while(i <= n){
//     if(i%3==0){
//         sum *= i;
//     }
//     i++
// }
// alert(sum)

// 3-masala

// let a = +prompt("A sonini kiriting")
// let b = +prompt("B sonini kiriting")
// let i = a;
// let counter = 0;
// while(i<=b){
//     if(i%3==0 && i%7==0){
//         counter++
//     }
//     i++
// }
// alert(counter)

// 4-masala

// let n = +prompt("Ixtiyoriy son kiriting")
// let i = 1;
// let counter = 0;
// let res;
// while(i <= n){
//     if(n % i == 0){
//         counter++
//     }
//     i++
// }
// if(counter == 2){
//     res = "Bu son tub son"
// }else{
//     res = "Bu son tub son emas"
// }
// alert(res)

// 5-masala

// let n = +prompt("Ixtiyoriy sonni kiriting")
// let i = 1;
// let res = 0;
// let box = 0;
// while(i<=n){
//     box = Math.trunc(n / i)%10
//     res += box 
//     i *= 10
// }
// alert(res)

// 6-masala

let n = +prompt("Ixtiyoriy 3xonali son kiriting")
let b = n % 10
let o = Math.trunc(n / 10) % 10
let y = Math.trunc(n / 100) % 10
let str = ""
switch (y) {
    case 1:
        str = "bir yuz "
        break;
    case 2:
        str = "ikki yuz "
        break;
    case 3:
        str = "uch yuz "
        break;
    case 4:
        str = "to'rt yuz "
        break;
    case 5:
        str = "besh yuz "
        break;
    case 6:
        str = "olti yuz "
        break;
    case 7:
        str = "yetti yuz "
        break;
    case 8:
        str = "sakkiz yuz "
        break;
    case 9:
        str = "to'qqiz yuz "
        break;

    default:
        str = ""
        break;
}
switch (o) {
    case 1:
        str += "o'n "
        break;
    case 2:
        str += "yigirma "
        break;
    case 3:
        str += "o'ttiz "
        break;
    case 4:
        str += "qirq "
        break;
    case 5:
        str += "ellik "
        break;
    case 6:
        str += "oltmish "
        break;
    case 7:
        str += "yetmish "
        break;
    case 8:
        str += "sakson "
        break;
    case 9:
        str += "to'qson "
        break;
    default:
        str += ""
        break;
}
switch (b) {
    case 1:
        srt += "bir"
        break;
    case 2:
        str += "ikki"
        break;
    case 3:
        str += "uch"
        break;
    case 4:
        str += "to'rt"
        break;
    case 5:
        str += "besh"
        break;
    case 6:
        str += "olti"
        break;
    case 7:
        str += "yetti"
        break;
    case 8:
        str += "sakkiz"
        break;
    case 9:
        str += "to'qqiz"
        break;
    default:
        str += ""
        break;
}
alert(str)

// 7-masala

// let a = +prompt("Ixtiyoriy son kiriting")
// let b = +prompt("Ixtioriy son kiriting")
// let z = prompt("Ixtiyoriy matematik operatorni kiriting")
// let result;
// switch (z) {
//     case "+":
//         result = a+b
//         break;
//     case "-":
//         result = a-b
//         break;
//     case "*":
//         result = a*b
//         break;
//     case "/":
//         result = a/b
//         break;
//     default:
//         result = 0
//         break;
// }
// alert(result)