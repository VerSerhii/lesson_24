"use strict"

//Урок ПЕРШИЙ

//Завдання 1
// function showName (){
//     console.log('Вася!');
// }
// setTimeout(showName, 0);
// console.log('Коля!');

//Завдання 2
// showMessage();
// function showMessage() {
//     console.log('Повідомлення!');
// }

//Завдання 3
// showMessage();
// let showMessage = function () {
//     console.log('Повідомлення!');
// }

//Завдання 4
// let showMessage;
// if (2 > 1) {
//     showMessage = function () {
//     console.log('Повідомлення!');
//     }
// };
// showMessage();

//Урок ДРУГИЙ

//Завдання 1
// let arr = ["Іван", "Іштван", "Оля",];
// let newArr = arr;
// newArr.push = ("Петро");
// console.log(arr.length); 


//Завдання 2
// let arr = ['Іван', 'Іштван'];
// arr.push('Оля');
// console.log(arr);
// arr.splice(1, 1, 'Петро');
// console.log(arr);
// arr.splice(0, 1);
// let removed = arr.splice(0, 1);
// console.log(removed);
// arr.splice(0, 0, 'Марічка', 'Павло');
// console.log(arr);

//Завдання 3
// let arr = ['Іван', 'Іштван', 'Оля',];
// let removed = arr.splice(1, 1);
// console.log(arr);
// console.log(removed);

//Завдання 4
// let str = 'Іван,Іштван,Оля';
// let arr = str.split(',');
// console.log(arr);

//Завдання 5
// let arr = [9, 2, 8];
// let reduceValue = arr.reduce(function (previousValue, item, index, array) {
//     console.log(previousValue);
// })


//Урок ТРЕТІЙ

// Завдання №1
// const attData = document.querySelectorAll('[data-say-hi');
// console.log(attData);

// Завдання №2
// const list = document.querySelectorAll('.list__item');
// const item = list[1];
// console.log(list);
// console.log(item);


// Завдання №3
// const itemsBlock = document.querySelectorAll('.like__block');
// const likeItems = itemsBlock[0].querySelectorAll('.like');
// console.log(likeItems);


//Урок ЧЕТВЕРТИЙ

// Завдання №1
// let div = document.createElement('div');
// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';

// document.body.append(div);
// let scrollWidth = div.offsetWidth - div.clientWidth;
// div.remove();
// console.log(scrollWidth);

// Завдання №2
// function setScrollBy() {
//     window.scrollBy(0, 100);
//     const windowScrollTop = window.pageYOffset;
// }
// setTimeout(setScrollBy, 1000);

// Завдання №3
// const itemOne = document.querySelector('.page__title');
// const getItemCoordsOne = itemOne.getBoundingClientRect();
// console.log(getItemCoordsOne);

// const itemTwo = document.querySelector('.page__heading--dom');
// const getItemCoordsTwo = itemTwo.getBoundingClientRect();
// console.log(getItemCoordsTwo);

// const itemThree = document.querySelector('.page__heading--coords');
// const getItemCoordsThree = itemThree.getBoundingClientRect();
// console.log(getItemCoordsThree);
