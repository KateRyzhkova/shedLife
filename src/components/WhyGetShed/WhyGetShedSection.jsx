import "./stylesWhyGetShed.css";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import WhyGetShedItem from "./WhyGetShedItem/WhyGetShedItem";
import sofa from "../../assets/img/icons/1.png";
import computer from "../../assets/img/icons/3.png";
import man from "../../assets/img/icons/2.png";
import people from "../../assets/img/icons/4.png";

export default function WhyGetShedSection() {
  return (
    <div className="whyGetShedSection">
      <div className="container">
        <div className="whyGetShedSection-content">
          <div className="whyGetShedSection-content-left">
            <SectionTitle text="Why get a shed?" line={true} />
            <p>
              Adding more space to your home has never been easier thanks to the
              rising popularity of delatched spaces. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris.
              <span>Here are some ways you can use your extra space.</span>
            </p>
          </div>
          <div className="whyGetShedSection-content-right">
            <div className="whyGetShedSection-content-right-firstColumn">
              <WhyGetShedItem
                color="#5dada8"
                text="An extra guest home"
                img={sofa}
              />
              <WhyGetShedItem
                color="#386865"
                text="Home office or quite area"
                img={computer}
              />
            </div>
            <div className="whyGetShedSection-content-right-secondColumn">
              <WhyGetShedItem
                color="#254543"
                text="Yoga & meditation space"
                img={man}
              />
              <WhyGetShedItem
                color="#4a8a86"
                text="Hosting area for get togethers"
                img={people}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
