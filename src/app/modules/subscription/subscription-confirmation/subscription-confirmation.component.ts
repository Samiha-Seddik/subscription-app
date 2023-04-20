import { Component, EventEmitter, Output } from '@angular/core';
import { ISubscription, ISubscriptionSelected } from '@app/core/models/subscription-model';
import { SubscriptionService } from '@app/core/services/subscription.service';
@Component({
  selector: 'app-subscription-confirmation',
  templateUrl: './subscription-confirmation.component.html',
  styleUrls: ['./subscription-confirmation.component.css']
})
export class SubscriptionConfirmationComponent {
  selectedSubscription!:ISubscriptionSelected
  checkConditions:boolean=false
  dataSubscription!:ISubscription
@Output() nextStep: EventEmitter<any> = new EventEmitter<any>()
@Output() confirmSubscription: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private subscriptionService : SubscriptionService){}
  ngOnInit(){
      this.subscriptionService.getTotalPrice().subscribe({
        next:(dataParameter)=>{
          if(dataParameter){
            this.selectedSubscription=dataParameter
            this.dataSubscription = this.subscriptionService.getSelectedSubscriptionPlan();
          }
        }
      })
      
      
  }
confirm(){
  this.confirmSubscription.emit(true)
}
/* go back to previous tabulation */
goBack(){
  this.nextStep.emit({selectedIndex:1,section:"payment"})
}

}
