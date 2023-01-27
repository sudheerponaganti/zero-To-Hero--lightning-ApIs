import { LightningElement,wire} from 'lwc';
import { CurrentPageReference, NavigationMixin } from 'lightning/navigation';
export default class NavigationPageRefGeneration extends NavigationMixin(LightningElement){
   
    currentPageReference;

    @wire(CurrentPageReference)
    setCurrentPageReference(currentPageReference) {
        this.currentPageReference = currentPageReference;
        // console.log(this.currentPageReference)

        if (this.connected) {

            this.generateUrls();
        } else {
   
            this.generateUrlOnConnected = true;
        }
    }

    showPanelUrl;
    noPanelUrl;

    l
    get showPanel() {

        return this.currentPageReference &&
            this.currentPageReference.state.c__showPanel == 'true';
    }

    generateUrls() {
        this[NavigationMixin.GenerateUrl](this.getUpdatedPageReference('true'))
            .then(url => this.showPanelUrl = url);
        this[NavigationMixin.GenerateUrl](this.getUpdatedPageReference(undefined))
            .then(url => this.noPanelUrl = url);
    }

    
//     get showPanelPageReference() {
//         return this.getUpdatedPageReference({
//             c__showPanel: 'true' // Value must be a string
//         });
//     }

//    get noPanelPageReference() {
//         return this.getUpdatedPageReference({
         
//             c__showPanel: undefined
//         });
//     }


    getUpdatedPageReference(stateChanges) {
        return Object.assign({}, this.currentPageReference, {

            state: Object.assign({}, this.currentPageReference.state, {c__showPanel :stateChanges})
        });
    }

    connectedCallback() {
        this.connected = true;
        
     
        if (this.generateUrlOnConnected) {
            this.generateUrls();
        }
    }

    handleShowPanelClick(evt) {
        evt.preventDefault();
        evt.stopPropagation();
       
        this[NavigationMixin.Navigate](this.getUpdatedPageReference('true'),true);
    }

    handleNoPanelClick(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this[NavigationMixin.Navigate](this.getUpdatedPageReference(undefined),true);
    }

}