import { LightningElement ,track} from 'lwc';
import insertStudentMethod from '@salesforce/apex/StudentApex.insertStudentMethod';
import stuName from '@salesforce/schema/Student__c.Name';
import stuFatherName from '@salesforce/schema/Student__c.Father_Name__c';
import studob from '@salesforce/schema/Student__c.DOB__c';
import stuschooljoindate from '@salesforce/schema/Student__c.School_Joined_Date__c';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class StudentApexLwc extends LightningElement {

   @track accountid;
    @track error;    
    @track getStudentRecord={
        Name:stuName,       
        Father_Name__c:stuFatherName,  
        DOB__c:studob, 
        School_Joined_Date__c:stuschooljoindate,         
        
              
    };   
 
   
    nameInpChange(event){
       this.getStudentRecord.Name = event.target.value;
       //window.console.log(this.getAccountRecord.Name);
     }
 
     fathernameInpChange(event){
       this.getStudentRecord.Father_Name__c = event.target.value;
       //window.console.log(this.getAccountRecord.Phone);
    }
    
    dobInpChange(event){
        this.getStudentRecord.DOB__c = event.target.value;
        //window.console.log(this.getAccountRecord.Type);
      }
 
      schooljoinInpChange(event){
        this.getStudentRecord.School_Joined_Date__c = event.target.value;
        //window.console.log(this.getAccountRecord.Type);
      }
 
      
    
      saveStudentAction(){
        window.console.log('before save' + this.createStudent);
        insertStudentMethod({studentobj:this.getStudentRecord})
        .then(result=>{
          window.console.log(this.createStudent);
            this.getStudentRecord={};
            this.studentid=result.Id;
            window.console.log('after save' + this.studentid);
            
            const toastEvent = new ShowToastEvent({
              title:'Success!',
              message:'Student created successfully',
              variant:'success'
            });
            this.dispatchEvent(toastEvent);
        })
        .catch(error=>{
           this.error=error.message;
           window.console.log(this.error);
        });
        //eval("$A.get('e.force:refreshView').fire();");
      }
}