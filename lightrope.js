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
            context.ellipse(this.x, this.y, 10, 20, Math.PI / 1, 0, 2 * Math.PI);
            context.fill();

            context.beginPath();
            context.strokeStyle = '#4f4f4f'
            context.lineWidth = 3;
            context.moveTo(this.line_x, 80);
            context.lineTo(this.line_x, 0)
            context.stroke();

            context.fillStyle = '#343434';
            context.fillRect(this.square_x, 77, 9, 8);

            lamp.square_x += 95
            lamp.line_x += 95
            lamp.x += 95
        }
    },
}

lamp.draw()

let x_left = 15
for (div = 0; div < 7; div++) {
    const blur_div = document.createElement('div')
    document.querySelector('.surface').appendChild(blur_div)
    blur_div.classList.add('blur')


    blur_div.style = `left: ${x_left}; filter: blur(${3.8}px);`
    x_left += 95
}


let blur_px_lightened = 0


const change_intensify = (increase, element) => {

    if (increase == true) {
        for (blur = 3.8; blur <= 18.8;) {
            blur += 1
            element.style.filter = `blur(${blur}px)`
        }
    } else {
        for (blur = 18.8; blur >= 3.8;) {
            element.style.filter = `blur(${blur}px)`
        }
    }
}

const blur_divs = document.querySelectorAll('.blur').forEach((div, index) => {
    if (index % 2 != 0) {
        change_intensify(true, div)
    } else {
        change_intensify(false, div)
    }
})

