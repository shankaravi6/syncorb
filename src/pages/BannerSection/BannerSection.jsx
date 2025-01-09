import React, { lazy, memo } from "react";
import {
  TempBackImg,
  TempBanTitle,
  TempBox,
  TempCenterContainer,
  TempContainer,
  TempCover,
  TempFlex,
  TempImg,
  TempSection,
  TempTitle,
  TempBackBanImg
} from "../../components/styled_components/globalStyles";
import BannerImg from "../../../public/assets/images/banner.jpg";
import Logo from "../../../public/assets/images/logo.png";
import { colorTokens } from "../../context/theme/themeConfig";
import { Fade } from "react-awesome-reveal";
const Spline = lazy(() => import("@splinetool/react-spline"));

const BannerSection = () => {
  return (
    <TempSection m="unset" mw="unset">
      <TempCenterContainer>
      <Spline scene="https://prod.spline.design/T9z4vGuSynO1F3Ea/scene.splinecode" />
        {/* <TempBackBanImg
          className="relative"
          op="0.4"
          url={BannerImg}
        ></TempBackBanImg> */}
        <TempFlex className="absolute" dir="column">
          <Fade direction="up" triggerOnce>
            <TempBox w="350px" h="350px" sw='250px' sh='250px'>
              <TempImg op="0.85" src={Logo} />
            </TempBox>
          </Fade>
          <Fade direction="up" triggerOnce>
            <TempBanTitle ls="clamp(0rem ,5vw, 1rem)">SYNCORB</TempBanTitle>
          </Fade>
        </TempFlex>
      </TempCenterContainer>
    </TempSection>
  );
};

export default memo(BannerSection);
