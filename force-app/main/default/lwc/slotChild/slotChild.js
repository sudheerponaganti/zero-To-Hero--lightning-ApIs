import { LightningElement,api} from 'lwc';

export default class SlotChild extends LightningElement {
    userDetail

    get userData(){
  return this.userDetail
    }

    @api set userData(data){
        let newAge = data.age*2;
        this.userDetail = {...data,age:newAge,city:'Isleguard'}
    }

    handleFooter(){
 const footerElem = this.template.querySelector('.slds-card__footer');
 if(footerElem){
  footerElem.classList.remove('slds-hide')
 }
    }
}