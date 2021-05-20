import "./assets/styles/main.css";
import Header from "./components/Header/Header";
import OurMissionSection from "./components/OurMissionSection/OurMissionSection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import ViewOurModels from "./components/ViewOurModels/ViewOurModels";
import WhyGetShedSection from "./components/WhyGetShed/WhyGetShedSection";
import ContactFormContainer from "./components/ContactForm/ContactFormContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <OurMissionSection />
      <HowItWorksSection />
      <ViewOurModels />
      <WhyGetShedSection />
      <ContactFormContainer />
      <Footer />
    </div>
  );
}

export default App;
