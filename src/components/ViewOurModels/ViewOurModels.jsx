import "./stylesViewOurModels.css";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import ModelsList from "./ModelsList/ModelsLIst";

export default function ViewOurModels() {
  return (
    <div className="container">
      <div className="viewOurModels">
        <SectionTitle text="View our models" color="#386865" line={true} />
        <ModelsList />
      </div>
    </div>
  );
}
