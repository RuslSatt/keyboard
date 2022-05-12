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
        this.activeCaps = false;
        this.activeCapsDown = false;
        this.langFlag = false;
        this.crtlActive = false;
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

        document.addEventListener('pointerdown', (e) => {
            if (e.target.classList.contains('keyboard__key')) {
                e.preventDefault();
                e.target.classList.add('active');
            }
            if (e.target.classList.contains('backspace')) {
                this.backspaceEvent();
            } else if (e.target.classList.contains('tab')) {
                this.tabEvent();
            } else if (e.target.classList.contains('caps')) {
                this.activeCaps = !this.activeCaps;
                this.activeCaps ? e.target.classList.add('active') :
                e.target.classList.remove('active');
                this.capsLock()
            } else if (e.target.classList.contains('enter')) {
                this.enterEvent()
            } else if (e.target.classList.contains('space')) {
                this.spaceEvent()
            } else if (e.target.classList.contains('lang')) {
                this.changeLang();
            } else if (e.target.classList.contains('delete')) {
                this.deleteEvent();
            }
        })

        this.keys.forEach((key) => {
            let keyboardKey = document.createElement('button');
            keyboardKey.classList.add('keyboard__key');
            keyboardKey.setAttribute('data-code', `${key.code}`);
            this.lang === 'ru' ? keyboardKey.innerHTML = key.ru : keyboardKey.innerHTML = key.en
            keysRender.append(keyboardKey);

            document.addEventListener('pointerup', () => {
                if (!keyboardKey.classList.contains('caps') && !keyboardKey.classList.contains('shift_left') &&
                !keyboardKey.classList.contains('shift_right')) {
                    keyboardKey.classList.remove('active');
                }
            })

            switch (key.code) {
                case 'Backspace': {
                    keyboardKey.classList.add('backspace');
                    break
                }
                case 'Tab': {
                    keyboardKey.classList.add('tab');
                    break
                }
                case 'CapsLock': {
                    keyboardKey.classList.add('caps');
                    break
                }
                case 'Enter': {
                    keyboardKey.classList.add('enter');
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
                    break
                }
                case 'Lang': {
                    keyboardKey.classList.add('lang');
                    break
                }
                case 'Delete': {
                    keyboardKey.classList.add('delete');
                    break
                }
                default: {
                    keyboardKey.addEventListener('pointerdown', () => {
                        const area = this.elements.area;
                        const start = area.selectionStart;
                        const end = area.selectionEnd;

                        const substring = (value) => {
                            this.value = this.value.substring(0, start)
                            + value + this.value.substring(end);
                        }

                        if (key.shiftRu.length === 1 && key.ru.length === 1)
                            if (this.lang === 'ru') {
                                if (this.isCaps) {
                                    if (this.isShift) {
                                        substring(key.shiftRu.toLowerCase())
                                    } else {
                                        substring(key.ru.toUpperCase())
                                    }
                                } else {
                                    if (this.isShift) {
                                        substring(key.shiftRu)
                                    } else {
                                        substring(key.ru)
                                    }
                                }
                            } else {
                                if (this.isCaps) {
                                if (this.isShift) {
                                        substring(key.shiftEn.toLowerCase())
                                    } else {
                                        substring(key.en.toUpperCase())
                                    }
                                } else {
                                    if (this.isShift) {
                                        substring(key.shiftEn)
                                    } else {
                                        substring(key.en)
                                    }
                                }
                            }
                            this.setValue()
                            area.focus();
                            area.selectionEnd = (start === end) ? (end + 1) : end;
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
        this.elements.area.value = this.value;
    }

    tabEvent() {
        const area = this.elements.area;
        const start = area.selectionStart;
        const end = area.selectionEnd;
        
        this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);
        this.setValue();
        area.focus();
        area.selectionEnd = end + 1;
    }

    deleteEvent() {
        const area = this.elements.area;
        const start = area.selectionStart;
        const end = area.selectionEnd;

        this.value = this.value.substring(0, start) + this.value.substring(end + 1);
        this.setValue();
        area.focus();
        area.selectionEnd = end;
    }

    backspaceEvent() {
        const area = this.elements.area;
        const start = area.selectionStart;
        const end = area.selectionEnd;

        this.value = this.value.substring(0, start > 0 && start === end ? start - 1 : start)
        + this.value.substring(end);
        this.setValue();
        area.focus();
        area.selectionEnd = start > 0 && start === end ? end - 1 : start;
    }

    enterEvent() {
        const area = this.elements.area;
        const start = area.selectionStart;
        const end = area.selectionEnd;

        this.value = this.value.substring(0, start) + '\n' + this.value.substring(end);
        this.setValue();
        area.focus();
        area.selectionEnd = end + 1;
    }

    spaceEvent() {
        const area = this.elements.area;
        const start = area.selectionStart;
        const end = area.selectionEnd;

        this.value = this.value.substring(0, start) + ' ' + this.value.substring(end);
        this.setValue();
        area.focus();
        area.selectionEnd = end + 1;
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
        keyboardKey.addEventListener('pointerleave', () => {
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
                if (this.isCaps && this.isShift || !this.isCaps && !this.isShift) {
                    key.innerText = key.innerText.toLowerCase();
                } else if (this.isCaps && !this.isShift || !this.isCaps && this.isShift) {
                    key.innerText = key.innerText.toUpperCase();
                }
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
            const area = this.elements.area;
            const start = area.selectionStart;
            const end = area.selectionEnd;
            e.preventDefault()
            this.elements.keysAll.forEach(key => {
                if (key.dataset.code === e.code) {
                    key.classList.add('active');
                
                    this.value = this.value.substring(0, start)
                    + key.innerText + this.value.substring(end);
                    this.setValue()
                    area.focus();
                    area.selectionEnd = (start === end) ? (end + 1) : end;
                }
            })
        })
    }

    keyDown() {
        document.addEventListener('keydown', (e) => {
            this.elements.keysAll.forEach(key => {
                if (e.code === key.dataset.code) {
                    key.classList.add('active');
                }
            })
            if (e.code === 'CapsLock') {
                e.preventDefault();
                if (!this.activeCapsDown) {
                    this.capsLock();
                    this.activeCapsDown = true;
                }
            } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
                e.preventDefault();
                this.isShift = true;
                this.shift();
            } else if (e.code === 'Enter') {
                e.preventDefault();
                this.enterEvent();
            } else if (e.code === 'Space') {
                e.preventDefault();
                this.spaceEvent();
            } else if (e.code === 'AltLeft') {
                e.preventDefault();
                this.langFlag = true;
            } else if (e.code === 'AltRight') {
                e.preventDefault();
            } else if (e.code === 'ControlLeft') {
                e.preventDefault();
                if (!this.crtlActive) {
                    if (this.langFlag) {
                        this.changeLang();
                        this.crtlActive = true;
                    }
                }
            } else if (e.code === 'Backspace') {
                e.preventDefault();
                this.backspaceEvent();
            } else if (e.code === 'Delete') {
                e.preventDefault();
                this.deleteEvent();
            } else if (e.code === 'Tab') {
                e.preventDefault();
                this.tabEvent();
            }
        })
    }

    keyUp() {
        document.addEventListener('keyup', (e) => {
            this.elements.keysAll.forEach(key => {
                if (e.code === key.dataset.code) {
                    key.classList.remove('active');
                } 
            })
            if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
                this.isShift = false;
                this.shift();
            } else if (e.code === 'AltLeft') {
                this.langFlag = false;
            } else if (e.code === 'ControlLeft') {
                this.crtlActive = false;
            } 
            switch (e.code) {
                case 'CapsLock': {
                    const caps = document.querySelector('.caps');
                    this.activeCapsDown = false;
                    this.activeCaps = !this.activeCaps;
                    this.activeCaps ? caps.classList.add('active') : 
                    caps.classList.remove('active') 
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