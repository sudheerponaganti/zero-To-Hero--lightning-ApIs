import { LightningElement ,api} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import ID_FIELD from '@salesforce/schema/Account.Id';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordViewFormDemo extends LightningElement {
    @api recordId
    @api objectApiName
    showFields=false
    fields = [NAME_FIELD,INDUSTRY_FIELD,REVENUE_FIELD,RATING_FIELD];
    idField = ID_FIELD
 nameField=NAME_FIELD
 industryField=INDUSTRY_FIELD
 revenueField=REVENUE_FIELD
 ratingField=RATING_FIELD

 toggleFields(){
this.showFields = !this.showFields
 }
}