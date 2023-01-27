import { LightningElement ,wire} from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
export default class FilterAndSortingDemo extends LightningElement {
headData = ["Id","FirstName","LastName","Email"];
fullData=[] ;
filteredData=[];
timer;
filterBy="LastName";
sortBy = "LastName";
sortDirection = 'asc';
@wire(getContacts)
contactListHandler({error,data}){
    if(data){
        // console.log(data)
this.fullData = data;
this.filteredData = data;
    }
    if(error){
        console.error(error)
    }
}

inputChangeHandler(event){
const {value} = event.target;
window.clearTimeout(this.timer)
if(value.trim()){
    this.timer= window.setTimeout(()=>{
        this.filteredData = this.fullData.filter(eachObj=>{
            if(this.filterBy=='All'){
                /* Below Logic is for fiter each and every property of object */
                return Object.keys(eachObj).some(key=>{
                        return eachObj[key].toLowerCase().includes(value);
                    })
            }else{
                /* Below Logic is for fiter selected Fields */
                const val = eachObj[this.filterBy]? eachObj[this.filterBy] : ''
                return val.toLowerCase().includes(value);
            }
             
        })
    },500)
 
}else{
    this.filteredData = [...this.fullData]
}

}

get filterByOptions() {
    return [
        { label: 'All', value: 'All' },
        { label: 'Id', value: 'Id' },
        { label: 'FirstName', value: 'FirstName' },
        { label: 'LastName', value: 'LastName' },
        { label: 'Email', value: 'Email' },
    ];
}

get sortByOptions() {
    return [
        { label: 'Id', value: 'Id' },
        { label: 'FirstName', value: 'FirstName' },
        { label: 'LastName', value: 'LastName' },
        { label: 'Email', value: 'Email' },
    ];
}

filterByHandler(event){
    this.filterBy = event.detail.value;
}

sortByHandler(event){
this.sortBy = event.detail.value;
this.filteredData = [...this.sortByData(this.filteredData)]
}

sortByData(data){
    const cloneData = [...data];
    cloneData.sort((a,b)=>{
        if(a[this.sortBy] === b[this.sortBy]){
            return 0;
        }else{
            return this.sortDirection ==='desc'? 
            a[this.sortBy] > b[this.sortBy] ? -1 : 1 :
            a[this.sortBy] < b[this.sortBy] ? -1 : 1
        }
    })
    return cloneData;
}

}