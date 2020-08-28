import React from "react";

let valuation = 3003434;
const formatted = valuation.toLocaleString("en-GB", {
  style: "currency",
  currency: "NOK",
});

const Funding = () => (
  <p className='alert alert-success'>
    If you'd like to fund us for {formatted}, please get in touch
  </p>
);

export default Funding;
