import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import React from "react";
import { useThemeContext } from "../../context/theme/ThemeProvider";

const mapStateToProps = (state) => ({
  mode: state.app.mode,
});

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const opacityChange = keyframes`
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

//HOC
const TempComponent = (StyledComponent) => {
  const ConnectedStyledComponent = connect(mapStateToProps)(
    ({ dispatch, ...rest }) => {
      const { palette } = useThemeContext();
      return <StyledComponent {...rest} $palette={palette} />;
    }
  );

  return ConnectedStyledComponent;
};

export const TempBackground = styled.div`
  width: 100%;
  height: ${(props) => (props.h ? props.h : "100vh")};
  background: ${(props) =>
    props.bg ? props.bg : `${props.$palette.background.high}`};
`;

export const TempContainer = TempComponent(styled.div`
  width: 100%;
  background: ${(props) => (props.back ? props.back : "unset")};
  background-color: ${(props) =>
    props.bg ? props.bg : props.$palette.background.high};
  color: #f2f2f2;
  @media screen and (max-width: 768px) {
    max-width: 1300px;
  }
`);

export const TempCenterContainer = TempComponent(styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => (props.br ? props.br : "unset")};
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  @media screen and (max-width: 768px) {
    max-width: 1300px;
  }
`);

export const TempSection = TempComponent(styled.section`
  width: 100%;
  height: ${(props) => (props.h ? props.h : "unset")};
  max-width: ${(props) => (props.mw ? props.mw : "1300px")};
  margin: ${(props) => (props.m ? props.m : "0 auto")};
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  border-radius: ${(props) => (props.br ? props.br : "unset")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  @media screen and (max-width: 970px) {
    padding: ${(props) => (props.sp ? props.sp : "unset")};
    height: ${(props) => (props.sh ? props.sh : "unset")};
  }
  @media screen and (max-width: 1125px) {
    width: ${(props) => (props.mw ? props.mw : "none")};
    padding: ${(props) => (props.mp ? props.mp : "unset")};
  }
`);

