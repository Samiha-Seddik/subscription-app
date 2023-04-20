import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISubscriptionSelected } from '@app/core/models/subscription-model';
import { SubscriptionService } from '@app/core/services/subscription.service';

@Component({
  selector: 'app-subscription-payment',
  templateUrl: './subscription-payment.component.html',
  styleUrls: ['./subscription-payment.component.css']
})
export class SubscriptionPaymentComponent {
  dataSelectedSubscription!:ISubscriptionSelected
  paymentForm:FormGroup=this.createPaymentForm()
@Output() nextStep: EventEmitter<any> = new EventEmitter<any>()
  constructor(private subscriptionService : SubscriptionService,private formBuilder:FormBuilder){}
ngOnInit(){
this.getSubcriptionSelected()
}
getSubcriptionSelected(){
this.subscriptionService.getTotalPrice().subscribe({
  next:(dataParameter)=>{
    if(dataParameter){
      this.dataSelectedSubscription=dataParameter
    }
  }
})
}
createPaymentForm():FormGroup{
  return this.formBuilder.group({
    creditCardNumber:  ['', [Validators.required,Validators.pattern(/^\d{16}$/)]],
    dateExpiration: ['', Validators.required],
    securityCode: ['', [Validators.required,Validators.pattern(/^\d{4}$/)]],
  })
}
/* go to confirmation template */
confirmationStep(): void {
  if (this.paymentForm.valid) {
    this.nextStep.emit({selectedIndex:2,section:"confirm"})
  }
}
/* go back to previous tabilation */
goBack(){
  this.nextStep.emit({selectedIndex:0,section:"parameters"})
}
}
