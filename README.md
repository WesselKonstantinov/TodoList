# Todo List App
Helps the user to stay on top of their tasks and chores

## App specifications
- This app enables the user to view and add tasks to a list of todos
- It also provides functionality for editing and deleting tasks

## API specifications
- This app works together with a local REST API (this can be installed from here: https://github.com/WincAcademy/local_api)
- It stores the todo list and supports GET, POST, PUT and DELETE requests
- The GET request fetches the initial list of todos
- The POST request updates the list of todos upon adding a new task
- The PUT request updates either the name or the status of a task, as the user checks it off or chooses to change its name
- Finally, the DELETE request deletes the todo upon removal from the todo list