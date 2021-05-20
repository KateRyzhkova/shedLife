import "./stylesHowItWorksSection.css";
import HowItWorksList from "./HowItWorksList/HowItWorksList";
import SectionTitle from "../common/SectionTitle/SectionTitle";

export default function HowItWorksSection() {
  return (
    <div className="howItWorksSection">
      <div className="howItWorksSection-content">
        <SectionTitle text="How it works" color="#386865" line={true} />
        <HowItWorksList />
      </div>
    </div>
  );
}
