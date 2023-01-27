public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunitiesByStageName(){
  return [SELECT StageName FROM Opportunity WITH SECURITY_ENFORCED];
    }
    
}
