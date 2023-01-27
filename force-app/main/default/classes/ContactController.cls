public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static Contact getSingleContact() {
        return [
            SELECT Id, FirstName, LastName
            FROM Contact 
            WITH SECURITY_ENFORCED
            ORDER BY Name ASC NULLS LAST 
            LIMIT 1
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [ 
            SELECT Id, FirstName, LastName, Email
            FROM Contact
            WHERE Email != null AND FirstName != '\'null\''
            WITH SECURITY_ENFORCED
            ORDER BY LastName ASC NULLS LAST
        ];
    }
}
