const baseUrl = 'http://localhost:3000';

// A function to send a GET request to the local API
const getTodos = async () => {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};

// A function to send a POST request to the local API
const postTodo = async todo => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
            description: todo,
            done: false,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};

// A function to send a DELETE request to the local API
const deleteTodo = async id => {
    await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
};

// A function to send a PUT request to the local API (updates the property 'done')
const updateTodoStatus = async (id, status) => {
    await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(status),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

// A function to send a PUT request to the local API (updates the property 'description')
const updateTodoDescription = async (id, editedTodo) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ description: editedTodo }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};