import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToURL extends NavigationMixin(LightningElement){
    url;
    accountHomePageRef;

    connectedCallback() {

        this.accountHomePageRef = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        };

        this[NavigationMixin.GenerateUrl](this.accountHomePageRef).then(url =>{
            console.log(url)
            this.url = url;
        })
    }
    handleClick(event){
event.preventDefault();
event.stopPropagation();
this[NavigationMixin.Navigate](this.accountHomePageRef)

    }



    navigateLWCHandler(){
        var definition = {
            componentDef : 'c:navigateToLwcTraget'
        }
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: '/one/one.app#'+btoa(JSON.stringify(definition))
                }
            });
        }

        navigateAuraHandler(){
            this[NavigationMixin.Navigate]({
                type: 'standard__component',
                attributes: {
                    componentName: "c__AuraNavigation"
                },
                state:{
                    c__Id : "4783264y3" 
                }
        });
        }

        navigateVFHandler(){
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: "/apex/navigationDemoPage"
                }
        }).then(generatedUrl =>{
            window.open(generatedUrl)
        })
        }
}