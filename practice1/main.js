let form = document.querySelector('form');
let main = document.querySelector('.main');
let user=[];
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
        editData.target.reset();
        displayUsers()
    event.preventDefault();
    }
});
let displayUsers=()=>{
let user=JSON.parse(localStorage.getItem('userDetails')) ?? [];
let users='';
user.forEach((element,i) => {
    users+=`<div class="items">
    <span id="edit" onclick="editData(${i})" class='fa fa-edit'></span>
    <p class="no" style="font-size:12px;pointer-events:none">User no: ${i+1}</p>
    <span id="delete" onclick="removeData(${i})" class="fa fa-trash"></span>
    <h5 style="pointer-events:none">Name :</h5>
    <div style="pointer-events:none">${element.name}</div>

    <h5 style="pointer-events:none">Email :</h5>
    <div style="pointer-events:none">${element.email}</div>

    <h5 style="pointer-events:none">Phone :</h5>
    <div style="pointer-events:none">${element.phone}</div>
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
    let r=confirm("Are you wanted clear all users?")
    if(r){
    localStorage.clear('userDetails');
    displayUsers();
    }else{};
}
function editData(index){
    let user=JSON.parse(localStorage.getItem('userDetails'));
    form.innerHTML=`<form action=""> 
<h1 id="heading">Register user</h1>
<label for="name">Name :</label>
<input type="text" id="name" value="${user[index].name}" placeholder="Enter your name" name="uname"  required>
<label for="email">Email :</label>
<input type="text" id="email" value="${user[index].email}" placeholder="Enter your email" name="email" required>
<label for="phone">Phone :</label>
<input type="text" id="phone" value="${user[index].phone}" placeholder="Enter your phone number" name="phone" required>
<button type="submit" class="btn"id="subbtn">Update</button>
</form>`

removeData(index);

}

displayUsers();
