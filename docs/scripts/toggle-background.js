document.getElementById('toggleBackground').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the link from following through

    const canvas = document.getElementById('backgroundCanvas');

    if (canvas.style.display === 'none') {
        canvas.style.display = 'block';
        this.textContent = 'Disable Background';
    } else {
        canvas.style.display = 'none';
        this.textContent = 'Enable Background';
    }
});
