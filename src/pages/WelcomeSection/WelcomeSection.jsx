import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import {
  TempBackImg,
  TempBox,
  TempCover,
  TempCustDiv,
  TempFlex,
  TempImg,
  TempLinearText,
  TempSection,
  TempSubTitle,
  TempTypography,
} from "../../components/styled_components/globalStyles";
import "./WelcomeSection.css";
import WelcomeImg from "../../../public/assets/images/welcome.png";
import { colorTokens } from "../../context/theme/themeConfig";

const WelcomeSection = () => {
  return (
    <TempSection>
      <TempFlex
        p="5rem"
        gap="clamp(0.5rem, 10vw, 2.5rem)"
        dir="column"
        h="100vh"
      >
        <Fade duration="1000">
          <TempCover
            className="relative rounded-3xl flex justify-center items-center"
            w="clamp(18.4375rem, 80vw, 62.5rem)"
            h="clamp(28.25rem, 100vw, 33.25rem)"
            // sw='295px'
            // sh='500px'
          >
            <TempBackImg op="0.75" className="rounded-lg flex" url={WelcomeImg}>
              <TempBox
                p="0 5rem"
                sp="0rem 1rem"
                mp="0rem 1rem"
                className="flex flex-col justify-center items-center gap-5"
              >
                <TempSubTitle color={colorTokens.drops[300]} ta="center" fs="clamp(1.5rem, 10vw, 3.5rem)">
                  WELCOME TO OUR COMPANY
                </TempSubTitle>
                <TempTypography fs="clamp(.5rem, 5vw, 1.5rem)">
                  At SYNCORB, we specialize in delivering innovative,
                  cutting-edge solutions to address technological flaws across
                  industries. With a focus on creating impactful and futuristic
                  products, we empower our customers to thrive in a rapidly
                  evolving technological landscape.
                </TempTypography>
              </TempBox>
            </TempBackImg>
          </TempCover>
        </Fade>
      </TempFlex>
    </TempSection>
  );
};

export default memo(WelcomeSection);
