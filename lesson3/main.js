"use strict";

/*
    1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

let number = 1;
let arrayNumber = [];
while(number <= 100) {
    let check = true;
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            check = false;
            break;
        }
    }
    if(check) {
        arrayNumber.push(number);
    }
    number++;
}

alert("Простое числа от 0 до 100: "+arrayNumber);

function randomF(min,max) { 
    return Math.floor(min + Math.random() * (max + 1 - min));
}

/*
    2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
        a) Организовать такой массив для хранения товаров в корзине;
        b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

let arrayCart = [120, 300, 60];

function countBasketPrice(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let sum = countBasketPrice(arrayCart);

alert("При следующей карзине: "+arrayCart+"\nСтоимость карзины равна "+sum);

/*
    3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
        for(…){// здесь пусто}
*/

for (let index = 0; index <= 9; console.log(index++)) { }

// let index = 0;
// for (; index <= 9; console.log(index++)) { }

/*
    4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
        x
        xx
        xxx
        xxxx
        xxxxx
*/

let str = "x";

for (let i = 0; i < 20; i++) {
    console.log(str);
    str += "x";
}