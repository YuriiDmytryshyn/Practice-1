let topScreen = document.querySelector('.screen-top');
let edit = document.querySelector('.screen-button__edit');
let style = document.querySelector('.screen-button__style');
let textarea = document.querySelector('.screen-bottom__text--textarea');
let add = document.querySelector('.screen-bottom__text--add');
let save = document.querySelector('.screen-bottom__text--save');


// При кліку на кнопку під назвою "edit" копірую HTML теги з верхнього блоку в нижній(textarea).
// При кліку на кнопку під назвою "edit" я приховую і відкриваю потрібні селоктори, щоб не було накладок на сторінці яку бачить користувач.
edit.addEventListener('click', function () {
    textarea.value = topScreen.innerHTML;
    document.querySelector('.screen-bottom__text').style.display = 'block';
    document.querySelector('.screen-bottom__hide').style.display = 'none';
    document.querySelector('.screen-bottom__style').style.display = 'none';
});

save.addEventListener('click', function () {
    topScreen.innerHTML = textarea.value;
    document.querySelector('.screen-bottom__text').style.display = 'none';
    document.querySelector('.screen-bottom__hide').style.display = 'block';
});

// При кліку на кнопку під назвою "style" я приховую і відкриваю потрібні селоктори, щоб не було накладок на сторінці яку бачить користувач.
style.addEventListener('click', function () {
    document.querySelector('.screen-bottom__style').style.display = 'block';
    document.querySelector('.screen-bottom__text').style.display = 'none';
    document.querySelector('.screen-bottom__hide').style.display = 'none';
});



// При кліку на таргет в формі я зчитую value ціого таргета і записую його в стиль font size для textarea
let f1 = document.querySelector('.f1');

f1.addEventListener('click', function () {
    topScreen.style.fontSize = event.target.value + 'px';
});

// При кліку на select я зчитую value ціого таргета і записую його в стиль font family для textarea
let select = document.querySelector('.select');

select.addEventListener('click', function () {
    topScreen.style.fontFamily = event.target.value;
});

// При кліку на кнопку colorText роблю видимим colorContainer
let colorText = document.querySelector('.colorText');
let colorContainer = document.querySelector('.color-container');

colorText.addEventListener('click', function () {
    colorContainer.style.visibility = 'visible';
});

// При кліку на div з кольором перезаписую значення color в textarea на той колір який записаний в value цієї дівки і приховую colorCintainer

colorContainer.addEventListener('click', function () {
    topScreen.style.color = event.target.getAttribute('value');
    console.log(event.target.getAttribute('value'));
    colorContainer.style.visibility = 'hidden';
});



// При кліку на кнопку backgroundColor роблю видимим colorContainer2
let backgroundColor = document.querySelector('.backgroundColor');
let colorContainer2 = document.querySelector('.color-container2')

backgroundColor.addEventListener('click', () => {
    colorContainer2.style.visibility = 'visible';
})

// При кліку на div з кольором перезаписую значення color в textarea на той колір який записаний в value цієї дівки і приховую colorCintainer2

colorContainer2.addEventListener('click', function () {
    topScreen.style.backgroundColor = event.target.getAttribute('value');
    console.log(event.target.getAttribute('value'));
    colorContainer2.style.visibility = 'hidden';
});

// Доступаюсь до форми. При кліку на чекбокс провіряю чи він чекнутий чи ні, якщо ні то чекаю і він стає true і приміняються стилі. Якщо користувач забирає галочку з нього тоді він хоче забрати стилі які задає це чекбокс.
let f2 = document.querySelector('.f2');

f2.elements[0].addEventListener('click', function () {
    if (f2.elements[0].checked === true) {
        topScreen.style.fontWeight = event.target.value;
    } else {
        topScreen.style.fontWeight = 'normal';
    }
});

f2.elements[1].addEventListener('click', function () {
    if (f2.elements[1].checked === true) {
        topScreen.style.fontFamily = event.target.value;
    } else {
        topScreen.style.fontFamily = 'inherit';
    }
});

