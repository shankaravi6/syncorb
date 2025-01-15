import React, { memo } from "react";
import {
  TempBox,
  TempCard,
  TempContainer,
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
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import useResponsiveLayout from "../../hooks/useResponsiveLayout";


const ProductSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const { isSmallScreen, isMediumScreen, isLargeScreen } =
  useResponsiveLayout();

  return (
    <>
    {isSmallScreen || isMediumScreen ? (
    <TempSection p="2.5rem 0" sp='1rem 0 3rem 0' mp='1rem 0 3rem 0'>
      <Fade>
      
      <TempFlex>
        <TempSubTitle fs="clamp(2rem, 10vw, 3.5rem)">OUR PRODUCTS</TempSubTitle>
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
    ) : (
      <TempSection p="2.5rem 0" sp="1rem 0 3rem 0" mp="1rem 0 3rem 0">
        <Fade>
          <TempFlex p="0rem 0 3.5rem 0">
            <TempSubTitle fs="clamp(2rem, 10vw, 3.5rem)">
              OUR PRODUCTS
            </TempSubTitle>
          </TempFlex>

      <TempContainer>
        {productData.map((project, i) => {
          const targetScale = 1 - (productData.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project?.img}
              src={project?.src}
              title={project?.title}
              color={project?.color}
              description={project?.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              data={project}
            />
          );
        })}
      </TempContainer>
      </Fade>
      </TempSection>
    )}
    </>
  );
};

export default memo(ProductSection);

export const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  data
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          background:
            "radial-gradient(circle, rgb(205 205 205 / 20%) 50%, rgb(0 0 0 / 16%) 0%)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(100px)",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-5 h-[600px] w-[100%] rounded-md p-10 origin-top`}
      >
      <div className="flex">
        <div className="w-[70%] h-full">
          <TempTitle ta='left' color={colorTokens.drops[300]} fs="3.5rem">
            {title}
          </TempTitle>

          <div className={`w-[80%] relative pt-3`}>
            <TempTypography fs="clamp(1rem, 5vw, 1.5rem)">
              {description}
            </TempTypography>
            <TempFlex dir="column" al="start" gap="2rem" p='2.5rem 0 3.5rem 0'>
                        {data?.features.map((fea) => {
                          return (
                            <TempTypography
                              key={fea?.id}
                              fs="1rem"
                              ta="left"
                              className="flex items-start pl-5"
                            >
                              <ul style={{listStyle:'disc'}}>
                                <li>{fea?.text}</li>
                              </ul>
                            </TempTypography>
                          );
                        })}
            </TempFlex>
            <TempButton>Explore</TempButton>
          </div>
        </div>

        <div className={`relative  rounded-lg overflow-hidden `}>
          <motion.div className={`w-full`} style={{ scale: imageScale }}>
            <TempBox w='400px' h='525px'>
            <TempImg src={url} />
            </TempBox>
          </motion.div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

