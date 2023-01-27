import { LightningElement,api} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import ID_FIELD from '@salesforce/schema/Account.Id';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordEditFormDemo extends LightningElement {
idCaptured;
inputNameVal;
showFields=false;
 @api recordId   
 @api objectApiName
 fields = [NAME_FIELD,INDUSTRY_FIELD,REVENUE_FIELD,RATING_FIELD];
 idField = ID_FIELD
 nameField=NAME_FIELD
 industryField=INDUSTRY_FIELD
 revenueField=REVENUE_FIELD
 ratingField=RATING_FIELD

 successHandler(event){
 this.idCaptured = event.detail.id;
//  const payload = event.detail;
//  console.log(JSON.parse(JSON.stringify(payload)));
    const evt = new ShowToastEvent({
        title:'Account Created',
        message : 'recordId'+ event.detail.id,
        variant: "success"
    })
    this.dispatchEvent(evt)
 }


submitHandler(event){
event.preventDefault();
const nameComp = this.template.querySelector('.nameClass')
const val= nameComp.value;
if(!val.includes('Australia')){
nameComp.setCustomValidity("Name should contain Australia");
}else{
    nameComp.setCustomValidity("")
    const fields = event.detail.fields;
    fields.AnnualRevenue = '600000';
    fields.Name = val;
    this.template.querySelector('lightning-record-edit-form').submit(fields);
}
 nameComp.reportValidity();
 }


 get idValue(){
    return this.idCaptured
 }
 nameChangeHandler(event){
 this.inputNameVal = event.target.value;
//  console.log(this.inputNameVal)
 }

 handleReset(){
    const inputFields = this.template.querySelectorAll('lightning-input-field');
    if(inputFields){
        inputFields.forEach(fieldItem=>{
            fieldItem.reset();
        })
    }
 }
 toggleFields(){
this.showFields = !this.showFields
 }
}