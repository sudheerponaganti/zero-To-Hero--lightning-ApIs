import { LightningElement } from 'lwc';

export default class QueryDomManualDemo extends LightningElement {

    userData = ['john','doe','Mike','carl'];
    fetchDomHandler(){
        const elem = this.template.querySelector('.hello');
        elem.style.border = " 5px solid green"


        const pElems = this.template.querySelectorAll('.name');
      Array.from(pElems).forEach(item=>{
        const user = item.innerText
        item.setAttribute("title",user)
      })


      const manualDiv = this.template.querySelector('.manual');
      manualDiv.innerHTML = '<p>Hey I am a child</p>'
    }

}