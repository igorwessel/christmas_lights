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

const blur_divs = document.querySelectorAll('.blur')



for (radius_blur = 0; radius_blur < blur_divs.length; radius_blur++) {

    let div = blur_divs[radius_blur]

    if (radius_blur % 2 != 0) {
        let lightened = 18.8
        const change_intensify = setInterval(function () {
            if (lightened == 3.8) {
                clearInterval(change_intensify)
            }
            div.style.filter = `blur(${lightened}px)`
            lightened -= 1

        }, 100)

    }
    else {
        let lightened = 3.8
        const change_intensify = setInterval(function () {
            if (lightened == 18.8) {
                clearInterval(change_intensify)
            }
            div.style.filter = `blur(${lightened}px)`
            lightened += 1

        }, 100)
    }
}


// const change_intensify = setInterval(function () {
//     if (blur_px_lightened == 18.8) {
//         clearInterval(change_intensify)
//     }
//     div.style.filter = `blur(${blur_px_lightened}px)`
//     blur_px_lightened += 1

// }, 5000)



