var form=`<div>
<div class="mb-3">
  <label for="name" class="form-label">Name</label>
  <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeHolder="Enter your name">
  </div>
<div class="mb-3">
  <label for="email" class="form-label">Email</label>
  <input type="email" class="form-control" id="email" placeHolder="Enter your email">
</div>
<button type="submit" class="btn btn-primary mt-3" onclick="save()">Save</button>
</div>`;

   
    function table(){
        let table =`<table class="table">
        <thead>
          <tr>
            <th class="col-1">No</th>
            <th class="col-3">Name</th>
            <th class="col-4">Email</th>
            <th class="col-2">Edit</th>
            <th class="col-2">Delete</th>
          </tr>
        </thead>
        <tbody>`;
         for(let i=0;i<details.length;i++){
            table=table+`<tr>
            <th >${i+1}</th>
            <td >${details[i].name}</td>
            <td >${details[i].email}</td>
            <td ><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
            <td ><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
          </tr>`
         };
         table=table+`   
        </tbody>
      </table>`;
      document.getElementById('table').innerHTML=table;
    };     
    document.getElementById('form').innerHTML=form;
    details=[];
    getData();
    table();

    function getData(){
        let Data = localStorage.getItem("details");
        if(Data){
            details=JSON.parse(Data);
        }else{
            setData();
          
        }
    }

    function setData(){
        localStorage.setItem("details",JSON.stringify(details));
    }
    function save(){
        let name=document.getElementById("name");
        let email =document.getElementById("email");

        if(name.value==0){
            alert("name is Empty");
            return;
        }

        let data={
            name:name.value,
            email:email.value
        };

        details.push(data);
        setData();
        // console.log(data);
        // console.log(email.value);
        table();
        name.value="";
        email.value="";
    };
    function deleteData(index){
        details.splice(index,1)
        setData();
        table();
        // console.log(index);
    };
    function edit(index){
        let editForm=`<div>
        <div class="form-group">
          <label for="name" class="form-label">Update Name</label>
          <input type="text" value="${details[index].name}" class="form-control" id="newName" aria-describedby="emailHelp" placeHolder="Update your name">
          </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" value="${details[index].email}" class="form-control" id="newEmail" placeHolder="Update your email">
        </div>
        <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
        </div>`;
        document.getElementById("form").innerHTML = editForm;
        // console.log('edit work');
    };
    
    function update(index){
        let newName =document.getElementById('newName');
        let newEmail =document.getElementById('newEmail');
        details[index]={
            name:newName.value,
            email:newEmail.value
        };
        setData();
        table();
        document.getElementById("form").innerHTML = form;
    }

