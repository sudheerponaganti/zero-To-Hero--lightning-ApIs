import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubSubscriber extends LightningElement {
subscribedMsg;
    connectedCallback(){
        this.callsubscriber();
       
    }
    callsubscriber(){
        pubsub.subscribe('pubsubChannel',this.msgHandler)
            
    }
   msgHandler = (msg)=>{
    // console.log(msg)
    this.subscribedMsg = msg.pubMsg
}

unsubscribeHandler(){
    pubsub.unsubscribe('pubsubChannel',this.msgHandler)
}
}