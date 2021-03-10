//     editIcon.addEventListener('click', () => {
//         const editedTodo = prompt('Edit Task:');
//         if (editedTodo === null) {
//             return;
//         } else {
//             label.textContent = editedTodo;
//             label.htmlFor = `${editedTodo.replace(/ +/g, '-').toLowerCase()}`;

//             checkbox.id = `${editedTodo.replace(/ +/g, '-').toLowerCase()}`;
//             checkbox.name = `${editedTodo.replace(/ +/g, '-').toLowerCase()}`;
//         }
//     });

//     deleteIcon.addEventListener('click', () => {
//         todoList.removeChild(listItem);

// Display todos in a list after fetching them from the local API
const todoList = document.querySelector('#todo-list');

getTodos()
    .then(todos => {
        todos.forEach(todo => {
            // Generate a list item for each todo and append it to the list
            const listItem = document.createElement('li');
            listItem.setAttribute('class', 'todo-list__item');
            todoList.appendChild(listItem);

            // Generate a checkbox for each todo and place it inside the list item
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `${todo.description.replace(/ +/g, '-').toLowerCase()}`;
            checkbox.name = `${todo.description.replace(/ +/g, '-').toLowerCase()}`;
            checkbox.setAttribute('class', 'todo-list__checkbox');
            listItem.appendChild(checkbox);

            /* 
                Generate a label that contains the description for each todo 
                and place it inside the list item
            */
            const label = document.createElement('label');
            label.htmlFor = `${todo.description.replace(/ +/g, '-').toLowerCase()}`;
            label.textContent = todo.description;
            label.setAttribute('class', 'todo-list__label');
            listItem.appendChild(label);

            // Generate an edit icon for each todo 
            const editIconWrapper = document.createElement('span');
            editIconWrapper.setAttribute('class', 'todo-list__edit-icon-wrapper');
            listItem.appendChild(editIconWrapper);

            const editIcon = document.createElement('img');
            editIcon.src = 'images/edit-icon.png';
            editIcon.title = 'Edit Task';
            editIcon.setAttribute('class', 'todo-list__edit-icon');
            editIconWrapper.appendChild(editIcon);

            // Finally, generate a delete icon for each todo
            const deleteIconWrapper = document.createElement('span');
            deleteIconWrapper.setAttribute('class', 'todo-list__delete-icon-wrapper');
            listItem.appendChild(deleteIconWrapper);

            const deleteIcon = document.createElement('img');
            deleteIcon.src = 'images/trash-can-icon.png';
            deleteIcon.title = 'Delete Task';
            deleteIcon.setAttribute('class', 'todo-list__delete-icon');
            deleteIconWrapper.appendChild(deleteIcon);
        });
    })
    .catch(err => console.log(err));

// Enable the user to add a new todo to the list
const inputField = document.querySelector('input');
const addTodoButton = document.querySelector('button');

addTodoButton.addEventListener('click', () => {
    const newTodo = inputField.value;
    inputField.value = '';

    postTodo(newTodo)
        .then(todo => {
            // Generate a list item for each todo and append it to the list
            const listItem = document.createElement('li');
            listItem.setAttribute('class', 'todo-list__item');
            todoList.appendChild(listItem);

            // Generate a checkbox for each todo and place it inside the list item
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `${todo.description.replace(/ +/g, '-').toLowerCase()}`;
            checkbox.name = `${todo.description.replace(/ +/g, '-').toLowerCase()}`;
            checkbox.setAttribute('class', 'todo-list__checkbox');
            listItem.appendChild(checkbox);

            /* 
                Generate a label that contains the description for each todo 
                and place it inside the list item
            */
            const label = document.createElement('label');
            label.htmlFor = `${todo.description.replace(/ +/g, '-').toLowerCase()}`;
            label.textContent = todo.description;
            label.setAttribute('class', 'todo-list__label');
            listItem.appendChild(label);

            // Generate an edit icon for each todo 
            const editIconWrapper = document.createElement('span');
            editIconWrapper.setAttribute('class', 'todo-list__edit-icon-wrapper');
            listItem.appendChild(editIconWrapper);

            const editIcon = document.createElement('img');
            editIcon.src = 'images/edit-icon.png';
            editIcon.title = 'Edit Task';
            editIcon.setAttribute('class', 'todo-list__edit-icon');
            editIconWrapper.appendChild(editIcon);

            // Finally, generate a delete icon for each todo
            const deleteIconWrapper = document.createElement('span');
            deleteIconWrapper.setAttribute('class', 'todo-list__delete-icon-wrapper');
            listItem.appendChild(deleteIconWrapper);

            const deleteIcon = document.createElement('img');
            deleteIcon.src = 'images/trash-can-icon.png';
            deleteIcon.title = 'Delete Task';
            deleteIcon.setAttribute('class', 'todo-list__delete-icon');
            deleteIconWrapper.appendChild(deleteIcon);
        })
        .catch(err => console.log(err));
});