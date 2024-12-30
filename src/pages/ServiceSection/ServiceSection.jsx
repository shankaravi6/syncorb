import React, { useEffect, memo } from "react";
import Lenis from "@studio-freight/lenis";
import { Fade } from "react-awesome-reveal";
import {
  TempBox,
  TempCard,
  TempCustDiv,
  TempFlex,
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

// Custom Arrow Components with Icons
const TopArrow = (props) => (
  <div
    className="slick-arrow top-arrow"
    style={{
      position: 'absolute',
      top: '-20px', // Adjusted to move it a little lower
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10,
      cursor: 'pointer',
      fontSize: '30px',
      color: '#fff',
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
      position: 'absolute',
      bottom: '-50px', // Adjusted to move it a little higher
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10,
      cursor: 'pointer',
      fontSize: '30px',
      color: '#fff',
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

  return (
    <TempSection p="0 0 5rem 0">
      <Fade duration='1500'>
        <TempFlex gap="clamp(2rem, 5vw, 10rem)">
          <TempBox w="auto" className="flex flex-col gap-5" mp='clamp(2rem, 5vw, 0rem)'>
            <TempSubTitle>OUR SERVICES</TempSubTitle>
            <TempCard w="450px" h="450px" p="2rem">
              <TempImg src={ServiceImg} br="15px" />
            </TempCard>
          </TempBox>

          <TempBox  w="100%" h="500px" sh='800px'>
            <TempFlex gap="2rem" dir="column" p='clamp(2rem, 5vw, 5rem)'>
              <TempBox>
                <TempFlex al="left" dir="column" gap="clamp(1.5rem, 5vw, 2rem)">
                  <Slider {...settings}>
                    {serviceData.map((sdata) => {
                      return (
                        <TempCard
                          br="10px"
                          bg="linear-gradient(175deg, #000000, #4141417a)"
                          p="1.5rem"
                          sw='clamp(300px, 90vw, 800px) !important'
                          h="auto"
                          m="0 0 2rem 0"
                        >
                          <TempLinearText fs="clamp(0.5rem, 5vw, 1.25rem)" key={sdata?.id}>
                            {sdata?.title}
                            <TempTypography fs="clamp(0.5rem, 5vw, 1.25rem)">
                              {sdata?.text}
                            </TempTypography>
                          </TempLinearText>
                        </TempCard>
                      );
                    })}
                  </Slider>
                </TempFlex>
              </TempBox>
            </TempFlex>
          </TempBox>
        </TempFlex>
      </Fade>
    </TempSection>
  );
};

export default memo(ServciceSection);
