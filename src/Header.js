import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import logo from "./images/customLogo3.png"

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo"
        src={logo}/>
      </Link>

      <div className="header__nav">
        <div className="header__signin">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineTwo">Hello {!user ? 'Guest' : user.email}</span><span> {user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        </div>

        <Link to='/orders'>
          <div className="header__option">
            
            <span className="header__optionLineTwo">Orders</span>
            <span className="header__optionLineTwo">& History </span>
          </div>
        </Link>
        

        

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
