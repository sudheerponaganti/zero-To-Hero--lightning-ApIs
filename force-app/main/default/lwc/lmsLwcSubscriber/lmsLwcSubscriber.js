import { LightningElement, wire } from 'lwc';
import communicationsChannel from '@salesforce/messageChannel/Communications__c'
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService';
export default class LmsLwcSubscriber extends LightningElement {
    subscription= null
subscribedMsg;
    @wire(MessageContext)
    messageContext

    connectedCallback() {
        this.subscribeToMessageChannel();
        // console.log('called')
    }
    subscribeToMessageChannel() {
        if (!this.subscription) {
        this.subscription = subscribe(this.messageContext, communicationsChannel,
            (message) => this.handleMessage(message),
            { scope: APPLICATION_SCOPE })

        }
    }
    handleMessage(msg){
this.subscribedMsg = msg.lmsData;
    }
    unsubscribeHandler() {
        unsubscribe(this.subscription);
        this.subscription=null
    }


    disconnectedCallback(){
        this.unsubscribeHandler();
    }
}