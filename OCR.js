export class OCR{
    constructor(){
        this.isDone = false;
        this.text = '';
    }
    Recongize(lang, pic, textID){
        console.log('starting...');
        Tesseract.recognize(
        pic,
        lang,
        { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
        this.text = text;
        this.isDone = true;
        document.getElementById(textID).innerHTML = this.text;
        })
    }
    reset(){
        this.isDone = false;
        this.text = '';
    }
    running(){
        return !this.isDone;
    }
}