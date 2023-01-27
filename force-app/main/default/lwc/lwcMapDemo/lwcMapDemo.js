import { LightningElement,wire} from 'lwc';
import getMapData from '@salesforce/apex/MapContoller.getMapData'
export default class LwcMapDemo extends LightningElement {
selectedMarkerValue;
mapMarkers =[];
@wire(getMapData)
mapDataHandler({data,error}){
    if(data){
        // console.log(data)
        this.markerDataHandler(data);
    }
    if(error){
        console.warn(error)
    }
}

markerDataHandler(data){

    this.mapMarkers  =data.map((item)=>({
        location: {
            // Location Information
            City: item.BillingCity || '',
            Country: item.BillingCountry ||'',
            PostalCode: item.BillingPostalCode ||'',
            State: item.BillingState || '',
            Street: item.BillingStreet ||'',
        },

        // For onmarkerselect
        value: item.Id,

        // Extra info for tile in list & info window
        icon: 'standard:account',
        title: item.Name || 'No  Title', // e.g. Account.Name
        description: item.Description || 'No Discription',
    }))
this.selectedMarkerValue = this.mapMarkers.length && this.mapMarkers[0].value;
}


handleMarkerSelect(event) {
    this.selectedMarkerValue = event.target.selectedMarkerValue;
}


}