import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      {/* logo on the left -> img*/}
      <Link to="/">
        <img
          className="header_logo"
          src="https://veegil.com/uploads/default/original/1X/4b6344d9a0e2733d3b0ed7592e5f7ddaabb00def.png"
          alt=""
        />
      </Link>
      {/* search box*/}
      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <SearchIcon className="header_searchIcon" />
      </div>


      <div className="headerNav">
      <Link to="/Login " className="header_link">
          <div  className="header_option"> 
            <span className="header_optionLineTwo">Login</span>
          </div>
        </Link>
     

      </div>
      <div className="headerNav">
      <Link to="/signup " className="header_link">
          <div  className="header_option"> 
            <span className="header_optionLineTwo">Sign Up</span>
          </div>
        </Link>
     

      </div>
    </nav>
  );
}

export default Header;
