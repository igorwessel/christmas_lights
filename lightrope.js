const button_play = document.getElementById('play_animation')
const intensify_input = document.getElementById('intensify_input')
const timer_input = document.getElementById('timer_input')
const canvas = document.getElementById('lightrope')
const context = canvas.getContext('2d')

const lamp = {
    'x': 35,
    'y': 100,
    'line_x': 34,
    'square_x': 30,
    'draw': function (context) {
        let light = 0
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
        let div = 0
        for (div = 0; div < 7; div++) {
            const blur_div = document.createElement('div')
            document.querySelector('.surface').appendChild(blur_div)
            blur_div.classList.add('blur')
            blur_div.setAttribute('id', `blur_${div + 1}`)

            anime.set(blur_div, {
                left: x_left
            })
            x_left += 95
        }
    },
    'insert_blur': function (intensify) {
        if (intensify >= 25 || !intensify) {
            intensify = 0
        }

        const radius_blur = document.querySelectorAll('.blur')
        radius_blur.forEach((div, index) => {
            if (index % 2 != 0) {
                anime.set(div, {
                    filter: `blur(${parseInt(intensify)}px)`
                })
            } else {
                anime.set(div, {
                    filter: `blur(${parseInt(intensify) + 13}px)`
                })
            }
        })
    }
}

lamp.draw(context)
lamp.draw_blur_radius()
lamp.insert_blur()

// ANIMATION

function create_keyframes(radius, limit) {

    let keyframes = []

    if (radius < limit) {
        for (radius; radius <= limit; radius++) {
            keyframes.push({ filter: `blur(${radius}px)` })
        }
    }
    else {
        for (radius; radius >= limit; radius--) {
            keyframes.push({ filter: `blur(${radius}px)` })
        }
    }
    return keyframes
}

timer_input.addEventListener('change', (event) => {
    if (timer_input.value) {
        animation.duration = timer_input.value
    } else {
        animation.duration = 500
    }
})


let animation = anime.timeline({
    duration: 500,
    direction: 'alternate',
    loop: true,
    autoplay: false,
    easing: 'linear'
})


animation
    .add({
        targets: ['#blur_2', '#blur_4', '#blur_6'],
        keyframes: create_keyframes(0, 13)
    }).add({
        targets: ['#blur_1', '#blur_3', '#blur_5', '#blur_7'],
        keyframes: create_keyframes(13, 0)
    }, `-=${animation.duration}`)


button_play.addEventListener('click', (event) => {
    if (button_play.innerText == 'Play') {
        animation.play()
        button_play.innerText = 'Stop'
    } else {
        animation.pause()
        button_play.innerText = 'Play'
    }
})


function isNumber(event) {
    if (event.key.search(/[\D]/)) {
        return true
    } else {
        return false
    }
}
