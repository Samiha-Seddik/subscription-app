import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  activeTabulation: string='parameters';
  selectedIndex: number=0;
  confirmInterface:boolean=false
  changeTabulation(data:any) {
    this.activeTabulation = data.section;
    this.selectedIndex=data.selectedIndex
  }
  confirmSubscription(confirm:boolean){
    this.confirmInterface=confirm
  }
}
