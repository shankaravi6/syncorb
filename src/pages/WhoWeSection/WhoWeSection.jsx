import React from "react";
import {
  TempCard,
  TempCustDiv,
  TempFlex,
  TempLinearText,
  TempSection,
  TempSubTitle,
  TempTypography,
} from "../../components/styled_components/globalStyles";
import { Fade } from "react-awesome-reveal";
import { GrAchievement } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbApps } from "react-icons/tb";

const WhoWeSection = () => {
  return (
    <TempSection
      className="relative"
      p="2rem 2rem"
      sp="2rem 2rem"
      mp="5rem 2rem 0 2rem"
    >
      <TempCustDiv className="absolute top-0 left-0">
        <div className="cube">
          <div className="square"></div>
          <div className="square2"></div>
          <div className="square3"></div>
        </div>
      </TempCustDiv>
      <Fade>
        <TempFlex dir="column" gap="0rem">
          <TempSubTitle fs="clamp(2rem, 10vw, 3.5rem)">WHO WE ARE</TempSubTitle>
          <TempLinearText fs="clamp(1.25rem, 5vw, 2rem)">
            We always try to understand users expectation
          </TempLinearText>
        </TempFlex>
        <TempFlex dir="column" gap="2em" p="4rem 0">
          <TempTypography>
            At Syncorb Every Developement is done with the thought to Exceed the
            Customer Expectations.
          </TempTypography>
          <TempFlex gap="clamp(2rem, 10vw, 5rem)" p="3rem 0">
            <TempCard
              bg="conic-gradient(
    from 0deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0.3)
  )"
              br="0.5rem"
              className="flex justify-center items-center"
              w="270px"
              h="250px"
              sw="270px"
              sh="250px"
              p="2.5rem"
            >
              <TempFlex dir="column" gap="1rem">
                <GrAchievement style={{ fontSize: "5rem", color: "#aeadab" }} />
                <TempLinearText>2+ Years</TempLinearText>
                <TempTypography>Experience</TempTypography>
              </TempFlex>
            </TempCard>
            <TempCard
              bg="conic-gradient(
    from 0deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0.3)
  )"
              br="0.5rem"
              className="flex justify-center items-center"
              w="270px"
              h="250px"
              sw="270px"
              sh="250px"
              p="2.5rem"
            >
              <TempFlex dir="column" gap="1rem">
                <HiOutlineUserGroup
                  style={{ fontSize: "5rem", color: "#aeadab" }}
                />
                <TempLinearText>20+</TempLinearText>
                <TempTypography>Team Members</TempTypography>
              </TempFlex>
            </TempCard>
            <TempCard
              bg="conic-gradient(
    from 0deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0.3)
  )"
              br="0.5rem"
              className="flex justify-center items-center"
              w="270px"
              h="250px"
              sw="270px"
              sh="250px"
              p="2.5rem"
            >
              <TempFlex dir="column" gap="1rem">
                <TbApps style={{ fontSize: "5rem", color: "#aeadab" }} />
                <TempLinearText>15+</TempLinearText>
                <TempTypography>Projects</TempTypography>
              </TempFlex>
            </TempCard>
          </TempFlex>
        </TempFlex>
      </Fade>
    </TempSection>
  );
};

export default WhoWeSection;
