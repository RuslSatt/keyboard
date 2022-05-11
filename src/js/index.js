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
        this.lang = 'ru';
        this.cursor = 0;
    }

    init() {
        this.getLocalStorage();
        this.elements.keyboard = document.createElement('div');
        this.elements.keyboardContainer = document.createElement('div');

        this.elements.keyboard.classList.add('keyboard');
        this.elements.keyboardContainer.classList.add('keyboard__container');

        document.body.append(this.elements.keyboard);
        this.elements.keyboardContainer.append(this.render())
        this.elements.keyboard.append(this.elements.keyboardContainer);

        this.elements.keysAll = document.querySelectorAll('.keyboard__key');
        this.elements.area = document.querySelector('textarea');

        this.elements.area.value = this.value;
    }

    render() {
        const keysRender = document.createDocumentFragment();

        this.keys.forEach((key) => {
            let keyboardKey = document.createElement('button');

            keyboardKey.classList.add('keyboard__key')

            this.lang === 'ru' ? keyboardKey.innerHTML = key.ru : keyboardKey.innerHTML = key.en

            keysRender.append(keyboardKey);

            switch (key.code) {
                case 'Backspace': {
                    keyboardKey.classList.add('backspace');
                    keyboardKey.setAttribute('data-code', `${key.code}`)

                    keyboardKey.addEventListener('pointerdown', (e) => {
                        e.preventDefault()
                        keyboardKey.classList.add('active');
                        this.backspaceEvent();
                    })
                    keyboardKey.addEventListener('pointerup', () => {
                        keyboardKey.classList.remove('active');
                    })
                    break
                }
                case 'Tab': {
                    keyboardKey.classList.add('tab');
                    keyboardKey.setAttribute('data-code', `${key.code}`)
                    keyboardKey.addEventListener('click', () => {
                        this.elements.area.onfocus
                    })
                    break
                }
                case 'Backslash': {
                    keyboardKey.classList.add('backslash');
                    keyboardKey.setAttribute('data-code', `${key.code}`)
                    break
                }
                case 'CapsLock': {
                    keyboardKey.classList.add('caps');
                    keyboardKey.setAttribute('data-code', `${key.code}`)
                    keyboardKey.addEventListener('click', () => {
                        this.capsLock()
                    })
                    break
                }
                case 'Enter': {
                    keyboardKey.classList.add('enter');
                    keyboardKey.setAttribute('data-code', `${key.code}`)
                    keyboardKey.addEventListener('click', () => {
                        this.enterEvent()
                    })
                    break
                }
                case 'ShiftLeft': {
                    keyboardKey.classList.add('shift_left');
                    keyboardKey.setAttribute('data-code', `${key.code}`)
                    this.shiftEvent(keyboardKey);
                    break
                }
                case 'ShiftRight': {
                    keyboardKey.classList.add('shift_right');
                    keyboardKey.setAttribute('data-code', `${key.code}`)
                    this.shiftEvent(keyboardKey);
                    break
                }
                case 'Space': {
                    keyboardKey.classList.add('space');
                    keyboardKey.setAttribute('data-code', `${key.code}`)
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
                    keyboardKey.setAttribute('data-code', `${key.code}`)
                    break
                }
                case 'Delete': {
                    keyboardKey.addEventListener('pointerdown', () => {
                        this.value = '';
                        this.setValue();
                    })
                    keyboardKey.classList.add('delete');
                    keyboardKey.setAttribute('data-code', `${key.code}`)
                    break
                }
                default: {
                    keyboardKey.addEventListener('pointerdown', () => {
                        if (key.shiftRu.length === 1 && key.ru.length === 1)
                            if (this.lang === 'ru') {
                                if (this.isCaps) {
                                    if (this.isShift) {
                                        this.value += key.shiftRu.toLowerCase();
                                    } else {
                                        this.value += key.ru.toUpperCase();
                                    }
                                } else {
                                    if (this.isShift) {
                                        this.value += key.shiftRu;
                                    } else {
                                        this.value += key.ru;
                                    }
                                }
                            } else {
                                if (this.isCaps) {
                                    if (this.isShift) {
                                        this.value += key.shiftEn.toLowerCase();
                                    } else {
                                        this.value += key.en.toUpperCase();
                                    }
                                } else {
                                    if (this.isShift) {
                                        this.value += key.shiftEn;
                                    } else {
                                        this.value += key.en;
                                    }
                                }
                            }
                        this.setValue();
                    })
                    keyboardKey.setAttribute('data-code', `${key.code}`)
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
        this.lang === 'ru' ?
            this.lang = 'en' : this.lang = 'ru'
        this.setLocalStorage();

        if (this.lang === 'en') {
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

    setValue() {
        console.log(this.elements.area.selectionStart)
        this.elements.area.selectionStart = this.cursor;
        this.elements.area.value = this.value;
    }

    backspaceEvent() {
        this.value = this.value.substring(0, this.value.length - 1);
        this.setValue();
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
                if (this.lang === 'ru') {
                    this.upperCaseRu();
                    this.lowerCaseText();
                } else {
                    this.upperCaseEn();
                    this.lowerCaseText();
                }
            } else {
                if (this.lang === 'ru') {
                    this.lowerCaseRu();
                    this.upperCaseText();
                } else {
                    this.lowerCaseEn();
                    this.upperCaseText();
                }
            }
        } else {
            if (this.isShift) {
                if (this.lang === 'ru') {
                    this.upperCaseRu();
                } else {
                    this.upperCaseEn();
                }
            } else {
                if (this.lang === 'ru') {
                    this.lowerCaseRu();
                } else {
                    this.lowerCaseEn();
                }
            }
        }
    }

    keyPress() {
        document.addEventListener('keypress', (e) => {

            const start = this.elements.area.selectionStart
            const end = this.elements.area.selectionEnd

            e.preventDefault()
            this.elements.keysAll.forEach(key => {
                if (key.dataset.code === e.code) {
                    key.classList.add('active');
                    this.value += key.innerText;
                    this.setValue()
                }
            })
        })
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
                case 'AltLeft': {
                    document.addEventListener('keyup', (e) => {
                        if (e.code === 'ShiftLeft') {
                            this.changeLang();
                        }
                    })
                    break
                }
                case 'Backspace': {
                    e.preventDefault()
                    const backspace = document.querySelector('.backspace');
                    backspace.classList.add('active');
                    this.backspaceEvent();
                    break
                }
                case 'Delete': {
                    this.value = '';
                    this.setValue();
                    break
                }
                default: {
                    this.elements.keysAll.forEach(key => {
                        if (key.dataset.code === e.code) {
                            key.classList.add('active');
                        }
                    })
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
                case 'Backspace': {
                    const backspace = document.querySelector('.backspace');
                    backspace.classList.remove('active');
                    break;
                }
                default: {
                    this.elements.keysAll.forEach(key => {
                        if (key.dataset.code === e.code) {
                            key.classList.remove('active');
                        }
                    })
                    break;
                }
            }
        })
    }

    setLocalStorage() {
        localStorage.setItem('lang', this.lang);
    }

    getLocalStorage() {
        if (localStorage.getItem('lang')) {
            this.lang = localStorage.getItem('lang');
        }
    }
}


const keyboard = new KeyCode();

window.addEventListener('DOMContentLoaded', () => {
    keyboard.init();
    keyboard.keyDown();
    keyboard.keyUp();
    keyboard.keyPress();
})
