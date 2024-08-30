function showMessage() {
    const message = document.getElementById('mobileMessage');
    message.style.display = 'block';
}

function hideMessage() {
    const message = document.getElementById('mobileMessage');
    message.style.display = 'none';
}

// Check if the device is mobile
if (window.matchMedia("(max-width: 768px)").matches) {
    showMessage();
}