// var list = document.querySelector('.list-group-item:nth-child(2)')
// list.style.backgroundColor='green'

// var list1 = document.querySelector('.list-group-item:nth-child(3)')
// list1.style.color='white'

// var list2 = document.querySelectorAll('li')
// list2[1].style.color='lightgreen'

var list3 =document.querySelectorAll('li:nth-child(odd)');
 for(var i=0;i<list3.length;i++){
    list3[i].style.backgroundColor ='green';
 }