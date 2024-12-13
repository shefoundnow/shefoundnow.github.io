document.addEventListener('DOMContentLoaded', function() {
    const imageGrid = document.getElementById('imageGrid');
    const totalImages = 1;

    for (let i = 1; i <= totalImages; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        
        const link = document.createElement('a');
        link.href = `page${i}.html`;
        
        const img = document.createElement('img');
        img.src = `images/img${i}.jpg`;
        img.alt = `Image ${i}`;
        
        link.appendChild(img);
        gridItem.appendChild(link);
        imageGrid.appendChild(gridItem);
    }
});
