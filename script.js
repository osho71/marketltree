// Example: Add a dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '🌙 Dark Mode';
    toggleButton.classList.add('btn', 'btn-secondary', 'mb-3');
    document.querySelector('header').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
});

// Track link clicks (optional)
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Send data to Google Analytics or a simple console log
        console.log(`Clicked: ${this.href}`);
    });
});