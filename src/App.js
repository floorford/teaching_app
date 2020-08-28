import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Content from "./components/Content";
import Pagination from "./components/Pagination";
import Figure from "./components/Figure";
import Header from "./components/Header";
import Input from "./components/Input";
import Articles from "./components/Articles";
import Article from "./components/Article";
import FourOhFour from "./components/FourOhFour";
import CardComp from "./components/CardComp";

import history from "./components/history";

import Basket from "./tricksy/Basket";
import LightBox from "./tricksy/LightBox";
import ThreeCounters from "./tricksy/ThreeCounters";

const items = [
  { name: "Coffee", price: 2.1 },
  { name: "Bananas", price: 3.5 },
  { name: "Milk", price: 250.65 },
  { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];

const App = () => {
  return (
    <Router history={history}>
      <Header title={"My Amazing App - wow!"} />
      <Switch>
        <Route path='/' exact>
          <LightBox
            src={
              "https://media12.s-nbcnews.com/j/MSNBC/Components/Video/201905/grumpster.focal-760x428.jpg"
            }
          />
        </Route>
        <Route path='/content'>
          <Content />
        </Route>
        <Route path='/figure'>
          <Figure />
        </Route>

        <Route path='/stuff' exact>
          <Basket items={items} />
          <LightBox
            src={
              "https://media12.s-nbcnews.com/j/MSNBC/Components/Video/201905/grumpster.focal-760x428.jpg"
            }
          />
          <ThreeCounters />
        </Route>

        <Route
          path='/articles/'
          render={({ match }) => (
            <>
              <Route path={`${match.url}/`} exact>
                <Articles url={match.url} />
              </Route>
              <Route
                path={`${match.url}/:id`}
                render={({ match }) => (
                  <Article url={match} article={match.params.id} />
                )}
              />
            </>
          )}
        />

        <Route path='/stuff/hello'>
          <Figure />
        </Route>

        <Route path='/about'>
          <Input />
          <CardComp />
          <Pagination />
        </Route>

        <FourOhFour />
      </Switch>
    </Router>
  );
};

export default App;
