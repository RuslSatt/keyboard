import '../js/index.js';
import '../styles/style.scss';
import keys from './keys'

class KeyCode {
    constructor() {
        this.elements = {
            keyboard: null,
            keyboardContainer: null,
            area: null,
            keysAll: [],
        };
        this.value = '';
        this.keys = keys;
        this.isCaps = false;
        this.isShift = false;
        this.lang = false;
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
        this.elements.area = document.querySelector('textarea');

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
                        this.value = this.value.substring(0, this.value.length - 1);
                        this.setValue();
                    })
                    break
                }
                case 'Tab': {
                    keyboardKey.classList.add('tab');
                    keyboardKey.addEventListener('click', () => {
                        this.elements.area.onfocus
                    })
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
                    keyboardKey.addEventListener('click', () => {
                        this.enterEvent()
                    })
                    break
                }
                case 'ShiftLeft': {
                    keyboardKey.classList.add('shift_left');
                    this.shiftEvent(keyboardKey);
                    break
                }
                case 'ShiftRight': {
                    keyboardKey.classList.add('shift_right');
                    this.shiftEvent(keyboardKey);
                    break
                }
                case 'Space': {
                    keyboardKey.classList.add('space');
                    keyboardKey.addEventListener('click', () => {
                        this.spaceEvent()
                    })
                    break
                }
                case 'Lang': {
                    keyboardKey.addEventListener('click', () => {
                        this.changeLang();
                    })
                    keyboardKey.classList.add('lang');
                    break
                }
                default: {
                    keyboardKey.addEventListener('click', () => {
                        if (key.shiftRu.length === 1 && key.ru.length === 1)
                            if (!this.lang) {
                                this.value += this.isCaps ? key.shiftRu : key.ru;
                            } else {
                                this.value += this.isCaps ? key.shiftEn : key.en;
                            }

                        console.log(this.value)
                        this.setValue();
                    })
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

    changeLang() {
        this.lang = !this.lang;

        if (this.lang) {
            if (this.isCaps) {
                this.lowerCaseEn();
                this.isCaps = false;
                this.capsLock();
            } else {
                this.lowerCaseEn();
            }
        } else {
            if (this.isCaps) {
                this.lowerCaseRu();
                this.isCaps = false;
                this.capsLock();
            } else {
                this.lowerCaseRu();
            }
        }
    }

    enterEvent() {
        this.value += '\n';
        this.setValue();
    }

    spaceEvent() {
        this.value += ' ';
        this.setValue();
    }


    shiftEvent(keyboardKey) {
        keyboardKey.addEventListener('pointerdown', () => {
            keyboardKey.classList.add('active');
            this.isShift = true;
            this.shift();
        })
        keyboardKey.addEventListener('pointerup', () => {
            keyboardKey.classList.remove('active');
            this.isShift = false;
            this.shift();
        })
    }

    upperCaseRu() {
        this.keys.forEach((key, index) => {
            this.elements.keysAll[index].innerText = key.shiftRu
        })
    }

    upperCaseText() {
        this.elements.keysAll.forEach(key => {
            if (key.innerText.length === 1) {
                key.innerText = key.innerText.toUpperCase();
            }
        })
    }

    lowerCaseText() {
        this.elements.keysAll.forEach(key => {
            if (key.innerText.length === 1) {
                key.innerText = key.innerText.toLowerCase();
            }
        })
    }

    upperCaseEn() {
        this.keys.forEach((key, index) => {
            this.elements.keysAll[index].innerText = key.shiftEn
        })
    }

    lowerCaseRu() {
        this.keys.forEach((key, index) => {
            this.elements.keysAll[index].innerText = key.ru
        })
    }

    lowerCaseEn() {
        this.keys.forEach((key, index) => {
            this.elements.keysAll[index].innerText = key.en
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
                if (!this.lang) {
                    this.upperCaseRu();
                    this.lowerCaseText();
                } else {
                    this.upperCaseEn();
                    this.lowerCaseText();
                }
            } else {
                if (!this.lang) {
                    this.lowerCaseRu();
                    this.upperCaseText();
                } else {
                    this.lowerCaseEn();
                    this.upperCaseText();
                }
            }
        } else {
            if (this.isShift) {
                if (!this.lang) {
                    this.upperCaseRu();
                } else {
                    this.upperCaseEn();
                }
            } else {
                if (!this.lang) {
                    this.lowerCaseRu();
                } else {
                    this.lowerCaseEn();
                }
            }
        }
    }

    keyDown() {
        document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'CapsLock': {
                    e.preventDefault();
                    this.capsLock();
                    break;
                }
                case 'ShiftLeft': {
                    e.preventDefault()
                    const shift = document.querySelector('.shift_left');
                    shift.classList.add('active');
                    this.isShift = true;
                    this.shift();
                    break;
                }
                case 'ShiftRight': {
                    e.preventDefault()
                    const shift = document.querySelector('.shift_right');
                    shift.classList.add('active');
                    this.isShift = true;
                    this.shift();
                    break;
                }
                case 'Enter': {
                    e.preventDefault()
                    this.enterEvent();
                    break;
                }
                case 'Space': {
                    e.preventDefault();
                    this.spaceEvent();
                    break
                }
            }
        })
    }

    keyUp() {
        document.addEventListener('keyup', (e) => {
            switch (e.code) {
                case 'ShiftLeft': {
                    e.preventDefault();
                    this.isShift = false;
                    const shift = document.querySelector('.shift_left');
                    shift.classList.remove('active');
                    this.shift();
                    break;
                }
                case 'ShiftRight': {
                    e.preventDefault();
                    this.isShift = false;
                    const shift = document.querySelector('.shift_right');
                    shift.classList.remove('active');
                    this.shift();
                    break;
                }
            }
        })
    }

    setValue() {
        this.elements.area.value = this.value;
    }
}


const keyboard = new KeyCode();

window.addEventListener('DOMContentLoaded', () => {
    keyboard.init();
    keyboard.keyDown();
    keyboard.keyUp();
})
