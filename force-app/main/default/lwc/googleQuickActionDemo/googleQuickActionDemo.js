import { LightningElement ,api} from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';
export default class GoogleQuickActionDemo extends LightningElement {
    @api recordId
//     @api invoke(){
// window.open("https://google.com", "_blank")
//     }


    closeModal(){
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}