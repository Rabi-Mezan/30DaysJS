
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio)
        return;
    audio.currentTime = 0

    //adding playing class to the pressed key for transition
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add('playing')


    audio.play()

}



//remove the playing class from the pressed key after completion of the transition event
function removeClass(e) {
    if (e.propertyName !== 'transform')
        return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeClass));


window.addEventListener('keydown', playSound)