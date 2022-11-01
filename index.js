// document.addEventListener('keydown', fn);

// function fn(event) {
//     console.dir(event)
// }


// document.addEventListener('click', clickHeader);
// document.body.addEventListener('click', clickHeader);

// const parent = document.querySelector('#parent');
// parent.addEventListener('click', clickHeader);

// const btn = document.querySelector('button');
// btn.addEventListener('click', clickHeader);


// function clickHeader(event) {
//     console.dir(event)
// }


// function createAdder (num) {
//     return function sumArg(n) {
//         return n+num;
//     }
// }

// const sum = createAdder(10);
// console.log(sum (15));


// const collectBut = document.querySelectorAll('button');

// console.log(collectBut);
// const collectButother = document.getElementsByTagName('button');

// console.log(collectButother);


// const btnCollection = document.querySelectorAll('button');

// function getString() {
//     console.log('Клік по кнопці')
// }

// for (const btn of btnCollection) {
//     btn.addEventListener('click', getString);
// }


// const div1 = document.querySelector('div');
// const div2 = document.querySelector('.elem2');
// div1.addEventListener('click', clickHendler);




// function clickHendler(event) {
//    div2.style.top = `${event.clientY}px`
//    div2.style.left = `${event.clientX}px`
// console.log(event.clientY)
// console.log(event.clientX)

    // div2.clientTop = event.clientY;

// }
// function clickHendler(event) {
//     div2.innerText = `x - ${event.clientX}
//                       y - ${event.clientY}`
// }


// const div1 = document.querySelector('.field')
// div1.addEventListener('click', fnClick);

// function randomCoordinates(min, max) {
//     return Math.round(Math.random()*(max - min)+ min);
// }

// function counterplus (n) {
//    return  function increment() {
//     return ++n;
//    }
// }
// function counterminus (n) {
//    return  function increment() {
//     return --n;
//    }
// }

// let i = 0
// function fnClick (event) {
//     const div2 = document.querySelector('#box')
//     const div3 = document.querySelector('.div3')
//     div2.style.left = `${randomCoordinates(0, event.currentTarget.offsetWidth-div2.offsetWidth)}px`
//     div2.style.top = `${randomCoordinates(0, event.currentTarget.offsetHeight-div2.offsetHeight)}px`
//     if(event.target === event.currentTarget){
//         i = i-1
//         div3.innerText = i;
//     } else {
//         i = i+1
//         div3.innerText = i;
//     }
//     }

    // function socer(event) {
    // let i = 0
    // if(event.target === event.currentTarget){
    //     div3.innerText = ressum();
    // } else {
    //     div3.innerText = resmin();
    // }
    // }


// function fnClick (event) {
//     event.stopPropagation();
//     if(event.currentTarget === event.target) {
//         const div2 = event.target.children.box;
//         div2.style.left = `${event.clientX - div2.offsetWidth/2}px`
//         div2.style.top = `${event.clientY - div2.offsetHeight/2}px`
//     }
// }


// const dB = [
//     './img/first.jpg',
//     './img/second.jpg',
//     './img/third.jpg',
//     './img/firth.jpg',
// ]


// const img = document.querySelector('img');
// img.setAttribute('src', dB[0])




// const DB = [
//     './img/1.jpg',
//     './img/2.jpg',
//     './img/3.jpg',
//     './img/4.jpg',
// ];
// const userBasa = [
//     {
//         firsName: 'Alex',
//         lastName: 'Doe',
//         avatar: './img/1.jpg',
//         email: 'test1@mail.com'
//     },
//     {
//         firsName: 'Gran',
//         lastName: 'Nov',
//         avatar: './img/2.jpg',
//         email: 'test2@mail.com'
//     },
//     {
//         firsName: 'Nike',
//         lastName: 'Bov',
//         avatar: './img/3.jpg',
//         email: 'test3@mail.com'
//     },
//     {
//         firsName: 'Pond',
//         lastName: 'Gov',
//         avatar: './img/4.jpg',
//         email: 'test4@mail.com'
//     }
// ];
// const user = userBasa[0];

// console.log(user.avatar)


