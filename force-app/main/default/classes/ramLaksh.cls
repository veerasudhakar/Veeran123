public class ramLaksh {
    @AuraEnabled
    public static Ram__c createram(Ram__c ram1) {
        system.debug('ram1'+ram1);
        insert ram1;
        return ram1;
    }

    }

