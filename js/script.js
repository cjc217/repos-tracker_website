// To-do list functionality
document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const todoItems = document.getElementById('todo-items');

    function addTodoItem() {
        const newItemText = todoInput.value.trim();
        if (newItemText !== '') {
            const li = document.createElement('li');
            li.textContent = newItemText;
            todoItems.appendChild(li);
            todoInput.value = '';
        }
    }

    document.getElementById('add-todo').addEventListener('click', addTodoItem);
    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodoItem();
        }
    });
});

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Here you can add code to send the form data to your server or handle it locally
    });
});
