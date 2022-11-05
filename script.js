
var btnByElement = document.querySelector('#btnByElement');
var elementDiv = document.querySelector('span');
var btnById = document.querySelector('#btnById');
var IdDiv = document.querySelector('#IdDiv');
var btnByClass = document.querySelector('#btnByClass');
var classDiv = document.querySelector('.classDiv');
var sameClass = document.querySelector('.classContainer');
var sameClassList = document.querySelectorAll('.sameClass');



btnByElement.addEventListener('click',()=>{
    elementDiv.innerHTML="Text changed from first span using querySelector by element";
    elementDiv.style.fontSize='1.5rem';
    elementDiv.style.color='red'
})

btnById.addEventListener('click',()=>{
    IdDiv.innerHTML="Text changed using querySelector by Id";
    IdDiv.style.fontSize='1.5rem';
})

btnByClass.addEventListener('click',()=>{
    classDiv.innerHTML="Text changed using querySelector by Class";
    classDiv.style.fontSize='1.5rem';
})

document.querySelector('#btnClass').addEventListener('click',()=>{
    console.log(sameClass);
    sameClass.innerHTML = "Text changed from the first element that matches a CSS selector";
    sameClass.style.backgroundColor='yellow'
})

document.querySelector('#btnClick').addEventListener('click',()=>{
    console.log(sameClassList);
    for(let i=0;i<sameClassList.length;i++)
    {
        sameClassList[i].innerHTML="Added a background color to all elements with class=sameClass:";
        sameClassList[i].style.backgroundColor='grey';
    }
})