import { cube } from './math.js';
import './style.css';
function component() {
    console.log('------------', process.env.NODE_ENV);
    var element = document.createElement('pre');
    element.innerHTML = ['改变 webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');
    return element;
}

document.body.appendChild(component());