let form = document.getElementById("expense-form");
form.addEventListener("submit", savedata);

function savedata(e) {
  e.preventDefault();
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;

  const obj = {
    price: price,
    description: description,
    category: category,
  };
  localStorage.setItem(obj.price, JSON.stringify(obj));

  let newElement = document.createElement("li");
  let newBtn = document.createElement("input");
  let editBtn = document.createElement("input");
  newBtn.className = "delete";
  newBtn.type = "button";
  newBtn.value = "Delete";
  editBtn.className = "edit";
  editBtn.type = "button";
  editBtn.value = "Edit";
  data = localStorage.getItem(obj.price);
  newElement.appendChild(document.createTextNode(data));

  let parentEle = document.getElementById("list");
  parentEle.appendChild(newElement);
  newElement.appendChild(newBtn);
  newElement.appendChild(editBtn);

  newBtn.onclick = function () {
    localStorage.removeItem(obj.price);
    parentEle.removeChild(newElement);
  };

  editBtn.onclick = function () {
    localStorage.removeItem(obj.price);
    parentEle.removeChild(newElement);
    document.getElementById("price").value = obj.price;
    document.getElementById("description").value = obj.description;
    document.getElementById("category").value = obj.category;
  };
}
