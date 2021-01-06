
function handleKeyPress(event){
    const pressedKey = event.keyCode;
    const dataKey = document.querySelector(`audio[data-key="${pressedKey}"]`);
    const key = document.querySelector(`div[data-key="${pressedKey}"]`);
    dataKey.currentTime = 0;
    dataKey.play();
    key.classList.add('playing');
    setTimeout(() => {
        key.classList.remove('playing');
    },700);
}

function init(){
    window.addEventListener('keydown', handleKeyPress);
}

init();