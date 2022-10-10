public with sharing class StudentApex{
    @AuraEnabled
        public static Student__c insertStudentMethod(Student__c studentobj){
            try {
                insert studentobj;
                return studentobj;
            } catch (Exception exp) {
                throw new AuraHandledException(exp.getMessage());
            }
        }
    }