export const TempCover = TempComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "unset")};
  height: ${(props) => (props.h ? props.h : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  transform: ${(props) => (props.tr ? props.tr : "unset")};
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};
  border: ${(props) => (props.border ? props.border : "unset")};
  @media screen and (max-width: 970px) {
    padding: ${(props) => (props.sp ? props.sp : "unset")};
    /* width: ${(props) => (props.sw ? props.sw : "unset")};
    height: ${(props) => (props.sh ? props.sh : "unset")}; */
  }
`);

export const TempFlex = TempComponent(styled.div`
  display: flex;
  align-items: ${(props) => (props.al ? props.al : "center")};
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  flex-direction: ${(props) => (props.dir ? props.dir : "row")};
  width: ${(props) => (props.w ? props.w : "unset")};
  height: ${(props) => (props.h ? props.h : "unset")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  gap: ${({ gap }) => (gap ? gap : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  background-color: ${(props) => (props.bg ? props.bg : "unset")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};

  @media screen and (max-width: 970px) {
    flex-direction: ${(props) => (props.sm_dir ? props.sm_dir : "column")};
    padding: ${(props) => (props.sp ? props.sp : "none")};
    margin: ${(props) => (props.sm ? props.sm : "unset")};
    align-items: ${(props) => (props.sal ? props.sal : "center")};
    justify-content: ${(props) => (props.sjc ? props.sjc : "center")};
    width: ${(props) => (props.sw ? props.sw : "unset")};
    height: ${(props) => (props.sh ? props.sh : "unset")};
  }
`);

export const TempGrid = TempComponent(styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns ? props.columns : "repeat(auto-fit, minmax(250px, 1fr))"};
  gap: ${(props) => (props.gap ? props.gap : "16px")};
  width: ${(props) => (props.w ? props.w : "100%")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};

  @media screen and (max-width: 1125px) {
    grid-template-columns: ${(props) =>
      props.sm_columns ? props.sm_columns : "repeat(2, 1fr)"};
    gap: ${(props) => (props.sm_gap ? props.sm_gap : "12px")};
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: ${(props) =>
      props.xs_columns ? props.xs_columns : "1fr"};
    gap: ${(props) => (props.xs_gap ? props.xs_gap : "8px")};
  }
`);

export const TempBox = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  width: ${(props) => (props.w ? props.w : "auto")};
  height: ${(props) => (props.h ? props.h : "auto")};
  background: ${(props) => (props.bg ? props.bg : "unset")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  border: ${(props) => (props.border ? props.border : "unset")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};

  @media screen and (max-width: 970px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
    transform: translateX(0) !important;
    display: ${(props) => (props.sdisplay ? props.sdisplay : "flex")};
    padding: ${(props) => (props.sp ? props.sp : "unset")};
  }
  @media screen and (max-width: 1125px) {
    width: ${(props) => (props.mw ? props.mw : "none")};
    height: ${(props) => (props.mh ? props.mh : "auto")};
    padding: ${(props) => (props.mp ? props.mp : "unset")};
  }
`;

export const TempCard = TempComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "350px")};
  height: ${(props) => (props.h ? props.h : "350px")};
  padding: ${(props) => (props.p ? props.p : "auto")};
  margin: ${(props) => (props.m ? props.m : "auto")};
  border-radius: ${(props) => (props.br ? props.br : "28px")};
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  border: ${(props) =>
    props.b ? props.b : `1px solid ${props.$palette.background.midhigh}`};
  box-shadow: ${(props) => (props.bs ? props.bs : `unset`)};
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 960px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
    margin: ${(props) => (props.sm ? props.sm : "auto")};
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    border: ${(props) =>
      props.b ? props.b : `1px solid ${props.$palette.background.mid}`};
  }
`);

export const TempGlassCard = TempComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "350px")};
  height: ${(props) => (props.h ? props.h : "350px")};
  padding: ${(props) => (props.p ? props.p : "auto")};
  margin: ${(props) => (props.m ? props.m : "auto")};
  border-radius: ${(props) => (props.br ? props.br : "0.5rem")};
  background: ${(props) =>
    props.bg ? props.bg : `rgba(255, 255, 255, 0.075)`};
  box-shadow: ${(props) =>
    props.bs ? props.bs : `0 4px 30px rgba(0, 0, 0, 0.1)`};
  border: 1px solid
    ${(props) => (props.b ? props.b : "rgba(255, 255, 255, 0.3)")};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  @media screen and (max-width: 960px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
  }

  &:hover {
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    background: ${(props) =>
      props.bg ? props.bg : `rgba(255, 255, 255, 0.085)`};
  }
`);

export const TempCoreCard = TempComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "350px")};
  height: ${(props) => (props.h ? props.h : "350px")};
  padding: ${(props) => (props.p ? props.p : "auto")};
  margin: ${(props) => (props.m ? props.m : "auto")};
  border-radius: ${(props) => (props.br ? props.br : "0.5rem")};
  background: ${(props) =>
    props.bg ? props.bg : `rgba(255, 255, 255, 0.075)`};
  box-shadow: ${(props) =>
    props.bs ? props.bs : `0 4px 30px rgba(0, 0, 0, 0.1)`};
  border: 1px solid
    ${(props) => (props.b ? props.b : "rgba(255, 255, 255, 0.3)")};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease-in-out;
  background: linear-gradient(rgb(0 0 0 / 90%), rgb(0 0 0 / 84%)) padding-box, linear-gradient(to right, #00000069, #ffffffc7) border-box;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  @media screen and (max-width: 960px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    backdrop-filter: blur(5px);
    background:linear-gradient(rgb(0 0 0 / 90%), rgb(0 0 0 / 75%)) padding-box, linear-gradient(to right, #00000069, #ffffffc7) border-box;
  }
`);

export const TempImg = styled.img`
  width: ${(props) => (props.w ? props.w : "100%")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};
  opacity: ${(props) => props.op || "1"};
  @media screen and (max-width: 970px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.sw ? props.sw : "unset")};
  }
`;

export const TempBackBanImg = styled.div`
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "100%")};
  background: ${(props) => (props.url ? `url(${props.url})` : "none")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: ${(props) => props.op || "0.95"};
  animation: blub 5s infinite alternate-reverse;
  @media screen and (max-width: 970px) {
    width: ${(props) => (props.sw ? props.sw : "100%")};
  }
  @keyframes blub {
    0% {
      opacity: 0.15;
    }
    50% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.35;
    }
  }
`;

export const TempBackImg = styled.div`
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "100%")};
  background: ${(props) => (props.url ? `url(${props.url})` : "none")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: ${(props) => props.op || "1"};
  @media screen and (max-width: 970px) {
    width: ${(props) => (props.sw ? props.sw : "100%")};
  }
`;

