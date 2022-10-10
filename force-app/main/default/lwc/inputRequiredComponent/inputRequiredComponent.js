import { LightningElement } from 'lwc';

export default class InputRequiredComponent extends LightningElement {

    register(event) {
        console.log('in');
        const address = this.template.querySelector('lightning-input-address');
        console.log('address' + address);
        var value = address.value;
        console.log('value' + value);         
        address.setCustomValidityForField("Field is Required!");

        /* const address = this.template.querySelector('lightning-input-address');
         const isValid = address.checkValidity();
         if (isValid) {

         } else {
              address.reportValidity();
         }*/
}
}