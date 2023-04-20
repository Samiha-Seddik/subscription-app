export interface ISubscription{
    duration_months: number;
    price_usd_per_gb: number
}
export interface ISubscriptionParams {
    duration: number,
    amount: number,
    upfrontPayment: boolean
  }
export interface ISubscriptionSelected {
    price: number,
    selectedSubscrition: ISubscriptionParams,
  }