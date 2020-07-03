import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/accordion" className="item">
        Accordion
      </Link>
      <Link to="/changecolor" className="item">
        Change Color
      </Link>
      <Link to="/searchlist" className="item">
        Search List
      </Link>
      <Link to="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
