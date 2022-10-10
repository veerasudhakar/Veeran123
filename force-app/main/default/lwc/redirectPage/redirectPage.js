import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation'
export default class redirectPage extends NavigationMixin(LightningElement) {

    navigateToWeb(){
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://www.salesforcecodecrack.com/"            }
        });
    }
}
