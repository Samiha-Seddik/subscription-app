import { Injectable } from '@angular/core';
import subscription_plans from '@assets/subscription-prices.json'
import { ISubscription, ISubscriptionParams } from '../models/subscription-model';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
subscriptionPlans!:ISubscription 
parameterSubscription!:ISubscriptionParams
totalPrice = new BehaviorSubject<Object>({})
  constructor() { }
  setParameterSubscription(params:ISubscriptionParams){
    this.parameterSubscription=params
  }
  
  setSelectedSubscriptionPlan(plan: ISubscription): void {
    this.subscriptionPlans = plan;
  }
  getSelectedSubscriptionPlan(): ISubscription {
    return this.subscriptionPlans;
  }
  calculateTotalPrice() {
      let totalPrice =
    this.subscriptionPlans.price_usd_per_gb * this.parameterSubscription.amount * this.subscriptionPlans.duration_months;
    if (this.parameterSubscription.upfrontPayment) {
      totalPrice = totalPrice * 0.9;
    }
    return totalPrice;
    } 
    /*  */   
    setTotalPrice(value: Object) {
      this.totalPrice.next(value);
    }
    getTotalPrice(): Observable<any> {
      return this.totalPrice.asObservable();
    }
  
  
}
