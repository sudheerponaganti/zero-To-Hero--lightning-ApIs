import { LightningElement,wire} from 'lwc';
import { deleteRecord ,createRecord ,updateRecord ,getRecordCreateDefaults,getRecord,getRecords , getFieldValue,getFieldDisplayValue,getRecordUi} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CON_NAME_FIELD from '@salesforce/schema/Contact.Name';
import CON_PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import { getListUi  } from 'lightning/uiListApi'; 
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import CREATED_FIELD from '@salesforce/schema/Account.CreatedDate';
import EXP_FIELD from '@salesforce/schema/Account.SLAExpirationDate__c';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
const fields = [NAME_FIELD,REVENUE_FIELD, CREATED_FIELD, EXP_FIELD];
const listViewColumns =[
  { label: 'Id', fieldName: 'Id' },
  { label: 'Name', fieldName: 'Name',editable:true},
  { label: 'Type', fieldName: 'Type', editable :true },
  { label: 'Phone', fieldName: 'Phone', type:'tel',editable:true}
];
export default class UiRecordApiDemo extends LightningElement {
  listViewData;
  listViewColumns= listViewColumns;
multiRecordsVals;
   recId;
   revenue;
   expiration;
   created;
   acctName;
 recInput = {
    apiName: "Account",
    fields: {
    Name :"Test Name "
    }
  }
@wire(getRecordUi,{recordIds : '0015g00000Hv3srAAB', layoutTypes:['Compact','Full'],modes:['Create','Edit','View']})
getRecordUiHandler({data,error}){
  if(data){
    console.log(data);
  }
}
  @wire(getRecord,{recordId : '0015g00000Hv3srAAB',fields})
  getRecordHandler({data,error}){
    if(data){
  // console.log(data);
 this.revenue=getFieldDisplayValue(data,REVENUE_FIELD);
//  console.log(getFieldValue(data,REVENUE_FIELD))
//  console.log(getFieldDisplayValue(data,REVENUE_FIELD));
 this.expiration=getFieldDisplayValue(data,EXP_FIELD);
 this.created=getFieldDisplayValue(data,CREATED_FIELD);
 this.acctName=getFieldValue(data,NAME_FIELD);
    }
    if(error){
        console.error(error)
    }
  }
  
    createRecHandler(){
        createRecord(this.recInput).then((result)=>{
            this.recId = result.id;
  this.showToast('record created successfully!!!', `account with Id ${result.id} created`,'success')
        }).catch((error)=>{
            this.showToast('error during record creation!!!', `error occred with ${error.message} `,'error')
        })
        
    }

    deleteRecHandler(){
        // console.log(this.recId)
        deleteRecord (this.recId).then(()=>{
      this.showToast('record deleted successfully!!!', 'account Is deleted','success')
        }).catch((error)=>{
            this.showToast('error during record deletion!!!', `error occred with ${error.message} `,'error')
        })
    }

  
    updateRecHandler(){
      updateRecord ({
        fields :{
          Id : this.recId,
          Name : "Test Name 222",
          Type : 'Test Type',
          Industry : 'Test Industry'
        }
      }).then(()=>{
            this.showToast('record updated successfully!!!', 'account Is updated','warning')
              }).catch((error)=>{
                  this.showToast('error during record updated!!!', `error occred with ${error.message} `,'error')
              })
    }
    @wire(getRecordCreateDefaults, { objectApiName: CONTACT_OBJECT })
    contactCreateDefaults({data,error}){
        if(data){
            //  console.log(data)
        }if(error){
            console.log(error)
        }
    };
  

    showToast(title,message,variant){
   this.dispatchEvent(new ShowToastEvent({
    title,message,variant
   })
   )
    }


    @wire(getRecords,{
      records: [
        {
          recordIds: ['0035g00000p8QriAAE','0035g000008m2mMAAQ'],
          fields: [CON_NAME_FIELD],
          optionalFields: [CON_PHONE_FIELD]
        },
        {
          recordIds: ['0015g00000Hv3srAAB','0015g00000Hv3smAAB'],
          fields: [NAME_FIELD,REVENUE_FIELD]
        },
    ]
    }) wiredRecords({data,error}){
      if(data){
        // console.log(data)
        this.multiRecordsVals = data.results;
      }
      if(error){
        console.log(error)
      }
    }

    @wire(getListUi, { objectApiName: ACCOUNT_OBJECT, listViewApiName: 'AllAccounts',sortBy: NAME_FIELD,pageSize: 5})
    listViewHandler({data,error}){
      if(data){
        // console.log(data)
        this.listViewData = data.records.records.map((item)=>{
  return {
    Id : this.getFieldVal(item,"Id"),
    Name : this.getFieldVal(item,"Name"),
    Type : this.getFieldVal(item,"Type"),
    Phone : this.getFieldVal(item,"Phone")
  }
}) 
      }
      if(error){
        console.log(error)
      }
    }

    
handleSaveHandler(event){
  //  console.log(event.detail.draftValues)
const recordInputs = event.detail.draftValues.map((draft)=>{
const fields = {...draft}
return {fields}
});

const promises = recordInputs.map(recInput=>updateRecord(recInput))
Promise.all(promises).then(()=>{
  this.showToast('record updated successfully!!!', 'account Is updated','warning')
 
}).catch((error)=>{
    this.showToast('error during record updated!!!', `error occred with ${error.message} `,'error')
   
})

    }

    getFieldVal(item,field){
      return item.fields[field].value;
    }

    }