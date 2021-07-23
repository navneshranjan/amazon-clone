import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        ></img>
      </Link>
      {/* searchbar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link*/}

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Navnesh</span>
            <span className="header__optionLineTwo"> Sign in</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& oreders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link*/}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket"></div>
          {/* shoppig basket option */}
          <ShoppingBasketIcon />

          {/* no of item in  the basket */}
          <span className="header__optionLineTwo header__basketCount">0</span>
        </Link>
      </div>

      {/* cart with no. */}
    </nav>
  );
}

export default Header;
