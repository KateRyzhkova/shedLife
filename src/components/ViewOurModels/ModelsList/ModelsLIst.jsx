import { modelsList } from "../../../helpers/modelsList";
import "./stylesModelList.css";
import Fade from "react-reveal/Fade";

export default function ModelsList() {
  return (
    <ul className="modelsList">
      {modelsList.map((item) => (
        <Fade left>
          <li key={item.title} className="modelsList-item">
            <img src={item.img} alt="home" />
            <div
              style={{ background: item.color }}
              className="modelsList-item-content"
            >
              <h3> {item.title} </h3>
              <p>{item.description}</p>
              <h4>Features</h4>
              <ul>
                {item.features.map((feture, index) => (
                  <li key={index}>{feture}</li>
                ))}
              </ul>
            </div>
          </li>
        </Fade>
      ))}
    </ul>
  );
}
