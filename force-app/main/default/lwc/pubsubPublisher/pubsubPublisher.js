import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubPublisher extends LightningElement {
publishedMsg;
    nameChangeHandler(event){
 this.publishedMsg = event.target.value
    }
    publishHandler(){
const datamsg = {
    pubMsg  : this.publishedMsg
}

pubsub.publish('pubsubChannel',datamsg)
    }
}