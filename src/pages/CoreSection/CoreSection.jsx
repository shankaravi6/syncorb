import React from "react";
import {
  TempBox,
  TempCard,
  TempFlex,
  TempGlassCard,
  TempGrid,
  TempLinearText,
  TempSection,
  TempSubTitle,
  TempTypography,
} from "../../components/styled_components/globalStyles";
import { Fade } from "react-awesome-reveal";
import TempButton from "../../components/common_components/TempButton";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useThemeContext } from "../../context/theme/ThemeProvider";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";
import useResponsiveLayout from "../../hooks/useResponsiveLayout";

const CoreSection = () => {
  const { palette } = useThemeContext();
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useResponsiveLayout();
  return (
    <TempSection>
      <Fade duration='1500'>
        <TempFlex
          gap="clamp(5rem, 5vw, 7.5rem)"
          p='clamp(1rem, 5vw, 3.125rem) clamp(2rem, 6vw, 0rem)'
          style={{
            minHeight: "100vh",
          }}
        >
          <TempBox w="100%" className="flex-col gap-5">
            <Fade direction="up">
              <TempButton p="10px 25px" variant="outline">
                Who we are
              </TempButton>
              <TempLinearText fs="clamp(2rem, 10vw, 3.5rem)" ta="left">
                Core Values
              </TempLinearText>
            </Fade>
            <Fade direction="up">
              <TempTypography>
                Rebirth blends technology with emotion to preserve memories and
                create lasting connections. With empathy, innovation, and
                respect for privacy, we aim to keep loved ones connected
                forever.
              </TempTypography>
            </Fade>
          </TempBox>
          
          {(isSmallScreen || isMediumScreen) ? (
          <TempBox w="100%" h="500px">
            <TempFlex gap="2.5rem">
              <TempGrid className='relative' sm_gap='2.5rem' xs_gap='2.5rem'>
                <TempGlassCard
                  className="flex flex-col justify-center items-center"
                  w="235px"
                  h="235px"
                  sh='235px'
                  sw='235px'
                >
                  <TempFlex p='0 1rem' w="100%" dir="column" gap="10px">
                    <TempCard
                      className="flex justify-center items-center"
                      br="50%"
                      w="50px"
                      h="50px"
                    >
                      <HiOutlineLightBulb
                        style={{
                          color: `${palette.text.mid}`,
                          fontSize: "1.5rem",
                        }}
                      />
                    </TempCard>
                    <TempLinearText fs="1.5rem">Innovation</TempLinearText>
                    <TempTypography ta="center" fs="0.85rem">
                      Continuously reimagining solutions.
                    </TempTypography>
                  </TempFlex>
                </TempGlassCard>
                <TempGlassCard
                  className="flex flex-col justify-center items-center"
                  w="235px"
                  h="235px"
                  sh='235px'
                  sw='235px'
                >
                  <TempFlex p='0 1rem' w="100%" dir="column" gap="10px">
                    <TempCard
                      className="flex justify-center items-center"
                      br="50%"
                      w="50px"
                      h="50px"
                    >
                      <FaRegHandshake
                        style={{
                          color: `${palette.text.mid}`,
                          fontSize: "1.5rem",
                        }}
                      />
                    </TempCard>
                    <TempLinearText fs="1.5rem">Reliability</TempLinearText>
                    <TempTypography ta="center" fs="0.85rem">
                    Ensuring trustworthy outcomes.
                    </TempTypography>
                  </TempFlex>
                </TempGlassCard>
              </TempGrid>
              <TempGrid className='relative' sm_gap='2.5rem' xs_gap='2.5rem'>
                <TempGlassCard
                  className="flex flex-col justify-center items-center"
                  w="235px"
                  h="235px"
                  sh='235px'
                  sw='235px'
                >
                  <TempFlex p='0 1rem' w="100%" dir="column" gap="10px">
                    <TempCard
                      className="flex justify-center items-center"
                      br="50%"
                      w="50px"
                      h="50px"
                    >
                      <MdOutlineSecurity
                        style={{
                          color: `${palette.text.mid}`,
                          fontSize: "1.5rem",
                        }}
                      />
                    </TempCard>
                    <TempLinearText fs="1.5rem">Security</TempLinearText>
                    <TempTypography ta="center" fs="0.85rem">
                    Protecting data and systems at all levels.
                    </TempTypography>
                  </TempFlex>
                </TempGlassCard>
                <TempGlassCard
                  className="flex flex-col justify-center items-center"
                  w="235px"
                  h="235px"
                  sh='235px'
                  sw='235px'
                >
                  <TempFlex p='0 1rem' w="100%" dir="column" gap="10px">
                    <TempCard
                      className="flex justify-center items-center"
                      br="50%"
                      w="50px"
                      h="50px"
                    >
                      <MdOutlineGroups
                        style={{
                          color: `${palette.text.mid}`,
                          fontSize: "1.5rem",
                        }}
                      />
                    </TempCard>
                    <TempLinearText ta='center' fs="1.5rem">Customer Centric</TempLinearText>
                    <TempTypography ta="center" fs="0.85rem">
                    Tailoring services to client needs.
                    </TempTypography>
                  </TempFlex>
                </TempGlassCard>
              </TempGrid>
            </TempFlex>
          </TempBox> ) : (
            <TempBox w="100%" h="500px">
            <TempFlex gap=".5rem">
              <TempGrid className='relative'>
                <TempGlassCard
                  className="flex flex-col justify-center items-center absolute -top-60"
                  w="235px"
                  h="235px"
                >
                  <TempFlex p='0 1rem' w="100%" dir="column" gap="10px">
                    <TempCard
                      className="flex justify-center items-center"
                      br="50%"
                      w="50px"
                      h="50px"
                    >
                      <HiOutlineLightBulb
                        style={{
                          color: `${palette.text.mid}`,
                          fontSize: "1.5rem",
                        }}
                      />
                    </TempCard>
                    <TempLinearText fs="1.5rem">Innovation</TempLinearText>
                    <TempTypography ta="center" fs="0.85rem">
                      Continuously reimagining solutions.
                    </TempTypography>
                  </TempFlex>
                </TempGlassCard>
                <TempGlassCard
                  className="flex flex-col justify-center items-center absolute  top-8 left-10"
                  w="235px"
                  h="235px"
                >
                  <TempFlex p='0 1rem' w="100%" dir="column" gap="10px">
                    <TempCard
                      className="flex justify-center items-center"
                      br="50%"
                      w="50px"
                      h="50px"
                    >
                      <FaRegHandshake
                        style={{
                          color: `${palette.text.mid}`,
                          fontSize: "1.5rem",
                        }}
                      />
                    </TempCard>
                    <TempLinearText fs="1.5rem">Reliability</TempLinearText>
                    <TempTypography ta="center" fs="0.85rem">
                    Ensuring trustworthy outcomes.
                    </TempTypography>
                  </TempFlex>
                </TempGlassCard>
              </TempGrid>
              <TempGrid className='relative'>
                <TempGlassCard
                  className="flex flex-col justify-center items-center absolute  -top-72 left-72"
                  w="235px"
                  h="235px"
                >
                  <TempFlex p='0 1rem' w="100%" dir="column" gap="10px">
                    <TempCard
                      className="flex justify-center items-center"
                      br="50%"
                      w="50px"
                      h="50px"
                    >
                      <MdOutlineSecurity
                        style={{
                          color: `${palette.text.mid}`,
                          fontSize: "1.5rem",
                        }}
                      />
                    </TempCard>
                    <TempLinearText fs="1.5rem">Security</TempLinearText>
                    <TempTypography ta="center" fs="0.85rem">
                    Protecting data and systems at all levels.
                    </TempTypography>
                  </TempFlex>
                </TempGlassCard>
                <TempGlassCard
                  className="flex flex-col justify-center items-center absolute  -top-2 left-80"
                  w="235px"
                  h="235px"
                >
                  <TempFlex p='0 1rem' w="100%" dir="column" gap="10px">
                    <TempCard
                      className="flex justify-center items-center"
                      br="50%"
                      w="50px"
                      h="50px"
                    >
                      <MdOutlineGroups
                        style={{
                          color: `${palette.text.mid}`,
                          fontSize: "1.5rem",
                        }}
                      />
                    </TempCard>
                    <TempLinearText ta='center' fs="1.5rem">Customer Centric</TempLinearText>
                    <TempTypography ta="center" fs="0.85rem">
                    Tailoring services to client needs.
                    </TempTypography>
                  </TempFlex>
                </TempGlassCard>
              </TempGrid>
            </TempFlex>
          </TempBox>
          )}

          
        </TempFlex>
      </Fade>
    </TempSection>
  );
};

export default CoreSection;
