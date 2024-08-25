document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const todoInput = document.getElementById('floatingInput');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = ''; // Clear the input field
    }
});

function addTodoItem(todoText) {
    const todoList = document.getElementById('todoList');

    // Create a new list item
    const listItem = document.createElement('li');

    // Create the text node and add it to the list item
    const textNode = document.createTextNode(todoText);
    listItem.appendChild(textNode);

    // Create the delete button and add Bootstrap classes
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Task';
    deleteButton.classList.add('btn', 'btn-primary', 'mx-2' , 'mt-2'); // Adding Bootstrap classes for styling
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);

    // Add the list item to the list
    todoList.appendChild(listItem);
}
