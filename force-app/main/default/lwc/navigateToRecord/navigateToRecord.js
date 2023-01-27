import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRecord extends NavigationMixin(LightningElement) {
    navigateRecordViewHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId : '0015g000016Rd35AAC',
                objectApiName : 'Account',
                actionName : 'view'
            }
        })
    }
    navigateRecordEditHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId : '0015g000016Rd35AAC',
                objectApiName : 'Account',
                actionName : 'edit'
            }
        })
    }
    navigateRelatedListHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId : '0015g00000Hv3spAAB',
                objectApiName : 'Account',
                relationshipApiName:'Contacts',
                actionName : 'view'
            }
        })
    }
}