import React from "react";
import { HeaderStyle } from "../styles/HeaderStyle";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <HeaderStyle>
      <div>Sapa Kitchen</div>
      <div className="search">
        <AiOutlineSearch size={20} color={"#c85c5c"} />
        <input type="text" placeholder="Search for a meal" />
      </div>
      <div>
        <p>Hello Franklin 👋🏼 </p>
      </div>
    </HeaderStyle>
  );
};

export default Header;
