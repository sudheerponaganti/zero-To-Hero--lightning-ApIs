import { LightningElement ,api} from 'lwc';
import   generatePdf from '@salesforce/apex/PdfController.generatePdf'
export default class PdfGenerationDemo extends LightningElement {
    @api recordId
    imageUrl = 'https://picsum.photos/id/237/200/300'
    invoiceData ={
        invoiceNo : '123',
        invoiceCreated : 'january 1 ,2019',
        invoiceDue :'january 28,2019',
        companyName: 'sparksuite,Inc.',
        address1 : '12345 sunny Road',
        address2: 'salet valley, Mars 1234'
    }
clientData = {
            client : 'Acme corp',
            userName : 'John Doe',
            email : 'jonDoe@example.com'
        }
 services =[
    {name :'consulting Fee',amount : 1000.00},
    {name :'WebsiteDesign',amount : 300.00},
    {name :'Hosting(3 months)',amount : 75.00}
 ]
get totalAmount(){
    return  this.services.reduce((total,eachObj)=>{
return total+= eachObj.amount
    },0)
}

pdfHandler(){
    let content = this.template.querySelector('.conatiner');
    // console.log(content.outerHTML)
    generatePdf({recordId : this.recordId ,htmlData :content.outerHTML}).then((result)=>{
console.log(result)

window.open(`https://sudheer-ponaganti-dev-ed.file.force.com/servlet/servlet.FileDownload?file=${result.Id}`)
    }).catch((error)=>{
console.error(error)
    })
}
 
}