// Step 1: Select the toggle button
const toggleButton = document.getElementById('toggleButton');

// Step 2: Add an event listener for 'click' event
toggleButton.addEventListener('click', () => {
    // Check the current state (day or night)
    if (toggleButton.classList.contains('day')) {
        // Switch to night
        toggleButton.classList.remove('day');
        toggleButton.classList.add('night');
    } else {
        // Switch back to day
        toggleButton.classList.remove('night');
        toggleButton.classList.add('day');
    }
});
