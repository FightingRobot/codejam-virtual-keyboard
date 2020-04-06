function createKeyboard() {
    let content = document.createElement('div');
    content.classList.add('content');

    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    content.append(keyboard);

    let textarea = document.createElement('textarea');
    textarea.classList.add('textwindow');
    textarea.setAttribute('placeholder', 'Клавиатура для шиндошс. Для смены языка использовать альт + шифт')
    // textarea.value = 'Клавиатура для шиндошс. Для смены языка использовать альт + шифт';
    keyboard.append(textarea);

    let keys = document.createElement('div');
    keys.classList.add('keys');
    keyboard.append(keys);

    document.querySelector('body').append(content);
}

function createRow() {
    let row = document.createElement('div');
    row.classList.add('row');
    document.querySelector('.keys').append(row);
}

function fillKeyCodes(codes) {

    for (let i = 0; i < codes.length; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        document.querySelector('.keys').append(row);

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

function changeLayout(layout) {
    let keys = document.querySelectorAll('.key');
    layout = layout.reduce((x, y) => x.concat(y));

    for (let i = 0; i < keys.length; i++) {
        keys[i].innerHTML = layout[i];
    }
}

function action() {
    document.addEventListener('keydown', push);
    document.addEventListener('keyup', release);
}

function push() {
    document.querySelector('.textwindow').focus();

    let pushed = document.querySelector('.' + event.code);


    if (event.code == 'CapsLock' && pushed.className.includes('active')) {
        pushed.classList.remove('active');
        changeLayout(engLayoutLowerCase);
    } else if (event.code == 'CapsLock') {
        pushed.classList.add('active');
        changeLayout(engLayoutUpperCase);
    } else if (event.code == 'Tab') {
        event.preventDefault();
        pushed.classList.add('active');
        document.querySelector('.textwindow').value += '\t';
    } else {
        pushed.classList.add('active');
    }

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        changeLayout(engLayoutUpperCase);
    }
}

function release() {
    if (event.code !== 'CapsLock') {
        document.querySelector('.' + event.code).classList.remove('active');
    }

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        changeLayout(engLayoutLowerCase);
    }
}

const layoutEventCodes = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', '=', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];

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

createKeyboard();
fillKeyCodes(layoutEventCodes);
changeLayout(engLayoutLowerCase);
action();