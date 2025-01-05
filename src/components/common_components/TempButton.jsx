import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useThemeContext } from "../../context/theme/ThemeProvider";
import { colorTokens } from "../../context/theme/themeConfig";

const mapStateToProps = (state) => ({
  mode: state.app.mode,
});

const TempComponent = (StyledComponent) => {
  const ConnectedStyledComponent = connect(mapStateToProps)(
    ({ dispatch, ...rest }) => {
      const { palette } = useThemeContext();
      return <StyledComponent {...rest} $palette={palette} />;
    }
  );

  return ConnectedStyledComponent;
};

const StyledText = TempComponent(styled.span`
  text-align: center;
  font-size: auto;
  line-height: 30px;
  color: ${(props) => props.$palette.text.low};
  transition: all 0.3s ease-out;
  display: block;
`);

const StyledButton = TempComponent(styled.button`
  text-align: center;
  letter-spacing: 1.5px;
  border: 1px solid ${(props) => props.$palette.background.low};
  background: ${(props) => props.$palette.background.low};
  box-shadow: ${(props) => props.$palette.background.main} 0px;
  transition: all 0.3s ease;
  font-weight: 400;
  padding: ${(props) => (props.p ? props.p : "5px 25px")};
  width: ${(props) => (props.width ? props.width : "max-content")};
  display: block;
  border-radius: ${(props) => (props.br ? props.br : "5px")};
  opacity: 0.75;
  position: relative;

  &:hover {
    opacity: 0.85;
    border: 1px solid ${(props) => props.$palette.text.high};
    transition: all 0.3s ease-out;
  }
`);

const StyledOutlineButton = TempComponent(styled.button`
  text-align: center;
  letter-spacing: 1.5px;
  font-weight: 400;
  position: relative;
  padding: ${(props) => (props.p ? props.p : "5px 25px")};
  width: ${(props) => (props.width ? props.width : "max-content")};
  display: inline-block;
  border-radius: ${(props) => (props.br ? props.br : "5px")};
  background: ${(props) =>
    `linear-gradient(to right, #232323 0%, #ababab 100%)`}; /* Gradient border effect */
  color: ${(props) => props.$palette.text.midlow};
  transition: all 0.3s ease;
  opacity: 0.75;
  z-index: 1;
  cursor: pointer;

  /* Inner content */
  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    background: ${(props) => props.$palette.background.high}; /* Button background */
    border-radius: inherit; /* Ensures rounded corners match */
    z-index: -1;
  }

  &:hover {
    opacity: 0.85;
    background: ${(props) =>
      `linear-gradient(to right, ${(props) =>
        props.$palette.text.midlow} 0%, ${(props) =>
        props.$palette.text.main} 100%)`}; /* Hover effect with gradient */
    transition: all 0.3s ease-out;
  }
`);


const TempButton = ({
  height,
  width,
  onChange,
  onSubmit,
  onClick,
  onBlur,
  type,
  children,
  style,
  variant,
  p
}) => {
  return (
    <>
      {variant == "outline" ? (
        <StyledOutlineButton
          height={height}
          width={width}
          onChange={onChange}
          onSubmit={onSubmit}
          onClick={onClick}
          onBlur={onBlur}
          type={type}
          style={style}
          p={p}
        >
          {children}
        </StyledOutlineButton>
      ) : (
        <StyledButton
          height={height}
          width={width}
          onChange={onChange}
          onSubmit={onSubmit}
          onClick={onClick}
          onBlur={onBlur}
          type={type}
          style={style}
          p={p}
        >
          <StyledText>{children}</StyledText>
        </StyledButton>
      )}
    </>
  );
};

export default TempButton;
