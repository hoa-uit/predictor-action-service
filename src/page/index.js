const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let startX, startY, endX, endY;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    endX = e.offsetX;
    endY = e.offsetY;
    drawRectangle();
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

function drawRectangle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(startX, startY, endX - startX, endY - startY);
    ctx.stroke();
}

function predict() {
    const rectData = {
        startX,
        startY,
        endX,
        endY
    };

    console.log('coordinates of rectangle ', { coordinates: rectData })
}
