import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToTab extends NavigationMixin(LightningElement) {
    navigateTabHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Lightning_API_s',
            }
        })
    }

    navigateWebPageHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://google.com',
            }
        },true);
    }

    navigateHomeHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home',
            }
        },true);
    }
}