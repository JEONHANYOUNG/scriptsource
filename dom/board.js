// css 선택자 아무거나 가능
// 처음 만나는 element(객체) 를 가져옴
let container = document.querySelector(".container");
console.log(container);

let firstLi = document.querySelector(".pagination li:first-child");
console.log(firstLi);

let secondLi = document.querySelector(".pagination li:nth-child(2)");
console.log(secondLi);

let button = document.querySelector('[data-target="#navbarText"]');
console.log(button);

// 전체 요소 가져오기(모두, NodeList)
let liList = document.querySelectorAll(".pagination li");
console.log(liList);
