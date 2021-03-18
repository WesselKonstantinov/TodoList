// A function to display each todo as a list item
const addTodoToDOM = todo => {
    const todoList = document.querySelector('#todo-list');

    // Generate a list item for each todo and append it to the list
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'todo-list__item');
    todoList.appendChild(listItem);

    // Generate a checkbox for each todo and place it inside the list item
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = todo._id;
    checkbox.name = `${todo.description.replace(/ +/g, '-').toLowerCase()}`;
    checkbox.setAttribute('class', 'todo-list__checkbox');
    listItem.appendChild(checkbox);

    // Enable the user to check off a todo
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            updateTodoStatus(label.htmlFor, { done: true })
                .then(() => label.classList.add('todo-list__label--completed'))
                .catch(err => console.log(err));
        } else {
            updateTodoStatus(label.htmlFor, { done: false })
                .then(() => label.classList.remove('todo-list__label--completed'))
                .catch(err => console.log(err));
        }
    });

    /* 
        Generate a label that contains the description for each todo 
        and place it inside the list item
    */
    const label = document.createElement('label');
    label.htmlFor = todo._id;
    label.textContent = todo.description;
    label.setAttribute('class', 'todo-list__label');
    listItem.appendChild(label);

    // Make sure the todo stays checked even when reloading the page
    if (todo.done) {
        checkbox.checked = true;
        label.classList.add('todo-list__label--completed');
    }

    // Generate an edit icon for each todo 
    const editIconWrapper = document.createElement('span');
    editIconWrapper.setAttribute('class', 'todo-list__edit-icon-wrapper');
    listItem.appendChild(editIconWrapper);

    const editIcon = document.createElement('img');
    editIcon.src = 'images/edit-icon.png';
    editIcon.title = 'Edit Task';
    editIcon.setAttribute('class', 'todo-list__edit-icon');
    editIconWrapper.appendChild(editIcon);

    // Enable the user to edit the todo description
    editIcon.addEventListener('click', () => {
        const editedTodo = prompt('Edit task:');
        if (editedTodo === null) {
            return;
        } else {
            updateTodoDescription(label.htmlFor, editedTodo)
                .then(editedTodo => {
                    label.textContent = editedTodo.description;
                    checkbox.name = `${editedTodo.description.replace(/ +/g, '-').toLowerCase()}`;
                });
        }
    });

    // Finally, generate a delete icon for each todo
    const deleteIconWrapper = document.createElement('span');
    deleteIconWrapper.setAttribute('class', 'todo-list__delete-icon-wrapper');
    listItem.appendChild(deleteIconWrapper);

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'images/trash-can-icon.png';
    deleteIcon.title = 'Delete Task';
    deleteIcon.setAttribute('class', 'todo-list__delete-icon');
    deleteIconWrapper.appendChild(deleteIcon);

    // Enable the user to delete a todo
    deleteIcon.addEventListener('click', () => {
        deleteTodo(label.htmlFor)
            .then(() => todoList.removeChild(listItem))
            .catch(err => console.log(err));
    });
};

// Display todos in a list after fetching them from the local API
getTodos()
    .then(todos => {
        todos.forEach(todo => addTodoToDOM(todo));
    })
    .catch(err => console.log(err));

// Enable the user to add a new todo to the list
const inputField = document.querySelector('input');
const addTodoButton = document.querySelector('button');

addTodoButton.addEventListener('click', () => {
    const newTodo = inputField.value;
    inputField.value = '';

    postTodo(newTodo)
        .then(todo => addTodoToDOM(todo))
        .catch(err => console.log(err));
});