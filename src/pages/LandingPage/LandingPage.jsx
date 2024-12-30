import React, {memo} from "react";
import NavBar from "../../layout/navbar/NavBar";
import FooterBar from "../../layout/footerbar/FooterBar";
import { TempContainer, TempLinearText } from "../../components/styled_components/globalStyles";
import BannerSection from "../BannerSection/BannerSection";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import CoreSection from "../CoreSection/CoreSection";
import ServciceSection from "../ServiceSection/ServiceSection";
import ClientSection from "../ClientSection/ClientSection";

const LandingPage = () => {
  return (
    <TempContainer>
      <NavBar />
      <BannerSection/>
      <WelcomeSection/> 
      <CoreSection/> 
      <ServciceSection/>
      <ClientSection/>
      <FooterBar/>
    </TempContainer>
  );
};

export default memo(LandingPage);
