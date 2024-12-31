import React, {memo} from "react";
import NavBar from "../../layout/navbar/NavBar";
import FooterBar from "../../layout/footerbar/FooterBar";
import { TempContainer, TempLinearText } from "../../components/styled_components/globalStyles";
import BannerSection from "../BannerSection/BannerSection";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import CoreSection from "../CoreSection/CoreSection";
import ServciceSection from "../ServiceSection/ServiceSection";
import ClientSection from "../ClientSection/ClientSection";
import DevSection from "../DevSection/DevSection";
import ProductSection from "../ProductSection/ProductSection";
import WhoWeSection from "../WhoWeSection/WhoWeSection";

const LandingPage = () => {
  return (
    <TempContainer back='repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.0175) 0px, rgba(255, 255, 255, 0.0175) 0.85px, transparent 0.85px, transparent 25px), repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.0175) 0px, rgba(255, 255, 255, 0.0175) 0.85px, transparent 0.85px, transparent 25px);'>
      <NavBar />
      <BannerSection/>
      <WelcomeSection/> 
      <CoreSection/> 
      <DevSection/>
      <ServciceSection/>
      <ProductSection/>
      <ClientSection/>
      <WhoWeSection/>
      <FooterBar/>
    </TempContainer>
  );
};

export default memo(LandingPage);
