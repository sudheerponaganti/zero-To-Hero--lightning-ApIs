public with sharing class CsvController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){
        return [SELECT Id,
                       Name,
                       Industry,
                       AnnualRevenue
                FROM   Account WITH SECURITY_ENFORCED];
    }
}
