import { LightningElement,api} from 'lwc';

export default class PcCommunicationChild extends LightningElement {
    @api  primitiveVal
    @api carouselDetails
    @api progressVal =10;


    @api handleProgressValue(){
        this.progressVal = Number(this.progressVal)=== 100 ? 0 : Number(this.progressVal)+10;
    }
}