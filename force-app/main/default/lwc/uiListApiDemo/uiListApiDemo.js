import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name'
export default class UiListApiDemo extends LightningElement {
listInfoApiItems=[];
pageToken = null;
nextPageToken = null;
previousPageToken = null;
@wire(getListUi,{
    objectApiName: CONTACT_OBJECT,
    listViewApiName: 'AllContacts',
    sortBy: NAME_FIELD,
    pageSize: 5,
    pageToken: '$pageToken'
})listinfoHandler({data,error}){
    if(data){
// console.log(JSON.parse(JSON.stringify(data)))
  this.listInfoApiItems = data.records.records;
  this.nextPageToken = data.records.nextPageToken;
  this.previousPageToken = data.records.previousPageToken;
    }
    if(error){
 console.error(JSON.stringify(error))
    }
}

handlePreviousPage(){
  this.pageToken = this.previousPageToken;
}

handleNextPage(){
  this.pageToken = this.nextPageToken;
}

    
}