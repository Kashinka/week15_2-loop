// Задание 1. Необходимо, чтоб программа выводила в консоли вот такую последовательность чисел:

// 7 14 21 28 35 42 49 56 63 70 77 84 91 98


// function printNumbers(){
//     let i = 7;
//     while (i<99) {
//     console.log(i);
//     i += 7;
//     }
//     }

// printNumbers();

// Задание 2. В следующей функции есть цикл for, который считает количество выбранных жанров в списке прокрутки (элемент <select> позволяет выбрать несколько элементов). Цикл for объявляет переменную i и задаёт ей значение 0. Также он проверяет, что i меньше количества элементов в элементе <select>, выполняет оператор if и увеличивает i на один после каждого прохода цикла. Напиши, каким должен быть цикл.

// function howMany(select) {
//     let numberSelected = 0;
//     for (let i = 0; i < select.options.length; i++) {
//     if (select.options[i].selected) {
//         numberSelected++;
//     }
//     }
//     return numberSelected;
//     }

//     let btn = document.getElementById("btn");
//     const total = document.querySelector('.total');
//     btn.addEventListener("click", function(){
//     total.innerHTML= 'Выбрано элементов: ' + howMany(document.selectForm.musicTypes);
// });

// Задание 3. Напишите цикл for, который будет обходить массив userNames и для каждого имени преобразовывать его к нижнему регистру с помощью метода toLowerCase(). Затем замените значение элемента в массиве на изменённую версию имени.

// const userNames = ['John', 'Jane', 'Alex', 'Mike'];

// for (let i = 0; i < userNames.length; i++) {
//     userNames.forEach((s, i, arr) => arr[i] = s.toLowerCase());//Преобразуйте имена к нижнему регистру
//   //Замените значения элемента в массиве
// }

// console.log(userNames);

// Задание 4. Напишите цикл для вывода каждого имени из массива userNames на отдельной строке, используя цикл for...of

// const userNames = ['John', 'Alice', 'Bob'];

// for (let userName of userNames) {
//     console.log(userName);
// }


// Вывод:
// 'John'
// 'Alice'
// 'Bob'

// Задание 5. Выведите в консоль каждую букву строки

// let str = 'cold';

// for (symbol of str) {
//   console.log(symbol);
// }
// "c" "o" "l" "d"

// Задание 6. Напишите программу, которая найдёт ближайший високосный год, начиная с 2019 и до 2099. Високосный год является годом, который кратен 4, но не кратен 100, за исключением годов, кратных 400. Используйте цикл for для перебора годов с начального значения 2019 до конечного значения. Внутри цикла проверьте условие: если год кратен 4 и не кратен 100, то это високосный год. Выведите сообщение вида "Ближайший високосный год: " с найденным годом и прервите выполнение цикла с помощью инструкции break.

// function isLeapYear(year) {
//     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
// }

// for (let i = 2019; i <= 2099; i ++) {
    
//     if (isLeapYear(i)) {

//         console.log('Ближайший високосный год: ' + i); 
//         break;
    
//     }
// } //Ваш код

//'Ближайший високосный год: 2020' 