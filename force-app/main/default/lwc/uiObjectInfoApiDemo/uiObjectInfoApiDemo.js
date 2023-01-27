import { LightningElement ,wire} from 'lwc';
import { getObjectInfo,getObjectInfos,getPicklistValues,getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
export default class UiObjectInfoApiDemo extends LightningElement {
    singleObjectInfo={};
    multiObjectInfos=[];
    singleFieldPickVals=[];
    multiFieldPickVals;
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectsInfoHandler({data,error}){
        if(data){
            
            this.singleObjectInfo = data;
            // console.log(this.singleObjectInfo);
            
        }
        if(error){
            console.log(error)
        }
    }

    @wire(getObjectInfos, { objectApiNames: [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]})
    objectsInfosHandler({data,error}){
        if(data){
            
            this.multiObjectInfos = data.results;
            // console.log(data);
        }
        if(error){
            console.log(error)
        }
    }

    @wire(getPicklistValues,{ recordTypeId: '$singleObjectInfo.defaultRecordTypeId',fieldApiName: INDUSTRY_FIELD })
       pickListValueHandler({error,data}){
        if(data){
            // console.log(data)
            this.singleFieldPickVals= data.values.slice(0,5);
        }
        if(error){
            console.error(error)
        }
    }

     @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT, recordTypeId: '$singleObjectInfo.defaultRecordTypeId' })
       pickListValuesRecordTypeHandler({error,data}){
        if(data){
            let ratingvalues =data.picklistFieldValues.Rating.values;
            let IndustryValues = data.picklistFieldValues.Industry.values.slice(0,3);
            this.multiFieldPickVals =  ratingvalues.map((item,index)=>{
                 const rateValue = item.value
                 const indValue = IndustryValues[index].value
                 return {rateValue,indValue}
            })
            // console.log(data)
        }
        if(error){
            console.error(error)
        }
    }
}