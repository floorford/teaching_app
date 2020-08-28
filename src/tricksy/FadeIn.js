import React from "react";
import "./FadeIn.css";

const FadeIn = ({ time, children }) => (
  <div style={{ animation: `fadeIn ease ${time}` }}>{children}</div>
);

export default FadeIn;
