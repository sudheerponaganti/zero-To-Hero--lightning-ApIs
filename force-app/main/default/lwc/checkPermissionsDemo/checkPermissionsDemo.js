import { LightningElement,api} from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData'
import hasCustomPermission from '@salesforce/customPermission/check_custom_permission'
import FORM_FACTOR from '@salesforce/client/formFactor'
import ID from '@salesforce/user/Id'
import IS_GUEST from '@salesforce/user/isGuest'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CheckPermissionsDemo extends LightningElement {

    permissions ={
        hasViewPerm : hasViewAllData,
        hasCustomPerm : hasCustomPermission
    }
    formFactor = FORM_FACTOR;
    userId = ID;
    isGuest = IS_GUEST;

    showToastHandler(){
const evt = new ShowToastEvent({
    title:'Success!',
    message : '{0} toast message Triggered {1}',
    variant:'success',
    messageData:[
        'salesforce',{
            url:'https://google.com',
            label:'click here!'
        }
    ],
    mode:'sticky'
})

this.dispatchEvent(evt)
    }


    @api heading;
    @api age;
    @api levels;
}