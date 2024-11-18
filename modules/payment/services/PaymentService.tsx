import ApiServer from "@/modules/system/ApiServer";
import PaymentRequest from "../dto/PaymentRequest";
import PaymentResponse from "../dto/PaymentResponse";

class PaymentService extends ApiServer {
  createCheckoutSession = async (
    paymentRequest: PaymentRequest
  ): Promise<PaymentResponse> => {
    const data = await this.api<PaymentRequest, PaymentResponse>(
      `/server/create-checkout-session`,
      "POST",
      paymentRequest,
      ""
    );

    if (data.status === 200) {
      const response = await data.json();
      return response;
    } else {
      return Promise.reject("Failed to create checkout session");
    }
  };
}

export default PaymentService;
