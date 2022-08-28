const button = document.querySelector('.button');
const openBtn = document.querySelector('#openbtn');
const page = document.querySelector('.page');
const xmarkClose = document.querySelector('#xmark');

button.addEventListener('click', function () {
    const activeBox = document.querySelector('.active-box');
    const bookmark = document.querySelector('.bookmark');

    activeBox.classList.toggle('box-hover');
    bookmark.classList.toggle('bookmark-hover');
});

openBtn.addEventListener('click', function () {
    page.classList.add('page-open')
});

xmarkClose.addEventListener('click', function () {
    page.classList.remove('page-open')
})
const inputBtn = document.querySelector('#inputbtn');
const bottom = document.querySelector('.bottom');
const continueBtn = document.querySelector('#continuebtn');
const completed = document.querySelector('.completed');

inputBtn.addEventListener('click', function () {
    bottom.classList.add('radio-open');
});

continueBtn.addEventListener('click', function () {
    completed.classList.add('completed-open');
})

const gotBtn = document.querySelector('#gotbtn')

gotBtn.addEventListener('click', function () {
    bottom.classList.remove('radio-open');
    completed.classList.remove('completed-open');
    page.classList.remove('page-open')
})