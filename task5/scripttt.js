var forms = document.getElementById('addForm');
var itemLists = document.getElementById('items');

forms.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');

    li.className='list-group-item';

    li.appendChild(document.createTextNode(newItem));

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