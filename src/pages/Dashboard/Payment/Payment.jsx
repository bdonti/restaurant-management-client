import { loadStripe } from "@stripe/stripe-js";
import SectionTile from "../../../components/SectionTitle/SectionTile";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div>
      <div className="mt-5">
        <SectionTile
          subHeading={"Please Pay First"}
          heading={"Payment"}
        ></SectionTile>
      </div>
      <div className="flex justify-center items-center my-5">
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
