import React, { memo } from "react";
import {
  TempBox,
  TempCard,
  TempFlex,
  TempGlassCard,
  TempGrid,
  TempImg,
  TempLinearText,
  TempSection,
  TempSubTitle,
  TempTitle,
  TempTypography,
} from "../../components/styled_components/globalStyles";
import TempButton from "../../components/common_components/TempButton";
import { GoDot } from "react-icons/go";
import { colorTokens } from "../../context/theme/themeConfig";
import { productData } from "../../data/productData";
import { Fade } from "react-awesome-reveal";

const ProductSection = () => {
  return (
    <TempSection p="5rem 0">
      <Fade>
      
      <TempFlex>
        <TempSubTitle fs="clamp(2rem, 5vw, 3.5rem)">OUR PRODUCTS</TempSubTitle>
      </TempFlex>
      <TempFlex
        className="flex-wrap"
        p="4rem 0rem 5rem 0rem" sp='4rem 1.5rem 5rem 1.5rem'
        gap="clamp(2rem, 5vw, 5rem)"
      >
        <TempGrid gap='2rem' sm_gap='5rem' xs_gap='3rem' columns="repeat(3, 1fr)">
          {productData.map((data) => {
            return (
              <TempGlassCard
                bg="radial-gradient(circle, rgb(205 205 205 / 20%) 0%, rgb(0 0 0 / 16%) 100%);"
                p="1rem 2rem 2rem 2rem"
                w='370px'
                h="100%"
              >
                <TempFlex
                  key={data?.id}
                  gap=".5rem"
                  dir="column"
                  jc="left"
                  al="start"
                >
                  <TempLinearText>About</TempLinearText>
                  <TempTypography fs="1rem" className="pb-5">
                    {data?.description}
                  </TempTypography>
                </TempFlex>
                <hr style={{ border: ".88px solid rgb(255 255 255 / 15%)" }} />
                <TempFlex key={data?.id} p="0.25rem 0" dir="column" gap="0.5rem">
                  <TempTitle color={colorTokens.drops[300]} fs="3.5rem">
                    {data?.title}
                  </TempTitle>
                  <TempFlex dir="column" al="start" gap="1rem">
                    {data?.features.map((fea) => {
                      return (
                        <TempTypography
                          key={fea?.id}
                          fs="1rem"
                          ta="left"
                          className="flex items-start"
                        >
                          {fea?.text}
                        </TempTypography>
                      );
                    })}

                    <TempFlex w="100%" p="1rem 0 0 0">
                      <TempButton>Explore</TempButton>
                    </TempFlex>
                  </TempFlex>
                </TempFlex>
              </TempGlassCard>
            );
          })}
        </TempGrid>
      </TempFlex>
      </Fade>
    </TempSection>
  );
};

export default memo(ProductSection);
