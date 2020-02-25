const button_play = document.getElementById('play_animation')
const intensify_input = document.getElementById('intensify_input')

// ANIMATE
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
        keyframes: create_keyframes(5, 18)
    }).add({
        targets: ['#blur_1', '#blur_3', '#blur_5', '#blur_7'],
        keyframes: create_keyframes(18, 5)
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