import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionParametersComponent } from './modules/subscription/subscription-parameters/subscription-parameters.component';
import { SubscriptionPaymentComponent } from './modules/subscription/subscription-payment/subscription-payment.component';
import { SubscriptionConfirmationComponent } from './modules/subscription/subscription-confirmation/subscription-confirmation.component';
import { SubscriptionComponent } from './modules/subscription/subscription.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionParametersComponent,
    SubscriptionPaymentComponent,
    SubscriptionConfirmationComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    /* materials inputs */
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { disableClose: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
