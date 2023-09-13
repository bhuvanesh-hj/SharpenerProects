// const click1 =document.querySelector('.btn');
// const click2 =document.querySelector('.btn');
// click1.addEventListener('mouseover' ,(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#fff';
//     document.querySelector('body').classList.add('bg-dark');
// })

// click2.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#fff';
//     document.querySelector('body').classList.add('bg-dark');
// })

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    
    // const li = document.createElement('li');
    
    // li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
    // userList.appendChild(li);
    // console.log(nameInput.value);
    // console.log(emailInput.value);
    // localStorage.setItem(nameInput.value,'userName');
    // localStorage.setItem(emailInput.value,'userEmail');

    let myObj={
        User_Name : nameInput.value,
        User_Email : emailInput.value
    };

    let myObj_serialized=JSON.stringify(myObj);

     localStorage.setItem(emailInput.value,myObj_serialized);
    alert('Submitted');
    let li =document.createElement('li');
    li.className='items';
    li.appendChild(document.createTextNode(`Name: ${nameInput.value} , Email: ${emailInput.value}`));
    userList.appendChild(li);
    console.log('myObj_serialized');
    nameInput.value='';
    emailInput.value='';
}
