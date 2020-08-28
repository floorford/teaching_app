import React from "react";
import { Link } from "react-router-dom";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Articles = ({ url }) => (
  <div>
    <h2>Articles</h2>
    <Link to={`${url}/10`}>Newest Article</Link>

    <h4>All other articles:</h4>
    <ul>
      {numbers.map((x, i) => (
        <li key={i} style={{ listStyle: "none" }}>
          <Link to={`${url}/${x}`}>{x}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Articles;