// Знов маніпуляція з вікнами
add.addEventListener('click', function () {
    document.querySelector('.container__top').style.display = 'none';
    document.querySelector('.container__main').style.display = 'block';
    document.querySelector('.screen__table').style.display = 'none';
    document.querySelector('.chosee').style.display = 'block';
    document.getElementById('table').checked = false;
    document.getElementById('list').checked = false;
    document.querySelector('.screen__list').style.display = 'none';
})

//вікно для таблиці

let tableOn = document.getElementById('table');

tableOn.addEventListener('click', function () {
    if (tableOn.checked === true) {
        document.querySelector('.chosee').style.display = 'none';
        document.querySelector('.screen__table').style.display = 'block';
    } else {
        document.querySelector('.chosee').style.display = 'block';
        document.querySelector('.screen__table').style.display = 'none';
    }
})


// вікно для списку
let listOn = document.getElementById('list');

listOn.addEventListener('click', function () {
    if (listOn.checked === true) {
        document.querySelector('.chosee').style.display = 'none';
        document.querySelector('.screen__list').style.display = 'block';
        document.querySelector('.screen__table').style.display = 'none';
    } else {
        document.querySelector('.chosee').style.display = 'block';
        document.querySelector('.screen__list').style.display = 'none';
    }
});

let listOn1 = document.getElementById('list1');

listOn1.addEventListener('click', function () {
    document.querySelector('.screen__table').style.display = 'none';
    document.querySelector('.screen__list').style.display = 'block';
})

let tableOn2 = document.getElementById('table2');

tableOn2.addEventListener('click', function () {
    document.querySelector('.screen__list').style.display = 'none';
    document.querySelector('.screen__table').style.display = 'block';
})


// При кліку на кнопку створю таблицю по параметрам які задає користувач
let createTable = document.querySelector('.createTable');

createTable.addEventListener('click', function () {
    document.querySelector('.emptyTable').innerHTML = '';
    let table = document.forms.tableCount;
    let tableStyle = document.forms.styleTable;
    let tbl = document.createElement('table');
    for (i = 0; i < table.countTR.value; i++) {
        let tagTr = document.createElement('tr');
        tbl.appendChild(tagTr);
        for (let k = 0; k < table.countTD.value; k++) {
            let tagTd = document.createElement('td');
            tagTd.textContent = 'TD';
            tagTr.appendChild(tagTd);
            tagTd.style.width = tableCount.wingthTD.value + 'px';
            tagTd.style.height = tableCount.heightTD.value + 'px';
            tagTd.style.borderWidth = tableStyle.widthBorder.value + 'px';
            tagTd.style.borderStyle = `${tableStyle.typeBorder.value}`;
            tagTd.style.borderColor = `${tableStyle.colorBorder.value}`;
        }
    }
    document.querySelector('.emptyTable').insertAdjacentElement('beforeend', tbl);
    textarea.value = topScreen.innerHTML;
    textarea.value += document.querySelector('.emptyTable').innerHTML;
    document.querySelector('.container__main').style.display = 'none';
    document.querySelector('.container__top').style.display = 'block';
    table.countTR.value = '';
    table.countTD.value = '';
    tableCount.wingthTD.value = '';
    tableCount.heightTD.value = '';
    tableStyle.widthBorder.value = '';
});

// при кліку на кнопку створю список по параметрам які задає користувач
let createList = document.querySelector('.createList');

createList.addEventListener('click', function () {
    document.querySelector('.emptyList').innerHTML = '';
    let countLi = document.getElementById('countLi');
    let ul = document.createElement('ul');
    for (let i = 0; i < countLi.value; i++) {
        let li = document.createElement('li');
        li.textContent = 'item' + `${i + 1}`;
        li.type = document.querySelector('.typeMarks').value;
        ul.appendChild(li);
    }
    document.querySelector('.emptyList').insertAdjacentElement('beforeend', ul);
    textarea.value = topScreen.innerHTML;
    textarea.value += document.querySelector('.emptyList').innerHTML;
    document.querySelector('.container__main').style.display = 'none';
    document.querySelector('.container__top').style.display = 'block';
    countLi.value = '';
})































