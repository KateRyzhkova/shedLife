import SectionTitle from "../common/SectionTitle/SectionTitle";
import "./stylesOurMissionSection.css";
import MissionImage from "../../assets/img/MissionImage.png";
import Zoom from "react-reveal/Zoom";

export default function OurMissionSection() {
  return (
    <div className="ourMissionSection">
      <div className="container">
        <SectionTitle text="Our Mission" color="#fff" line={true} />
        <p className="ourMissionSection-mainText">
          Unparalleled craftsmanship with high-quality materials and a
          dedication to exceptional customer service are the cornerstones of our
          business. We offer dozens of designs with almost limitless
          opportunities for customization. We’re here to help, so please let us
          know if you have any questions.
        </p>
        <p className="ourMissionSection-desriptionText">
          Shed Life is here to fulfill all your hopes and dreams when it comes
          to building your next perfect shed.
        </p>
      </div>
      <Zoom right>
        <div className="ourMissionSection-image">
          <img src={MissionImage} alt="Our Mission" />
        </div>
      </Zoom>
    </div>
  );
}
