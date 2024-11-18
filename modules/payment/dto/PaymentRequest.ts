export default interface PaymentRequest {
    paymentInfoData: {
      name: string;
      phone: string;
      email: string;
      city: string;
      country: string;
      address: string;
    };
    paymentDetailsDTO: {
      name: string;
      price: number;
      currency: string;
      quantity: number;
    }[];
}
  