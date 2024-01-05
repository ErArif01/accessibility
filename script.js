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

# express js adding
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;

// Set up rate limiting middleware
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

app.use('/api/', apiLimiter);

// Your API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'API response data' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
