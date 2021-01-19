export class OCR{
    constructor(){
        this.isDone = false;
        this.text = '';
    }
    async recongize(lang, pic){
        console.log('starting...');
        var output = await Tesseract.recognize(
        pic,
        lang,
        { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
            this.text = text;
            this.isDone = true;
            console.log(text);
            return Promise.resolve(text);
        })
        return output;
    }
    reset(){
        this.isDone = false;
        this.text = '';
    }
    running(){
        return !this.isDone;
    }
}