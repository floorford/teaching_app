import React from "react";

import Funding from "./Funding";

const Content = () => (
  <main>
    <Funding />
    <p className='lead'>This app is the best</p>
    <img
      className='img-thumbnail'
      alt='A cat'
      src='https://media.tenor.com/images/c50ca435dffdb837914e7cb32c1e7edf/tenor.gif'
    />
    <Funding />
  </main>
);

export default Content;
