import { LightningElement,wire} from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunitiesByStageName';
export default class ChartJsLWC extends LightningElement {
chartData=[];
chartLabels=[];
    @wire(getOpportunities)
    opportunityHandler({error,data}){
        if(data){
            // console.log(data)
            const result= data.reduce((json,item)=>({...json,[item.StageName]:(json[item.StageName]|0)+1}),{});
            if(Object.keys(result).length){
                  this.chartLabels= Object.keys(result)
                  this.chartData= Object.values(result)
            }
        }
        if(error){
            console.error(error)
        }
    }
}