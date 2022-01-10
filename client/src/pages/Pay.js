import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarRes from "../components/Navbar/UserNavbar/NavbarRes";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../images/Elevation Final.jpg";
const key =
  "pk_test_51K0SZHSA5sdqblRxbvksitlpONfyBiWrWwpPr1qAieP2NSNFrlRo6dQuAEf6u7UzSNzlrvwS3R5inVTMfOs2fsfm00WdppQRLl";
const Pay = () => {
  const [stripeToken, setToken] = useState(null);
  const onToken = (token) => {
    setToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      const res = await axios.post("/checkout/payment", {
        token: stripeToken?.id,
        amount: 20000,
      });
      console.log(res);
    };
    makeRequest();
  }, [stripeToken]);
  return (
    <div>
      <NavbarRes />
      <StripeCheckout
        name="Elevation Training Programme"
        description="the new start up programme  for the developers"
        image={Logo}
        amount={1000}
        currency="INR"
        stripeKey={key}
        token={onToken}
      >
        <button>Pay now</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
