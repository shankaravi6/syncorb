import React, { useEffect, memo, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { Fade } from "react-awesome-reveal";
import {
  TempBox,
  TempCard,
  TempCustDiv,
  TempFlex,
  TempGlassCard,
  TempImg,
  TempLinearText,
  TempSection,
  TempSubTitle,
  TempTypography,
} from "../../components/styled_components/globalStyles";
import ServiceImg from "../../../public/assets/images/service.jpg";
import TempButton from "../../components/common_components/TempButton";
import { serviceData } from "../../data/serviceData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FaRobot } from "react-icons/fa";
import { colorTokens } from "../../context/theme/themeConfig";

// Custom Arrow Components with Icons
const TopArrow = (props) => (
  <div
    className="slick-arrow top-arrow"
    style={{
      position: "absolute",
      top: "-50px", // Adjusted to move it a little lower
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10,
      cursor: "pointer",
      fontSize: "30px",
      color: "#aeadab",
    }}
    onClick={props.onClick}
  >
    <FaRegArrowAltCircleUp />
  </div>
);

const BottomArrow = (props) => (
  <div
    className="slick-arrow bottom-arrow"
    style={{
      position: "absolute",
      bottom: "-30px", // Adjusted to move it a little higher
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10,
      cursor: "pointer",
      fontSize: "30px",
      color: "#aeadab",
    }}
    onClick={props.onClick}
  >
    <FaRegArrowAltCircleDown />
  </div>
);

const ServciceSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    prevArrow: <TopArrow />,
    nextArrow: <BottomArrow />,
  };

  const [activeIndex, setActiveIndex] = useState();

  const handleSlideMove = (splide) => {
    setActiveIndex(splide.index);
  };

  return (
    <TempSection
      p="5rem 0 4rem 0"
      sp="1rem 0 3rem 0"
      mp="1rem 0 3rem 0"
      className="relative"
    >
      <Fade duration="1500">
        <TempFlex className="relative" gap="clamp(0rem, 5vw, 15rem)">
          <TempBox
            w="500px"
            className="flex flex-col gap-5"
            mp="clamp(2rem, 5vw, 0rem)"
          >
            <TempSubTitle ta="left" fs="clamp(2rem, 10vw, 2.8rem)">
              SERVICE WE PROVIDE
            </TempSubTitle>
            <TempTypography>
              We are redefining the way the world communicated.
            </TempTypography>
          </TempBox>

          <TempBox
            className="flex justify-center items-center"
            w="1500px"
            h="500px"
            sh="800px"
            mh="350px"
          >
            <TempFlex
              m="-5rem 0 0 0"
              al="left"
              dir="column"
              gap="clamp(1.5rem, 5vw, 2rem)"
            >
              <Splide
                options={{
                  perPage: 3,
                  perMove: 1,
                  drag: "free",
                  type: "loop",
                  omitEnd: true,
                  snap: true,
                  pagination: false,
                  gap: "10rem",
                  width: "850px",
                  arrows: true,
                  autoplay: true,
                  interval: 5000,
                  breakpoints: {
                    1024: {
                      perPage: 2, // Shows 2 items per page on medium screens
                      perMove: 1,
                      gap: "5rem", // Adjusts gap between items
                      width: "750px",
                      arrows: false,
                    },
                    768: {
                      perPage: 1, // Shows 1 item per page on smaller screens
                      perMove: 1,
                      gap: "2rem", // Adjusts gap for small screens
                      width: "350px",
                      arrows: false,
                    },
                    480: {
                      perPage: 1, // Shows 1 item per page on very small screens
                      perMove: 1,
                      gap: "1rem", // Smaller gap on very small screens
                      width: "250px",
                      arrows: false,
                    },
                  },
                }}
                aria-label="My React Splide Slider"
                onMove={handleSlideMove}
              >
                {serviceData.map((data, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <SplideSlide key={data.id}>
                      <TempGlassCard
                        w="275px"
                        h="275px"
                        sw="250px"
                        sh="250px"
                        b="unset"
                        bg={isActive ? 'rgba(255, 255, 255, 0.15)' : "unset"}
                        p="1rem 1.5rem"
                      >
                        <TempFlex
                          dir="column"
                          gap="1.5rem"
                          al="start"
                          jc="center"
                        >
                          {data.icon && (
                            <data.icon
                              style={{
                                color: colorTokens.drops[300],
                                fontSize: "2.5rem",
                                margin: "0.5rem 0 0 0",
                              }}
                            />
                          )}
                          <TempFlex
                            p="0.5rem 0 0 0"
                            dir="column"
                            gap=".5rem"
                            al="start"
                          >
                            <TempLinearText
                              ta="left"
                              fs="clamp(1rem, 10vw, 1.25rem)"
                            >
                              {data.title}
                            </TempLinearText>
                            <TempTypography
                              ta="left"
                              fs="clamp(1rem, 10vw, 1.rem)"
                            >
                              {data.text}
                            </TempTypography>
                          </TempFlex>
                        </TempFlex>
                      </TempGlassCard>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </TempFlex>
            <TempCustDiv className="absolute top-24 right-28">
              <div className="glowbox">
                <div className="glow"></div>
              </div>
            </TempCustDiv>
          </TempBox>

          <TempCustDiv className="absolute -top-10 left-0">
            <div className="cube">
              <div className="square"></div>
              <div className="square2"></div>
              <div className="square3"></div>
            </div>
          </TempCustDiv>
        </TempFlex>
      </Fade>
    </TempSection>
  );
};

export default memo(ServciceSection);
