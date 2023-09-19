let form=document.querySelector("form");
let listt=document.querySelector(".list")
let user=[];
form.addEventListener('submit',(e)=>{
    
    let amount=e.target.amount.value;
    let description=e.target.description.value;
    let category=e.target.category.value;
    let user=JSON.parse(localStorage.getItem('expense')) ?? [];
        user.push({
            'amount':amount,
            'description':description,
            'category':category
        });
        localStorage.setItem('expense',JSON.stringify(user));
        e.target.reset();
        editData.target.reset();
        displayUsers();
        e.preventDefault();

});


let displayUsers=()=>{
    let user=JSON.parse(localStorage.getItem('expense')) ?? [];
    
    let users='';
    user.forEach((element,i)=>{
        users+=`<ol >
        <li class="list-group-item"> ${i+1}. ${element.amount}   ${element.description}   ${element.category}
            <button type="button" class="btn btn-outline-primary" onclick="editData(${i})">Edit</button>                    
            <button type="button" class="btn btn-outline-primary" onclick="removeData(${i})">Delete</button>
          </li>
    </ol>`
    })
    listt.innerHTML=users;
}
let removeData=(index)=>{
    let user=JSON.parse(localStorage.getItem('expense'));
    user.splice(index,1);
    localStorage.setItem('expense',JSON.stringify(user));
    displayUsers();
}
let editData=(index)=>{
    let user=JSON.parse(localStorage.getItem('expense'));
    form.innerHTML=`<form action="">
    <label for="cost">Choose Expense amount :</label>                 
        <input type="number" class="form-control" id="cost" name="amount" value="${user[index].amount}"> 
    <label for="description">Choose a description :</label>
        <input type="text" class="form-control" id="description" name="description" value="${user[index].description}">    
        <label for="Choose a category"> Choose a category :</label>
        <select class="form-select" aria-label="Default select example" id="Choose a category" name="category" >
            <option selected>${user[index].category}</option>
            <option value="Food">Food</option>
            <option value="Movie">Movie</option>
            <option value="Shooping">Shooping</option>
            <option value="Cab">Cab</option>
            <option value="House Rent">House Rent</option>
            <option value="Grocery's">Grocery's</option>
          </select>
          <br>
          <button type="submit" class="btn btn-primary">Update Expense</button>
</form>`
removeData(index);
}

displayUsers();