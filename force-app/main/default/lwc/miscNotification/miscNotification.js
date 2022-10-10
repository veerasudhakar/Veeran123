import { LightningElement ,track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MiscNotification extends LightningElement {
    /*
    _title = 'Sample Title';
    message = 'Sample Message';
    variant = 'error';
    variantOptions = [
        { label: 'error', value: 'error' },
        { label: 'warning', value: 'warning' },
        { label: 'success', value: 'success' },
        { label: 'info', value: 'info' },
    ];

    titleChange(event) {
        this._title = event.target.value;
    }

    messageChange(event) {
        this.message = event.target.value;
    }

    variantChange(event) {
        this.variant = event.target.value;
    }

    showNotification() {
        const evt = new ShowToastEvent({
            title: this._title,
            message: this.message,
            variant: this.variant,
        });
        this.dispatchEvent(evt);
    }
    */
    @track msg;
    @track variant; /* understand the with/without @track &amp;amp; api*/
    title="Notification"
    variant = 'success';
    variantOptions = [
        {label : 'error', value : 'error'},
        {label : 'warning', value : 'warning'},
        {label : 'success', value : 'success'},
        {label : 'info', value : 'info'}
    ];
 
    updateVariant(event){
        this.variant = event.target.value;
    }
 
    trackMessage(event){
        this.msg = event.target.value;
    }
 
    showToast(){
        /*eslint-disable-next-line  no-console*/
        console.log('entry point');
        const evt = new ShowToastEvent({
             
            title: this.title,
            message: this.msg,
            variant: this.variant
        });
        this.dispatchEvent(evt);
    }
 
    doReset(){
        this.msg = '';
        this.variant = 'success';
    }
}