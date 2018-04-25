 document.addEventListener('DOMContentLoaded', function() {
   // document.getElementById('shopping-input');
var shoppingList = document.getElementById('shopping-list');
var shoppingInput = document.getElementById('shopping-input');
var addButton = document.getElementById('add-button');
var quantityInput = document.getElementById('quantity-input'); 
var priceInput = document.getElementById('price-input'); 
var shoppingCount = 0;
var subTotal = 0; 

var addTodo = function() {
  // Create a div element and assign it to todoCol variable.
  var todoCol = document.createElement('div');
  // Give it a class of col-xs-12 and todo.
  todoCol.setAttribute('class', 'col-xs-12 todo');
  // Create another div element and assign it to todoRow variable.
  var todoRow = document.createElement('div');
  // Give it a class of row.
  todoRow.setAttribute('class', 'row');
  
  // Create a button element and assign it to removeButton variable.
  var removeButton = document.createElement('button');
  // Set class attribute of removeButton as btn, btn-danger and remove-button.
  removeButton.setAttribute('class','btn btn-danger remove-button');
  // Add the string "REMOVE" into the innerHTML of removeButton.
  removeButton.innerHTML = "REMOVE";
  // Define the event listener for click so that this todoCol element
  // will be removed when the user clicks removeButton
  removeButton.onclick = function() {
    // We use 'this' to point to the remove button element.
    // this.parentNode.parentNode will assign todoCol to variable child
    var child = this.parentNode.parentNode;
    // We use the removeChild method to delete child from the todo-list
    shoppingList.removeChild(child);

  };
  // Create an h5 element and assign it to the h5 variable.
  var h5 = document.createElement('h5');
  // Sets the class attribute of h5 to take up 8 columns.
  h5.setAttribute('class', 'col-xs-1');
  var h6 = document.createElement('h5');
  var subTotal = document.createElement('label');
  var actualSubTotal = document.createElement('h5');
  actualSubTotal.setAttribute('class', 'col-xs-2 subtotal');
  subTotal.setAttribute('class', 'col-xs-2');

  h6.setAttribute('class', 'col-xs-2');
  var quantityAdd = document.createElement("input");
  var label = document.createElement('label');
  label.setAttribute('class', 'col-xs-2');
  label.setAttribute('id', 'new-thing');

  quantityAdd.setAttribute('type', 'text');
  quantityAdd.setAttribute('class', 'col-xs-2');
  // quantityAdd.style.marginRight = "20px";
  quantityAdd.style.backgroundColor = "lightblue";
  // quantityAdd.style.right = "150px";

  // Assign the value of todoInput, which is the text the user typed
  // into the input element, to the innerHTML property of h5.
  h5.innerHTML = shoppingInput.value;
  h6.innerHTML =  "$" + priceInput.value;
  label.innerHTML = "Quantity";
  subTotal.innerHTML = "Sub Total";

  var calculateSubTotal = function (event) {
    //need to convert from string to float first
    var priceInputValue = parseFloat(priceInput.value);
    var quantityAddValue = parseFloat($(this).val() || 0);
    ///this will take the quantity input and
    var subtotal = priceInputValue * quantityAddValue;
    //grab the unit price and multiply times the quantity
    console.log(subtotal);
    actualSubTotal.innerHTML = subtotal;
    grandTotal();
  }

  quantityAdd.addEventListener('keyup', calculateSubTotal);

  var grandTotal = function(event) {
    var total = 0;
    $('.subtotal').each(function() {
      total += parseFloat($(this).text());
    })
    console.log(total);
    $("#money").text(total);
  }


  // Add h5 as the last child element to the todoRow element.
  todoRow.appendChild(h5);
  todoRow.appendChild(h6);
  todoRow.appendChild(label);
  todoRow.appendChild(quantityAdd);

  todoRow.appendChild(subTotal);
  todoRow.appendChild(actualSubTotal);

  // Add removeButton as the last child element to todoRow.
  todoRow.appendChild(removeButton);
  // Add todoRow as the last child element to the todoCol element.
  todoCol.appendChild(todoRow);
  // Append todoCol as the last child element to the todoList div.
  shoppingList.appendChild(todoCol);
};

var checkThenAddTodo = function () {
  // First we make sure that there is less than 10 to-dos,
  // and some value exists in the input element.
  if (shoppingCount < 10 && shoppingInput.value !== '') {
    // Executes the addTask function we defined earlier.
    addTodo();
    // Add 1 to taskCount.
    shoppingCount++;
    // Clear the input element by setting it to empty string.
    shoppingInput.value = '';

  }
}
addButton.addEventListener('click', checkThenAddTodo);
shoppingInput.addEventListener('keyup', function (event) {
  if (event.key === "Enter") {
    checkThenAddTodo();
  }
});



 });
