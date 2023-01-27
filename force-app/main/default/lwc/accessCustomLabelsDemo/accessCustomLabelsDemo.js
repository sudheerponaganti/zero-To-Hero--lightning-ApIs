import { LightningElement } from 'lwc';
import QUOTE_ONE from '@salesforce/label/c.quoteOne'
import QUOTE_TWO from '@salesforce/label/c.quoteTwo'
export default class AccessCustomLabelsDemo extends LightningElement {

    labels = {
        quoteOne : QUOTE_ONE,
        quoteTwo : QUOTE_TWO
    }
}