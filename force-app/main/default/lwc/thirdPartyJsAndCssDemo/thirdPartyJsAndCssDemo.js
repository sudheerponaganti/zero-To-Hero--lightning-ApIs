import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/momentZip';
import ANIMATE from '@salesforce/resourceUrl/animateZip';
import CG_LOGO from '@salesforce/contentAssetUrl/capgemini';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader'
export default class ThirdPartyJsAndCssDemo extends LightningElement {
    cgLogo = CG_LOGO;
    isLibLoaded = false;
    currentDate;
    renderedCallback() {
        if (this.isLibLoaded) return;
        Promise.all([
            loadScript(this, MOMENT + '/moment/moment.min.js'),
            loadStyle(this, ANIMATE + '/animate/animate.min.css')
        ]).then(() => {
            this.setDateOnScreen();
        }).catch((error) => {
            console.error(error)
        })
        this.isLibLoaded = true;
    }

    setDateOnScreen() {
        this.currentDate = moment().format('LLLL');
    }

}