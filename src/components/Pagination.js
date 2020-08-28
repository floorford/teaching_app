import React from "react";

// just an array of numbers
let numbers = [100, 2, "bananas", 4, "dog"];

const Pagination = () => (
  <ul className='pagination'>
    {numbers.map((value, index) => (
      <li className='page-item' key={index}>
        <a className='page-link' href={`/page/${value}`}>
          {value}
        </a>
      </li>
    ))}
  </ul>
);

export default Pagination;
