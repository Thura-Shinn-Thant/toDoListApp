// Get the input field, button, and list
const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");


// Add a task to the list when the button is clicked
addBtn.addEventListener("click", () => {
  // Create a new list item with the task text
  const li = document.createElement("li");
  const taskText = document.createTextNode(input.value);
  li.appendChild(taskText);

  // Add a delete button to the list item
  const deleteBtn = document.createElement("span");

  const deleteText = document.createTextNode("x");
  deleteBtn.appendChild(deleteText);
  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
  li.appendChild(deleteBtn);

  // Add the new list item to the list
  list.appendChild(li);

  // Clear the input field
  input.value = "";
});
