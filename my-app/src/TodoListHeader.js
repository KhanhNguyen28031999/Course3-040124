import React from "react";
const Header = ({ countNotDone }) => {
  return <div className="header">You have {countNotDone} tasks left!</div>;
};

export default Header;
