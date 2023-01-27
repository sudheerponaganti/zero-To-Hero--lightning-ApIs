import { LightningElement, wire } from 'lwc';
import { getListInfoByName,getListInfosByName  } from 'lightning/uiListsApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'; 
import NAME_FIELD from '@salesforce/schema/Account.Name';
export default class UiListsApiDemo extends LightningElement {
    listInfoApiItems=[];
@wire(getListInfoByName,{
    objectApiName : ACCOUNT_OBJECT.objectApiName,
    listViewApiName: 'AllAccounts'
})listinfoHandler({data,error}){
    if(data){
// console.log(JSON.parse(JSON.stringify(data)));

  this.listInfoApiItems = data.displayColumns

    }
    if(error){
 console.error(JSON.stringify(error))
    }
}


// @wire(getListInfosByName,{
//     names: ['${ACCOUNT_OBJECT.objectApiName}.AllAccounts']
// })getListInfosByNameWire({data}){
//     if(data){
//         console.log(JSON.parse(JSON.stringify(data)))
//     }
// }
}