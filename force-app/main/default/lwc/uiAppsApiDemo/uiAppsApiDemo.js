import { LightningElement ,wire} from 'lwc';
import{getNavItems} from 'lightning/uiAppsApi';
import FORM_FACTOR from '@salesforce/client/formFactor'
export default class UiAppsApiDemo extends LightningElement {
    data;
    pageTypeArray=[];
    tabs = ['standard-Account', 'standard-CollaborationGroup'];
    @wire(getNavItems,{
        formFactor : FORM_FACTOR,
       navItemNames : '$tabs',
        pageSize : 5
    })
    navItemHandler({data,error}){
        if(data){
            // console.log(JSON.parse(JSON.stringify(data)));
            this.pageTypeArray = data.navItems.map((item)=>{
                const {developerName,objectApiName} = item;
                return {developerName,objectApiName}
            })
        }if(error){
            console.error(error);
        }
    }
}