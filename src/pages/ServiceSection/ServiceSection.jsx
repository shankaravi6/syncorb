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
      top: '-50px', // Adjusted to move it a little lower
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10,
      cursor: 'pointer',
      fontSize: '30px',
      color: '#aeadab',
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
      bottom: '-30px', // Adjusted to move it a little higher
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10,
      cursor: 'pointer',
      fontSize: '30px',
      color: '#aeadab',
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
    <TempSection p="1rem 0 5rem 0" sp='1rem 0 3rem 0' mp='1rem 0 3rem 0'>
      <Fade duration='1500'>
        <TempFlex gap="clamp(0rem, 5vw, 15rem)">
          <TempBox w="auto" className="flex flex-col gap-5" mp='clamp(2rem, 5vw, 0rem)'>
            <TempSubTitle fs='clamp(2rem, 10vw, 3.5rem)'>OUR SERVICES</TempSubTitle>
            <TempCard br='0.5rem' w="450px" h="450px" p="2rem">
              <TempImg src={ServiceImg} br="0.25rem" />
            </TempCard>
          </TempBox>

          <TempBox className="flex justify-center items-center" w="100%" h="500px" sh='800px'>
            <TempFlex gap="2rem" dir="column" m='3.5rem 0 0 0'>
              <TempBox>
                <TempFlex al="left" dir="column" gap="clamp(1.5rem, 5vw, 2rem)">
                  <Slider {...settings}>
                    {serviceData.map((sdata) => {
                      return (
                        <TempCard
                          br="10px"
                          bg="radial-gradient(circle, rgba(229, 228, 226, 0.085) 0%, rgba(0, 0, 0, 0.28) 100%)"
                          p="1.5rem"
                          sw='clamp(300px, 90vw, 800px) !important'
                          h="auto"
                          m="0 0 2rem 0rem"
                          sm='0 0 2rem 1rem'
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
