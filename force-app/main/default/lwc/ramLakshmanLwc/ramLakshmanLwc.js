import { LightningElement,track } from 'lwc';
import Ram__c_OBJECT from '@salesforce/schema/Ram__c';
import Name_FIELD from '@salesforce/schema/Ram__c.Name';
import Email_FIELD from '@salesforce/schema/Ram__c.Email__c';
import phone_FIELD from '@salesforce/schema/Ram__c.phone__c';
import createram from '@salesforce/apex/ramLaksh.createram';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RamLakshmanLwc extends LightningElement {

    selectedRam;

    handleRamSelection(event){
        this.selectedRam = event.target.value;
        alert("The selected Ram id is"+this.selectedRam);
    }

    @track name = Name_FIELD;
    @track Email__c = Email_FIELD;
    @track phone__c = phone_FIELD;
    rec = {
        Name : this.Name,
        Email__c : this.Email__c,
        phone__c : this.phone__c
    }

    handleNameChange(event) {
        this.rec.Name = event.target.value;
        console.log("Name", this.rec.Name);
    }
    
    handleIndChange(event) {
        this.rec.Email__c = event.target.value;
        console.log("Email__c", this.rec.Email__c);
    }
    
    handlePhnChange(event) {
        this.rec.phone__c = event.target.value;
        console.log("phone__c", this.rec.phone__c);
    }

    handleClick() {
        createram({ ram1 : this.rec })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.rec.Name = '';
                    this.rec.Email__c = '';
                    this.rec.phone__c = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Ram created',
                            variant: 'success',
                        }),
                    );
                }
                
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            });
    }

}