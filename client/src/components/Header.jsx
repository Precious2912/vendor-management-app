import React from "react";
import { HeaderStyle } from "../styles/HeaderStyle";
import { AiOutlineSearch } from "react-icons/ai";
import DateNow from "./DateNow";

const Header = ({home, admin}) => {
  return (
    <HeaderStyle>
      <div>Sapa Kitchen</div>
      {home && ( <div className="search">
        <AiOutlineSearch size={20} color={"#c85c5c"} />
        <input type="text" placeholder="Search for a meal" />
      </div>)}
     {admin && (
      <>
        {/* <p>Dashboard</p> */}
        <DateNow />
        </>
        )}
      <div>
        <p>Hello Franklin 👋🏼 </p>
      </div>
    </HeaderStyle>
  );
};

export default Header;
