import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToObject extends NavigationMixin(LightningElement) {

    navigateObjectHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Case',
                actionName: 'home'
            }
        })
    }

    navigateObjectListHandler(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'list'
            },
            state :{
                filterName : 'AllAccounts'
            }
        })
    }

    navigateNewRecordHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })
    }

    navigateNewRecordWithDef(){
        const defValues = encodeDefaultFieldValues({
             FirstName : 'navigation',
             LastName : 'Record',
             Salutation: 'Mr.',
             Industry : 'Apparel',
             LeadSource: 'Web'
        })
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state :{
            defaultFieldValues : defValues
            }
        })
    }
    navigateFilesHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        }) 
    }
}