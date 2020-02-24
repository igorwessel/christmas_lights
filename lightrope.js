const lightrope = document.getElementById('lightrope')
const context = lightrope.getContext("2d")

const lamp = {
    'x': 35,
    'y': 100,
    'line_x': 34,
    'square_x': 30,
    'draw': function () {
        for (light = 0; light < 7; light++) {
            context.fillStyle = 'red'
            context.beginPath();
            context.ellipse(lamp.x, lamp.y, 10, 20, Math.PI / 1, 0, 2 * Math.PI);
            context.fill();

            context.beginPath();
            context.strokeStyle = '#4f4f4f'
            context.lineWidth = 3;
            context.moveTo(lamp.line_x, 80);
            context.lineTo(lamp.line_x, 0)
            context.stroke();

            context.fillStyle = '#343434';
            context.fillRect(lamp.square_x, 77, 9, 8);

            lamp.square_x += 95
            lamp.line_x += 95
            lamp.x += 95
        }
    }
}

lamp.draw()

let x_left = 13
for (div = 0; div < 7; div++) {
    const blur_div = document.createElement('div')
    document.querySelector('.surface').appendChild(blur_div)
    blur_div.classList.add('blur')
    blur_div.style = `left: ${x_left}`
    x_left += 95
}
