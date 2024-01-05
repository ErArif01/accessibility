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
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const eventData = req.body;

  // Process the event data as needed (e.g., log it)
  console.log('Received GitHub Webhook Event:', eventData);

  // Perform actions based on the event (e.g., send real-time notifications)

  res.status(200).send('Webhook Received');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
