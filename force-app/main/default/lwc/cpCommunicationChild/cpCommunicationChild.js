import { LightningElement } from 'lwc';

export default class CpCommunicationChild extends LightningElement {
    closeModalHandler(){
        const evt = new CustomEvent('closemodal',{
            bubbles:true,
            detail:{
                modalValue :false
                  }
});
        this.dispatchEvent(evt)
    }

    footerHandler(){
        alert('event bubbled to footer')
    }
    sectionHandler(){
        alert('event bubbled to section')
    }
}