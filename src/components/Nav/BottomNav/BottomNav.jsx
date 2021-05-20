import "./stylesBottomNav.css";
import { navLinkArr } from "../../../helpers/navLinksArr";

export default function BottomNav() {
  return (
    <nav className="bottomNav">
      <ul className="bottomNav-list">
        {navLinkArr.map((link) => (
          <li className="bottomNav-list-item">
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
