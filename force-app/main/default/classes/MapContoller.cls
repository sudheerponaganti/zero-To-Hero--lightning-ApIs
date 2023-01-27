public with sharing class MapContoller {
    @AuraEnabled(cacheable=true)
    public static List<Account> getMapData(){
        return [ SELECT Id, Name, BillingCity, BillingState, BillingStreet, BillingPostalCode, BillingCountry,Description
         FROM Account
         WITH SECURITY_ENFORCED
        ORDER BY Name ASC NULLS LAST
        LIMIT 10];
    }
    
   
}
