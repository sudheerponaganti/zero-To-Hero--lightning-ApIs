import { LightningElement } from 'lwc';

export default class CpCommunicationParent extends LightningElement {
    showChildModal = false;
    modalOpenHandler(){
 this.showChildModal = true;
    }
    closeModalHandler(event){
        // console.log(event.detail.modalValue)
        this.showChildModal = event.detail.modalValue;  
    }
    cardHandler(){
        alert('event bubbled to parent card')
    }
}