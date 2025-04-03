import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalButton = ({ amount, onSuccess, onError }) => {
  if (!amount) {
    console.error("Amount is required for PayPal transactions.");
    return null;
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AUig1RcSCf0nTfkqi9or-D4_0Ekg5sZYqpX6okK2Zrhj0_N8NB8sgEwUz44Z0FvlY5-0Ue4jrBV0ukmV", // Use environment variable
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount.toString() } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess).catch(onError);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
