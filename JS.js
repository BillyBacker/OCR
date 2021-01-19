import {OCR} from './OCR.js'


let thread = new OCR();
thread.recongize('eng', 'TestData/011t.png', 'text').then((Text) => {
    console.log(Text);
    document.getElementById('text').innerHTML = Text;
});

