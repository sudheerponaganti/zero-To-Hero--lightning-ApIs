import { LightningElement } from 'lwc';
import defaultTemplate from './lifeCycleDemoParent.html';
import signInTemplate from './signInTemplate.html';
import signUpTemplate from './signUpTemplate.html';
export default class LifeCycleDemoParent extends LightningElement {
    constructorval;
    connectedCallBackval;
    renderedCallBackVal;
    activeButton;
    signedValue;
    renderval;
    showChildVal=false;
    constructor(){
        super();
        this.constructorval = 'Constructor parent called successfully'
        // alert(this.constructorval)
    }

    connectedCallback(){
        this.connectedCallBackval = 'ConnectedCallback parent called successfully'
        // alert(this.connectedCallBackval)
    }
    renderedCallback(){
        this.renderedCallBackVal = 'Renderdcallback parent called successfully'
    //    alert(this.renderedCallBackVal)
    }
    handleClick(event){
this.activeButton = event.target.label;
this.signedValue = '';
    }
    render(){
    this.renderval = 'render method parent called successfully';
    // alert(this.renderval)
return this.activeButton === 'SignIn'? signInTemplate :
       this.activeButton === 'SignUp'? signUpTemplate : defaultTemplate
    }

    submtHandler(event){
this.signedValue = event.target.label === 'SignIn'? 'Sign in successfully' : 'signup successfully';
// console.log(this.signedValue)
    }
    handleChild(){
        this.showChildVal = !this.showChildVal;
    }
}