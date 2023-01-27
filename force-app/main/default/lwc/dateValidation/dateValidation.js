import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
    startDate
    endDate
    error;
    success;
    dateChangeHandler(event){
const {name,value} = event.target;
this[name] = value;
    }

    submitHandler(){
       if(this.dateValidator(this.startDate,this.endDate)){
        this.success = 'Dates are Valid'
       }else{
     this.error = 'please enter Valid start and end Dates'
       }
    }

    dateValidator(startDate,endDate){
        return new Date(startDate).getTime() < new Date(endDate).getTime()
    }
}