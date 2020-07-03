import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Accordion from "./Accordion";
import ChangeColor from "./ChangeColor";
import Search from "./Search";
import Translate from "./Translate";

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Header />
        <Route path="/accordion" component={Accordion} />
        <Route path="/changecolor" component={ChangeColor} />
        <Route path="/searchlist" component={Search} />
        <Route path="/translate" component={Translate} />
      </div>
    </BrowserRouter>
  );
};

export default App;
