import { LightningElement } from 'lwc';

export default class LifeCycleDemoChild extends LightningElement {
    constructorval;
    connectedCallBackval;
    renderedCallBackVal;
    constructor(){
        super();
        this.constructorval = 'Constructor child called successfully'
    //    alert(this.constructorval)
    }

    connectedCallback(){
        this.connectedCallBackval = 'ConnectedCallback child called successfully'
    //    alert(this.connectedCallBackval)
    }
    renderedCallback(){
        this.renderedCallBackVal = 'Renderdcallback child called successfully'
        // alert(this.renderedCallBackVal)
    }
    disconnectedCallback(){
        alert('disconnectedCallback child called')
    }
}