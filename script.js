/*Вариант смены цвета подчеркивающей линии "Find Location", при наведении курсора мыши/

/**Создание переменных для карточек */
/**Первая карточка*/ 
let stpbl1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbrdr1");

/**Вторая карточка */
let stpbl2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbrdr2");

/**Третья карточка */
let stpbl3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbrdr3");

/**Создание функций для карточек */
/*Первая карточка - меняется цвет линии на белый, при наведении курсора мыши*/
stpbl1.onmouseover = function() {
    stpbrdr1.style.borderBottom = "3px solid white";
}
/*Первая карточка - меняется цвет линии на черный, при отведении курсора мыши*/
stpbl1.onmouseout = function() {
    stpbrdr1.style.borderBottom = "3px solid black";
}

/**Вторая карточка - меняется цвет линии на белый, при наведении курсора мыши*/
stpbl2.onmouseover = function() {
    stpbrdr2.style.borderBottom = "3px solid white";
}
/**Вторая карточка меняется цвет линии на черный, при отведении курсора мыши*/
stpbl2.onmouseout = function() {
    stpbrdr2.style.borderBottom = "3px solid black";
}

/**Третья карточка - меняется цвет линии на белый, при наведении курсора мыши*/
stpbl3.onmouseover = function() {
    stpbrdr3.style.borderBottom = "3px solid white";
}

/**Третья карточка - меняется цвет линии на черный, при отведении курсора мыши*/
stpbl3.onmouseout = function() {
    stpbrdr3.style.borderBottom = "3px solid black";
}
