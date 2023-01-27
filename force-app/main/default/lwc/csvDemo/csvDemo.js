import { LightningElement ,wire} from 'lwc';
import {exportCsvFile} from 'c/utils';
import getAllAccounts from '@salesforce/apex/CsvController.getAllAccounts'
export default class CsvDemo extends LightningElement {
    accountHeaders ={
        Id :'Record Id',
        Name : 'Name',
        Industry : 'Industry',
        AnnualRevenue : 'AnnualRevenue'
    }
    accountList;
    @wire(getAllAccounts)
    accountHandler({error,data}){
        if(data){
            console.log(data)
            this.accountList = data
        }
        if(error){
            console.error(error)
        }
    }

    csvGenerator(){
        exportCsvFile(this.accountHeaders, this.accountList,'account_records')
    }

}