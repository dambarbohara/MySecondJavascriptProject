var form= document.getElementById('form');

var itemsList= document.getElementById('item-list');

var filter=document.getElementById('filter');


//form submit event
form.addEventListener('submit',addItems);
    //add items
function addItems(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('additem').value;
    // console.log(newItem);

    //create new li element
    var li = document.createElement('li');
    //add class
    li.className='list-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
   
   //create delete button element
   var deleteBtn= document.createElement('button');
   //add class name
   deleteBtn.className='delete';
   //append text node to delete button
   deleteBtn.appendChild(document.createTextNode('X'));
    //append button to the li
    li.appendChild(deleteBtn);
    //showing added item to the list
    itemsList.appendChild(li);
}



//delete items
itemsList.addEventListener('click',removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
}



//filter event
filter.addEventListener('keyup', filterItems);

function filterItems(e){
   // convert text to lowercase
   var text = e.target.value.toLowerCase();
    var items= itemsList.getElementsByTagName('li');
    
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName= item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    })
}