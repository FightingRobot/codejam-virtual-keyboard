const layoutEventCodes = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];

// Backquote, Minus, =, BracketLeft, BracketRight, Backslash, Semicolon, Quote, Comma, Period, Slash
// OSLeft, AltLeft, AltRight

const engLayoutLowerCase = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'],
    ['Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→']
];

const engLayoutUpperCase = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete'],
    ['Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→']
];

const rusLayoutLowerCase = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete'],
    ['Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→']
];

const rusLayoutUpperCase = [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|', 'Delete'],
    ['Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→']
];

function createKeyboard() {
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

function createRow() {
    let row = document.createElement('div');
    row.classList.add('row');
    document.querySelector('.buttons').append(row);
}

function fillKeyCodes(codes) {

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

function drawLayout() {
    if (localStorage.getItem('isEng') == 'true') {
        if (keyboardState.isCaps) {
            changeLayout(keyboardStateController().upperCase);
        } else {
            changeLayout(keyboardStateController().lowerCase);
        }

    } else {
        if (keyboardState.isCaps) {
            changeLayout(keyboardStateController().upperCase);
        } else {
            changeLayout(keyboardStateController().lowerCase);
        }
    }
}

function action() {
    document.addEventListener('keydown', push);
    document.addEventListener('keyup', release);
}

function langChanger() {
    if (document.querySelector('.ShiftLeft').className.includes('active') &&
        document.querySelector('.AltLeft').className.includes('active')) {

        if (localStorage.getItem('isEng') == 'true') {
            keyboardStateUpdate(false);

            if (keyboardState.isCaps) {
                changeLayout(keyboardStateController().upperCase);
            } else {
                changeLayout(keyboardStateController().lowerCase);
            }

        } else if (localStorage.getItem('isEng') == 'false') {
            keyboardStateUpdate(true);
            // keyboardState.isEng = true;

            if (keyboardState.isCaps) {
                changeLayout(keyboardStateController().upperCase);
            } else {
                changeLayout(keyboardStateController().lowerCase);
            }
        }
    }
}

function keyboardStateUpdate(lang) {

    if (localStorage.getItem('isEng') === null) {
        localStorage.setItem('isEng', true);
    } else {
        localStorage.setItem('isEng', lang);
    }

    return lang
}

let keyboardState = {
    // isEng: keyboardStateUpdate(localStorage.getItem('isEng')),
    isCaps: false,
    clicked: undefined,
}

// let keyboardState = keyboardStateUpdate(localStorage.getItem('isEng'));

function keyboardStateController() {
    let currentLayout = {
        upperCase: undefined,
        lowerCase: undefined,
    }

    if (localStorage.getItem('isEng') == 'false') {
        currentLayout.upperCase = rusLayoutUpperCase;
        currentLayout.lowerCase = rusLayoutLowerCase;
    } else {
        currentLayout.upperCase = engLayoutUpperCase;
        currentLayout.lowerCase = engLayoutLowerCase;
    }

    return currentLayout
}

function space() {
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

function enter() {
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

function shiftDown() {

    if (!keyboardState.isCaps) {
        changeLayout(keyboardStateController().upperCase);
    } else if (keyboardState.isCaps) {
        changeLayout(keyboardStateController().lowerCase);
    }

    if (event.code === undefined) {
        event.target.classList.add('active');
    } else {
        document.querySelector('.' + event.code).classList.add('active');
    }
}

function shiftUp() {

    if (!keyboardState.isCaps) {
        changeLayout(keyboardStateController().lowerCase);
    } else if (keyboardState.isCaps) {
        changeLayout(keyboardStateController().upperCase);
    }
}

function addSymbol() {
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

function capslock() {
    if (!keyboardState.isCaps) {
        changeLayout(keyboardStateController().upperCase);
        keyboardState.isCaps = true;
    } else if (keyboardState.isCaps) {
        changeLayout(keyboardStateController().lowerCase);
        keyboardState.isCaps = false;
    }

    if (event.code === undefined) {
        event.target.classList.toggle('active');
    } else {
        document.querySelector('.' + event.code).classList.toggle('active');
    }
}

function tab() {
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

function backspace() {
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

function deleteKey() {
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

function push() {
    document.querySelector('.textwindow').focus();

    if (event.code == 'Space') {
        space();
    } else if (event.code == 'Tab') {
        tab();
    } else if (event.code == 'Enter') {
        enter();
    } else if (event.code == 'CapsLock') {
        capslock();
    } else if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        shiftDown();
    } else if (event.code == 'Backspace') {
        backspace();
    } else if (event.code == 'Delete') {
        deleteKey();
    } else if (event.code == 'ControlLeft' || event.code == 'ControlRight' || event.code == 'AltLeft' ||
        event.code == 'AltRight' || event.code == 'OSLeft') {
        event.preventDefault();
        document.querySelector('.' + event.code).classList.add('active');
    } else {
        addSymbol();
    }

    langChanger();
}

function release() {

    if (event.code !== 'CapsLock') {
        document.querySelector('.' + event.code).classList.remove('active');
    }

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        shiftUp();
    }
}


function mousedown() {
    document.querySelector('.textwindow').focus();
    keyboardState.clicked = event.target;

    if (event.target.className.includes('Space')) {
        space();
    } else if (event.target.className.includes('Tab')) {
        tab();
    } else if (event.target.className.includes('Enter')) {
        enter();
    } else if (event.target.className.includes('CapsLock')) {
        capslock();
    } else if (event.target.className.includes('ShiftLeft') || event.target.className.includes('ShiftRight')) {
        shiftDown();
    } else if (event.target.className.includes('Backspace')) {
        backspace();
    } else if (event.target.className.includes('Delete')) {
        deleteKey();
    } else if (event.target.className.includes('ControlLeft') || event.target.className.includes('ControlRight') ||
        event.target.className.includes('AltLeft') || event.target.className.includes('AltRight') || event.target.className.includes('OSLeft')) {
        event.preventDefault();
        event.target.classList.add('active');
    } else if (event.target.className.includes('key ')) {
        addSymbol();
    }

    langChanger();
}

function mouseup() {
    if (!keyboardState.clicked.className.includes('CapsLock')) {
        keyboardState.clicked.classList.remove('active');
        // keyboardState.clicked = undefined;
    }

    if (keyboardState.clicked.className.includes('ShiftLeft') || keyboardState.clicked.className.includes('ShiftRight')) {
        shiftUp();
        // keyboardState.clicked = undefined;
    }


}

window.onmousedown = mousedown;
window.onmouseup = mouseup;

function changeLayout(layout) {
    let buttons = document.querySelectorAll('.key');
    layout = layout.reduce((x, y) => x.concat(y));

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = layout[i];
    }
}

createKeyboard();
fillKeyCodes(layoutEventCodes);
drawLayout()
keyboardStateUpdate(localStorage.getItem('isEng'))
action();