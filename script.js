document.addEventListener('DOMContentLoaded', function () {
    addFocusStyles();
});

function addFocusStyles() {
    // Add focus styles to clickable elements
    var clickableElements = document.querySelectorAll('a, button, [role="button"], input[type="button"], input[type="submit"]');
    clickableElements.forEach(function (element) {
        element.addEventListener('focus', function () {
            element.classList.add('focus');
        });
        element.addEventListener('blur', function () {
            element.classList.remove('focus');
        });
    });
}

document.getElementById('accessible-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
