document.addEventListener('DOMContentLoaded', function() {

    // Example: Add an event listener to the login button
    const loginButton = document.querySelector('.btn');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            alert('Welcome, You can now enter!');
        });
    }

    // Example: Add a dynamic greeting based on the time of day
    const greeting = document.createElement('p');
    greeting.classList.add('greeting-text'); // Add class to the greeting paragraph
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.textContent = 'Good Morning!';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon!';
    } else {
        greeting.textContent = 'Good Evening!';
    }
    document.querySelector('.home-container').prepend(greeting); // Add greeting to the home-container
});