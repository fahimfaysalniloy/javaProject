//get forms
var form = document.getElementById("addForm");
//get ul
var itemList = document.getElementById("items");
//get filter
var filter = document.getElementById("filter");

//Form Submit Event
form.addEventListener("submit", addItem);
//dellete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();
  //get the new item value
  var newItem = document.getElementById("item").value;
  //create li
  var li = document.createElement("li");
  //add text node with input value
  li.className = "list-group-item";
  //add text to li
  li.appendChild(document.createTextNode(newItem));
  //create button dellete
  var btn = document.createElement("button");
  btn.className = "btn btn-danger btn-sm float-right delete";
  btn.appendChild(document.createTextNode("X"));
  //append it to li
  li.appendChild(btn);

  //add it to ul
  itemList.appendChild(li);
}
//remove
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure? ")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
//filter
function filterItems(e) {
  var text = filter.value.toLowerCase();
  var items = document.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    var itemNme = item.firstChild.textContent;
    if (itemNme.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
