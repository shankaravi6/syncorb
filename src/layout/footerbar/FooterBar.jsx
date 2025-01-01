import React from "react";
import { TempFooterSection } from "../../components/styled_components/footerbarStyles/FooterStyles";
import {
  TempFlex,
  TempSection,
  TempSubTitle,
  TempTypography,
} from "../../components/styled_components/globalStyles";

const FooterBar = () => {
  return (
    <TempFooterSection>
      <TempSection mp="10px" sp="10px">
        <TempFlex w="100%" gap='2rem' jc="space-between">
          <TempFlex sw="100%" w="500px">
            <TempTypography fs="14px" ls="0px">
            At Syncorb, we exceed customer expectations with end-to-end solutions for design, development, and data analytics.
            </TempTypography>
          </TempFlex>
          <TempFlex dir="column" al="flex-start">
            <TempTypography fs="14px">All rights reserved by</TempTypography>
            <TempSubTitle fst="normal" fs="14px">
              SYNCORB @2024
            </TempSubTitle>
          </TempFlex>
        </TempFlex>
      </TempSection>
    </TempFooterSection>
  );
};

export default FooterBar;
