
const body = document.body;
const content = document.querySelector('.content');

// Create the toggle button
const toggleBtn = document.createElement('button');
toggleBtn.id = 'theme-toggle';
content.appendChild(toggleBtn);

function updateButton() {
    toggleBtn.textContent = body.classList.contains('light') ? '🌙 Dark' : '☀️ Light';
}

// Apply the saved theme (dark is the default)
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
}
updateButton();

// Toggle on click and remember the choice
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
    updateButton();
});