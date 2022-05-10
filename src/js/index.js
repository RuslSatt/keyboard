import '../js/index.js';
import '../styles/style.scss';
import keys from './keys'

class KeyCode {
    constructor(keys) {
        this.elements = {
            keyboard: null,
            keyboardContainer: null,
            value: '',

        };
        this.keys = keys;
        this.isCaps = false;
        this.isShift = false;
    }

    init() {
        this.elements.keyboard = document.createElement('div');
        this.elements.keyboardContainer = document.createElement('div');

        this.elements.keyboard.classList.add('keyboard');
        this.elements.keyboardContainer.classList.add('keyboard__container');

        document.body.append(this.elements.keyboard);
        this.elements.keyboard.append(this.elements.keyboardContainer);

        this.elements.keyboardContainer.append(this.render())
    }

    render() {
        const keysRender = document.createDocumentFragment();
        this.keys = keys;

        this.keys.forEach((key) => {
            let keyboardKey = document.createElement('button');

            keyboardKey.classList.add('keyboard__key')

            !this.isCaps ? keyboardKey.innerHTML = key.ru :
                keyboardKey.innerHTML = key.shiftRu

            if (this.isCaps) {
                this.isShift ? keyboardKey.innerHTML = key.ru :
                    keyboardKey.innerHTML = key.shiftRu;
            } else {
                this.isShift ? keyboardKey.innerHTML = key.shiftRu :
                    keyboardKey.innerHTML = key.ru;
            }



            keysRender.append(keyboardKey);

            switch (key.code) {
                case 'Backspace': {
                    keyboardKey.classList.add('backspace');

                    keyboardKey.addEventListener('click', () => {
                        this.elements.value = this.elements.value.substring(0, this.elements.value.length - 1);
                    })
                    break
                }
                case 'Tab': {
                    keyboardKey.classList.add('tab');
                    break
                }
                case 'Backslash': {
                    keyboardKey.classList.add('backslash');
                    break
                }
                case 'CapsLock': {
                    keyboardKey.classList.add('caps');

                    keyboardKey.addEventListener('click', () => {
                        this.isCaps ? this.isCaps = false : this.isCaps = true;
                        this.capsLock()
                    })
                    break
                }
                case 'Enter': {
                    keyboardKey.classList.add('enter');
                    break
                }
                case 'ShiftLeft': {
                    if (this.isShift) {
                        keyboardKey.classList.add('shift_left');
                        keyboardKey.classList.add('active');
                    } else {
                        keyboardKey.classList.add('shift_left')
                    }
                    break
                }
                case 'ShiftRight': {
                    keyboardKey.classList.add('shift_right');
                    break
                }
                case 'Space': {
                    keyboardKey.classList.add('space');
                    break
                }
                case 'Lang': {
                    keyboardKey.classList.add('lang');
                    break
                }
            }

            if (key.br) {
                const br = document.createElement('br')
                keysRender.append(br);
            }
        })

        return keysRender;

    }

    capsLock() {
        const keyboard = document.querySelector('.keyboard');
        keyboard.remove();
        this.init()
    }

    keyDown() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'CapsLock') {
                e.preventDefault()
                this.isCaps ? this.isCaps = false : this.isCaps = true;
                this.capsLock();

            }
            if (e.code === 'ShiftLeft'){
                e.preventDefault()
                const shift = document.querySelector('.shift_left');
                shift.classList.add('active');
                this.isShift = true;
                this.capsLock()
            }
        })
    }

    keyUp() {
        document.addEventListener('keyup', (e) => {
            if (e.code === 'ShiftLeft'){
                e.preventDefault()
                this.isShift = false;
                this.capsLock()
            }
        })
    }
}


const keyboard = new KeyCode();

window.addEventListener('DOMContentLoaded', () => {
    keyboard.init();
    keyboard.keyDown();
    keyboard.keyUp();
})