export const TempForm = styled.form`
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "auto")};
`;

export const TempBanTitle = TempComponent(styled.h1`
  font-family: "Primary", sans-serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1.5rem, 10vw, 5rem)")};
  text-align: center;
  letter-spacing: ${(props) => (props.ls ? props.ls : "unset")};
  color: transparent;
  background: linear-gradient(to right, #4d4d4d 0, white 10%, #4d4d4d 20%);
  background-position: 0;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  text-decoration: none;
  white-space: nowrap;

  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 100%;
    }
    100% {
      background-position: 450px;
    }
  }
`);

export const TempTitle = TempComponent(styled.h1`
  font-family: "Primary", sans-serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1.5rem, 10vw, 5rem)")};
  text-align: ${(props) => (props.ta ? props.ta : "center")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "unset")};
  color: ${(props) => (props.color ? props.color : props.$palette.text.high)};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  margin: unset;
`);

export const TempSubTitle = TempComponent(styled.h1`
  font-family: "Secondary", sans-serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 2.5rem)")};
  text-align: ${(props) => (props.ta ? props.ta : "center")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0px")};
  color: ${(props) => (props.color ? props.color : "transparent")};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  font-weight: ${(props) => (props.fw ? props.fw : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  transition: all 0.3s ease;

  background: linear-gradient(
    135deg,
    #dedede,
    #ffffff 16%,
    #dedede 21%,
    #ffffff 24%,
    #454545 27%,
    #dedede 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedede 72%,
    #ffffff 80%,
    #dedede 84%,
    #a1a1a1
  );
  background-size: 250%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.85;

  animation: platinumShine 3s infinite linear;

  &:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }

  @keyframes platinumShine {
    0% {
      background-position: top left;
    }
    100% {
      background-position: bottom right;
    }
  }
`);

export const TempNavText = TempComponent(styled.p`
  font-family: "Typo", sans-serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1rem)")};
  text-align: center;
  color: ${(props) => (props.color ? props.color : props.$palette.text.midlow)};
  transition: all 0.5s ease-in-out;
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  background: ${(props) => (props.bg ? props.bg : "unset")};
  font-weight: ${(props) => (props.fw ? props.fw : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  opacity: 0.95;

  &::after {
    content: "";
    display: block;
    width: 0%;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    border-bottom: ${(props) => `2px solid ${props.$palette.text.mid}`};
  }

  &:hover::after {
    opacity: 0.75;
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
`);

export const TempTypography = TempComponent(styled.p`
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1.5rem)")};
  font-weight: ${(props) => (props.fw ? props.fw : "normal")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "1px")};
  font-family: ${(props) => (props.fm ? props.fm : "Typo, sans-serif")};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => (props.color ? props.color : props.$palette.text.midlow)};
  text-align: ${(props) => (props.ta ? props.ta : "justify")};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  opacity: 0.75;
`);

export const TempLinearText = TempComponent(styled.p`
  background-image: linear-gradient(
    93.4082deg,
    rgb(255, 255, 255) 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  background-clip: text;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1.5rem)")};
  font-weight: ${(props) => (props.fw ? props.fw : "normal")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "1px")};
  font-family: ${(props) => (props.fm ? props.fm : "Typo, sans-serif")};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => (props.color ? props.color : "transparent")};
  text-align: ${(props) => (props.ta ? props.ta : "justify")};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  opacity: 0.75;
`);

export const TempSpan = TempComponent(styled.span`
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1.5rem)")};
  font-weight: ${(props) => (props.fw ? props.fw : "normal")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "1px")};
  font-family: ${(props) => (props.fm ? props.fm : `Calibri, sans-serif`)};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => (props.color ? props.color : props.$palette.text.high)};
  text-align: ${(props) => (props.ta ? props.ta : "justify")};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  font-style: ${(props) => (props.fst ? props.fst : "normal")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
`);

export const TempCustDiv = TempComponent(styled.div`
  display: block;
`);

export const Conic = styled.div`
  position: relative;
  z-index: 0;
  width: 400px;
  height: 300px;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #1a232a;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      transparent,
      rgba(168, 239, 255, 1),
      transparent 30%
    );
    animation: ${rotate} 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #000;
    border-radius: 5px;
  }
`;

export const ConicDemo = styled(Conic)`
  &::after {
    animation: ${opacityChange} 5s infinite linear;
  }
`;
