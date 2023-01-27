import { LightningElement ,wire} from 'lwc';
import communicationsChannel from '@salesforce/messageChannel/Communications__c'
import { publish, MessageContext } from 'lightning/messageService';
export default class LmsLwcPublisher extends LightningElement {
  inputVal;

    @wire(MessageContext)
    messageContext
    inputChangeHandler(event){
this.inputVal = event.target.value;
    }

    publishHandler(){
        const msg  = { lmsData : this.inputVal}
        publish(this.messageContext,communicationsChannel,msg)

    }
}