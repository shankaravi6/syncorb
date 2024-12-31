import React from "react";
import {
  TempBackBanImg,
  TempBackImg,
  TempBox,
  TempCenterContainer,
  TempFlex,
  TempImg,
  TempLinearText,
  TempSection,
  TempTypography,
} from "../../components/styled_components/globalStyles";
import DevImg from "../../../public/assets/images/devimgback.jpeg";
import { Fade } from "react-awesome-reveal";

const DevSection = () => {
  return (
    <TempSection>
      <Fade duration='2000'>
      <TempFlex m='10rem 0'>
        <TempCenterContainer className='relative'>
          <TempBackImg
            className="relative"
            op="0.5"
            url={DevImg}
          >
          </TempBackImg>
          <TempLinearText className='absolute top-5'>Software Development</TempLinearText>
          <TempLinearText className='absolute top-36 left-36'>Digital Marketing</TempLinearText>
          <TempLinearText className='absolute top-36 right-36'>UI/UX & Branding</TempLinearText>
          <TempLinearText className='absolute top-96 left-36'>Web3(DAPP) & Blockchain</TempLinearText>
          <TempLinearText className='absolute top-96 right-36'>AL/ML Products</TempLinearText>
          <TempLinearText className='absolute bottom-20'>IOT Development</TempLinearText>
        </TempCenterContainer>
      </TempFlex>
      </Fade>
    </TempSection>
  );
};

export default DevSection;
