var forms = document.getElementById('addForm');
var itemLists = document.getElementById('items');
var filter = document.getElementById('filter');
//add item
forms.addEventListener('submit',addItem);
//remove item
itemLists.addEventListener('click',removeItem);
//filter the item
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var newItem1 = document.getElementById('item1').value;
    var li = document.createElement('li');

    li.className='list-group-item';

    li.appendChild(document.createTextNode(newItem+ " "+newItem1));

    //creat dlete btn element
    var buttond = document.createElement('button');

    //add class name
    buttond.className='btn btn-danger btn-sm float-right delete';

    // add text node

    buttond.appendChild(document.createTextNode('X'));

    li.appendChild(buttond);

    // create a edit button
    var buttonE = document.createElement('button');

    //add class name
    buttonE.className='btn btn-primary btn-sm float-right btn';

    //add style
    buttond.style.marginLeft='10px';
    buttonE.appendChild(document.createTextNode('Edit'));

    li.appendChild(buttonE);

    itemLists.appendChild(li);
}

// remove function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure want to delete the item?')){
            var itemName=e.target.parentElement;
            itemLists.removeChild(itemName);
        }
    }
}

//filter the items
// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemLists.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

