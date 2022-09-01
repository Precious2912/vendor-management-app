import React, { useEffect } from "react";
import { HeaderStyle } from "../styles/HeaderStyle";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AllMealsState } from "../atoms/mealAtom";
import { useRecoilState } from "recoil";

const Header = ({ home, admin, orders }) => {
  const [allMeals, setAllMeals] = useRecoilState(AllMealsState);

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    // setAllMeals(allMeals.filter((meal) => meal.name.includes(e.target.value)));
  };

  console.log(allMeals.filter((meal) => meal.name.includes("Yam")));

  return (
    <HeaderStyle>
      <Link className="link" to="/">
        <div>Sapa Kitchen</div>
      </Link>
      {home && (
        <div className="search">
          <AiOutlineSearch size={20} color={"#565656"} />
          <input
            type="text"
            placeholder="Search for a meal"
            onChange={handleSearch}
          />
        </div>
      )}

      {admin && <p>Dashboard</p>}
      {orders && <p>Your Orders</p>}
      <div>
        <p>Hello Franklin 👋🏼 </p>
      </div>
    </HeaderStyle>
  );
};

export default Header;
