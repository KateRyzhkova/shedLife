import BottomNav from "../Nav/BottomNav/BottomNav";
import "./stylesFooter.css";
import logo from "../../assets/img/ShedLifeLogoFooter.png";
import Flip from "react-reveal/Flip";

export default function Fotter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerContent">
          <Flip right>
            <div>
              <img src={logo} alt="logo" />
            </div>
          </Flip>
          <BottomNav />
        </div>
      </div>
    </footer>
  );
}
