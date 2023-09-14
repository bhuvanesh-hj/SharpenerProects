let form = document.querySelector('form');
let main = document.querySelector('.main');
form.addEventListener('submit',(event)=>{
    let name=event.target.uname.value
    let email=event.target.email.value
    let phone=event.target.phone.value
    let checkStatus=0;
    let user=JSON.parse(localStorage.getItem('userDetails')) ?? [];
    for(let x of user){
        if(x.email==email||x.phone==phone){
            checkStatus=1;
            break;
        }
    }
    if(checkStatus==1){
        alert("Email OR phone number already exists!")
    }else{
    user.push({
        'name':name,
        'email':email,
        'phone':phone
        });
        localStorage.setItem("userDetails",JSON.stringify(user));
        event.target.reset();
        displayUsers()
    event.preventDefault();
    }
});
let displayUsers=()=>{
let user=JSON.parse(localStorage.getItem('userDetails')) ?? [];
let users='';
user.forEach((element,i) => {
    users+=`<div class="items">
    <span id="edit" onclick="editDta(${i})" class='fa fa-edit'></span>
    <span id="delete" onclick="removeData(${i})" class="fa fa-trash"></span>
    <h5>Name :</h5>
    <div>${element.name}</div>

    <h5>Email :</h5>
    <div>${element.email}</div>

    <h5>Phone :</h5>
    <div>${element.phone}</div>
</div>`
});

main.innerHTML=users;
}

function removeData(index){
    let user=JSON.parse(localStorage.getItem('userDetails'));
    user.splice(index,1);
    localStorage.setItem('userDetails',JSON.stringify(user));
    displayUsers();
}

function clearAll(){
    confirm("Are you wanted clear all users?")
    localStorage.clear('userDetails');
    displayUsers();
}

displayUsers();
