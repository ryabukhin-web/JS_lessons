"use strict";

/*
    3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

let a = randomF(-100, 100);
let b = randomF(-100, 100);

if(a >= 0 && b >= 0) {
    alert("a = " + a + ", b = " + b + " | a - b = " + (a-b));
} else if(a < 0 && b < 0) {
    alert("a = " + a + ", b = " + b + " | a * b = " + (a*b));
} else  {
    alert("a = " + a + ", b = " + b + " | a + b = " + (a+b));
}

/*
    4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/

a = randomF(0, 15);
let arrayNumber = [];

switch (a) {
    case 1: arrayNumber.push(1);
    case 2: arrayNumber.push(2);
    case 3: arrayNumber.push(3);
    case 4: arrayNumber.push(4);
    case 5: arrayNumber.push(5);
    case 6: arrayNumber.push(6);
    case 7: arrayNumber.push(7);
    case 8: arrayNumber.push(8);
    case 9: arrayNumber.push(9);
    case 10: arrayNumber.push(10);
    case 11: arrayNumber.push(11);
    case 12: arrayNumber.push(12);
    case 13: arrayNumber.push(13);
    case 14: arrayNumber.push(14);
    case 15: arrayNumber.push(15);
    default: alert("a = " + a + " | Числа от a до 15: " + arrayNumber);
    break;
}

/*
    5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/

function sum(a,b) { 
    return a + b;
}

function difference(a,b) { 
    return a - b;
}

function multiplication(a,b) { 
    return a * b;
}

function division(a,b) { 
    return a / b;
}
        
/*
    6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/

a = +prompt("Введите первое чило:",0);
b = +prompt("Введите второе чило:",0);
let c = prompt("Какое действие вы хотете сделать? (Сложение | Вычитание | Умножение | Деление)","Сложение");

mathOperation(a, b, c);

function mathOperation(arg1, arg2, operation) {
    let rez;
    switch (operation) {
        case "Сложение":
rez = sum(arg1,arg2);
alert(operation+""+arg1+" и "+arg2+" равно "+rez);
break;
        case "Вычитание":
rez = difference(arg1,arg2);
alert(operation+""+arg1+" и "+arg2+" равно "+rez);
break;
        case "Умножение":
rez = multiplication(arg1,arg2);
alert(operation+""+arg1+" и "+arg2+" равно "+rez);
break;
        case "Деление":
rez = division(arg1,arg2);
alert(operation+""+arg1+" и "+arg2+" равно "+rez);
break;
        default: alert("Такого действия нет.")
break;
    }
}

/*
    8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

let val = +prompt("Введите чило:",0);
let pow = +prompt("Введите степень:",0);
let rez = power(val, pow);
alert( rez );

function power(val, pow) {
    if(pow == 0) {
        return 1; 
    } else if(val == 0) {
        return 0;
    } else if(pow == 1) {
        return val;
    } else {
        return val * power(val, pow-1);;
    }
}

function randomF(min,max) { 
    return Math.floor(min + Math.random() * (max + 1 - min));
}