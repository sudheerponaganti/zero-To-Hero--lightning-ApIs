import { LightningElement,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LightningRecordFormDemo extends LightningElement {
showFields=false
 @api recordId   
 @api objectApiName
 fields = [NAME_FIELD,INDUSTRY_FIELD,REVENUE_FIELD,RATING_FIELD];
 submitHandler(event){
event.preventDefault();
const fields = event.detail.fields;
 fields.Active__c = 'Yes';
//  fields.Name = 'testing...'
this.template.querySelector('lightning-record-form').submit(fields);
 }
 successHandler(event){
const evt = new ShowToastEvent({
    title : 'Account Created',
    message:'Record Id'+ event.detail.id,
    variant : 'success',
})
this.dispatchEvent(evt)
 }

 toggleFields(){
    this.showFields = !this.showFields
     }
     
}