const baseUrl = 'http://localhost:3000';

// A function to send a GET request to the local API
const getTodos = async () => {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    return data;
}

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
        }
    });
    const data = await response.json();
    return data;
}