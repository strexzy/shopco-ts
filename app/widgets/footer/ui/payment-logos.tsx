import ApplePayLogo from "~/assets/icons/payment/applepay.svg";
import GooglePayLogo from "~/assets/icons/payment/googlepay.svg";
import MastercardLogo from "~/assets/icons/payment/mastercard.svg";
import PaypalLogo from "~/assets/icons/payment/paypal.svg";
import VisaLogo from "~/assets/icons/payment/visa.svg";

const PaymentLogos = () => {
  return (
    <div className="flex gap-2.5">
      <img
        src={VisaLogo}
        alt="Visa payment logo"
        className="bg-white rounded-md px-1.5 py-2"
      />
      <img
        src={MastercardLogo}
        alt="Mastercard payment logo"
        className="bg-white rounded-md px-1.5 py-2"
      />
      <img
        src={PaypalLogo}
        alt="Paypal payment logo"
        className="bg-white rounded-md px-1.5 py-2"
      />
      <img
        src={ApplePayLogo}
        alt="Apple pay payment logo"
        className="bg-white rounded-md px-1.5 py-2"
      />
      <img
        src={GooglePayLogo}
        alt="Google pay payment logo"
        className="bg-white rounded-md px-1.5 py-2"
      />
    </div>
  );
};

export default PaymentLogos;
