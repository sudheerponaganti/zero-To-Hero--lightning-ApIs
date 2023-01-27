import { LightningElement } from 'lwc';

export default class StyleTwo extends LightningElement {
    isLoaded = false;
    renderedCallback(){
if(this.isLoaded) return ;
const styleElem = document.createElement('style');
styleElem.innerText =`c-style-two .slds-button{
    background-color:black;
   color : white;

}` 

this.template.querySelector('lightning-button').appendChild(styleElem)
    }
}