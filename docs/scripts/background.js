const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const waves = [];

const numberOfWaves = 8;  // Number of waves
const colors = [
    'rgba(0, 150, 255, 0.2)', // Light blue
    'rgba(0, 100, 200, 0.3)', // Medium blue
    'rgba(0, 50, 150, 0.4)',  // Darker blue
    'rgba(0, 200, 255, 0.1)'  // Lighter cyan blue
];

for (let i = 0; i < numberOfWaves; i++) {
    waves.push({
        y: canvas.height / 2 + (Math.random() - 0.5) * 300, // Randomize vertical position
        length: Math.random() * 0.02 + 0.01,  // Randomize wavelength
        amplitude: Math.random() * 80 + 20,   // Randomize amplitude
        frequency: Math.random() * 0.01 + 0.005,  // Randomize frequency
        color: colors[Math.floor(Math.random() * colors.length)]  // Randomize color
    });
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);

        for (let i = 0; i < canvas.width; i++) {
            ctx.lineTo(i, wave.y + Math.sin(i * wave.length + wave.frequency * index) * wave.amplitude);
        }

        // Close the path and fill the area below the wave
        ctx.lineTo(canvas.width, canvas.height); // Line to the bottom right corner
        ctx.lineTo(0, canvas.height);            // Line to the bottom left corner
        ctx.closePath();
        
        ctx.fillStyle = wave.color;
        ctx.fill();

        wave.frequency += 0.002;  // Adjust frequency increment for smoother movement
    });
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});