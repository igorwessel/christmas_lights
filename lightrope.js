const lightrope = document.getElementById('lightrope')
const context = lightrope.getContext("2d")
const button_play = document.getElementById('play_animation')

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
    'draw_blur_radius': function () {
        let x_left = 15
        for (div = 0; div < 7; div++) {
            const blur_div = document.createElement('div')
            document.querySelector('.surface').appendChild(blur_div)
            blur_div.classList.add('blur')
            blur_div.classList.add(`blur_${div + 1}`)

            if (div % 2 != 0) {
                blur_div.style = `left: ${x_left}px; filter: blur(18px)`
            } else {
                blur_div.style = `left: ${x_left}px;`
            }
            x_left += 95
        }
    }
}

lamp.draw()
lamp.draw_blur_radius()


// START ANIMATION


let animation_decrease_blur = anime({
    targets: ['.blur_2', '.blur_4', '.blur_6'],
    keyframes: [
        { filter: 'blur(18px)' },
        { filter: 'blur(17px)' },
        { filter: 'blur(16px)' },
        { filter: 'blur(15px)' },
        { filter: 'blur(14px)' },
        { filter: 'blur(13px)' },
        { filter: 'blur(12px)' },
        { filter: 'blur(11px)' },
        { filter: 'blur(10px)' },
        { filter: 'blur(9px)' },
        { filter: 'blur(8px)' },
        { filter: 'blur(7px)' },
        { filter: 'blur(6px)' },
        { filter: 'blur(5px)' },
    ],
    direction: 'alternate',
    duration: 500,
    autoplay: false,
    loop: true,
});

let animation_increase_blur = anime({
    targets: ['.blur_1', '.blur_3', '.blur_5', '.blur_7'],
    keyframes: [
        { filter: 'blur(5px)' },
        { filter: 'blur(6px)' },
        { filter: 'blur(7px)' },
        { filter: 'blur(8px)' },
        { filter: 'blur(9px)' },
        { filter: 'blur(10px)' },
        { filter: 'blur(11px)' },
        { filter: 'blur(12px)' },
        { filter: 'blur(13px)' },
        { filter: 'blur(14px)' },
        { filter: 'blur(15px)' },
        { filter: 'blur(16px)' },
        { filter: 'blur(17px)' },
        { filter: 'blur(18px)' },
    ],
    direction: 'alternate',
    duration: 500,
    autoplay: false,
    loop: true,
});


button_play.addEventListener('click', (event) => {

    event.preventDefault();

    if (button_play.innerText == 'Play') {
        animation_increase_blur.play();
        animation_decrease_blur.play();
        button_play.innerText = 'Stop'
    } else {
        animation_increase_blur.pause();
        animation_decrease_blur.pause();
        button_play.innerText = 'Play'
    }
})

