import React from "react";
import { HeaderStyle } from "../styles/HeaderStyle";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";


const Header = ({home, admin}) => {
  return (
    <HeaderStyle>
      <Link className="link" to="/">
        <div>Sapa Kitchen</div>
      </Link>
      {home && <div className="search">
        <AiOutlineSearch size={20} color={"#565656"} />
        <input type="text" placeholder="Search for a meal" />
      </div>}

     {admin && (
        <p>Dashboard</p>
        )}
      <div>
        <p>Hello Franklin 👋🏼 </p>
      </div>
    </HeaderStyle>
  );
};

export default Header;
