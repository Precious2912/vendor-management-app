import React, { useEffect } from "react";
import { HeaderStyle } from "../styles/HeaderStyle";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AllMealsState } from "../atoms/mealAtom";
import { useRecoilState } from "recoil";
import { userInfoState } from "../atoms/userAtom";
import { UseAuth } from "../hooks/UseAuth";
import { filteredMealsState, searchInputState } from "../atoms/filteredMeals";

const Header = ({ home, admin, vendor, orders }) => {
  const [allMeals, setAllMeals] = useRecoilState(AllMealsState);
  const [loggedInUser, setLoggedInUser] = useRecoilState(userInfoState);
  const [filtered, setfiltered] = useRecoilState(filteredMealsState);
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value) {
      setSearchInput(true)
    } else {
      setSearchInput(false)
    }
    // setSearch(e.target.value)
    const filteredMeals = allMeals.filter((meal) => meal.name.toLowerCase().includes(e.target.value.toLowerCase()))
    // setAllMeals(filteredMeals);
    setfiltered(filteredMeals)
    console.log(filtered);
  };
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setLoggedInUser(user);
  }, []);

  return (
    <HeaderStyle>
      <Link className="link" to="/">
        <div className="logo">Sapa Kitchen</div>
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
      {vendor && <p>Dashboard</p>}
      {orders && <p>Your Orders</p>}
      <div className="user-actions">
        <div>
          <p>Hello {user.fullName.split(" ")[0]} 👋🏼 </p>
        </div>
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </button>{" "}
      </div>
    </HeaderStyle>
  );
};

export default Header;
