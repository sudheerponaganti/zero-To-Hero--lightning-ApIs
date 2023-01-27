import { LightningElement } from 'lwc';
import inputCss from '@salesforce/resourceUrl/inputCss';
import { loadStyle} from 'lightning/platformResourceLoader';
export default class InputWithIconDemo extends LightningElement {

    isLibLoaded = false;
isShowPassword = false;
    get passwordIcon(){
       return this.isShowPassword ? "utility:hide": "utility:preview"
    }
    get passwordType(){
        return this.isShowPassword ? 'text' : 'password';
    }

    iconChangeHandler(){
     this.isShowPassword = !this.isShowPassword;
    }

    renderedCallback(){
        if(this.isLibLoaded) return;
        loadStyle(this, inputCss).then(() => {
           
        }).catch((error)=>{
            console.error(error)
        })
        this.isLibLoaded = true;
    }
}

