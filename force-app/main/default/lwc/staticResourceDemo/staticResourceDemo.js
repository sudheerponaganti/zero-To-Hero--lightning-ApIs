import { LightningElement } from 'lwc';
import RADHA_KRISHNA from '@salesforce/resourceUrl/radhaKrishna'
import LORD_HANUMA from '@salesforce/resourceUrl/lordHanuman'
export default class StaticResourceDemo extends LightningElement {
    radhaKrishna = RADHA_KRISHNA
    lordHanuma = LORD_HANUMA
}