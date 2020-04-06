class Keyboard {
    constructor() {
        this.layoutEventCodes = [
            ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
            ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
            ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
            ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
            ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
        ];

        this.engLayoutLowerCase = [
            ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'],
            ['Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, 'Enter'],
            ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
            ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→']
        ];

        this.engLayoutUpperCase = [
            ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
            ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete'],
            ['Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
            ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],
            ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→']
        ];

        this.rusLayoutLowerCase = [
            ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete'],
            ['Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
            ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
            ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→']
        ];

        this.rusLayoutUpperCase = [
            ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
            ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|', 'Delete'],
            ['Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
            ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],
            ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→']
        ];

        this.keyboardState = {
            isCaps: false,
            clicked: undefined,
        }
    }

    createKeyboard() {
        let content = document.createElement('div');
        content.classList.add('content');

        let keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        content.append(keyboard);

        let textarea = document.createElement('textarea');
        textarea.classList.add('textwindow');
        textarea.setAttribute('placeholder', 'Клавиатура для шиндошс. Для смены языка использовать левые альт + шифт')
        // textarea.value = 'Клавиатура для шиндошс. Для смены языка использовать альт + шифт';
        keyboard.append(textarea);

        let buttons = document.createElement('div');
        buttons.classList.add('buttons');
        keyboard.append(buttons);

        document.querySelector('body').append(content);
    }

    fillKeyCodes() {
        let codes = this.layoutEventCodes;
        for (let i = 0; i < codes.length; i++) {
            let row = document.createElement('div');
            row.classList.add('row');
            document.querySelector('.buttons').append(row);

            for (let code of codes[i]) {
                let key = document.createElement('div');
                key.classList.add('key');
                key.classList.add(code);

                switch (code) {
                    case 'Space':
                        key.classList.add('space');
                        break;
                    case 'Backspace':
                    case 'Enter':
                    case 'CapsLock':
                    case 'ShiftLeft':
                        key.classList.add('long');
                        break;
                    case 'ControlRight':
                    case 'ControlLeft':
                    case 'Tab':
                    case 'Delete':
                    case 'ShiftRight':
                        key.classList.add('mid');
                        break;
                }

                row.append(key);
            }
        }
    }

    changeLayout(layout) {
        let buttons = document.querySelectorAll('.key');
        layout = layout.reduce((x, y) => x.concat(y));

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = layout[i];
        }
    }

    drawLayout() {
        if (localStorage.getItem('isEng') == 'true') {
            if (this.keyboardState.isCaps) {
                this.changeLayout(this.keyboardStateController().upperCase);
            } else {
                this.changeLayout(this.keyboardStateController().lowerCase);
            }

        } else {
            if (this.keyboardState.isCaps) {
                this.changeLayout(this.keyboardStateController().upperCase);
            } else {
                this.changeLayout(this.keyboardStateController().lowerCase);
            }
        }
    }

    keyboardStateController() {
        let currentLayout = {
            upperCase: undefined,
            lowerCase: undefined,
        }

        if (localStorage.getItem('isEng') == 'false') {
            currentLayout.upperCase = this.rusLayoutUpperCase;
            currentLayout.lowerCase = this.rusLayoutLowerCase;
        } else {
            currentLayout.upperCase = this.engLayoutUpperCase;
            currentLayout.lowerCase = this.engLayoutLowerCase;
        }

        return currentLayout
    }

    keyboardStateUpdate(lang) {
        if (localStorage.getItem('isEng') === null) {
            localStorage.setItem('isEng', true);
        } else {
            localStorage.setItem('isEng', lang);
        }

        return lang
    }

    action() {
        document.addEventListener('keydown', this.push);
        document.addEventListener('keyup', this.release);
        window.onmousedown = this.mousedown;
        window.onmouseup = this.mouseup;
    }

    langChanger() {
        if (document.querySelector('.ShiftLeft').className.includes('active') &&
            document.querySelector('.AltLeft').className.includes('active')) {

            if (localStorage.getItem('isEng') == 'true') {
                this.keyboardStateUpdate(false);

                if (this.keyboardState.isCaps) {
                    this.changeLayout(this.keyboardStateController().upperCase);
                } else {
                    this.changeLayout(this.keyboardStateController().lowerCase);
                }

            } else if (localStorage.getItem('isEng') == 'false') {
                this.keyboardStateUpdate(true);

                if (this.keyboardState.isCaps) {
                    this.changeLayout(this.keyboardStateController().upperCase);
                } else {
                    this.changeLayout(this.keyboardStateController().lowerCase);
                }
            }
        }
    }

    space() {
        event.preventDefault();

        let textarea = document.querySelector('.textwindow');
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;

        if (event.code === undefined) {
            event.target.classList.toggle('active');
            textarea.setRangeText(' ', start, end, 'end');
        } else {
            document.querySelector('.' + event.code).classList.add('active');
            textarea.setRangeText(' ', start, end, 'end');
        }
    }

    enter() {
        event.preventDefault();

        let textarea = document.querySelector('.textwindow');
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;

        if (event.code === undefined) {
            event.target.classList.toggle('active');
            textarea.setRangeText('\n', start, end, 'end');
        } else {
            document.querySelector('.' + event.code).classList.add('active');
            textarea.setRangeText('\n', start, end, 'end');
        }
    }

    shiftDown() {
        if (!this.keyboardState.isCaps) {
            this.changeLayout(this.keyboardStateController().upperCase);
        } else if (this.keyboardState.isCaps) {
            this.changeLayout(this.keyboardStateController().lowerCase);
        }

        if (event.code === undefined) {
            event.target.classList.add('active');
        } else {
            document.querySelector('.' + event.code).classList.add('active');
        }
    }

    shiftUp() {
        if (!this.keyboardState.isCaps) {
            this.changeLayout(this.keyboardStateController().lowerCase);
        } else if (this.keyboardState.isCaps) {
            this.changeLayout(this.keyboardStateController().upperCase);
        }
    }

    capslock() {
        if (!this.keyboardState.isCaps) {
            this.changeLayout(this.keyboardStateController().upperCase);
            this.keyboardState.isCaps = true;
        } else if (this.keyboardState.isCaps) {
            this.changeLayout(this.keyboardStateController().lowerCase);
            this.keyboardState.isCaps = false;
        }

        if (event.code === undefined) {
            event.target.classList.toggle('active');
        } else {
            document.querySelector('.' + event.code).classList.toggle('active');
        }
    }

    tab() {
        event.preventDefault();

        let textarea = document.querySelector('.textwindow');
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;

        if (event.code === undefined) {
            event.target.classList.toggle('active');
            textarea.setRangeText('\t', start, end, 'end');
        } else {
            document.querySelector('.' + event.code).classList.add('active');
            textarea.setRangeText('\t', start, end, 'end');
        }
    }

    backspace() {
        event.preventDefault();

        if (event.code === undefined) {
            event.target.classList.add('active');
        } else {
            document.querySelector('.' + event.code).classList.add('active');
        }

        let textarea = document.querySelector('.textwindow');
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;

        if (textarea.value == '') {
            return
        }

        if (start == end) {
            textarea.setRangeText('', start - 1, end);
        } else {
            textarea.setRangeText('', start, end);
        }
    }

    deleteKey() {
        event.preventDefault();

        if (event.code === undefined) {
            event.target.classList.add('active');
        } else {
            document.querySelector('.' + event.code).classList.add('active');
        }

        let textarea = document.querySelector('.textwindow');
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;

        if (textarea.value == '') {
            return
        }

        if (start == end) {
            textarea.setRangeText('', start, end + 1);
        } else {
            textarea.setRangeText('', start, end);
        }
    }

    addSymbol() {
        event.preventDefault();
        let textarea = document.querySelector('.textwindow');
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;

        if (event.code === undefined) {
            event.target.classList.toggle('active');
            textarea.setRangeText(event.target.textContent, start, end, 'end');
        } else {
            document.querySelector('.' + event.code).classList.add('active');
            textarea.setRangeText(document.querySelector('.' + event.code).textContent, start, end, 'end');
        }
    }

    push() {
        document.querySelector('.textwindow').focus();

        if (event.code == 'Space') {
            keyboard.space();
        } else if (event.code == 'Tab') {
            keyboard.tab();
        } else if (event.code == 'Enter') {
            keyboard.enter();
        } else if (event.code == 'CapsLock') {
            keyboard.capslock();
        } else if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
            keyboard.shiftDown();
        } else if (event.code == 'Backspace') {
            keyboard.backspace();
        } else if (event.code == 'Delete') {
            keyboard.deleteKey();
        } else if (event.code == 'ControlLeft' || event.code == 'ControlRight' || event.code == 'AltLeft' ||
            event.code == 'AltRight' || event.code == 'OSLeft') {
            event.preventDefault();
            document.querySelector('.' + event.code).classList.add('active');
        } else {
            keyboard.addSymbol();
        }

        keyboard.langChanger();
    }

    release() {

        if (event.code !== 'CapsLock') {
            document.querySelector('.' + event.code).classList.remove('active');
        }

        if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
            keyboard.shiftUp();
        }
    }

    mousedown() {
        document.querySelector('.textwindow').focus();
        keyboard.keyboardState.clicked = event.target;

        if (event.target.className.includes('Space')) {
            keyboard.space();
        } else if (event.target.className.includes('Tab')) {
            keyboard.tab();
        } else if (event.target.className.includes('Enter')) {
            keyboard.enter();
        } else if (event.target.className.includes('CapsLock')) {
            keyboard.capslock();
        } else if (event.target.className.includes('ShiftLeft') || event.target.className.includes('ShiftRight')) {
            keyboard.shiftDown();
        } else if (event.target.className.includes('Backspace')) {
            keyboard.backspace();
        } else if (event.target.className.includes('Delete')) {
            keyboard.deleteKey();
        } else if (event.target.className.includes('ControlLeft') || event.target.className.includes('ControlRight') ||
            event.target.className.includes('AltLeft') || event.target.className.includes('AltRight') || event.target.className.includes('OSLeft')) {
            event.preventDefault();
            event.target.classList.add('active');
        } else if (event.target.className.includes('key ')) {
            keyboard.addSymbol();
        }

        keyboard.langChanger();
    }

    mouseup() {
        if (!keyboard.keyboardState.clicked.className.includes('CapsLock')) {
            keyboard.keyboardState.clicked.classList.remove('active');
        }

        if (keyboard.keyboardState.clicked.className.includes('ShiftLeft') || this.keyboardState.clicked.className.includes('ShiftRight')) {
            keyboard.shiftUp();
        }
    }
}

let keyboard = new Keyboard();
keyboard.createKeyboard();
keyboard.fillKeyCodes();
keyboard.drawLayout();
keyboard.keyboardStateUpdate(localStorage.getItem('isEng'));
keyboard.action();