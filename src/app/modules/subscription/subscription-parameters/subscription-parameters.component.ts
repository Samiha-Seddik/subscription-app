import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { ISubscription } from '@app/core/models/subscription-model';
import { SubscriptionService } from '@app/core/services/subscription.service';
import subscriptionDuration from '@assets/subscription-prices.json'
@Component({
  selector: 'app-subscription-parameters',
  templateUrl: './subscription-parameters.component.html',
  styleUrls: ['./subscription-parameters.component.css']
})
export class SubscriptionParametersComponent {
parameterForm:FormGroup=this.createParameterForm()
duration:ISubscription[]=subscriptionDuration.subscription_plans
@Output() nextStep: EventEmitter<any> = new EventEmitter<any>()
constructor(private formBuilder:FormBuilder,private subscriptionService:SubscriptionService){}
createParameterForm():FormGroup{
  return this.formBuilder.group({
    duration:  ['12', Validators.required],
    amount: ['5', Validators.required],
    upfrontPayment: [false, Validators.required],
  })
}
setSubscriptionPlan(){
  const subscriptionSelected=this.duration.find((item:ISubscription)=> item.duration_months==this.parameterForm.value.duration)
  if(subscriptionSelected) this.subscriptionService.setSelectedSubscriptionPlan(subscriptionSelected)
}
/* calculate price and go next tabulation */
calculateTotalPrice(){
  if(this.parameterForm.valid){
    this.subscriptionService.setParameterSubscription(this.parameterForm.value)
    this.setSubscriptionPlan()
    this.subscriptionService.setTotalPrice({price:this.subscriptionService.calculateTotalPrice(),selectedSubscrition:this.parameterForm.value})
    this.nextStep.emit({selectedIndex:1,section:"payment"})
  }
}
}
