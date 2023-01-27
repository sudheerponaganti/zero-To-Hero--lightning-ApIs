public with sharing class PdfController {
   @AuraEnabled
   public static Attachment generatePdf(Id recordId, String htmlData){
    PageReference page = Page.renderAsPDF;
  page.getParameters().put('pdfTextValue',htmlData);
  Contact con = new Contact(Id= recordId);
  Attachment objAttachment= new Attachment();
  objAttachment.Name = 'invoice.pdf';
  objAttachment.ParentId = con.Id;
  objAttachment.body = page.getContentaspdf();
  objAttachment.IsPrivate = false;
  insert objAttachment;
  return objAttachment;
   }
}
