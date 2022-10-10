import { LightningElement } from 'lwc';

export default class VeeraLookup extends LightningElement {

    selectedAccount;

    handleAccountSelection(event){
        this.selectedAccount = event.target.value;
        alert("The selected Accout id is"+this.selectedAccount);
    }
}