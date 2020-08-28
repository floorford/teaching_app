import React from "react";

const Basket = ({ items }) => (
  <>
    <table className='table table-dark' style={{ width: "50%" }}>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <BasketItem key={i} price={item.price} name={item.name} />
        ))}
      </tbody>
    </table>
  </>
);

const BasketItem = ({ price, name }) => (
  <tr>
    <td>{name}</td>
    <td>${price.toFixed(2)}</td>
  </tr>
);

export default Basket;
