import { LightningElement } from 'lwc';

export default class StyleOne extends LightningElement {
    dynNumber = 10;
    inpuChangeHandler(event){
            this.dynNumber= event.target.value;

    }

    get dynamicWidth(){
        if(this.dynNumber >100){
            this.dynNumber = 10;
        }
        return `width : ${this.dynNumber}%`
    }
}