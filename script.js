window.addEventListener('keydown', function(e) {
    //    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.contents[data-key='${e.keyCode}']`);

    // console.log(key);

    if (!audio)
        return;

    // console.log(audio);
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');

    // setTimeout(() => {
    //     key.classList.remove('playing'); 
    // }, 1000);

});

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
    // e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.contents');
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));