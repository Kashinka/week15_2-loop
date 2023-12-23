// Необходимо, чтоб программа выводила в консоли вот такую последовательность чисел:

// 7 14 21 28 35 42 49 56 63 70 77 84 91 98


// function printNumbers(){
//     let i = 7;
//     while (i<99) {
//     console.log(i);
//     i += 7;
//     }
//     }

// printNumbers();

// В следующей функции есть цикл for, который считает количество выбранных жанров в списке прокрутки (элемент <select> позволяет выбрать несколько элементов). Цикл for объявляет переменную i и задаёт ей значение 0. Также он проверяет, что i меньше количества элементов в элементе <select>, выполняет оператор if и увеличивает i на один после каждого прохода цикла. Напиши, каким должен быть цикл.

function howMany(select) {
    let numberSelected = 0;
    for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
        numberSelected++;
    }
    }
    return numberSelected;
    }

    let btn = document.getElementById("btn");
    const total = document.querySelector('.total');
    btn.addEventListener("click", function(){
    total.innerHTML= 'Выбрано элементов: ' + howMany(document.selectForm.musicTypes);
});