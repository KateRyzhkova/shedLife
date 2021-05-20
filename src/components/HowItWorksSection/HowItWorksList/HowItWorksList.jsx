import "./stylesHowItWorksList.css";
import { howItWorksList } from "../../../helpers/howItWorksListArr";
import Fade from "react-reveal/Fade";

export default function HowItWorksList() {
  return (
    <ul className="howItWorksList">
      {howItWorksList.map((item, index) => (
        <Fade right>
          <li className="howItWorksList-item" key={item.title}>
            <div className="howItWorksList-item-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="howItWorksList-item-dottedLine">- - - - - - -</div>
            <div className="howItWorksList-item-content">
              <h3> {`${index + 1}. ${item.title}`} </h3>
              <p> {item.text} </p>
            </div>
          </li>
        </Fade>
      ))}
    </ul>
  );
}
