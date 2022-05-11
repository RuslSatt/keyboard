import '../js/index.js';
import '../styles/style.scss';
import keys from './keys'

class KeyCode {
    constructor() {
        this.elements = {
            keyboard: null,
            keyboardContainer: null,
            value: '',
            keysAll: [],
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
        this.elements.keyboardContainer.append(this.render())
        this.elements.keyboard.append(this.elements.keyboardContainer);

        this.elements.keysAll = document.querySelectorAll('.keyboard__key');

    }

    render() {
        const keysRender = document.createDocumentFragment();

        this.keys.forEach((key) => {
            let keyboardKey = document.createElement('button');

            keyboardKey.classList.add('keyboard__key')

            !this.isCaps ? keyboardKey.innerHTML = key.ru :
                keyboardKey.innerHTML = key.shiftRu

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

    upperCase() {
        this.keys.forEach((key, index) => {
            this.elements.keysAll[index].innerText = key.shiftRu
        })
    }

    lowerCase() {
        this.keys.forEach((key, index) => {
            this.elements.keysAll[index].innerText = key.ru
        })
    }

    capsLock() {
        this.isCaps ? this.isCaps = false : this.isCaps = true;
        this.elements.keysAll.forEach(key => {
            if (key.innerText.length === 1) {
                this.isCaps ?
                    key.innerText = key.innerText.toUpperCase() :
                    key.innerText = key.innerText.toLowerCase();
            }
        })
    }

    shift() {
        if (this.isCaps) {
            if (this.isShift) {
                this.lowerCase();
            } else {
                this.upperCase();
            }
        } else {
            if (this.isShift) {
                this.upperCase();
            } else {
                this.lowerCase();
            }
        }
    }

    keyDown() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'CapsLock') {
                e.preventDefault()
                this.capsLock();

            }
            if (e.code === 'ShiftLeft') {
                e.preventDefault()
                const shift = document.querySelector('.shift_left');
                shift.classList.add('active');
                this.isShift = true;
                this.shift()
            }
        })
    }

    keyUp() {
        document.addEventListener('keyup', (e) => {
            if (e.code === 'ShiftLeft') {
                e.preventDefault()
                this.isShift = false;
                const shift = document.querySelector('.shift_left');
                shift.classList.remove('active');
                this.shift()
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
