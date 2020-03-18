const inpOninput = document.getElementById('inpOninput');
const inpOnchange = document.getElementById('inpOnchange');
const btnOnclick = document.getElementById('btnOnclick');
const inpOnfocusOnblur = document.getElementById('inpOnfocusOnblur');
const btnOnkeydown = document.getElementById('btnOnkeydown');

const input = document.getElementById('input');
const change = document.getElementById('change');
const click = document.getElementById('click');
const focusBlur = document.getElementById('focusBlur');
const keyEvent = document.getElementById('keyEvent');
const keyName = document.getElementById('keyName');

inpOninput.oninput = () => {
    input.textContent = inpOninput.value;
}

inpOnchange.onchange = () => {
    change.textContent = inpOnchange.value;
}

btnOnclick.onclick = () => {
    click.textContent = 'Клик';
}

inpOnfocusOnblur.onfocus = () => {
    focusBlur.textContent = 'focus';
}

inpOnfocusOnblur.onblur = () => {
    focusBlur.textContent = 'blur';
}

btnOnkeydown.onkeydown = (e) => {
    btnOnkeydown.value = '';
    keyEvent.textContent = e.code;
    keyName.textContent = 'onkeydown: ';
    changeColor();
}

function changeColor() {
    const colors = ['red', 'orange', 'blue'];
    keyEvent.style.color = colors[Math.floor(Math.random() * 3)];
}

btnOnkeydown.onkeypress = (e) => {
    btnOnkeydown.value = '';
    keyEvent.textContent = e.code;
    keyName.textContent = 'onkeypress: ';
    changeColor();
}

btnOnkeydown.onkeyup = () => {
    btnOnkeydown.value = '';
    keyEvent.textContent = '______';
    keyName.textContent = 'onkeyup: ';
}