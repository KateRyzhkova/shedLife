import { navLinkArr } from "../../../helpers/navLinksArr";
import logo from "../../../assets/img/ShedLifeLogo.png";
import "./stylesTopNav.css";
import { useState } from "react";

export default function TopNav() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const onCLickToggleIsOpenNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  return (
    <nav className="topNavBar container">
      <div className="topNavBar-logo">
        <img src={logo} alt="ShedLife" />
      </div>
      <ul className="topNavBar-list">
        {navLinkArr.map((link) => (
          <li key={link.name}>
            <a href={link.href}> {link.name} </a>
          </li>
        ))}
      </ul>
      <button onClick={onCLickToggleIsOpenNav} className="topNavBar-burger">
        <div></div>
      </button>
      {isOpenNav && (
        <ul className="topNavBar-menu">
          <button
            className="topNavBar-menu-closeButton"
            onClick={onCLickToggleIsOpenNav}
          >
            <span>x</span>
          </button>
          {navLinkArr.map((link) => (
            <li key={link.name}>
              <a href={link.href}> {link.name} </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
