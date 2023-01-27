import { LightningElement,wire } from 'lwc';
import { getRelatedListCount,getRelatedListInfo ,getRelatedListInfoBatch ,getRelatedListRecords,getRelatedListRecordsBatch ,getRelatedListsInfo  } from 'lightning/uiRelatedListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class UiRelatedListApiDemo extends LightningElement {
    responseData;
    displayColumns;
    batchResults;
    relatedRecords;
    @wire(getRelatedListCount, {
        parentRecordId: '0015g00000Hv3spAAB', // Account Id 
        relatedListId: 'Opportunities',
    })countInfo({ error, data }) {
        if (data) {
            // console.log(JSON.parse(JSON.stringify(data)))
            this.responseData = data;
        } else if (error) {
          console.error(error)

        }
    }



    @wire(getRelatedListInfo, {
        parentObjectApiName: ACCOUNT_OBJECT.objectApiName,
        relatedListId: 'Contacts',
    })listInfo({ error, data }) {
        if (data) {
            // console.log(JSON.parse(JSON.stringify(data)))
            this.displayColumns = data.displayColumns;
        } else if (error) {
          console.log(error)
        }
    }

    @wire(getRelatedListInfoBatch, {
        parentObjectApiName: ACCOUNT_OBJECT.objectApiName,
        relatedListNames: ['Contacts', 'Opportunities'],
    })batchListInfo({ error, data }) {
        if (data) {
            // console.log('the data is',JSON.parse(JSON.stringify(data)))
            this.batchResults = data.results;
        } else if (error) {
            console.error(error)
        }
    }

    @wire(getRelatedListRecords, {
        parentRecordId: '0015g00000Hv3spAAB',
        relatedListId: 'Contacts',
        fields: ['Contact.Id','Contact.Name'],
        sortBy: ['Contact.Name']
        // where: "{ and: [{ Name: { like: \"Davis%\" }}] }"
    })listRecordInfo({ error, data }) {
        if (data) {
            // console.log(JSON.parse(JSON.stringify(data)))
            this.relatedRecords = data.records;
           
        } if (error) {
            console.error(error)
        }
    }

    @wire(getRelatedListRecordsBatch, {
        parentRecordId: '0015g00000Hv3spAAB',
        relatedListParameters: [
            {
                relatedListId: 'Contacts',
                fields: ['Contact.Name','Contact.Id'],
                sortBy: ['Contact.Name']
            },
            {
                relatedListId: 'Opportunities',
                fields: ['Opportunity.Name', 'Opportunity.Amount'],
                sortBy: ['Opportunity.Amount']
            }
        ]
    })batchRecordInfo({ error, data }) {
        if (data) {
            // console.log(JSON.parse(JSON.stringify(data)))
           
        } else if (error) {
          console.error(error)
        }
    }

    @wire(getRelatedListsInfo, {
        parentObjectApiName: ACCOUNT_OBJECT.objectApiName
    })batchListsInfo({ error, data }) {
        if (data) {
            //  console.log(JSON.parse(JSON.stringify(data)))
           
        } else if (error) {
            console.error(error)
        }
    }

}