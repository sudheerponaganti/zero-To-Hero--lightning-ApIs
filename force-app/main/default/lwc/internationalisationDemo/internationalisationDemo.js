import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'
import DIR from '@salesforce/i18n/dir'
export default class InternationalisationDemo extends LightningElement {
  dir = DIR
    number = 1234456
    formattedNumber = new Intl.NumberFormat('ar-EG',{
        style : 'currency',
        currency: CURRENCY,
        currencyDisplay : 'symbol'
    }).format(this.number)
}