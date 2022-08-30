import React from "react";
import { HeaderStyle } from "../styles/HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <div>Sapa Kitchen</div>
      <div className="search">
        <input type="text" />
      </div>
      <div>3</div>
    </HeaderStyle>
  );
};

export default Header;
