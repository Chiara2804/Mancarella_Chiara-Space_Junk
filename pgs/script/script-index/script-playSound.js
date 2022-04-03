//FIRST PAGE SOUND (a-frame)
AFRAME.registerComponent('sound_vr', {
    init: function() {
        let playing = false;
        let audio = document.querySelector("#sound_f");
        this.el.addEventListener('click', () => {
            if (!playing) {
                audio.play();
            } else
                audio.pause();
            playing = !playing;
        });
    }
})