// const img = document.querySelector('.img-sl');
// const name = document.querySelector('h1');
// const email = document.querySelector('p');
// const [prevBtn, nextBtn] = document.querySelectorAll('.slider-wrapper > .btn');

// const slider = new Slider(userBasa);

// function changeUser() {
//     arrayUs = slider.currentImages;
//     img.setAttribute('src', arrayUs.avatar);
//     name.innerText = `${arrayUs.firsName} ${arrayUs.lastName}`;
//     email.innerText = arrayUs.email;
// }

// const buttonHandler = (direction = 'next') => {
//     return function() {
//         slider._currentIndex = slider[direction];
//         changeUser();
//     }
// }

// prevBtn.addEventListener('click', buttonHandler('prev'));


// nextBtn.addEventListener('click', buttonHandler('next'));

// changeUser();

// const btnArray = document.querySelectorAll('button');
// const img = document.querySelector('.img');
// // const btnR = document.querySelector('btn1')
// // const btnG = document.querySelector('btn2')
// // const btnB = document.querySelector('btn2')
// // const btnG = document.querySelector('btn2')
// // const btnG = document.querySelector('btn2')
// for (const btn of btnArray) {
//     btn.addEventListener('click', fn)
// }

// function fn({target:{dataset:{src}}}) {
//     img.setAttribute('src', src)
// }

// const form = document.querySelector('form');
// const article = document.querySelector('article');
// const KOEFICIENT = {
//     USD: 36.6,
//     EURO: 35.8,
//     PLN: 7.47,
//     UAH: 1,
// }


// form.addEventListener('submit', fn);


// function fn (event) {
//     event.preventDefault();
//     if(Number.isNaN(Number(event.target.amount.value))){
//         article.textContent = 'Amount must be a number';
//     } else{
//     article.textContent = `${Number((event.target.amount.value * KOEFICIENT[event.target.currency.value])/ KOEFICIENT[event.target.currencyOutput.value])} грн`;}

//     console.log(typeof Number(event.target.amount.value));
//     // // if (typeof 'event.target.email.value' !== 'number') {
//     // //     throw TypeError('value must be a nuvmer')
//     // // } else {
//     // article.textContent = `${Number( event.target.amount.value) * KOEFICIENT} грн`;
// }

// const form = document.querySelector('form');
// const article = document.querySelector('article');
// const select = document.querySelector('select')
// const KOEFICIENT = {
//     USD: 36.6,
//     EURO: 35.76,
//     PNL: 7.47,
// }

// form.addEventListener('submit', fn);

// function fn(event) {
//     event.preventDefault();
//     const {target:{amount:{value}, currency:{value: value1}, currencyOut:{value: value2}}} = event;
//     if(Number.isNaN(Number(value))) {
//         article.textContent = 'num';
//     } else {
//         const res = (value * KOEFICIENT[value1]) / KOEFICIENT[value2]
//         article.textContent = `${res.toFixed(2)} грн`;
//     }


// }


// const root = document.querySelector('#root');

// const array = [
//     'img/1.jpg',
//     'img/2.jpg',
//     'img/3.jpg',
//     'img/4.jpg',
// ]
// for (let i = 0; i < array.length; i++) {
//     const img = document.createElement('img');
//     img.setAttribute('src', array[i])
//     img.style.width = '100px';
//     img.style.height = '100px';
//     root.append(img);
// }
// const img1 = document.createElement('img');
// const img2 = document.createElement('img');
// const img3 = document.createElement('img');
// const img4 = document.createElement('img');

// img1.setAttribute('src', array[0])

// const h1 = document.createElement('h1');
// const p = document.createElement('p');
// h1.textContent = 'Header';
// p.textContent = 'TEXT';
// root.append(article);
// article.append(h1);
// article.append(p);



// const elem = document.createElement('div');
// elem.style.width = '200px'
// elem.style.height = '200px'
// elem.style.border = '2px solid red'

// root.append(elem);

// const root = document.querySelector('#root');
// const imgArray = [
//     'img/1.jpg',
//     'img/2.jpg',
//     'img/3.jpg',
//     'img/4.jpg',
// ]

// for (const iteraor of imgArray) {
//     const img = document.createElement('img');
//     img.setAttribute('src', iteraor);
//     img.classList.add('img');
//     root.append(img);
// }
